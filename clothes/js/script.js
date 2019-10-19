jQuery(function ($) {

    $(window).scroll(function(){

        $(".div").each(function () {

          var window_top = $(window).scrollTop();

          var div_top = $(this).offset().top;

          var div_1 = $(this).attr('id');

            if (window_top > div_top - 120){

                $('#menu').find('td').removeClass('active');

                $('#menu').find('td[class="'+div_1+'"]').addClass('active');

            }

            else{

                $('#menu').find('td[class="'+div_1+'"]').removeClass('active');

                };

        });

    });

});
