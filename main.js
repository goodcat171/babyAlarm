$(document).ready(function(){
    $("#baby").click(function(){
        $("#alarm").slideToggle(500)
    })
})


function timer(){

 var obj=document.getElementById('timer_inp');
    

 obj.innerHTML--;
    
 if(obj.innerHTML==0){
     $("#alarm").css("display","none");
     $("#alarm2").slideToggle(500)
      timer2();
    obj.innerHTML=10;
}

 else{setTimeout(timer,1000);}
    

}

//setTimeout(timer,1000);

function timer2(){

 var obj=document.getElementById('timer_inp2');
    

 obj.innerHTML--;
    
 if(obj.innerHTML==0){
     $("#alarm2").css("display","none");
     $("#alarm3").slideToggle(500)
    obj.innerHTML=10;}

 else{setTimeout(timer2,1000);}
    

}

 



