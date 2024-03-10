from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Usersauth(AbstractUser):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    # Username is not required for authentication
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
