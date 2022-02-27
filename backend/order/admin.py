from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'contact', 'agency', 'company', 'deadline')

# Register your models here.

admin.site.register(Order, OrderAdmin)