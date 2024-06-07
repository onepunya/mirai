jQuery(function($){
	var ua = navigator.userAgent;

	var w = $(window).width();
	var x = 1101;
	var hmenu = 0;
	hmenu = $(window).height() - 55;

	if (w <= x) {
		$(".header_menu_inner").css("display","none");
		$(function(){
			$(".header_menu_inner").fadeIn(0);
		});
		$(".mmenu").addClass("mobile_menu_list_open");
		$(".header_menu_inner").height(hmenu);
	}
});

// mobile header_submenu open/close -------------------------------
jQuery(function($){

	var scrollY;

	var w = $(window).width();
	var x = 1101;

	$("#nav_switch").on("click", function(){
		$(this).toggleClass("round");
		$("#header").toggleClass("hide");
		$("#menu_btn").toggleClass("open");
		$(".menu-trigger").toggleClass("active");
		$("body").toggleClass("mobile_menu_active");

		if((w <= x) || !$("#header").hasClass("hide")){
			reset_menu();
		}

		// 背景スクロール無効
		if (!$("#header").hasClass("hide")) {
			scrollY = $(window).scrollTop();
			$("body").addClass("fixed");
			document.body.style.top = scrollY * -1 + 'px';
		} else {
			$("body").removeClass("fixed");
			window.scrollTo(0, scrollY);
		}
	});

	if(w <= x){
		$(".header_submenu02 li a[href*='#']").on("click", function(event) {
			$("#nav_switch").trigger("click");
			reset_menu();
		});
	}

	function reset_menu(){
		$(".header_submenu").css({"display": "none"});
		$(".header_submenu02").css({"display": "none"});
		$(".active_menu").removeClass("active_menu");
		$(".active").removeClass("active");
	}
})

// mobile header_submenu open/close ------------------------------
jQuery(function($){
	// $('.mobile_menu_list_open > p, .mobile_menu_list_open .sub02_on > a').on('click',function(e){
	$(document).on("click", ".mobile_menu_active .mobile_menu_list_open > p, .mobile_menu_active .mobile_menu_list_open .sub02_on > a", function(e){
		e.preventDefault();

		if($(this).next().css("display")=="none"){
			$(this).next().css({"display": "block"});
			$(this).parent().addClass("active");
			$(this).parent().addClass("active_menu");
		}
		else{
			$(this).next().css({"display": "none"});
			$(this).parent().removeClass("active");
			$(this).parent().removeClass("active_menu");
		}
	});
});

// language_menu click open menu -------------------------
$(function () {
	$(".language").click(function(){
		if($(this).next().css("display")=="none"){
			$(this).addClass("onMenu");
			$(this).removeClass("offMenu");
			$(this).next().css("display","block");
		}
		else{
			$(this).addClass("offMenu");
			$(this).removeClass("onMenu");
			$(this).next().css("display","none");
		}
	});
});

// setlist click open---------------------------------------
$(function(){
	$(".setlist_date").click(function(){
		$(this).toggleClass("openIcon");
		$(this).toggleClass("closeIcon");
		$(this).next().toggleClass("menuOff");
	});
});

// page scroll -------------------------------------------------
$(function() {
	var backTop = $("#pageTop");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200){
			backTop.removeClass("hide");
		}
		else{
			backTop.addClass("hide");
		}
	});

	backTop.click(function(){
		$("body,html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 300){
		$(".mobile_title").removeClass("hide");
	}
	else{
		$(".mobile_title").addClass("hide");
	}
});

$(function(){
	var headerHight = 60;

	$("a[href*='#']:not(#nav a):not(.modal)").click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#header" || href == "" ? "html" : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 550, "swing");
		return false;
	});
});