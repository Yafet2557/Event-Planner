# views.py

import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from django.utils.crypto import get_random_string

@api_view(['POST','GET'])
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
            username=username,first_name=firstname, last_name=lastname,email=email, password=password,phone_number = phone
        )
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
