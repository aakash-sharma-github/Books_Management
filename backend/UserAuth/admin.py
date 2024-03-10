from django.contrib import admin
from .models import Usersauth

# Register your models here.


class UserAuthAdmin(admin.ModelAdmin):

    # list display fields in the admin panel
    list_display = ("username", "email", "password")


# adding the UserAuthModel to the admin panel
admin.site.register(Usersauth, UserAuthAdmin)
