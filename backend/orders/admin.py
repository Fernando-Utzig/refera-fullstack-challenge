from django.contrib import admin
from .models import Orders

class OrdersAdmin(admin.ModelAdmin):
    list_display = ('id', 'contact', 'agency', 'company', 'deadline')

# Register your models here.

admin.site.register(Orders, OrdersAdmin)