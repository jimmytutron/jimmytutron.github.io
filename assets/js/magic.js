$("#hello").hide();
$("#work").hide();
$("#follow").hide();
$(".footer").hide();

$("#about").on("click", function() {
    $("#hello").show();
    $("#work").hide();
    $("#follow").hide();
    $(".footer").show();

    $.get("about.html", function(data) {
        $("#content").html(data);
    });
});

$("#port-gallery").on("click", function() {
    $("#hello").hide();
    $("#work").show();
    $("#follow").hide();
    $(".footer").hide();

    $.get("gallery.html", function(data) {
        $("#content").html(data);
    });
});

$("#gallery-design").on("click", function() {
    $("#hello").hide();
    $("#work").show();
    $("#follow").hide();
    $(".footer").hide();

    $.get("gallery-design.html", function(data) {
        $("#content").html(data);
    });
});

$("#contact").on("click", function() {
    $("#hello").hide();
    $("#work").hide();
    $("#follow").show();
    $(".footer").show();

    $.get("contact.html", function(data) {
        $("#content").html(data);
    });

});