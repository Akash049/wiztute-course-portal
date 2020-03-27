$(document).ready(()=>{
    
    $("#register-student").click(()=>{
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var city = $("#city").val();

        if( name == "" || mobile == "" || email == "" || city == "" ){
            alert("Please provide all the details");
        }else if(isNaN(mobile)){
            alert("Mobile number is not valid");
        }else if( !checkEmail(email) ){
            alert("Email ID is not valid");
        }else{
             $("#register-student").css("display", "none");
             $("#my_spinner").css("display", "block");
             $.post("https://student.wiztute.com:8080/learner/register_user/",
              {
                name: name,
                email: email,
                mobile : mobile,
                city : city
              },
              function(data, status){
                console.log(data.status)
                if(data.status == 1){
                    $("#register-student").css("display", "block");
                    $("#my_spinner").css("display", "none");
                    $("#data_field_block").css("display", "none");
                    $("#message_block").css("display", "block");
                    $("#error_block").css("display", "none");
                }else{
                    $("#register-student").css("display", "block");
                    $("#my_spinner").css("display", "none");
                    $("#error_block").css("display", "block");
                }
              });
         }
       
     })
     
     function checkEmail(email){
         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
     }
})