# myapi/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, blank=True,
                                    null=True)  # You can adjust the max_length based on your requirements
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    # Add related_name to avoid clashes with default User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        blank=True,
        verbose_name='groups',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        blank=True,
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
    )

    def __str__(self):
        return self.username


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField(default=timezone.now)
    location = models.CharField(max_length=255)
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='created_events', default="Default")
    visibility = models.CharField(
        choices=[('public', 'Public'), ('private', 'Private'), ('invite_only', 'Invite Only')], max_length=20,
        default="Private")

    def __str__(self):
        return self.title


class Guest(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    is_attending = models.BooleanField(default=False)
    is_undecided = models.BooleanField(default=False)
    is_declined = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.event.title}"
