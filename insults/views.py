# -*- coding: utf-8 -*-
import json

from django.views.generic import ListView

from .models import Insult


class ReactiveListView(ListView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['component'] = self.react_component
        context['data'] = json.dumps({
            "data": [x.json for x in self.get_queryset()]
        })
        return context


class MontyPythonInsultListView(ReactiveListView):
    """The medieval equivalent of a diss track."""
    model = Insult
    react_component = 'page'
    template_name = 'index.html'
