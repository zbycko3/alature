if(screen.width<500)
{
	scale = (screen.width/500);
	$('meta[name=viewport]').attr({'content':'width=device-width, initial-scale='+scale+', maximum-scale=1, user-scalable=yes'});
}
else
{
	scale = 1;
	$('meta[name=viewport]').attr({'content':'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes'});
}

window.addEventListener('orientationchange', function() {
		if(screen.width<500)
		{
			scale = (screen.width/500);
			$('meta[name=viewport]').attr({'content':'width=device-width, initial-scale='+scale+', maximum-scale=1, user-scalable=yes'});
		}
		else
		{
			scale = 1;
			$('meta[name=viewport]').attr({'content':'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes'});
		}
}, false);