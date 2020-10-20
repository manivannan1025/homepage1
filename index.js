window.addEventListener('scroll',function(){
    var header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});

function togglemenu(){
    var menutoggle=document.querySelector('.menutoggle');
    var navbar=document.querySelector('.nav-bar');
    navbar.classList.toggle('active'); 
    menutoggle.classList.toggle('active');
}