from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ContactSerializer
from .models import ContactModel

# Create your views here.

class ContactView(APIView):
    def get(self, request):
        products = ContactModel.objects.all()
        serializer = ContactSerializer(products, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


