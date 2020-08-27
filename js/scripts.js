$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggle img").toggle(1000);
       
    });
    $(".toggle").click(function(){
        $(".hidden").css("text-align", "center").css("font-size", "10px").toggle(1000);
    });


    $(".toggle-two").click(function(){
        $(".toggle-two img").toggle(1000);
    })
    $(".toggle-two").click(function(){
        $(".hidden-two").css("text-align","center").css("font-size","10px").toggle(1000);
    })
   

    $(".toggle-three").click(function(){
        $(".toggle-three img").toggle(1000);
    })
    $(".toggle-three").click(function(){
        $(".hidden-three").css("text-align","center").css("font-size", "10px").toggle(1000);
    })
});