require.config({
    paths: {
        "jquery" : "jquery-3.5.1",
        "slide" : "slide",
        "load" : "load",
        "back" : "back"
    },
    shim: {
        "parabola" : {
            exports : "_",
        }
    }
})

require([
    "slide",
    "load",
    "back"
], function (slide, load, back){
    slide.next(),
    slide.prev(),
    slide.carousel();

    load.loading();

    back.back();
})