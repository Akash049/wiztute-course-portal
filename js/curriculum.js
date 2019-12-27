const off20 = "https://www.instamojo.com/@Wiztute_eLearning/l5926d3eeda4d413db7676dfaac030397/";
const off10 = "https://www.instamojo.com/@Wiztute_eLearning/lb0a7a92a355844f8a362dd0dec5aea47/"
$("#apply-coupon-text").click(()=>{
    $(".coupon-input-box").show()
    $("#apply-coupon-text").hide();
    $(".pay-button-full").hide();
    $(".pay-button-off10").hide();
    $(".pay-button-off20").hide();
})
$("#apply-coupon").click(()=>{
    let coupon = $("#coupon-value").val();
    if(coupon == "STDEV436824"){
        $("#amount-value").text("₹ 54,000 (10% off)");
        $(".coupon-input-box").hide()
        $("#apply-coupon-text").show();
        $(".pay-button-off10").show();
    }else if(coupon == "STDEV415705"){
        $("#amount-value").text("₹ 48,000 (20% off)");
        $(".coupon-input-box").hide()
        $("#apply-coupon-text").show();
        $(".pay-button-off20").show();
    }else{
        $("#amount-value").text("₹ 60,000");
        $(".coupon-input-box").hide()
        $("#apply-coupon-text").show();
        $(".pay-button-full").show();
    }
})
$(window).on('load', function() {
    var object = JSON.parse(localStorage.getItem("contacted")),
        contacted = object.value;
    if(contacted) 
        $('.content-description').show();
    else {
        $('.content-description').hide();
        let x = document.getElementById('myModal');
        x.style.display = "block";
    }
});

$(window).on('click', function() {
    var object = JSON.parse(localStorage.getItem("contacted")),
        contacted = object.value;
    if(!contacted) {
        let x = document.getElementById('myModal');
        x.style.display = "block";
    }
});