$('.question').click(function(){       
    $(this).next('.answer').slideToggle(300);
    $(this).next('.answer').siblings('.answer').slideUp(300);
    $(this).children('.btn-img').toggleClass('on');

    console.log($(this).next('.answer').siblings('.answer'));
})
