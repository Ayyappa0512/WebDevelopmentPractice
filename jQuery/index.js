alert("In the js script");

//css 
//.css(propertyName, value), addclass('className'), removeClass()
$('h2').click(function (){
    $('h2').css("color", "green");
});

$('.style').click(function (){
    $('h1').addClass('title');
});

$('.remove').click(function (){
    $('h1').removeClass('title');
});

console.log($('.list'));
// $('.list').hide();
// $('.list').show();

//.text, .html
$('h1').click(function (){
    $('#search').val(' Hello!');
});

$('h1').click(function (){
    $('.link').attr("onClick", "window.location.href='https://www.google.com';");
});

$('.toggle').click(function (){
    $('.list').fadeToggle();
})

