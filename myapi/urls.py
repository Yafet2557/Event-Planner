# urls.py
from django.urls import path, include
from .views import register_user, user_login, create_event
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', user_login, name='login'),
    path('events/create/', create_event, name='event-create'),
]
