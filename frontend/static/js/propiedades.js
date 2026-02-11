<script src="{% static 'js/maps-states-mx.min.js' %}"></script>

(function ($) {
    $('.owl-carousel.header').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#propiedades-circle").attr("style", "display:none;");

    //  $("path.st0")
    //     .mouseenter(function () {
    //         $('#initial-info').css('display', 'none');
    //         $("#propiedades-circle").attr("style", "display:block;");
    //         $("#propiedades-text").text($(this).attr("hover-text"));
    //         $("#propiedades-state").text($(this).attr("state"));
    //     })
    
    //     .mouseleave(function () {
    //         $('#initial-info').css('display', 'block');
    //         $("#propiedades-circle").attr("style", "display:none");
    //      });

    $("path.st0").hover(function () {
        let id = $(this).attr("id") ?? $(this).data("id");

        $('path.active').removeClass('active');
        $("#" + id).attr("class", "st0 active");

        $("#propiedades-circle").attr("style", "opacity:1;left:-40px");
        $("#propiedades-state").text(mxStates[id].name);

        let divText = $("#propiedades-text");
        divText.empty();
        let list = mxStates[id].list;
        if (list.length) {
            for (let i of list) {
                divText.append('<h4>' + i.title + '</h4>');
                if (i.items.length) {
                    let ul = '<ul class="list-group list-unstyled w-100">';
                    for (let j of i.items) {
                        ul += '<li class="list-unstyled">' + j + '</li>';
                    }
                    ul += '</ul>';
                    divText.append(ul);
                }
            }
        }
    }, function () {
        $("#propiedades-circle").attr("style", "opacity:0;left:-40px");
        $('path.active').removeClass('active');
    });

    $("[id='MEX2706']").click();

    $("path.st3").click(function () {
        const id = $(this).attr("data-id")
        const hotel = mxHotels[id]
        $("#modalHotel #hotelNombre").text(hotel.nombre);
        $("#modalHotel #hotelDireccion").text(hotel.direccion);
        $("#modalHotel #hotelFecha").text(hotel.fecha);
        $("#modalHotel #hotelSegmento").text(hotel.segmento);
        $("#modalHotel #hotelCuartos").text(hotel.cuartos);
        $("#modalHotel #hotelWebsite").attr('href', hotel.website);
        $("#modalHotel #hotelImagen").attr('src', 'static/images/hoteles/' + hotel.imagen);
        $("#modalHotel #hotelLogo").attr('src', 'static/images/hoteles/' + hotel.logo);

        $('#modalHotel').modal('show');
    });

    var isotopeObjs = [],
        wow = '';
    /****** Wow animation ******/
    if ($('.wow').length > 0) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 30,
            live: true
        });
        $(document).imagesLoaded(function () {
            wow.init();
        });
    }

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
                wow.removeBox(this);
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
        _this.imagesLoaded(function () {
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
                filter: '.Serviciolimitado'
            });
            isotopeObjs.push(_this);
        });
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

        if (selector != '*') {
            $('.descripcion').addClass('d-none');
            $(selector).removeClass('d-none');
        } else {
            $('.descripcion').addClass('d-none');
        }
        return false;
    });
// ------------------------------------------------
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        pauseOnHover: true,
        slideshowSpeed: 5000
    });
    // var $container = $('.iso-box-wrapper'),
    //     $imgs = $('.iso-box img');
    //
    // $container.imagesLoaded(function () {
    //
    //     $container.isotope({
    //         layoutMode: 'fitRows',
    //         itemSelector: '.iso-box',
    //         transitionDuration: 0
    //     });
    //
    //     // $imgs.load(function () {
    //     //     $container.isotope('reLayout');
    //     // })
    //
    // });
    //
    // $('.filter-wrapper li a').click(function () {
    //
    //     var $this = $(this), filterValue = $this.attr('data-filter');
    //
    //     $container.isotope({
    //         filter: filterValue,
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear',
    //             queue: false,
    //         }
    //     });
    //
    //
    //     if ($this.hasClass('selected')) {
    //         return false;
    //     }
    //
    //     var filter_wrapper = $this.closest('.filter-wrapper');
    //     filter_wrapper.find('.selected').removeClass('selected');
    //     $this.addClass('selected');
    //
    //     return false;
    // });
})(jQuery);