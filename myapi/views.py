# views.py

import random
from django.contrib.auth import authenticate, login as auth_login  # Import Django's login as auth_login
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .models import CustomUser

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
            username=username, first_name=firstname, last_name=lastname, email=email, password=password, phone_number=phone
        )
        return JsonResponse({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST','GET'])
def user_login(request):
    if request.method == 'POST':
        data = request.data
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            auth_login(request, user)  # Use auth_login instead of login
            return JsonResponse({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'message': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
