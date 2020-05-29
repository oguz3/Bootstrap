$(window).resize(function(){
    console.log('resize called');
    var width = $(window).width();
    if(width <= 989){
        $('.cardSecond').removeClass('w-75').addClass('w-100');
        $('.BlogRow').removeClass('pt-5').addClass('pt-1');
    }else{
        
    }
 })
.resize();