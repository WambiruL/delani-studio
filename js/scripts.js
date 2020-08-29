$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggle img").toggle(1000);
       
    });
    $(".toggle").click(function(){
        $(".hidden").css("text-align", "center").css("font-size", "15px").toggle(1000);
    });


    $(".toggle-two").click(function(){
        $(".toggle-two img").toggle(1000);
    });
    $(".toggle-two").click(function(){
        $(".hidden-two").css("text-align","center").css("font-size","15px").toggle(1000);
    });
   

    $(".toggle-three").click(function(){
        $(".toggle-three img").toggle(1000);
    });
    $(".toggle-three").click(function(){
        $(".hidden-three").css("text-align","center").css("font-size", "15px").toggle(1000);
    });   

    $("form#contact-us").submit(function(event){
          event.PreventDefault();
               
    });
});

//Business logic
function validation(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if(name==""){
        alert("Please enter valid name");
    }else if(email.indexOf("@")== -1 || ""){
        alert("Please enter valid email");
    }else if(message==""){
        alert("Please enter message");
    }else{
        alert( name + " we have received your message. Thank you for reaching out to us.");
    };
};

function refreshPage(){
    window.location.reload;
};
