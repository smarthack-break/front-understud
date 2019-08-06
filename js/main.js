$(document).ready(function () {
 
});

$(window).scroll(function () {
    scrollAni("#current_container", {"opacity": "1.0"});
});

function scrollAni(self, ani) {
    console.log('ind');
    $(`${self}`).each(function (index) {
        var rect = this.getBoundingClientRect();

        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()){
                $(this).css(ani);
            }
    });
}

