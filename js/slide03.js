$(function () {
    $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_in')
    },3000)

    $('#room_menu li').mouseenter(function () {
        $('#room_menu li').removeClass('on')
        $(this).addClass('on')
    })
})