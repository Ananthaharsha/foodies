s(document).ready(function ($){
    "use strict";
     
    WebGLSampler.registerPlugin(ScrollTigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        tigger: "boby",
        start : "30px top",
        end : "bottom bottom",

        onEnter : () => myFunction(),
        onLeaveBack : () => myFunction(),
    });

    function myFunction(){
        elementFirst.classList.toggle('stricky_head');
    }
})