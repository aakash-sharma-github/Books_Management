from django.urls import path
from .views import BooksView

# create urls here
urlpatterns = [
    path("books/", BooksView.as_view(), name="books"),
]
