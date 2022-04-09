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

$('.header-toggle-btn').click(function(){
    $(this).closest('.header-toggle').find('.header-toggle-block').slideToggle(300);
});
jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header-toggle-block"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.fadeOut(300); // скрываем его
    }
  });
});



$('.select-block-header .select-block-item').click(function(){
    $('.select-block-footer').not($(this).closest('.select-block').find('.select-block-footer')).slideUp(300)
    $(this).closest('.select-block').find('.select-block-footer').slideToggle(300);
});
$('.select-block-footer .select-block-item').on('click', function(){
  $(this).closest('.select-block').find('.select-block-footer').slideUp(300);
});



