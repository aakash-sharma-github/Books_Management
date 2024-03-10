from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from .serializers import UserAuthSerializer
from rest_framework.views import APIView
from django.shortcuts import render
from .models import Usersauth
import jwt, datetime

# Create your views here.


# this view for registering new users
class RegisterUserView(APIView):
    # post method for registering new users
    def post(self, request):

        # serializing the data from the request
        serializer = UserAuthSerializer(data=request.data)

        # checking if the data is valid
        serializer.is_valid(raise_exception=True)

        # saving the data in the database
        serializer.save()

        # returning the data
        return Response(serializer.data)


# this views for login and setting the cookies
class LoginUserView(APIView):
    def post(self, request):

        # taking the email and password from the request
        email = request.data["email"]
        password = request.data["password"]

        # checking if the user exists through email
        user = Usersauth.objects.filter(email=email).first()

        # if user does not exist in the database
        if user is None:
            raise AuthenticationFailed("User not Found!")

        # if user exists then checking the password
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password!")

        # passing the payload and secret key for token generation
        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow(),
        }

        # token generation using jwt
        token = jwt.encode(payload, "secretkey", algorithm="HS256").decode("utf-8")

        response = Response()

        # setting the cookies with the token for login and setting the httponly to true
        response.set_cookie(key="jwt", value=token, httponly=True)
        response.data = {"jwt": token}

        return response


# view for sending the cookies to frontend after login
class UserCookiesView(APIView):

    # get method for sending the cookies to frontend after login
    def get(self, request):
        # getting the token from the cookies
        token = request.COOKIES.get("jwt")

        # if token is not found then raise an exception
        if not token:
            raise AuthenticationFailed("User not Authorized!")

        # if token is found then decoding the token
        try:
            payload = jwt.decode(token, "secretkey", algorithms=["HS256"])

        # if token is expired then raise an exception
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Session Expired!")

        # if token is valid then getting the user from the database
        user = Usersauth.objects.filter(id=payload["id"]).first()

        # serializing the user
        serializer = UserAuthSerializer(user)

        # returning the user's data
        return Response(serializer.data)


# logout view for deleting the cookies
class LogoutUserView(APIView):

    # post method for deleting the cookies after logout
    def post(self, request):

        response = Response()

        # removing the cookies
        response.delete_cookie("jwt")

        # returning the message
        response.data = {"message": "Cookies Deleted"}
        return response
