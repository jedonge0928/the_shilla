$(document).ready(function () {
    $('.sub_mn_area').hide();
    var state = true;
    console.log(state);



    $("#menu").mouseenter(function () {
        if (state == true) {
            state = false;
            $(".sub_mn_area")
                .show()
                .css({ height: 0 })
                .animate({ height: "200px" });
        }
        console.log(state);

    });


    $(".sub_mn_area").mouseleave(function () {
        state = true;
        $(this)
            .css({ height: "200px" })
            .animate({ height: "0px" });
    });

})