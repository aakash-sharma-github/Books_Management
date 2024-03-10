from django.shortcuts import render
from .models import BooksModel
from .serializers import BooksSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class BooksView(APIView):
    
    def get(self, request):
        
        details = BooksModel.objects.all()
        
        serializer = BooksSerializer(details, many=True)
        
        return Response(serializer.data)
    
    
    def post(self, request):
        
        serializer = BooksSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
        
    def put(self, request):
        
        serializer = BooksSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
        
    def delete(self, request):
        
        serializer = BooksSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
    