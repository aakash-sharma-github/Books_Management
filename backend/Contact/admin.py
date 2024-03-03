from django.contrib import admin
from .models import ContactModel

# Register your models here.

'''
The ContactAdmin class extends admin.ModelAdmin and customizes the admin interface for the Contact model.
The list_display method specifies which fields to display in the admin interface for the Contact model. In this case, it displays the fields 'firstname', 'email', and 'msg_at'.
'''
class ContactAdmin (admin.ModelAdmin):
    list_display = ('firstname', 'email', 'msg_at')

admin.site.register(ContactModel, ContactAdmin)
