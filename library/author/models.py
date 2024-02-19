from django.db import models

# Create your models here.
class Author(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    uploaded_at = models.DateTimeField(auto_now_add=True)
    book_title = models.CharField(max_length=255)
    book_desc = models.CharField(max_length=255)
    # check img & pdf fields
    author_img = models.CharField(max_length=255)
    book_img = models.CharField(max_length=255)
    book_pdf = models.CharField(max_length=255)
