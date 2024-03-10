from rest_framework import serializers
from .models import Usersauth


# create your serializers here
# this serializers for serializing and deserializing the models
class UserAuthSerializer(serializers.ModelSerializer):

    # Meta class for specifying the model and the fields
    class Meta:
        model: Usersauth
        fields = ["id", "name", "email", "password"]

        # extra_kwargs is for setting the password field as write_only in the UserAuthModel
        extra_kwargs = {"password": {"write_only": True}}

    # create method for creating the instance of UserAuthModel
    def create(self, validated_data):

        # pop the password from the validated_data and set it as password in the instance of UserAuthModel
        password = validated_data.pop("password", None)

        # instance of UserAuthModel is created with the validated_data
        instance = self.Meta.model(**validated_data)

        # instance = validated_data.create_user(**validated_data)

        # check if password is not None and set the password
        if password is not None:

            # password is set as password in the instance of UserAuthModel
            instance.set_password(password)
            instance.save()
        return instance
