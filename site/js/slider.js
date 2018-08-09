$(window).load(function(){
	var sliders = $("#_slider>div"),
		slidNumberNew=0,
		slidNumberOld=0,
		slidAll= $("#_slider>div").length,
		isAnomation = false,
		MSIE = ($.browser.msie) && ($.browser.version <= 8);
		
	$(window).bind("hashchange", changeSiteHash);
	changeSiteHash()	
	init()
	function init(){
        $("#buttonNext").click(nextClick)
		$("#buttonPrev").click(prevClick)
        
		sliders.css({"position":"absolute"});
		if(!MSIE){
			sliders.not(sliders.eq(slidNumberNew)).find('.slider_text1').animate({"left":'700px'}, 0)
			sliders.not(sliders.eq(slidNumberNew)).find('.slider_text2').animate({"left":'700px'}, 0)
			sliders.not(sliders.eq(slidNumberNew)).find('.slider_text3').animate({"left":'700px'}, 0)
			sliders.not(sliders.eq(slidNumberNew)).find('.slider_text4').animate({"left":'700px'}, 0)
		}else{
            sliders.not(sliders.eq(slidNumberNew)).find('.slider_text1').animate({"left":'700px'}, 0)
            sliders.not(sliders.eq(slidNumberNew)).find('.slider_text2').animate({"left":'700px'}, 0)
            sliders.not(sliders.eq(slidNumberNew)).find('.slider_text3').animate({"left":'700px'}, 0)
            sliders.not(sliders.eq(slidNumberNew)).find('.slider_text4').animate({"left":'700px'}, 0)
		}
	
	}
	function changeSiteHash(){
		if(window.location.hash !="#!/home") {}
	}
    ////////////////////////////
	function nextClick(){
	       if(!isAnomation){
	           isAnomation = true;
           	    slidNumberOld = slidNumberNew
			     slidNumberNew++;
			     if(slidNumberNew>slidAll-1){
				    slidNumberNew=0;
			     }
			changeImage();
	       }
		
		return false;
	}
	function prevClick(){
	    if(!isAnomation){
	        isAnomation = true;
			slidNumberOld = slidNumberNew
			slidNumberNew--
			if(slidNumberNew<0){
				slidNumberNew=slidAll-1;
			}
			changeImage();
		
        }
		return false;
	}
    ////////////////////////////
    
	function changeImage(){
		anomationStop=false;
			sliders.eq(slidNumberOld).find('.slider_text1').css({"background":"none"}).delay(150).animate({"left":'-700px'}, 800 , 'easeInOutCubic')
			sliders.eq(slidNumberOld).find('.slider_text2').css({"background":"none"}).delay(100).animate({"left":'-700px'}, 800 , 'easeInOutCubic')
			sliders.eq(slidNumberOld).find('.slider_text3').css({"background":"none"}).delay(50).animate({"left":'-700px'}, 800 , 'easeInOutCubic')
			sliders.eq(slidNumberOld).find('.slider_text4').css({"background":"none"}).delay(0).animate({"left":'-700px'}, 800 , 'easeInOutCubic')

			sliders.eq(slidNumberNew).find('.slider_text1').css({"background":"none",'left':'700px'}).delay(0).animate({"left":'0px'}, 800, 'easeInOutCubic')
			sliders.eq(slidNumberNew).find('.slider_text2').css({"background":"none",'left':'700px'}).delay(50).animate({"left":'0px'}, 800, 'easeInOutCubic')
			sliders.eq(slidNumberNew).find('.slider_text3').css({"background":"none",'left':'700px'}).delay(100).animate({"left":'0px'}, 800, 'easeInOutCubic')
			sliders.eq(slidNumberNew).find('.slider_text4').css({"background":"none",'left':'700px'}).delay(150).animate({"left":'0px'}, 800, 'easeInOutCubic', function(){isAnomation=false;})
	  
	}
})