from django.shortcuts import render
from . import views
from rest_framework.views import APIView

# Create your views here.
class authorViews(APIView):
    def get(self, request):
        pass