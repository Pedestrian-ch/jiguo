define([
    "jquery"
], function($) {
    function back(){
        $(body).scroll(function (){
            console.log($(this).scrollTop());
        })
    }

    return {
        back: back,
    }
});