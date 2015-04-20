from django.http import HttpResponse
from django.template import RequestContext
from django.template.loader import get_template


def signup(request):
    if request.method != 'POST':
        tmplt = get_template('signup.html')
        html = tmplt.render(RequestContext(request, None))
        return HttpResponse(html)
    else:
        name = request.POST['name']
        password = request.POST['password']
        password_confirm = request.POST['password_confirm']
        if password == password_confirm:
            pass
        else:
            tmplt = get_template('signup.html')
            html = tmplt.render(RequestContext(request, None))
            return HttpResponse(html)