from rest_framework import serializers
from .models import ContactModel

# define serializer class
'''
The ContactSerializer class is used for serializing and deserializing instances of the ContactModel class. It inherits from serializers.ModelSerializer, which provides built-in serialization and deserialization functionality. The Meta inner class is used to specify the model to be serialized (ContactModel) and the fields to include ('__all__' includes all fields of the model).
'''
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactModel
        fields = '__all__'
        