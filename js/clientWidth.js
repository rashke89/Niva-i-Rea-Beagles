var clientWidth = document.documentElement.clientWidth;
var stenci = $('.acordian');
stenciNone();

function stenciNone() {
    if (clientWidth < 1090) {
        $('.stenci').find('hr').css('margin-top', '1px');
        $('#galerija').find('hr').css('margin-top', '1px');
        $('.stenci').find('h1').css('font-size', '28px');
        $('#galerija').find('h1').css('font-size', '28px');
    }
};