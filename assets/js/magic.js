$("#hello").hide();
$("#follow").hide();
$(".footer").hide();

$("#about").on("click", function() {
    $("#hello").show();
    $("#follow").hide();
    $(".footer").show();

    $.get("about.html", function(data) {
        $("#content").html(data);
    });
});

$("#port-gallery").on("click", function() {
    $("#hello").hide();
    $("#follow").hide();
    $(".footer").hide();

    $.get("gallery.html", function(data) {
        $("#content").html(data);
    });
});

$("#gallery-design").on("click", function() {
    $("#hello").hide();
    $("#follow").hide();
    $(".footer").hide();

    $.get("gallery-design.html", function(data) {
        $("#content").html(data);
    });
});