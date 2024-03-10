from django.urls import path
from .views import RegisterUserView, LoginUserView, LogoutUserView, UserCookiesView

# create urls here
urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register"),
    path("login/", LoginUserView.as_view(), name="login"),
    path("users/", UserCookiesView.as_view(), name="cookies"),
    path("logout/", LogoutUserView.as_view(), name="logout"),
]
