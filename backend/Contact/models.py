from django.db import models

# Create your models here.

class ContactModel (APIView):
    name = models.CharField(max_length=50)
