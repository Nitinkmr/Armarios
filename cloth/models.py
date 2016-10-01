from django.db import models

# Create your models here.

from account.models import MyUser
import uuid

class Cloth(models.Model):
	TYPE_CHOICES = (
		('1', 'Accessories'),
		('2', 'Dresses'),
		('3', 'Jacket'),
		('4', 'Pullovers'),
		('5', 'T-Shirt'),
		('6', 'Shirt'),
		('7', 'Night Wear'),
		('8', 'Jeans'),
		);

	types = models.CharField(max_length = 1, choices = TYPE_CHOICES)
	user = models.ForeignKey(MyUser,related_name='my_clothes')
	url = models.TextField(max_length = 1024, default = '',)
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

	def __str__(self):
		return self.url
