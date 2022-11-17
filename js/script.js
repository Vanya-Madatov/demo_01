// $(document).ready(function() {
//     $('.header-search-icon').click(function() {
//         $(this).closest('.header-search').find('.search-input').focus();
//     });

//     $('.bottom-menu-item').click(function() {
//         $('.bottom-menu-item').removeClass('active');
//         $(this).addClass('active');
//     });

//     $('.menu-left-option-header').click(function() {
//         $('.menu-left-option-header').not(this).removeClass('active');
//         $('.menu-left-option').find('.menu-left-option-content').not($(this).closest('.menu-left-option').find('.menu-left-option-content')).slideUp(200);
//         $(this).toggleClass('active');
//         $(this).closest('.menu-left-option').find('.menu-left-option-content').slideToggle(200);
//     });

//     $('.header-bars').click(function() {
//         $('.menu-block').fadeIn(300);
//     });
//     $('.menu-left-header-bars, .menu-block-shadow').click(function() {
//         $('.menu-block').fadeOut(300);
//     });

//     $('.header-toggle-btn').click(function() {
//         $(this).closest('.header-toggle').find('.header-toggle-block').slideToggle(300);
//     });
//     $(document).click(function(event) {
//         if ($(event.target).closest(".header-toggle-block, .header-toggle-btn, .select-block-footer, .select-block-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
//         $(".header-toggle-block").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
//         event.stopPropagation();
//     });




//     $('.select-block-header .select-block-item').click(function() {
//         $('.select-block-footer').not($(this).closest('.select-block').find('.select-block-footer')).slideUp(300)
//         $(this).closest('.select-block').find('.select-block-footer').slideToggle(300);
//     });


//     $('.select-block-footer .select-block-item').on('click', function() {
//         var $this = $(this);
//         var $first = $(this).closest('.select-block').find('.select-block-header .select-block-item');
//         var firstHTML = $first.html();
//         $first.html($this.html());
//         $this.html(firstHTML);
//         $(this).closest('.select-block').find('.select-block-footer').slideUp(300);
//     });

//     $(document).click(function(event) {
//         if ($(event.target).closest(".select-block-footer, .select-block-header .select-block-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
//         $(".select-block-footer").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
//         event.stopPropagation();
//     });

//     $('.home-left-filter-header').click(function() {
//         $(this).closest('.home-left-filter').find('.home-left-filter-footer').slideToggle(300);
//         $(this).toggleClass('active');
//     });


//     $('.more-btn').click(function() {
//         $(this).closest('.more-block').find('.more-content').slideToggle(300);
//         $(this).toggleClass('active');
//     });


//     $('.numbers-minus').click(function() {
//         var changeVal = $(this).closest('.numbers').find('input').val();
//         if (changeVal == 0) {

//         } else {
//             $(this).closest('.numbers').find('input').val(changeVal - 1);
//         }
//     });
//     $('.numbers-plus').click(function() {
//         var changeVal = $(this).closest('.numbers').find('input').val();
//         if (changeVal == 99) {

//         } else {
//             $(this).closest('.numbers').find('input').val(changeVal = changeVal * 1 + 1);
//         }

//     });


//     $('.home-content-filter-item').click(function() {
//         var homeFilterId = $(this).index();
//         $('.filter-modal .filter-modal-item').fadeOut(0);
//         $('.filter-modal .filter-modal-item').eq(homeFilterId).fadeIn(0);
//     });


//     $("#filter-polzunok").slider({
//         animate: "slow",
//         range: true,
//         min: 10000,
//         max: 300000,
//         values: [0, 250000],
//         slide: function(event, ui) {
//             $(".filter-res-one").text(ui.values[0]);
//             $(".filter-res-two").text(ui.values[1]);
//         }
//     });
//     $(".filter-res-one").text($("#filter-polzunok").slider("values", 0));
//     $(".filter-res-two").text($("#filter-polzunok").slider("values", 1));
//     $('.home-tab-item').fadeOut(100);


//     $('.home-content-sort-select-item').click(function() {
//         var elementId = $(this).index();
//         $('.home-content-sort-select-item').removeClass('active');
//         $(this).addClass('active');
//         $('.home-row').removeClass('active');
//         $('.home-row').eq(elementId).addClass('active');
//     });



//     $('.home-slider-block-hearth').click(function() {
//         $(this).find('img').slideToggle(0);
//     });
//     window.onload = function() {

//         var scr = $(".home-list, .property-teg, .property-review, .settings-list");

//         scr.mousedown(function() {
//             var startX = this.scrollLeft + event.pageX;
//             var startY = this.scrollTop + event.pageY;
//             scr.mousemove(function() {
//                 this.scrollLeft = startX - event.pageX;
//                 this.scrollTop = startY - event.pageY;
//                 return false;
//             });
//         });
//         $(window).mouseup(function() {
//             scr.off("mousemove");
//         });
//     }

//     $('.home-list-container-btn').click(function() {
//         $(this).closest('.home-list-container').find('.home-list').animate({ scrollLeft: 1000 }, 600);

//     });



//     $('.slick-dots button').mouseenter(function(e) {
//         var btn = $(this);
//         btn[0].click();
//     });








//     $('.filter-check-block').click(function() {
//         var checkAttr = $(this).find('input[type="checkbox"]');
//         if (checkAttr.prop("checked")) {
//             $(this).find('input[type="checkbox"]').attr('checked', false);
//         } else {
//             $(this).find('input[type="checkbox"]').attr('checked', true);
//         }



//     });


//     $('.sign-in-input-block-password-icon-off').click(function() {
//         $(this).closest('.sign-in-input-block-password').find('input').attr('type', 'text');
//         $(this).closest('.sign-in-input-block-password-icon').find('img').slideToggle(0);
//     });
//     $('.sign-in-input-block-password-icon-on').click(function() {
//         $(this).closest('.sign-in-input-block-password').find('input').attr('type', 'password');
//         $(this).closest('.sign-in-input-block-password-icon').find('img').slideToggle(0);
//     });


// (function($) {
//     $.fn.HvrSlider = function() {
//         return this.each(function() {
//             var el = $(this);
//             if (el.find('.images-item').length > 1) {
//                 var hvr = $('<div>', {
//                     class: 'hvr',
//                     append: [
//                         $('<div>', {
//                             class: 'hvr__images',
//                             append: $('<div>', {
//                                 class: 'hvr__sectors',
//                             }),
//                         }),
//                         $('<div>', {
//                             class: 'hvr__dots',
//                         }),
//                     ],
//                     insertAfter: el,
//                     prepend: el,
//                 });
//                 var hvrImages = $('.hvr__images', hvr);
//                 var hvrImage = $('.images-item', hvr);
//                 var hvrSectors = $('.hvr__sectors', hvr);
//                 var hvrDots = $('.hvr__dots', hvr);
//                 el.prependTo(hvrImages);
//                 hvrImage.each(function() {
//                     hvrSectors.prepend('<div class="hvr__sector"></div>');
//                     hvrDots.append('<div class="hvr__dot"></div>');
//                 });
//                 $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
//                 var setActiveEl = function(el) {
//                     hvrImage.hide().eq(el.index()).show();
//                     $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
//                 };
//                 $('.hvr__sector', hvrSectors).hover(function() {
//                     setActiveEl($(this));
//                 });
//                 hvrSectors.on('touchmove', function(e) {
//                     var position = e.originalEvent.changedTouches[0];
//                     var target = document.elementFromPoint(position.clientX, position.clientY);
//                     if ($(target).is('.hvr__sector')) {
//                         setActiveEl($(target));
//                     }
//                 });
//             }
//         });
//     };
// })(jQuery);





// const mediaQuery = window.matchMedia('(max-width: 5000px) and (min-width: 574px)')
// function handleTabletChange(e) {
//     if (e.matches) {
//         $('.images').HvrSlider();
//         $('.home-slider-block.first .images').slick('unslick');
//         $('.home-slider-block.second .images').slick('unslick');
//         $('.home-slider-block.third .images').slick('unslick');
//         $('.home-slider-block.fourth .images').slick('unslick');
//     } else{
//         $('.home-slider-block.first .images').slick({
//             dots: true,
//             prevArrow: $('.home-slider-block.first .left-arrow'),
//             nextArrow: $('.home-slider-block.first .right-arrow'),

//         });
//         $('.home-slider-block.first .images').slick('setPosition');
//         $('.home-slider-block.second .images').slick({
//             dots: true,
//             prevArrow: $('.home-slider-block.second .left-arrow'),
//             nextArrow: $('.home-slider-block.second .right-arrow'),

//         });
//         $('.home-slider-block.second .images').slick('setPosition');
//         $('.home-slider-block.third .images').slick({
//             dots: true,
//             prevArrow: $('.home-slider-block.third .left-arrow'),
//             nextArrow: $('.home-slider-block.third .right-arrow'),

//         });
//         $('.home-slider-block.third .images').slick('setPosition');
//         $('.home-slider-block.fourth .images').slick({
//             dots: true,
//             prevArrow: $('.home-slider-block.fourth .left-arrow'),
//             nextArrow: $('.home-slider-block.fourth .right-arrow'),

//         });
//         $('.home-slider-block.fourth .images').slick('setPosition');
//     }
// }
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)













//     $('.favorite-slider').slick({
//         dots: true,
//         // prevArrow: $('.home-slider-block.second .left-arrow'),
//         // nextArrow: $('.home-slider-block.second .right-arrow'),
//     });
//     $('.favorite-slider-block-btn').click(function() {
//         $(this).closest('.favorite-block-row-item').fadeOut(100);
//     });
//     $('.property-slider').slick({
//         centerMode: true,
//         centerPadding: '33.33%',
//         slidesToShow: 1,
//         prevArrow: $('.property-slider-direction .left-arrow'),
//         nextArrow: $('.property-slider-direction .right-arrow'),
//         responsive: [{
//                 breakpoint: 1670,
//                 settings: {
//                     centerPadding: '30%',
//                 }
//             },
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     centerPadding: '25%',
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     centerPadding: '20%',
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     centerPadding: '10%',
//                 }
//             },
//             {
//                 breakpoint: 574,
//                 settings: {
//                     centerPadding: '5%',
//                 }
//             }
//         ]


//     });

//     var $status = $('.property-slider-number span');
//     var $slickElement = $('.property-slider, .verification-slider');

//     $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $status.text(i + '/' + slick.slideCount);
//     });


//     $('.property-toggle-block-header').click(function() {
//         $(this).closest('.property-toggle-block').find('.property-toggle-block-content').fadeToggle(300);
//         $(this).closest('.property-toggle-block').find('.property-toggle-block-header-icon').toggleClass('active');
//     });

//     $('.property-modal-btn').click(function() {
//         var modalIndex = $(this).attr('data-modal');
//         $('#property-modal .property-modal-item').fadeOut(0);
//         $('#property-modal').find(modalIndex).fadeIn(0);
//     });

//     $('.property-slider-two-close').click(function() {
//         $('.property-slider-two-container').fadeOut(300);
//     });
//     $('.property-slider-item').click(function() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//         $('.property-slider-two-container.property-image-container').fadeIn(300);
//         $('.property-slider-two-for.image').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-nav.image',
//             prevArrow: $('.property-slider-two-container-for-direction .left-arrow.image'),
//             nextArrow: $('.property-slider-two-container-for-direction .right-arrow.image'),
//         });
//         $('.property-slider-two-nav.image').slick({
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-for.image',
//             focusOnSelect: true,
//             vertical: true,
//             verticalSwiping: true,
//             prevArrow: $('.property-slider-two-nav-up-arrow.image'),
//             nextArrow: $('.property-slider-two-nav-down-arrow.image'),
//         });
//     });
//     $('.property-img').click(function() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//         $('.property-slider-two-container.property-video-container').fadeIn(300);
//         $('.property-slider-two-for.video').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-nav.video',
//             prevArrow: $('.property-slider-two-container-for-direction .left-arrow.video'),
//             nextArrow: $('.property-slider-two-container-for-direction .right-arrow.video'),
//         });
//         $('.property-slider-two-nav.video').slick({
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-for.video',
//             focusOnSelect: true,
//             vertical: true,
//             verticalSwiping: true,
//             prevArrow: $('.property-slider-two-nav-up-arrow.video'),
//             nextArrow: $('.property-slider-two-nav-down-arrow.video'),
//         });
//     });
//     $('.home-list-slider .home-list-item').click(function() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//         $('.property-slider-two-container.property-bedrooms-container').fadeIn(300);
//         $('.property-slider-two-for.bedrooms').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-nav.bedrooms',
//             prevArrow: $('.property-slider-two-container-for-direction .left-arrow.bedrooms'),
//             nextArrow: $('.property-slider-two-container-for-direction .right-arrow.bedrooms'),
//         });
//         $('.property-slider-two-nav.bedrooms').slick({
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-for.bedrooms',
//             focusOnSelect: true,
//             vertical: true,
//             verticalSwiping: true,
//             prevArrow: $('.property-slider-two-nav-up-arrow.bedrooms'),
//             nextArrow: $('.property-slider-two-nav-down-arrow.bedrooms'),
//         });
//     });

//     $('.property-video-container-btn').click(function() {
//         $('.property-image-container').fadeOut(100);
//         $('.property-bedrooms-container').fadeOut(100);
//         $('.property-video-container').fadeIn(300);
//         $('.property-slider-two-for.video').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-nav.video',
//             prevArrow: $('.property-slider-two-container-for-direction .left-arrow.video'),
//             nextArrow: $('.property-slider-two-container-for-direction .right-arrow.video'),
//         });
//         $('.property-slider-two-nav.video').slick({
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-for.video',
//             focusOnSelect: true,
//             vertical: true,
//             verticalSwiping: true,
//             prevArrow: $('.property-slider-two-nav-up-arrow.video'),
//             nextArrow: $('.property-slider-two-nav-down-arrow.video'),
//         });
//     });
//     $('.property-image-container-btn').click(function() {
//         $('.property-video-container').fadeOut(100);
//         $('.property-image-container').fadeIn(300);
//         $('.property-slider-two-for.image').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-nav.image',
//             prevArrow: $('.property-slider-two-container-for-direction .left-arrow.image'),
//             nextArrow: $('.property-slider-two-container-for-direction .right-arrow.image'),
//         });
//         $('.property-slider-two-nav.image').slick({
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             asNavFor: '.property-slider-two-for.image',
//             focusOnSelect: true,
//             vertical: true,
//             verticalSwiping: true,
//             prevArrow: $('.property-slider-two-nav-up-arrow.image'),
//             nextArrow: $('.property-slider-two-nav-down-arrow.image'),
//         });

//     });


//     var $status1 = $('.property-image-container .property-slider-two-number');
//     var $slickElement1 = $('.property-slider-two-for.image');

//     $slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $status1.text(i + '/' + slick.slideCount);
//     });

//     var $status2 = $('.property-video-container .property-slider-two-number');
//     var $slickElement2 = $('.property-slider-two-for.video');

//     $slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $status2.text(i + '/' + slick.slideCount);
//     });

//     var $status3 = $('.property-bedrooms-container .property-slider-two-number');
//     var $slickElement3 = $('.property-slider-two-for.bedrooms');

//     $slickElement3.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $status3.text(i + '/' + slick.slideCount);
//     });


//     $('.property-slider-item').hover(
//         function() {
//             $(this).find('.property-slider-item-object').fadeIn(200);
//         },
//         function() {
//             $(this).find('.property-slider-item-object').fadeOut(200);
//         }

//     );
//     $('.property-slider-two-select-header .property-slider-two-select-item, .property-slider-two-select .property-slider-two-select-arrow').click(function() {
//         $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header-footer').slideToggle(300);
//     });
//     $('.property-slider-two-select-header-footer .property-slider-two-select-item').on('click', function() {
//         var $this = $(this);
//         var $first = $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header .property-slider-two-select-item');
//         var firstHTML = $first.html();
//         $first.html($this.html());
//         $this.html(firstHTML);
//         $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header-footer ').slideUp(300);
//     });

//     $(document).click(function(event) {
//         if ($(event.target).closest(".property-slider-two-select-header-footer, .property-slider-two-select-header .property-slider-two-select-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
//         $(".property-slider-two-select-header-footer").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
//         event.stopPropagation();
//     });


//     var settScrollPosition = $('.settings-list').attr('data-scroll');
//     // $('.settings-list').animate({ scrollLeft: settScrollPosition }, 600);
//     $('.settings-list').scrollLeft(settScrollPosition);

//     $('.settings-change-link').click(function() {
//         var attr = $(this).closest('.settings-input-block').find('input').attr('disabled');
//         if (typeof attr !== typeof undefined && attr !== false) {
//             $(this).closest('.settings-input-block').find('input').removeAttr('disabled');
//             $(this).text('сохранить');
//         } else {
//             $(this).closest('.settings-input-block').find('input').attr('disabled', 'disabled');
//             $(this).text('изменить');
//         }
//         return false;

//     });
//     $('.description-lang-item').click(function() {
//         $('.description-lang-item').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.photo-mark-item').click(function() {
//         $(this).toggleClass('active');
//     });

//     $('.settings-add-block-btn a').click(function() {
//         var numbersRoom = $('.numbers-room').length;
//         $('.settings-inner').last().clone().appendTo('.settings-add-block-content');
//         $('.settings-add-block-content').css('margin-top', '30px');
//         $('.settings-inner').last().find('.numbers-room').text(numbersRoom + 1);
//         return false;


//     });
//     $('.settings-inner-trash').click(function() {
//         $(this).closest('.settings-inner').remove();
//     });

//     $('.verification-slider').slick({
//         centerMode: true,
//         centerPadding: '10%',
//         slidesToShow: 1,
//     });

//     $('.property-modal-reg-close').click(function() {
//         $(this).closest('.property-modal-reg').fadeOut(300);
//     });




// });


$(document).ready(function() {
    $('.header-search-icon').click(function() {
        $(this).closest('.header-search').find('.search-input').focus();
    });

    $('.bottom-menu-item').click(function() {
        $('.bottom-menu-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.menu-left-option-header').click(function() {
        $('.menu-left-option-header').not(this).removeClass('active');
        $('.menu-left-option').find('.menu-left-option-content').not($(this).closest('.menu-left-option').find('.menu-left-option-content')).slideUp(200);
        $(this).toggleClass('active');
        $(this).closest('.menu-left-option').find('.menu-left-option-content').slideToggle(200);
    });

    $('.header-bars').click(function() {
        $('.menu-block').fadeIn(300);
    });
    $('.menu-left-header-bars, .menu-block-shadow').click(function() {
        $('.menu-block').fadeOut(300);
    });

    $('.header-toggle-btn').click(function() {
        $(this).closest('.header-toggle').find('.header-toggle-block').slideToggle(300);
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".header-toggle-block, .header-toggle-btn, .select-block-footer, .select-block-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
        $(".header-toggle-block").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
        event.stopPropagation();
    });


    $('.select-block-header .select-block-item').click(function() {
        $('.select-block-footer').not($(this).closest('.select-block').find('.select-block-footer')).slideUp(300)
        $(this).closest('.select-block').find('.select-block-footer').slideToggle(300);
    });


    $('.select-block-footer .select-block-item_sorting').on('click', function() {
        var $this = $(this);
        var chosenType = $this.attr('data-value');
        var chosenP = $this.children('p').text();

        ko_model_searchForm.formData.sorting.label(chosenType);
        ko_model_searchForm.formData.sorting.text(chosenP);

        $(this).closest('.select-block').find('.select-block-footer').slideUp(300);
    });

    $('[data-attr-lang]').on('click', function() {
        var $this = $(this);
        var currency = $this.attr('data-attr-lang');

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            method: "POST",
            url: "/ajax/changeCurrency/" + currency,
        }).done(function(data) {
            console.log(data);
            $(this).closest('.select-block').find('.select-block-footer').slideUp(300);
        });

        if (
            (ko_model_searchForm !== null) &&
            (typeof ko_model_searchForm !== undefined) &&
            (typeof ko_model_searchForm.formData !== undefined) &&
            (typeof ko_model_searchForm.formData.currency !== undefined) &&
            (typeof ko_model_searchForm.formData.currency.name !== undefined)
        ) {
            ko_model_searchForm.formData.currency.name(currency)
        }

    });

    $('.select-block-footer .select-block-item_language').on('click', function() {
        var $this = $(this);
        var $firstHTML = $(this).closest('.select-block').find('.select-block-header .select-block-item_language');
        var firstIcon = $firstHTML.children('.select-block-item-icon');
        var chosenIcon = $this.children('.select-block-item-icon');
        var firstP = $firstHTML.children('.select-block-item-title');
        var chosenP = $this.children('.select-block-item-title');
        var headerIcon = $('.header-language-icon');
        var langAttr = $this[0].getAttribute('data-attr');
        var path = document.location.pathname.split('/');
        var redirectLink = null;

        firstP[0].innerText = chosenP[0].innerText;
        firstIcon[0].innerHTML = chosenIcon[0].innerHTML;
        headerIcon[0].innerHTML = chosenIcon[0].innerHTML;

        $(this).closest('.select-block').find('.select-block-footer').slideUp(300);

        if (typeof(path[1]) != "undefined" && path[1] !== null && (path[1] === 'ru' || path[1] === 'en' || path[1] === 'hy')) {
            if (path[1] !== langAttr) {
                redirectLink = '/' + langAttr;
                for (let i = 2; i < path.length; i++) {
                    redirectLink = redirectLink + '/' + path[i];
                }
            }
        } else {
            redirectLink = '/' + langAttr + document.location.pathname;
        }

        if (redirectLink !== null) {
            window.location.href = document.location.protocol + '//' + document.location.host + redirectLink + document.location.search;
        }

    });

    $(document).click(function(event) {
        if ($(event.target).closest(".select-block-footer, .select-block-header .select-block-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
        $(".select-block-footer").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
        event.stopPropagation();
    });

    $('.home-left-filter-header').click(function() {
        $(this).closest('.home-left-filter').find('.home-left-filter-footer').slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.more-btn').click(function() {
        $(this).closest('.more-block').find('.more-content').slideToggle(300);
        $(this).toggleClass('active');
    });


    $('.numbers-minus').click(function() {
        var changeVal = $(this).closest('.numbers').find('input').val();
        if (changeVal == 0) {

        } else {
            $(this).closest('.numbers').find('input').val(changeVal - 1);
        }
    });
    $('.numbers-plus').click(function() {
        var changeVal = $(this).closest('.numbers').find('input').val();
        if (changeVal == 99) {

        } else {
            $(this).closest('.numbers').find('input').val(changeVal = changeVal * 1 + 1);
        }

    });


    $('.home-content-filter-item').click(function() {
        var homeFilterId = $(this).index();
        $('.filter-modal .filter-modal-item').fadeOut(0);
        $('.filter-modal .filter-modal-item').eq(homeFilterId).fadeIn(0);
    });


    $("#filter-polzunok").slider({
        animate: "slow",
        range: true,
        min: 10000,
        max: 300000,
        values: [0, 250000],
        slide: function(event, ui) {
            $(".filter-res-one").text(ui.values[0]);
            $(".filter-res-two").text(ui.values[1]);
        }
    });
    $(".filter-res-one").text($("#filter-polzunok").slider("values", 0));
    $(".filter-res-two").text($("#filter-polzunok").slider("values", 1));
    $('.home-tab-item').fadeOut(100);


    // $('.home-content-sort-select-item').click(function() {
    //     var elementId = $(this).index();
    //     $('.home-content-sort-select-item').removeClass('active');
    //     $(this).addClass('active');
    //     $('.home-row').removeClass('active');
    //     $('.home-row').eq(elementId).addClass('active');
    // });

    $('#home-row-grid').click(function() {
        $('.home-content-sort-select-item').removeClass('active');
        $(this).addClass('active');
        $('.home-row').removeClass('home-row-list');
        $('.home-row').addClass('home-row-grid');
    });

    $('#home-row-list').click(function() {
        $('.home-content-sort-select-item').removeClass('active');
        $(this).addClass('active');
        $('.home-row').removeClass('home-row-grid');
        $('.home-row').addClass('home-row-list');
    });

    $('.home-slider-block-hearth').click(function() {
        var $this = $(this);
        var propId = $this[0].getAttribute('data-id');
        var allWithThisId = $('[data-id=' + propId + ']');

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            method: "POST",
            url: "/ajax/clickWishlist/" + propId,
        }).done(function(data) {
            allWithThisId.find('img').slideToggle(0);
            console.log(data);
        });
    });

    window.onload = function() {

        var scr = $(".home-list, .property-teg, .property-review, .settings-list");

        scr.mousedown(function() {
            var startX = this.scrollLeft + event.pageX;
            var startY = this.scrollTop + event.pageY;
            scr.mousemove(function() {
                this.scrollLeft = startX - event.pageX;
                this.scrollTop = startY - event.pageY;
                return false;
            });
        });
        $(window).mouseup(function() {
            scr.off("mousemove");
        });
    }

    $('.home-list-container-btn').click(function() {
        $(this).closest('.home-list-container').find('.home-list').animate({ scrollLeft: 1000 }, 600);

    });



    $('.slick-dots button').mouseenter(function(e) {
        var btn = $(this);
        btn[0].click();
    });








    $('.filter-check-block').click(function() {
        var checkAttr = $(this).find('input[type="checkbox"]');
        if (checkAttr.prop("checked")) {
            $(this).find('input[type="checkbox"]').attr('checked', false);
        } else {
            $(this).find('input[type="checkbox"]').attr('checked', true);
        }



    });


    $('.sign-in-input-block-password-icon-off').click(function() {
        $(this).closest('.sign-in-input-block-password').find('input').attr('type', 'text');
        $(this).closest('.sign-in-input-block-password-icon').find('img').slideToggle(0);
    });
    $('.sign-in-input-block-password-icon-on').click(function() {
        $(this).closest('.sign-in-input-block-password').find('input').attr('type', 'password');
        $(this).closest('.sign-in-input-block-password-icon').find('img').slideToggle(0);
    });


    (function($) {
        $.fn.HvrSlider = function() {
            return this.each(function() {
                var el = $(this);
                if (el.find('.images-item').length > 1) {
                    var hvr = $('<div>', {
                        class: 'hvr',
                        append: [
                            $('<div>', {
                                class: 'hvr__images',
                                append: $('<div>', {
                                    class: 'hvr__sectors',
                                }),
                            }),
                            $('<div>', {
                                class: 'hvr__dots',
                            }),
                        ],
                        insertAfter: el,
                        prepend: el,
                    });
                    var hvrImages = $('.hvr__images', hvr);
                    var hvrImage = $('.images-item', hvr);
                    var hvrSectors = $('.hvr__sectors', hvr);
                    var hvrDots = $('.hvr__dots', hvr);
                    el.prependTo(hvrImages);
                    hvrImage.each(function() {
                        hvrSectors.prepend('<div class="hvr__sector"></div>');
                        hvrDots.append('<div class="hvr__dot"></div>');
                    });
                    $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
                    var setActiveEl = function(el) {
                        hvrImage.hide().eq(el.index()).show();
                        $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
                    };
                    $('.hvr__sector', hvrSectors).hover(function() {
                        setActiveEl($(this));
                    });
                    hvrSectors.on('touchmove', function(e) {
                        var position = e.originalEvent.changedTouches[0];
                        var target = document.elementFromPoint(position.clientX, position.clientY);
                        if ($(target).is('.hvr__sector')) {
                            setActiveEl($(target));
                        }
                    });
                }
            });
        };
    })(jQuery);
    




    const mediaQuery = window.matchMedia('(max-width: 5000px) and (min-width: 574px)')

    function handleTabletChange(e) {
        if (e.matches) {
            $('.images').HvrSlider();
            $('.home-slider-block.first .images').slick('unslick');
            $('.home-slider-block.second .images').slick('unslick');
            $('.home-slider-block.third .images').slick('unslick');
            $('.home-slider-block.fourth .images').slick('unslick');
        } else {
            $('.home-slider-block.first .images').slick({
                dots: true,
                prevArrow: $('.home-slider-block.first .left-arrow'),
                nextArrow: $('.home-slider-block.first .right-arrow'),

            });
            $('.home-slider-block.first .images').slick('setPosition');
            $('.home-slider-block.second .images').slick({
                dots: true,
                prevArrow: $('.home-slider-block.second .left-arrow'),
                nextArrow: $('.home-slider-block.second .right-arrow'),

            });
            $('.home-slider-block.second .images').slick('setPosition');
            $('.home-slider-block.third .images').slick({
                dots: true,
                prevArrow: $('.home-slider-block.third .left-arrow'),
                nextArrow: $('.home-slider-block.third .right-arrow'),

            });
            $('.home-slider-block.third .images').slick('setPosition');
            $('.home-slider-block.fourth .images').slick({
                dots: true,
                prevArrow: $('.home-slider-block.fourth .left-arrow'),
                nextArrow: $('.home-slider-block.fourth .right-arrow'),

            });
            $('.home-slider-block.fourth .images').slick('setPosition');
        }
    }
    mediaQuery.addListener(handleTabletChange)
    handleTabletChange(mediaQuery)












    $('.favorite-slider').slick({
        dots: true,
        // prevArrow: $('.home-slider-block.second .left-arrow'),
        // nextArrow: $('.home-slider-block.second .right-arrow'),
    });
    $('.favorite-slider-block-btn').click(function() {
        $(this).closest('.favorite-block-row-item').fadeOut(100);
    });
    $('.property-slider').slick({
        centerMode: true,
        centerPadding: '33.33%',
        slidesToShow: 1,
        prevArrow: $('.property-slider-direction .left-arrow'),
        nextArrow: $('.property-slider-direction .right-arrow'),
        responsive: [{
                breakpoint: 1670,
                settings: {
                    centerPadding: '30%',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '25%',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '20%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 574,
                settings: {
                    centerPadding: '5%',
                }
            }
        ]

    });

    var $status = $('.property-slider-number span');
    var $slickElement = $('.property-slider, .verification-slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.property-toggle-block-header').click(function() {
        $(this).closest('.property-toggle-block').find('.property-toggle-block-content').fadeToggle(300);
        $(this).closest('.property-toggle-block').find('.property-toggle-block-header-icon').toggleClass('active');
    });

    $('.property-modal-btn').click(function() {
        var modalIndex = $(this).attr('data-modal');
        $('#property-modal .property-modal-item').fadeOut(0);
        $('#property-modal').find(modalIndex).fadeIn(0);
    });

    $('.property-slider-two-close').click(function() {
        $('.property-slider-two-container').fadeOut(300);
    });

    $('.property-slider-item').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.property-slider-two-container.property-image-container').fadeIn(300);
        $('.property-slider-two-container.property-image-container .property-slider-two-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-container.property-image-container .property-slider-two-nav',
            prevArrow: $('.property-slider-two-container.property-image-container .property-slider-two-container-for-direction .left-arrow'),
            nextArrow: $('.property-slider-two-container.property-image-container .property-slider-two-container-for-direction .right-arrow'),
        });
        $('.property-slider-two-container.property-image-container .property-slider-two-nav').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-container.property-image-container .property-slider-two-for',
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.property-slider-two-container.property-image-container .property-slider-two-nav-up-arrow'),
            nextArrow: $('.property-slider-two-container.property-image-container .property-slider-two-nav-down-arrow'),
        });
    });

    $('.property-img').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.property-slider-two-container.property-video-container').fadeIn(300);
        $('.property-slider-two-for.video').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-nav.video',
            prevArrow: $('.property-slider-two-container-for-direction .left-arrow.video'),
            nextArrow: $('.property-slider-two-container-for-direction .right-arrow.video'),
        });
        $('.property-slider-two-nav.video').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-for.video',
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.property-slider-two-nav-up-arrow.video'),
            nextArrow: $('.property-slider-two-nav-down-arrow.video'),
        });
    });

    $('.home-list-slider .home-list-item').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.property-slider-two-container.property-bedrooms-container').fadeIn(300);
        $('.property-slider-two-for.bedrooms').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-nav.bedrooms',
            prevArrow: $('.property-slider-two-container-for-direction .left-arrow.bedrooms'),
            nextArrow: $('.property-slider-two-container-for-direction .right-arrow.bedrooms'),
        });
        $('.property-slider-two-nav.bedrooms').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-for.bedrooms',
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.property-slider-two-nav-up-arrow.bedrooms'),
            nextArrow: $('.property-slider-two-nav-down-arrow.bedrooms'),
        });
    });

    $('.property-video-container-btn').click(function() {
        $('.property-image-container').fadeOut(100);
        $('.property-bedrooms-container').fadeOut(100);
        $('.property-video-container').fadeIn(300);
        $('.property-slider-two-for.video').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-nav.video',
            prevArrow: $('.property-slider-two-container-for-direction .left-arrow.video'),
            nextArrow: $('.property-slider-two-container-for-direction .right-arrow.video'),
        });
        $('.property-slider-two-nav.video').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-for.video',
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.property-slider-two-nav-up-arrow.video'),
            nextArrow: $('.property-slider-two-nav-down-arrow.video'),
        });
    });

    $('.property-image-container-btn').click(function() {
        $('.property-slider-two-container.property-video-container').fadeOut(100);
        $('.property-slider-two-container.property-image-container').fadeIn(300);
        $('.property-slider-two-container.property-image-container .property-slider-two-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-container.property-image-container .property-slider-two-nav',
            prevArrow: $('.property-slider-two-container.property-image-container .property-slider-two-container-for-direction .left-arrow'),
            nextArrow: $('.property-slider-two-container.property-image-container .property-slider-two-container-for-direction .right-arrow'),
        });
        $('.property-slider-two-container.property-image-container .property-slider-two-nav').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.property-slider-two-container.property-image-container .property-slider-two-for',
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.property-slider-two-container.property-image-container .property-slider-two-nav-up-arrow'),
            nextArrow: $('.property-slider-two-container.property-image-container .property-slider-two-nav-down-arrow'),
        });

    });


    var $status1 = $('.property-image-container .property-slider-two-number');
    var $slickElement1 = $('.property-slider-two-container.property-image-container .property-slider-two-for');

    $slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status1.text(i + '/' + slick.slideCount);
    });

    var $status2 = $('.property-video-container .property-slider-two-number');
    var $slickElement2 = $('.property-slider-two-for.video');

    $slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status2.text(i + '/' + slick.slideCount);
    });

    var $status3 = $('.property-bedrooms-container .property-slider-two-number');
    var $slickElement3 = $('.property-slider-two-for.bedrooms');

    $slickElement3.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status3.text(i + '/' + slick.slideCount);
    });


    $('.property-slider-item').hover(
        function() {
            $(this).find('.property-slider-item-object').fadeIn(200);
        },
        function() {
            $(this).find('.property-slider-item-object').fadeOut(200);
        }

    );
    $('.property-slider-two-select-header .property-slider-two-select-item, .property-slider-two-select .property-slider-two-select-arrow').click(function() {
        $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header-footer').slideToggle(300);
    });
    $('.property-slider-two-select-header-footer .property-slider-two-select-item').on('click', function() {
        var $this = $(this);
        var $first = $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header .property-slider-two-select-item');
        var firstHTML = $first.html();
        $first.html($this.html());
        $this.html(firstHTML);
        $(this).closest('.property-slider-two-select').find('.property-slider-two-select-header-footer ').slideUp(300);
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".property-slider-two-select-header-footer, .property-slider-two-select-header .property-slider-two-select-item").length) return; //при клике на эти блоки не скрывать .display_settings_content
        $(".property-slider-two-select-header-footer").hide(); //скрываем .display_settings_content при клике вне .display_settings_content
        event.stopPropagation();
    });


    var settScrollPosition = $('.settings-list').attr('data-scroll');
    // $('.settings-list').animate({ scrollLeft: settScrollPosition }, 600);
    $('.settings-list').scrollLeft(settScrollPosition);

    $('.settings-change-link').click(function() {
        var attr = $(this).closest('.settings-input-block').find('input').attr('disabled');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).closest('.settings-input-block').find('input').removeAttr('disabled');
            $(this).text('сохранить');
        } else {
            $(this).closest('.settings-input-block').find('input').attr('disabled', 'disabled');
            $(this).text('изменить');
        }
        return false;

    });
    $('.description-lang-item').click(function() {
        $('.description-lang-item').removeClass('active');
        $(this).addClass('active');
    });
    $('.photo-mark-item').click(function() {
        $(this).toggleClass('active');
    });

    $('.settings-add-block-btn a').click(function() {
        var numbersRoom = $('.numbers-room').length;
        $('.settings-inner').last().clone().appendTo('.settings-add-block-content');
        $('.settings-add-block-content').css('margin-top', '30px');
        $('.settings-inner').last().find('.numbers-room').text(numbersRoom + 1);
        return false;


    });
    $('.settings-inner-trash').click(function() {
        $(this).closest('.settings-inner').remove();
    });

    $('.verification-slider').slick({
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
    });

    $('.property-modal-reg-close').click(function() {
        $(this).closest('.property-modal-reg').fadeOut(300);
    });
    $('.property-left-btn').click(function() {
        $(this).closest('.property-left-hide-text').find('.property-left-slogan').toggleClass('active');
    });




});