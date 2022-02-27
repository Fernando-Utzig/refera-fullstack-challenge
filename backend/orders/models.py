from pickle import TRUE
from sre_parse import CATEGORIES
from django.db import models

# Create your models here.

class Orders(models.Model):
    id = models.AutoField(primary_key=TRUE)
    # category = models.ForeignKey(Categories)
    contact = models.CharField(max_length=100)
    agency = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    deadline = models.DateTimeField()

    def _str_(self):
        return self.id