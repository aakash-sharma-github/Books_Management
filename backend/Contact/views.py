from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ContactSerializer
from .models import ContactModel

# Create your views here.

class ContactView(APIView):
    
    # getting all the information from the database
    def get(self, request):
        
        # getting all the information from the database
        info = ContactModel.objects.all()
        
        # serializing the data from the database and returning it
        serializer = ContactSerializer(info, many=True)
        return Response(serializer.data)


    # saving the data in the database
    def post(self, request):
        
        # serializing the data from the request
        serializer = ContactSerializer(data=request.data)
        
        # if the data is valid then saving the data in the database
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


