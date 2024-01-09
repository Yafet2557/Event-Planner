import random
from rest_framework import serializers
from .models import CustomUser, Event
from django.contrib.auth import authenticate


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password']

    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(username=email, password=password)
            if user:
                data['user'] = user
                return data
            else:
                raise serializers.ValidationError('Invalid login credentials')
        else:
            raise serializers.ValidationError('Email and password are required')


class UserSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'email', 'password', 'date_of_birth', 'phone_number']
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        first_name = validated_data.get('first_name')

        # Check if first name is valid
        if not first_name:
            raise serializers.ValidationError("First name is required.")

        # Manually create the username based on first name
        random_numbers = ''.join(str(random.randint(0, 9)) for _ in range(3))
        validated_data['username'] = f"{first_name}_{random_numbers}"

        user = CustomUser.objects.create_user(**validated_data)  # Create the user
        return user


class MinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name']


class EventSerializer(serializers.ModelSerializer):
    creator = MinimalSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'time', 'location', 'creator', 'visibility']
        extra_kwargs = {
            'creator': {'read_only': True},
        }

    # Create event
    def create(self, validated_data):
        # Get the logged-in user from the request context
        user = self.context['request'].user

        # Set the creator field to the logged-in user
        validated_data['creator'] = user

        # Create the Event instance
        event = Event.objects.create(**validated_data)

        return event  # Return the event

    # Override method
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['creator'] = MinimalSerializer(instance.creator).data  # Replace field with serialized data
        return rep
