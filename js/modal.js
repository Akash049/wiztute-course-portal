var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var submit = document.getElementById("submit-details");


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

submit.onclick = function() {
    var mailString;
    var wrong = false;
    function updateMailString() {

        var name = $('#name').val();
        var phone = $('#phone').val()
        var email =  $('#emailaddress').val()
        if (name == null || name == "") {
            nameError = "Please enter your name";
            wrong = true;
            document.getElementById("name_error").innerHTML = nameError; 
            // return false;
        } else {
            document.getElementById("name_error").innerHTML = ""; 
        }

        if(phone.length !== 10 || !(/^([0-9]+)$/.test(phone))) {
            nameError = "Invalid phone number";
            wrong = true;
            document.getElementById("phone_error").innerHTML = nameError; 
        } else {
            document.getElementById("phone_error").innerHTML = ""; 

        }

        if(!(/^([a-zA-Z0-9_\-\.]+)\@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email))){
            nameError = "Invalid email";
            wrong = true;
            document.getElementById("email_error").innerHTML = nameError; 
        } else {
            document.getElementById("email_error").innerHTML = ""; 
        }
        if(!wrong) {
            mailString = '?subject=' + encodeURIComponent($('#name').val())
                      + '&body=' + encodeURIComponent($('#emailaddress').val());

                    
            $(location).attr('action',  'mailto:vishnu@wiztute.com' + mailString);



            var data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('mobile', phone);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://backend.wiztute.com:8080/api/landing_query/', true);
            xhr.onload = function () {
                // do something to response
                console.log(this.responseText);
                if(xhr.status === 200) {
                    if(localStorage.getItem('key') !== undefined && localStorage.getItem('value') !== undefined) {
                        if(localStorage.getItem('key')%2===1){
                            modal.style.display = "none";
                            var object = {value: true, timestamp: new Date().getTime()}
                            localStorage.setItem("contacted", JSON.stringify(object));
                            $('.content-description').show(); 
                            $(location).attr('href', localStorage.getItem('value'))
                        }
                        else {
                            modal.style.display = "none";
                            var object = {value: true, timestamp: new Date().getTime()}
                            localStorage.setItem("contacted", JSON.stringify(object));
                            $('.content-description').show();
                            document.getElementsByClassName('course-price')[localStorage.getItem('key')/2-1].innerHTML =  localStorage.getItem('value');
                            document.getElementsByClassName('course-price')[localStorage.getItem('key')/2-1].classList.remove('button-for-detail');
                        }
                    }
                }
            };
            xhr.send(data);
            console.log("asdfasdfakjshfaskdfna sd",xhr.status)

             
        }
    }
    updateMailString();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
