# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Insult(models.Model):
    """A typical classy insult, Monty Python style."""
    content = models.TextField()

    @property
    def json(self):
        return {
            "content": self.content
        }
