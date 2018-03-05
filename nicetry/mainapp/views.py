from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'front/MainPage.html')


def contact(request):
    return render(request, 'front/basic.html', {'values': ['Звоните', '+7-901-763-3905']})


def getout(request):
    return render(request, 'front/smth.html', {'values': ['Если хотите работы', 'Отъебитесь нахуй']})
