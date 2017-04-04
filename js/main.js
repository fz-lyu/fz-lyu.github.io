/**
 * Created by kk980 on 4/3/2017.
 */
(function ($) {
    $(document).ready(function(){
        $("#hi1").hide().fadeIn(2000);
        $("#hi2").hide().fadeIn(3000);
    });

    sr.reveal('.sr-pic', {
        duration: 1000,
        delay: 200
    });

    var image = '<img src="img/wechat.jpg" height="auto" width="200">';
    $('#test').popover({
        content: image,
        html:true
    });

})(jQuery);