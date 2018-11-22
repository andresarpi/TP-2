const imgs = ['imagenes/alce.jpg', 'imagenes/epelante.jpg', 'imagenes/nena.jpg', 'imagenes/peces.jpg',
    'imagenes/unichancho.jpg', 'imagenes/zapas.jpg', 'imagenes/alce.jpg', 'imagenes/epelante.jpg', 'imagenes/nena.jpg',
    'imagenes/peces.jpg', 'imagenes/unichancho.jpg', 'imagenes/zapas.jpg']

const defaultImage = 'imagenes/tapada.jpg'


$('.levels').on('click', function () {
    var input = $('#name')
    if (input.val() == '') {
        $('.ups').html('Ups! Para avanzar necesitas poner un nombre');
        $('.ups').show()
        setTimeout(function () {
            $('.ups').fadeOut()
        }, 3000);

    } else {
        $('.ups').html('')
        $('section').removeClass('hide')
        $('.welcomeForm').addClass('hide')
    }
    var name = $('#name').val()
    $('.hola').append(name)
})

var dificultad 
$('#level1').on('click',function(){
    dificultad = 18
    $('.dificultnum').html(dificultad)
})
$('#level2').on('click',function(){
    dificultad = 12
    $('.dificultnum').html(dificultad)
})
$('#level3').on('click',function(){
    dificultad = 9
    $('.dificultnum').html(dificultad)
})


imgs.sort(function (a, b) {
    return Math.random() - 0.5
})


for (var i = 0; i < imgs.length; i++) {
    $('.pieza').eq(i).attr('data-img', imgs[i]).attr('id', 'img-'+i)
}

$('.pieza').on('click', function () {
    var visible = $(this).attr('data-img')
    $(this).attr('src', visible)
})




var attempts = 0
var points = 0
var clicks = 0
var firstImage = null
var firstId = null

$('img').on('click', function (){
    clicks++

    if (clicks == 1) {
        firstImage = $(this).attr('data-img')
        firstId = $(this).attr('id')
    } else {
        secondImage = $(this).attr('data-img')
        if (firstImage == secondImage){
            points++
            $(this).attr('class', 'correct').unbind('click')
            $('#'+ firstId).attr('class','correct').unbind('click')

        }else{
            secondId = $(this).attr('id')
            setTimeout(function () {
                $('#' + secondId).attr('src',defaultImage)
                $('#' + firstId).attr('src', defaultImage) 
            }, 1000);
                       
        }
        attempts++
        clicks = 0
    }
    console.log(attempts)
    $('#contAttempts').html(attempts)
})

