if ($(".text-slider").length==1) {
    var typed_strings = $(".text-slider-items").text();
    
    setTimeout(function(){
    var typed = new Typed(".text-slider", {
        
        strings: typed_strings.split(", "),
        typeSpeed: 100,
       
        
    })},1500);
}

