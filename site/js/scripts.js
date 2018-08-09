include('js/jquery.easing.1.3.js');
include('js/jquery-ui-1.8.11.custom.min.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/jquery.animate-colors-min.js');
include('js/jquery.backgroundpos.min.js');
include('js/mathUtils.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/jquery.mousewheel.js');
include('js/sprites.js');
include('js/hoverSprite.js');
include('js/spin.js');
include('js/bgStretch.js');
include('js/sImg.js');
include('js/forms.js');
include('js/googleMap.js');
include('js/slider.js');

//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true;
var isAnim = true;
var isFirst = true;
var _delay = 0;
var spinner;
var mapSpinner;
var MSIE = ($.browser.msie) && ($.browser.version <= 8)

//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
    ///////////////////////////////////////////////////////////////////
        loaderInit();
function loaderInit(){
        var opts = {
              lines: 8,
              length: 0, 
              width: 16, 
              radius: 17, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $(".page_spinner > span");
        spinner = new Spinner(opts).spin();
        target.append(spinner.el) 
        ///////////////////////////////////////    
            var opts2 = {
              lines: 8,
              length: 0, 
              width: 8, 
              radius: 12, 
              rotate: 10, 
              color: '#000', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $(".google_map > span");
        mapSpinner = new Spinner(opts2).spin();
        target2.append(mapSpinner.el)  
} 
///////////////////////////////////////////////////////////////////

     $('ul#menu').superfish({
          delay:       500,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                    // $(this).append("<div class='_area'></div><div class='mTextOver'>"+conText+"</div>"); 
                    $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mText_over'>"+conText+"</div>"); 
  				})
  	 		}
        });
});
  
 //------WinLoad-------------  
$(window).load(function(){  

//$(".followHolder > ul > li > a").hoverSprite({onLoadWebSite: true});
$("#buttonPrev").hoverSprite({onLoadWebSite: true});
$("#buttonNext").hoverSprite({onLoadWebSite: true});

//$('.more').sprites({method:'gStretch', hover:true})

setTimeout(function(){
    $('#bgStretch').bgStretch({
    align:'leftTop',
    navs:$('.navGall').navs()
    }).sImg({
            sleep: 1000,
            spinner:$('<div class="spinner_bg"></div>').css({opacity:1}).stop().hide(1000)
        }) 
    
    },0)
  

 $(".followHolder > ul > li").hover(
    function(){
        $(this).find('a').stop().animate({top:"8px"}, 300, 'easeOutCubic');
    },
    function(){
        $(this).find('a').stop().animate({top:"0px"}, 300, 'easeOutCubic');
    }
  )

 
var menuItems = $('#menu >li'); 

var currentIm = 0;
var lastIm = 0;

navInit();
function navInit(){
    
    $('.slider_text1, .slider_text2, .slider_text3, .slider_text4').fadeTo(1, 0.7)
    
      $('.navGall > ul > li a').bind('click',function(e){
        if(isFirst==true){isFirst = false; loaderCreate();}
             currentIm = $(this).parent().index();
    });
    

 var img=0; 
 
var gall_length=$('.navGall > ul > li').length - 1;

 
    $('#buttonPrev').click(function(){
      img = currentIm;
      img=img-1;
        if (img<0){img=gall_length-1}
        lastIm = currentIm;
        currentIm = img;

       $('.navGall li a').eq(currentIm).click();
            loaderCreate();
        return false
     });
     
     $('#buttonNext').click(function(){
        img = currentIm;
        img=img+1;
            if (img>gall_length-1){img=0;}
            lastIm = currentIm;
            currentIm = img;

       $('.navGall li a').eq(currentIm).click();
            loaderCreate();
       return false
     });
    

}

function loaderCreate(){
    if(isFirst){
        isFirst = false;
            var opts3 = {
                lines: 10,
              length: 0, 
              width: 20, 
              radius: 24, 
              rotate: 0, 
              color: '#1c1c1c', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target3 = $(".spinner_bg");
        bgSpinner = new Spinner(opts3).spin();
        target3.append(bgSpinner.el) 
    }  
}

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

    //$('.menu > ul >li').eq(0).css({'display':'none'});
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({left:"-1700px",'display':'none'});
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({'display':'block', left:'1700px'}).stop().delay(_delay).animate({left:"0px"},700,'easeOutCubic');
                
                cont_resize(_.n);
                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}
                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
            }
			if(_.prev){
			     _.prev.stop().animate({left:'-1700px'},700,'easeInOutCubic',function(){_.prev.css({'display':'none'});} );
             }
		}
	})
    

    function splashMode(){
        isSplash = true;
       //  $(".splash_menu > li").each( function(index){
         //   _delay = (index*100)+200;
         //   $(this).css({left:"1700px"}).stop().delay(_delay).animate({left:"0px"}, 900, 'easeOutCubic');
        // });
       _delay = 1000;
       setTimeout(function(){
            $('.navGall li a').eq(0).click();
        },0)
    }
    
    function contentMode(){  
        isSplash = false;
        
        _delay = 300;
        
        setTimeout(function(){
            $('.navGall li a').eq(3).click();
            loaderCreate();
        },0)
    }
    
    function cont_resize(_page){
        var li_W = $('#content > ul > li').eq(_page).find('.containerContent').innerHeight();
       
        li_W = li_W + 434;
       
        if(li_W < 1000){li_W = 1000}
           // $('#content').stop().animate({height:li_W+"px"}, 400, 'easeInOutCubic').css({'overflow':'visible'}) 
            $('body').animate({'min-height':li_W+'px'},400)
    }		
    
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
                        $(".mText", li).stop(true).animate({top:'70px'}, 400, 'easeOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'0px'}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:'0px'}, 400, 'easeOutCubic');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:'0px'}, 400, 'easeInOutCubic');
                        $(".mText_over", li).stop(true).animate({top:'-70px'}, 400, 'easeInOutCubic');
                        $("._overPl", li).stop(true).animate({top:'-70px'}, 400, 'easeInOutCubic');
                    } 
                } 
		}).navs(function(n){			
			$('#content').tabs(n);
		})
        
   

//////////////////////////////////////////
    
   	var h_cont;
  
	function centrRepos() {
         h_cont = $('.center').height();
        // $('body').animate({'min-height':h_cont+'px'},400)
		var h=$(window).height();
		if (h>(h_cont+40)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=20;
			h_new=h_cont+40;
		}
		//$('.center').stop().animate({'margin-top':m_top},600,'easeOutCubic');

	}
	centrRepos();
    ///////////Window resize///////
    
    function windowW() {
        return (($(window).width()>=parseInt($('body').css('minWidth')))?$(window).width():parseInt($('body').css('minWidth')));
    }
    
    
	$(window).resize(function(){
        centrRepos();
         
        }
    );

    } //window function
) //window load