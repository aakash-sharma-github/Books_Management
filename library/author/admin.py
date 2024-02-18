from django.contrib import admin
from .models import Author

# Register your models here.
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'email', 'book_title', 'book_desc', 'book_img', 'book_pdf')
admin.site.register(Author, AuthorAdmin)