var clientWidth = document.documentElement.clientWidth;
var nivaTxt = $('.niva-tekst');
var reaTxt = $('.rea-tekst');
var stenci = $('.acordian');
var stenciImg = $('.clw .col-md-4');
// console.log(stenciImg);

minWidth();
stenciNone();
footer();

function minWidth() {
    var y = $('.video1');
    var x = $('.video1 iframe').css('height');
    y.css('height', x)
};

function stenciNone() {
    if (clientWidth < 1090) {
        $('.stenci').find('hr').css('margin-top', '1px');
        $('#galerija').find('hr').css('margin-top', '1px');
        $('.stenci').find('h1').css('font-size', '28px');
        $('#galerija').find('h1').css('font-size', '28px');
    }
};

// galerija hover
var galImg = $('#galerija img');
galImg.on('mouseenter', function() {
    $('#galerija img').not(this).css({
        'opacity': '0.6',
        'transition': 'all 0.3s'
    })
    $(this).css({
        'border': '5px solid rgba(20, 15, 45, 1)',
        'transition': 'all 0.3s',
        'cursor': 'pointer',
    });

});
galImg.on('mouseleave', function() {
    $(this).css({
        'opacity': '1',
        'border': '5px solid white',
        'transition': 'all 0.2s'
    });
    galImg.css('opacity', '1')
});

//video
var iframe = $('.video iframe');
var videoHero = iframe.getElementsByClassName('video')[0];
console.log(videoHero);
console.log('aaa');
iframeWidth();

function iframeWidth() {
    if (clientWidth > 1024) {
        iframe.css({
            'width': '500px',
            'height': '350px',
            'padding': '20px'
        })
    } else if (clientWidth < 1023 && clientWidth > 769) {
        iframe.css({
            'width': '400px',
            'height': '250px',
            'padding': '5px'
        })
    } else if (clientWidth < 768) {
        iframe.css({
            'width': '300px',
            'height': '200px',
            'padding': '5px'
        })
    }
};

//stenci img hover effect

stenciImg.hover(function() {
        var top = $(this).offset().top - 1000;
        var left = $(this).offset().left;
        var sTop = top.toString() + 'px';
        var sLeft = left.toString() + 'px';
        $(this).find('img').removeClass('img-circle').css('transition', '0.5s');
    },
    function() {
        $(this).find('img').addClass('img-circle').css('transition', '0.3s')
    });


//footer small devices
function footer() {
    var by = $('.footer .col-md-5');
    var footerBrand = $('.footer .brand-font');
    var footerBrand1 = $('.footer .col-md-4');
    if (clientWidth < 600) {
        by.addClass('text-center no-padding');
        by.css('height', '40px')
        footerBrand.removeClass('pull-right');
        footerBrand1.addClass('text-center no-padding');
    }
}

//scrolling effect
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



var q = $('.pull-right li a');
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
        q.attr('id', '');
        q.eq(1).attr('id', 'active');
    } else {
        q.eq(1).attr('id', '');
    }
});

$(window).scroll(function() {
    if ($('.clw').isOnScreen()) {
        $('.rea-tekst').addClass('animated bounceInRight');

    }
});

$(window).scroll(function() {
    if ($('#stenciscroll').isOnScreen()) {
        $('.stenci .col-md-4').addClass('animated showIt');
        q.attr('id', '');
        q.eq(2).attr('id', 'active');
    } else {
        q.eq(2).attr('id', '');
    }
});

$(window).scroll(function() {
    if ($('#galerijascroll').isOnScreen()) {
        var slike = $('#galerija img');
        $('#galerija .col-md-3').addClass('animated zoomIn');
        q.attr('id', '');
        q.eq(3).attr('id', 'active');
    } else {
        q.eq(3).attr('id', '');
    }
})

$(window).scroll(function() {
    if ($('#videoscroll').isOnScreen()) {
        q.attr('id', '');
        q.eq(4).attr('id', 'active');
    } else {
        q.eq(4).attr('id', '');
    }
})

// kontakt
$(window).scroll(function() {
    if ($('#kontaktscroll').isOnScreen()) {
        $('#contact-form .col-md-5').addClass('animated showIt');
        $('#contact-form .kontakt_p').addClass('animated showIt');
        q.attr('id', '');
        q.eq(5).attr('id', 'active');
    } else {
        q.eq(5).attr('id', '');
    }
})
$(window).scroll(function() {
    if ($('#home-top').isOnScreen()) {
        q.attr('id', '');
        q.eq(0).attr('id', 'active')
    }
})

//burger mani RESEN!!
var burger = $('.navbar-header .navbar-toggle');
burger.hover(function() {
    burger.css({
        backgroundColor: 'rgba(128, 100, 200, 1)'
    })
})
burger.on('click', function() {
    // $('#ejebeniidneki').css({
    // });
    $('#jebeniidneki ul').css({
        backgroundColor: 'rgba(128, 100, 200, 1)',
        width: '120px',
    })
    $('#jebeniidneki li').css({
        height: '35px'
    });
    $('#jebeniidneki li a').attr('id', '').css({
        height: '40px',
        padding: '5px',
        textAlign: 'center'
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
