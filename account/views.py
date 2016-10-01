from django.shortcuts import render
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from django.views.decorators.csrf import csrf_exempt
from cloth.models import Cloth
# Create your views here.
@require_GET
@csrf_exempt
def home(request):
	# context = {'all_Clothes': Cloth.objects.order_by('-created_on')}
	return render(request,'home.html')
	'''
	Display LoggedIn Home page
	'''

@require_POST
@csrf_exempt
def weather(request):
	print ('hello')
	avg_temp = request.POST.get('avg_temp')
	print(avg_temp)
	pairs = request.POST.get('pairs')
	print(pairs)
	if(1):
		x = {'tshirts' : Cloth.objects.filter(types = 5)[:int(pairs)]}
		y = {'jeans' : Cloth.objects.filter(types = 8)[:int(pairs)]}
		z = x.copy()
		z.update(y)
		print (z)
	# return HttpResponse('ok')
	

	# 	context = z
	return redirect(reverse('trip'))

@require_GET
def sendAndroidData(request):
	pass
