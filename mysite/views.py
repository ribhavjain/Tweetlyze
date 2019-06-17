from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
@api_view(["GET"])
def try1(request):
    books = ["Pro Python", "Fluent Python", "Speaking javascript", "The Go programming language"]
    return Response(status=status.HTTP_200_OK, data={"data": books})
