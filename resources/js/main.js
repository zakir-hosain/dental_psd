$(document).ready(function(){
  $(window).scroll(function(){
     var t = $('html').scrollTop(); 
      
      
    if(t > 95){
        $('.menu-area').addClass('sticky');
       
       }else{
       $('.menu-area').removeClass('sticky');
       };

    $('.footer-area span').click(function(){
        $(window).scrollTop('0');
    });
      
      if(t > 195){
        $('.footer-area span').show();
       
       }else{
       $('.footer-area span').hide();
       };
});
});

function openNav(){
    document.getElementById("mynav").style.width ="22rem";
}
function closeNav(){
    document.getElementById("mynav").style.width ="0%";
}