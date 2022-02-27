from django.shortcuts import render
from rest_framework import viewsets
from .serializers import OrderSerializer
from .models import Order

# Create your views here.
class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()