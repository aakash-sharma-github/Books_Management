from django.urls import path
from .views import ContactView

# create urls here
urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact_us'),
    
]