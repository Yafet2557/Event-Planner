from django.contrib.auth import login, logout
from django.http import JsonResponse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import RetrieveAPIView, CreateAPIView, DestroyAPIView,ListAPIView,UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Event
from .serializers import UserSeriliazer, EventSerializer, UserLoginSerializer


class RegisterUserAPIView(APIView):
    """
    API endpoint for user registration.

    Accepts a POST request with user registration data.
    
    Returns a JSON response indicating success or failure.

    """

    http_method_names = ['post']

    def post(self, request):
        data = request.data
        serializer = UserSeriliazer(data=data)

        if serializer.is_valid():
            user = serializer.save()
            # login(request, user) not sure about this yet
            token, created = Token.objects.get_or_create(user=user)
            return JsonResponse({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    """
    API endpoint for user login.

    Accepts a POST request with user login credentials.
    
    Returns a JSON response indicating success or failure including the authentication token.

    """

    http_method_names = ['post']

    @staticmethod
    def post(request: object) -> object:

        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return JsonResponse({'message': 'Login successful', 'token': token.key}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutAPIView(APIView):
    http_method_names = ['post']

    def post(self, request):
        logout(request)
        return JsonResponse({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


class CreateEventAPIView(CreateAPIView):
    """
    API endpoint for creating events.

    Accepts a POST request with event data.
    
    Requires authentication token in the headers for the logged-in user.
    
    Returns a JSON response indicating success or failure.
    
    """

    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]  # Only allows authenticated users to make requests

    # def perform_create(self, serializer):
    # serializer.save(creator=self.request.user)


# def create(self, request):
#     super().create(request)
#    return JsonResponse({'Event':'Created successfully'}, status=status.HTTP_201_CREATED)


class EventDetailsAPIView(RetrieveAPIView):
    http_method_names = ['get']
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, pk):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return JsonResponse({'event': serializer.data}, status=status.HTTP_200_OK)

class DeleteEventAPIView(DestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

class ListEventsAPIView(ListAPIView):
    http_method_names = ['get']
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]    

class UpdateEventDetails(UpdateAPIView):
    http_method_names = ['patch']     # Define allowed HTTP methods

    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes= [IsAuthenticated]

    def perform_update(self, serializer):
        field = self.request.data.get('new_value')
        if field:
            serializer.save(**{field:self.request.data.get(field)})
        else:
            serializer.save()

    def update(self, request, **kwargs):
        partial = kwargs.pop('partial',False)
        instance = self.get_object()
        serializer = self.get_serializer(instance,data=request.data,partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return JsonResponse({'Data':serializer.data})
