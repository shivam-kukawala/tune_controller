from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('make', index),
    path('connect', index),
    path('room/<str:roomCode>', index)

]
