from django.db import models


# Create your models here.
class BooksModel(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    book_image = models.ImageField(upload_to="images")
    book_pdf = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


def __str__(self):
    return f"{self.title} {self.author} {self.category}"
