# urls.py

from django.urls import path
from .views import RegisterUserAPIView, UserLoginAPIView, CreateEventAPIView, UserLogoutAPIView, EventDetailsAPIView, \
    DeleteEventAPIView, ListEventsAPIView, UpdateEventDetails

urlpatterns = [
    path('register/', RegisterUserAPIView.as_view(), name='register_user'),
    path('login/', UserLoginAPIView.as_view(), name='user_login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user_logout'),
    path('events/create/', CreateEventAPIView.as_view(), name='create_event'),
    path('events/read/<int:pk>/', EventDetailsAPIView.as_view(), name='event-details'),
    path('events/update/<int:pk>/', UpdateEventDetails.as_view(), name='update_event'),
    path('events/delete/<int:pk>/', DeleteEventAPIView.as_view(), name='delete_event'),
    path('events/all/', ListEventsAPIView.as_view(), name='list_all'),
]
