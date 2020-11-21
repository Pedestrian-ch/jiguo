require.config({
    paths:{
        "jquery" : "jquery-3.5.1",
        "slide" : "slide"
    },
    shim:{
        "parabola" : {
            exports : "_",
        }
    }
})

require(["slide"], function (slide){
    slide.carousel();
})