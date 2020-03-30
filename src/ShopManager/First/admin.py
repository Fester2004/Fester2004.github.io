from django.contrib import admin
from First.models import Shop
from .models import Shop
from .models import Director
from .models import Personal
# Register your models here.


admin.site.register(Shop)
admin.site.register(Director)
admin.site.register(Personal)