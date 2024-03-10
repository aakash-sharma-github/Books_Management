from rest_framework import serializers
from .models import BooksModel


# define serializer class
class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = BooksModel
        fields = "__all__"
