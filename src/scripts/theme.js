window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

theme.cacheSelectors = (function() {
    theme.cache = {

    }
});

theme.instagram = (function() {
    if ($('.carousel.logo').length > 0) {
        $('.carousel.logo').each(function() {
            var self = $(this);
            $(this).slick({
                slidesToShow: self.data('slides'),
                slidesToScroll: self.data('scroll'),
                prevArrow: "<span class='carousel-arrow carousel-arrow--left'><span></span></span>",
                nextArrow: "<span class='carousel-arrow carousel-arrow--right'><span></span></span>"
            });
        });
    }
});

theme.slide = {};
theme.SlideshowSection = (function() {
    function SlideshowSection(container) {
        var obj = $(container);
        var id = obj.attr('data-section-id');
        var selector = '#section__slideshow--' + id;

        theme.slide[selector] = $(selector).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<span class='carousel-arrow carousel-arrow--left'><span></span></span>",
            nextArrow: "<span class='carousel-arrow carousel-arrow--right'><span></span></span>"
        });
    }
    return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {});

theme.carousel = {};
theme.CarouselSection = (function() {
    function CarouselSection(container) {
        var obj = $(container);
        var id = obj.attr('data-section-id');
        var selector = $('#section__carousel--' + id);
        theme.slide[selector] = selector.slick({
            slidesToShow: selector.data('slides'),
            slidesToScroll: selector.data('scroll'),
            autoplay: selector.data('autoplay'),
            autoplaySpeed: selector.data('autoplay-speed'),
            prevArrow: "<span class='carousel-arrow carousel-arrow--left'><span></span></span>",
            nextArrow: "<span class='carousel-arrow carousel-arrow--right'><span></span></span>"
        });
    }
    return CarouselSection;
})();

theme.CarouselSection.prototype = _.assignIn({}, theme.CarouselSection.prototype, {});

theme.init = function() {
    theme.cacheSelectors();
};

$(document).ready(function () {
    var sections = new slate.Sections();
    sections.register('slideshow-section', theme.SlideshowSection);
    sections.register('carousel-section', theme.CarouselSection);

    $('.nav-search-dropdown').on('change', function(e) {
        var self = $(this);
        var parent = self.closest('.nav-search-scope');
        parent.find('.nav-search-label').text(self.find('option:selected').text());
    });

    $('.nav-search-dropdown, .nav-input').on('focus', function (e) {
        var self = $(this);
        self.closest('.navbar-form').addClass('nav-active');
    }).on('blur', function(e) {
        var self = $(this);
        self.closest('.navbar-form').removeClass('nav-active');
    });

});
$(theme.init());
