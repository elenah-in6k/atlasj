(function(e){e.BackToTop={defaults:{text:"Back to top",autoShow:true,timeEffect:500,effectScroll:"linear",appearMethod:"slide"},init:function(t){opts=e.extend({},e.BackToTop.defaults,t),e.BackToTop._constructLink();if(opts.autoShow)e(window).scroll(function(){if(e(this).scrollTop()!=0){switch(opts.appearMethod){case"fade":divBack.fadeIn("fast");break;case"slide":divBack.slideDown("fast");break;default:divBack.show()}}else{switch(opts.appearMethod){case"fade":divBack.fadeOut("fast");break;case"slide":divBack.slideUp("fast");break;default:divBack.hide()}}});e("#BackToTop").click(function(t){t.preventDefault();e("body,html").animate({scrollTop:0},opts.timeEffect,opts.effectScroll)})},_constructLink:function(){divBack=e("<a />",{id:"BackToTop",href:"#body",html:"<span>"+opts.text+"</span>"}).prependTo("body");if(!opts.autoShow)divBack.show()}};BackToTop=function(t){e.BackToTop.init(t)}})(jQuery)

$(document).ready(function(){
	
	
	$(".appear").addClass("active");
	
	
	
	BackToTop({
			text : '',
			autoShow : true,
			timeEffect : 800,
			appearMethod : 'slide',
			effectScroll : 'easeOutCubic' /** all effects http://jqueryui.com/docs/effect/#easing */
		});
	
	
	/*
	 * READY 
	 */
	 $('.zoomable').magnificPopup({type:'image', gallery: {
      enabled: true
    }});
	$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: false,
	  responsive:true,
	  pause:5000,
	   onSliderLoad: function(){
	   	 var right = ($(window).width() - $(".container").width())/2; 
	     $(".bx-controls").css({right:right+"px"});
	     if ($(".bx-wrapper").height()){
	     	$("#content").css({marginTop:$(".bx-wrapper").height()-280+"px"});
	     }
	  }
	});
	
	if (jQuery(".bx-controls-direction").length>0){
		var mtop = jQuery(".bx-controls-direction").offset().top - $("#header").height()+50;
	}
	
	$("a[href^='#']").bind("click",function(){
		var a = $(this);
		 $('html, body').animate({
	        scrollTop: $(a.attr("href")).offset().top
	    }, 300);
	    return false;
	});
	
	
	$(".reviews .review").each(function(){
		var $this = $(this);
		var image = $this.find(".image");
		image.css({backgroundImage:'url('+image.data("image")+')'});
	});
	
	
	
	$(".gallery a").bind("click",function(){
		$("body").addClass("modal-open");
		if ($(this).attr('href')){
			var gallerySelector = $(this).attr('href')+" .rg-gallery";
			Gallery.init(gallerySelector);
			$($(this).attr('href')).addClass("active");
			
			
			//
		}else {
			$("#gallery").addClass("active")
		}
		
	})	
	$(".close-gallery").bind("click",function(){
		$("body").removeClass("modal-open");
		
		
			$(".gallery-wrapper.active").removeClass("active")
		
	
	});
	
	$(".bio-text .more").bind("click",function(){
		
		$(".bio-text").toggleClass("active");
		return false;
	});
	
});



