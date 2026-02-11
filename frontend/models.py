

# Create your models here.
from django.db import models

# frontend/models.py
class ContenidoDestacado(models.Model):
    titulo = models.CharField(max_length=255)
    imagen = models.ImageField(upload_to='destacados/')
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo
