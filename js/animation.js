// zahteva animate.css

//funkcija za visible
$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
// kraj funkcije visible 

// Animiranje elemenata:
$(window).scroll(function() {
    if ($('#niva').isOnScreen()) {
        // The element is visible, do something
        $('.niva-tekst').addClass('animated bounceInLeft');
        $('.pull-right li').attr('id', '');
        $('.pull-right li').eq(1).attr('id', 'active');
    } else {
        $('.niva-tekst').removeClass('animated bounceInLeft');
        $('.pull-right li').eq(1).attr('id', '');
    }
});

$(window).scroll(function() {
    if ($('.clw').isOnScreen()) {
        // The element is visible, do something
        $('.rea-tekst').addClass('animated bounceInRight');

    } else {
        $('.rea-tekst').removeClass('animated bounceInRight');

    }
});

$(window).scroll(function() {
    if ($('.stenci').isOnScreen()) {
        $('.stenci .col-md-4').addClass('animated showIt');
        $('.pull-right li').attr('id', '');
        $('.pull-right li').eq(2).attr('id', 'active');
    } else {
        $('#stenci .col-md-4').removeClass('animated showIt')
        $('.pull-right li').eq(2).attr('id', '');
    }
});

$(window).scroll(function() {
    if ($('#galerija').isOnScreen()) {
        $('.pull-right li').attr('id', '');
        $('.pull-right li').eq(3).attr('id', 'active');
    } else {
        $('.pull-right li').eq(3).attr('id', '');
    }
})

$(window).scroll(function() {
    if ($('#video').isOnScreen()) {
        $('.pull-right li').attr('id', '');
        $('.pull-right li').eq(4).attr('id', 'active');
    } else {
        $('.pull-right li').eq(4).attr('id', '');
    }
})

$(window).scroll(function() {
    if ($('#kontakt').isOnScreen()) {
        $('.pull-right li').attr('id', '');
        $('.pull-right li').eq(5).attr('id', 'active');
    } else {
        $('.pull-right li').eq(5).attr('id', '');
    }
})