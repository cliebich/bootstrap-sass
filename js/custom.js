$(document).ready(function () {
    $('.dropdown-toggle').dropdownHover();

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});