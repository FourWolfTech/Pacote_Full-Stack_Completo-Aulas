$(function(){

    var curSlide = 0;
    var maxSlide = $('.banner-single').length - 1;
    var deley = 3;

    initSlider();
    changeSlide();

    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(curSlide).show();

        for(var i = 0; i < maxSlide+1; i++){
            var content = $('.bullets').html();
            if(i == 0)
                content+='<span class="active-slider"></span>';
            else
                content+='<span></span>';
            $('.bullets').html(content);
        }
    }

    function changeSlide(){
        setInterval(() => {
            $('.banner-single').eq(curSlide).stop().fadeOut(1000);
            curSlide++;
            if(curSlide > maxSlide)
                curSlide = 0;
            $('.banner-single').eq(curSlide).stop().fadeIn(1000);
            // Trocar bullets da negação do slader
            $('.bullets span').removeClass('active-slider')
            $('.bullets span').eq(curSlide).addClass('active-slider')
            
        }, deley * 1000);
    }

    $('body').on('click', '.bullets span',function(){
        var currentBullet = $(this);
        $('.banner-single').eq(curSlide).stop().fadeOut(1000);
        curSlide = currentBullet.index();
        $('.banner-single').eq(curSlide).stop().fadeIn(1000);
        $('.bullets span').removeClass('active-slider');
        currentBullet.addClass('active-slider');
    });
});