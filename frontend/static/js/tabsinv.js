(function ($) {

    $("#propiedades-circle").attr("style", "opacity:0;");

    $("path.st0")
        .mouseenter(function () {
            $('#initial-info').css('display', 'none');
            $("#propiedades-circle").attr("style", "opacity:1;");
            $("#propiedades-text").text($(this).attr("hover-text"));
            $("#propiedades-state").text($(this).attr("state"));
        })

        .mouseleave(function () {
            $('#initial-info').css('display', 'block');
            $("#propiedades-circle").attr("style", "opacity:0");
        });

    var isotopeObjs = [],
        wow = '';
    /****** Wow animation ******/
    // if ($('.wow').length > 0) {
    //     wow = new WOW({
    //         boxClass: 'wow',
    //         animateClass: 'animate__animated',
    //         offset: 30,
    //         live: true
    //     });
    //     // wow.init();
    // }

    /****** Check for browser OS ******/
    var isMobile = false,
        isiPhoneiPad = false,
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    function removeWowAnimation(gridObj) {
        gridObj.find('.grid-item').removeClass('animate__animated').css('visibility', ''); // avoid problem to filter after sorting
        if ($('.wow').length > 0) {
            gridObj.find('.grid-item').each(function () {
                var _this = $(this);
                // remove perticular element from WOW array when you don't want animation on element after DOM lead
                // wow.removeBox(this);
                _this.css('-webkit-animation', 'none');
                _this.css('-moz-animation', 'none');
                _this.css('-ms-animation', 'none');
                _this.css('animation', 'none');
            });
        }
    }

    /****** Reset isotope loop ******/
    function resetIsotopeLayoutLoop(isotopeObjs, removeAnimation) {
        for (var i = 0; i < isotopeObjs.length; i++) {
            if (removeAnimation) {
                removeWowAnimation(isotopeObjs[i]);
            }
            if (isotopeObjs[i].data('isotope')) {
                isotopeObjs[i].isotope('layout');
            }
        }
        ;
    }

    $('.portfolio-wrapper').each(function () {
        var _this = $(this);
        if (!_this.find('.wow').length > 0) {
            _this.find('.grid-item').css('visibility', 'hidden');
        }
        if (!_this.find('.wow').length > 0) {
            _this.find('.grid-item').css('visibility', '');
        } else if (!isMobile) {
            _this.find('.grid-item').css('visibility', 'hidden');
        }
        _this.removeClass('grid-loading');
        _this.isotope({
            layoutMode: 'masonry',
            itemSelector: '.grid-item',
            percentPosition: true,
            cellsByRow: {
                columnWidth: 200,
                rowHeight: 150
            },
            masonry: {
                columnWidth: '.grid-sizer',
            },
            filter: '.Crecimiento'
        });
        isotopeObjs.push(_this);
    });

    $(document).on('click', '.portfolio-filter > li > a', function () {
        var _this = $(this),
            parentSectionObj = _this.parents('section');
        parentSectionObj.find('.portfolio-filter > li').removeClass('active');
        _this.parent().addClass('active');
        var selector = _this.attr('data-filter'),
            portfolioFilter = parentSectionObj.find('.portfolio-wrapper');
        // Remove animation
        removeWowAnimation(portfolioFilter);
        // Isotope filter
        portfolioFilter.isotope({filter: selector});
        return false;
    });

})(jQuery);