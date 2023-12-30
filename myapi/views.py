from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello(request):
    return Response({'message':'Hello, this is yafet'})

@api_view(['GET'])
def helloAbdul(request):
    return Response({'message':'Hello, this is Abdul'})

# Create your views here.