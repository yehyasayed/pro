/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.navbar-collapse ul li').click(function (e){
        e.preventDefault();
        $('html, body').animate(
        {
            scrollTop: $($(this).data('scroll') ).offset().top 
        },1000);
    });
    $(window).scroll(function(){
        $('.di').each (function(){
            if( $(window).scrollTop() > $(this).offset().top -50)
            {
                var divid ="#" + $(this).attr("id");
                $('.navbar-collapse ul li').removeClass('active');
                $('.navbar-collapse ul li[data-scroll="' + divid + '"]').addClass('active');
            }
        });
    });
    document.getElementById('pr').textContent =""
    var j=1,
    i=0,
    arr=["yehya sayed abd elgwad .","front end developer .","from el fayoum city , egypt .","20 years old ."],
    str=arr[0];
    setInterval(function()
    {
        document.getElementById('pr').textContent += str[i++];
        if(i==str.length +1)
        {
            document.getElementById('pr').textContent =""
            str=arr[j++];
            i=0;
            if(j==arr.length)
                j=0;
        }
    },200);
    // go top buttun
    $(window).scroll(function(){
        if($(window).scrollTop() >1000)
            {
                $('.go-top').fadeIn();
            }
            else
            {
                $('.go-top').fadeOut();
            }
    });
    $('.go-top').click(function(){
        $('html, body').animate(
            {
                scrollTop: 0
            },1000);
    });
    $(".contact form").on('submit',function(e){
        e.preventDefault();
    });
});
//loading 
$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .sk-cube-grid").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});