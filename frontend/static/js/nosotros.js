$(document).ready(function () {
    var counter = 1,
        interval = setInterval(function () {
            var elemento = $("#n-estrategia").find(".estra-link ")[counter];
            $(elemento).click();
            if (counter === 3) {
                counter = 0;
            } else {
                counter++;
            }
        }, 5000);
    $('#n-estrategia .outside-box-right').mouseover(function () {
        clearInterval(interval)
    });

    $('#n-estrategia .outside-box-right').mouseleave(function () {
        interval = setInterval(function () {
            var elemento = $("#n-estrategia").find(".estra-link ")[counter];
            $(elemento).click();
            if (counter === 3) {
                counter = 0;
            } else {
                counter++;
            }
        }, 5000)
    });
    $('.owl-carousel.ventajas').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
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

    $('.owl-carousel.directivo').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(".estra-link").on('click', function (event) {
        var $this = $(this);
        var item = $this.data('item');
        $(".estra-item").addClass('d-none');
        $(".estra-link").removeClass('active');
        $this.addClass('active');
        $('.estra-item.' + item).removeClass("d-none");

    });

    $(".team-member-details").on('click', function (event) {
        var $this = $(this);
        var item = $this.data('item');
        $(".diretivo-perfil").addClass('d-none');
        $('.diretivo-perfil.' + item).removeClass("d-none");

        $("html, body").animate({scrollTop: $('.diretivo-perfil.' + item).offset().top - 200}, 1000);
    });

    $(".cerrar-info i").on('click', function (event) {
        $(".diretivo-perfil").addClass('d-none');
    });

    var timelineSwiper = new Swiper('.timeline .swiper-container', {
        direction: 'vertical',
        loop: false,
        speed: 1600,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            768: {
                direction: 'horizontal',
            }
        }
    });

    function button_loading(button, icon, finish) {
        if (!finish) {
            $(button).prepend(icon);
            $(button).addClass('loading');
        } else {
            $(button + ' i').remove();
            $(button).removeClass('loading');
        }
    }

    function alert_animations(container, type, text) {
        let htmlAlert = '<div class="alert alert-' + type + ' mt-2">' + text + '</div>';
        $(container).prepend(htmlAlert);
        $(container + " .alert").first().hide().fadeIn(800).delay(2000).fadeOut(800, function () {
            $(this).remove();
        });
    }

    let form = $('#alerta-email');

    jQuery.validator.addMethod("customEmail", function (value) {
        return value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }, 'Por favor, introduce una dirección de correo electrónico válida.');

    form.validate({
        rules: {
            email: {
                required: true,
                customEmail: true
            }
        },
        messages: {
            email: {
                required: "Este campo es obligatorio",
                email: "Por favor, introduce una dirección de correo electrónico válida."
            }
        },
        highlight: function (element) {
            $(element)
                .addClass('is-invalid')
                .removeClass('is-valid')
                .parent()
                .removeClass('has-success')
                .addClass('has-danger');
        },
        success: function (label, element) {
            $(element)
                .removeClass('is-invalid')
                .addClass('is-valid')
                .parent()
                .removeClass('has-danger')
                .addClass('has-success')
                .find('label.error')
                .remove();
        },
        errorPlacement: function (error, element) {
            if (element.attr('type') === 'radio' || element.attr('type') === 'checkbox') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    grecaptcha.ready(function () {
        button_loading('#alert-email-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
        $('#alert-email-submit').prop('disabled', false);
        form.submit(function (e) {
            e.preventDefault();
            if (form.valid()) {
                button_loading('#alert-email-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>');
                $('#alert-email-submit').prop('disabled', true);
                grecaptcha.execute(site_key, {action: 'contactformexp'})
                    .then(function (token) {
                        form.append('<input type="hidden" name="token" value="' + token + '">');
                        console.log(form.serialize());
                        $.ajax({
                            type: 'POST',
                            url: url_alert_email,
                            data: form.serialize(),
                            success: function (response) {
                                if (response['success']) {
                                    form.trigger('reset');
                                    alert_animations('.alert-message', 'success', response['message']);
                                } else {
                                    alert_animations('.alert-message', 'danger', response['message']);
                                }
                                button_loading('#alert-email-submit', '<i class="fa fa-spinner fa-spin mr-2"></i>', true);
                                $('#alert-email-submit').prop('disabled', false);
                            },
                        });
                    });
            }
        });
    });
})