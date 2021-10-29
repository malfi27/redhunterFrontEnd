//Scroled Navbar
$(document).scroll(function(){
    $('nav').toggleClass('onScrolled', $(this).scrollTop() > 20);
});
//End Scroled Navbar