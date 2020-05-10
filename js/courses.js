$(document).ready(() => {

    var androidSelected = 0;
    var pythonSelected = 0;
    $(".android_details").click(() => {
        window.location.assign("https://wiztute.com/android.html");
    })
    $(".python_details").click(() => {
        window.location.assign("https://wiztute.com/python-ds.html");
    })

    $("#register-student").click(() => {
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var city = $("#city").val();

        //Check for the courses
        console.log("Result : ", $("#android_check").prop("checked"))
        if ($("#android_check").prop("checked") == true) {
            androidSelected = 1;
        } else {
            androidSelected = 0;
        }
        if ($("#python_check").prop("checked") == true) {
            pythonSelected = 1;
        } else {
            pythonSelected = 0;
        }

        console.log("Android : " + androidSelected)
        console.log("Python : " + pythonSelected)

        if (androidSelected == 0 && pythonSelected == 0) {
            alert("Please select atleast one course");
        } else if (name == "" || mobile == "" || email == "" || city == "") {
            alert("Please provide all the details");
        } else if (isNaN(mobile) || mobile.length != 10) {
            alert("Mobile number is not valid");
        } else if (!checkEmail(email)) {
            alert("Email ID is not valid");
        } else {
            var courseSelected = -1;
            if (androidSelected == 1 && pythonSelected == 1) {
                courseSelected = 3
            } else if (androidSelected == 1) {
                courseSelected = 1
            } else if (pythonSelected == 1) {
                courseSelected = 2
            }
            $("#register-student").css("display", "none");
            $("#my_spinner").css("display", "block");
            $.post("https://wiztech.co.in:8080/learner/register_user/",
                {
                    name: name,
                    email: email,
                    mobile: mobile,
                    city: city,
                    course: courseSelected
                },
                function (data, status) {
                    console.log(data.status)
                    if (data.status == 1) {
                        $("#register-student").css("display", "block");
                        $("#my_spinner").css("display", "none");
                        $("#data_field_block").css("display", "none");
                        $("#message_block").css("display", "block");
                        $("#error_block").css("display", "none");
                    } else {
                        $("#register-student").css("display", "block");
                        $("#my_spinner").css("display", "none");
                        $("#error_block").css("display", "block");
                    }
                });
        }

    })

    $("#register-company").click(() => {
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var city = $("#city").val();

        if (name == "" || mobile == "" || email == "" || city == "") {
            alert("Please provide all the details");
        } else if (isNaN(mobile) || mobile.length != 10) {
            alert("Mobile number is not valid");
        } else if (!checkEmail(email)) {
            alert("Email ID is not valid");
        } else {
            $("#register-student").css("display", "none");
            $("#my_spinner").css("display", "block");
            $.post("https://wiztech.co.in:8080/learner/register_user/",
                {
                    name: name,
                    email: email,
                    mobile: mobile,
                    city: city,
                },
                function (data, status) {
                    if (data.status == 1) {
                        $("#register-student").css("display", "block");
                        $("#my_spinner").css("display", "none");
                        $("#data_field_block").css("display", "none");
                        $("#message_block").css("display", "block");
                        $("#error_block").css("display", "none");
                    } else {
                        $("#register-student").css("display", "block");
                        $("#my_spinner").css("display", "none");
                        $("#error_block").css("display", "block");
                    }
                });
        }

    })

    function checkEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})