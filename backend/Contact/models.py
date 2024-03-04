from django.db import models
from datetime import datetime

# Create your models here.

class ContactModel (models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    subject = models.CharField(max_length=255)
    message = models.CharField(max_length=500)
    msg_at = models.DateTimeField(auto_now_add=True)

now = datetime.now()
print(now)


'''
This function is used to display the object in the admin panel in the form of a string.
This will only display the firstname and lastname.
Returns a string representation of the object, including the first name, email, and message timestamp.
'''
def __str__(self):
    return f"{self.firstname} {self.email} {self.msg_at}"

