var time = new Date().getTime();

$(window).on('load',function(){
	var now = new Date().getTime();
	if (now-time <= 5000) {
		setTimeout('stopload()', 1700 - (now-time));
		return;
	}else{
		stopload();
	}
});

function logoFadeout(){
	$('#loading div').addClass('out');
}
function overlayOff(){
	$('#loading').addClass('open');
}
function overlayDelete(){
	$('#loading').remove();
}

function stopload(){
	setTimeout(logoFadeout, 0);
	$('#loading div').on('animationend webkitAnimationEnd',function(){
		setTimeout(overlayOff, 0);
		setTimeout(overlayDelete, 1000);
	});
}

$(function(){
	setTimeout('stopload()',5000);
});

// var webStorage = function(){
// 	if(sessionStorage.getItem('access')){
// 		loadcancel();
// 	} else {
// 		setTimeout('stopload()',8500);
// 		sessionStorage.setItem('access', 0);
// 	}
// }
// webStorage();