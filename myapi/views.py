# views.py

import random
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .models import CustomUser, Event
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required


@api_view(['POST'])
def register_user(request):
    data = request.data
    firstname = data.get('first_name')
    lastname = data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone_number')

    # Generate a unique username based on the first name and random numbers
    random_numbers = ''.join(str(random.randint(0, 9)) for _ in range(3))
    username = f"{firstname}_{random_numbers}"

    try:
        user = CustomUser.objects.create_user(
            username=username, first_name=firstname, last_name=lastname, email=email, password=password,
            phone_number=phone
        )
        return JsonResponse({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST', 'GET'])
def user_login(request):
    if request.method == 'POST':
        data = request.data
        email = data.get('email')
        password = data.get('password')

        # Authenticate user
        user = authenticate(username=email, password=password)

        if user is not None:
            # User authenticated successfully
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            # User authentication failed
            return JsonResponse({'message': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Method not allowed
        return JsonResponse({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST', 'GET'])
@login_required
def create_event(request):
    data = request.data
    print(data)
    data['creator'] = request.user
    try:
        event = Event.objects.create(**data)
        print(event)
        return JsonResponse({'message': 'Event created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return JsonResponse({'message': f'Error creating event: {str(e)}'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
