//Name: Muneeb Rehman


//I used frameworks such as jquery and p5js for my website

//This block of code manipulates the top cover of the webpage, it creates a parralax effect.
var parralax=$(".cover img");//I assigned the html value 'img' of cover to Parralax variable
window.addEventListener("scroll",function(){//Here I used established an event listener which only executes if the user scrolls through the website.
    
    var offset=window.pageYOffset-50;//I made a variable called offset and assigned an object 'pageYOffset' to it which returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically.
    
    parralax.css("top",offset*0.9 + "px");//Here, I manipualted the CSS top element of the parralax variable which controls the verticle movement using the offset variable.

    
});




window.addEventListener("scroll",function(){ 
    
    //Line 22 to 26 creates an effect where if you scrol further down, the cover dims, which creates a shade effect.
    var offset=window.pageYOffset;
    $('.cover img').css({
        "filter" : "brightness("+(1-offset/800)+")"
    });
    
    
    //Line 30 to 49 is what makes the effects of the Navbar
    if(offset>36){
        //If the return value of offset is greater than 36, then the nav position changes colour to black, scales down and sticks to the top of the screen when being scrolled.       
        
        $('nav').css("position","fixed");
        $('nav').css("background-color","black");
        $('nav').css("font-size","20px");
        $('#logo a img').css("height","35px");
        $('.top-bar').css("position","absolute");
        $('.responsive-nav').css("background-color","black");
        $('.responsive-nav').css("position","fixed");
    }else{
        //The nav bar resets to it's normal state once the user scrolls all the way back to the top;       
        
        $('nav').css("position","absolute");
        $('nav').css("background-color","transparent");
        $('nav').css("font-size","30px");
        $('#logo a img').css("height","60px");
        $('.top-bar').css("position","static");
        $('.responsive-nav').css("background-color","transparent");
        $('.responsive-nav').css("position","absolute");
        
    }

});



//Here, from line 58 to 73 works for the resonsive nav. It is meant to toggle the nav on and off using animation styles, here I decided to the nav bar animate from the right when toggled.
var toggle=0;
$('.hamburger').click(function(){
    toggle+=1;
    var screenWidth=$(window).width();
    if(toggle==1){
        $('nav').css("display","block");
        $('nav').animate({left: '0%'},5);
        $('.responsive-nav').css("background-color","black");
        $('nav').css("background-color","black");
    }else{
        toggle=0;
        $('nav').animate({left: '100%'},5);
        $('.responsive-nav').css("background-color","transparent");
        $('nav').css("background-color","transparent");
        
    }
  


    
    
});



$(window).resize(function() {
    var screenWidth=$(window).width(); 
    if(screenWidth>948){
        print("test")
        $('nav').css("display","flex");
        $('nav').css("left","0%");
    
    
    }
    
    if(screenWidth<948){
        $('nav').css("display","block");
    }


    
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
});
                 
                 
//line 104 to 130 is what creates the live counter effect in the bottom of index page. The counter is of course does not return live numbers, but this code is meant to replicate what the real counter would look like. I used p5js draw function for this to make this possible as it is the most optimised framework for incrementing numbers for a long time without having your website crash.

//Here I created 3 variables.
var treesPlantedInHectars=100;//This variable is meant to show the numbers of tree planted in hectares.
var treesCutDownInHectars=130;//This variable is meant to show the numbers trees cut down in hectares 
var treesPlantedByTreeVerse=3000042;//This variavle is meant to show the numbers of trees planted by my website's company.

$('#TreePlanted').html(treesPlantedByTreeVerse);

function draw(){
    if (frameCount % 120 == 0) { // if the frameCount is divisible by 60, then a second has passed
        
        //To make the counter seem realistic, I've made it so that the variables of treesPlantedInHectars and  treesCutDownInHectars increment a random decimal point between 0 and 1.
        treesPlantedInHectars+=random(0,1);
        treesCutDownInHectars+=random(0,1);
        
        //Here I store the values of treesPlantedInHectars and treesCutDownInHectars as html values for TreesPlanted and TreesCutDown so that it would show up on the website.
        $('#TreesPlanted').html(nf(treesPlantedInHectars,0,2));

        $('#TreesCutDown').html(nf(treesCutDownInHectars,0,2));
        
        //For trees planted by treeverse, the numbers would increment randomly between 0 and 2, and if the random value of 0, then treesPlantedByTreeVerse variable will be incremented randomly from 1 and 4, and the value will be stored in TreePlanted div to be seen on the website.
        if(floor(random(0,2))==0){
            treesPlantedByTreeVerse+=floor(random(1,4));
            $('#TreePlanted').html(treesPlantedByTreeVerse);
        }
    }
    
    
    
    
    
    
}



$(document).ready(function(){
     $('.about-us-section1 #icon-box1').click(function(){
        $('html,body').animate({
            scrollTop:$('.about-us-section2').offset().top
        },1000);
       
     }) 
    
     $('.about-us-section1 #icon-box2').click(function(){
        $('html,body').animate({
            scrollTop:$('.about-us-section4').offset().top
        },1000);
       
    })
    $('.about-us-section1 #icon-box3').click(function(){
        $('html,body').animate({
            scrollTop:$('.about-us-section5').offset().top
        },1000);
       
    })
    
    $('.news-section-1 #icon-box1').click(function(){
        $('html,body').animate({
            scrollTop:$('.news-section-2').offset().top
        },1000);
       
    })
    $('.news-section-1 #icon-box2').click(function(){
        $('html,body').animate({
            scrollTop:$('.news-section-3').offset().top
        },1000);
       
    })
    $('.news-section-1 #icon-box3').click(function(){
        $('html,body').animate({
            scrollTop:$('.news-section-4').offset().top
        },1000);
       
    })
    
    
    $('.volunteer-section-1 #icon-box1').click(function(){
        $('html,body').animate({
            scrollTop:$('.volunteer-section-2').offset().top
        },1000);
       
    })
    $('.volunteer-section-1 #icon-box2').click(function(){
        $('html,body').animate({
            scrollTop:$('.volunteer-section-3').offset().top
        },1000);
       
    })
    $('.volunteer-section-1 #icon-box3').click(function(){
        $('html,body').animate({
            scrollTop:$('.volunteer-section-5').offset().top
        },1000);
       
    })
    
    $('.report-container1 #icon-box1').click(function(){
        $('html,body').animate({
            scrollTop:$('.report-container4').offset().top
        },1000);
       
    })
     $('.report-container1 #icon-box2').click(function(){
        $('html,body').animate({
            scrollTop:$('.report-container5').offset().top
        },1000);
       
    })
    $('.report-container1 #icon-box3').click(function(){
        $('html,body').animate({
            scrollTop:$('.report-container6').offset().top
        },1000);
       
    })
    $('.report-container1 #icon-box4').click(function(){
        $('html,body').animate({
            scrollTop:$('.report-container7').offset().top
        },1000);
       
    })
});



$('nav .link1 a').hover(function(){
    $('nav .link1 .link-underline').css("width","100%");
    
});
$('nav .link1 a').mouseleave(function(){
    $('nav .link1 .link-underline').css("width","0%");
    
});


$('nav .link2 a').hover(function(){
    $('nav .link2 .link-underline').css("width","100%");
    
});
$('nav .link2 a').mouseleave(function(){
    $('nav .link2 .link-underline').css("width","0%");
    
});


$('nav .link3 a').hover(function(){
    $('nav .link3 .link-underline').css("width","100%");
    
});
$('nav .link3 a').mouseleave(function(){
    $('nav .link3 .link-underline').css("width","0%");
    
});


$('nav .link4 a').hover(function(){
    $('nav .link4 .link-underline').css("width","100%");
    
});
$('nav .link4 a').mouseleave(function(){
    $('nav .link4 .link-underline').css("width","0%");
    
});


$('nav .link5 a').hover(function(){
    $('nav .link5 .link-underline').css("width","100%");
    
});
$('nav .link5 a').mouseleave(function(){
    $('nav .link5 .link-underline').css("width","0%");
    
});















