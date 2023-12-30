# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser

@api_view(['POST'])
def register_user(request):
    data = request.data
    firstname = data.get('username')
    lastname = data.get('username')
    email = data.get('email')
    password = data.get('password')

    try:
        user = CustomUser.objects.create_user(
            first_name=firstname, last_name=lastname,email=email, password=password,
        )
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
