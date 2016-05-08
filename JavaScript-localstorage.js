$(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        localStorage.setItem('lastTab', $(this).attr('href'));
        var lastTab = localStorage.getItem('lastTab');
        $(".goToLink").removeClass('disabled');
        $("a.goToLink[href='" + lastTab + "']").addClass('disabled');

        var head = $("#head");
        //var navbar = $(".navbar");
        //var comLogo = $(".company-logo");

        head.removeClass("mcguff-main mcguff-noanim mcguff-company mcguff-compounding");
        //navbar.removeClass("navbar-family navbar-company navbar-compounding");
        //comLogo.removeClass("logo-family logo-company logo-compounding");

        if (lastTab == "#family") {
            head.addClass("mcguff-main");
            //navbar.addClass("navbar-family");
            //comLogo.addClass("logo-family");
        } else if (lastTab == "#company") {
            head.addClass("mcguff-company");
            //navbar.addClass("navbar-company");
            //comLogo.addClass("logo-company");
        } else if (lastTab == "#compounding") {
            head.addClass("mcguff-compounding");
            //navbar.addClass("navbar-compounding");
            //comLogo.addClass("logo-compounding");
        }
    });

    // go to the latest tab, if it exists:
    var lastTab = localStorage.getItem('lastTab');
    if (lastTab) {
        $('[href="' + lastTab + '"]').tab('show');
    }
});
// make nav links trigger tabs
$(".goToLink").click(function () {
    addEventListener('click', function (ev) {  //stops # from being added to url
        if (ev.target.classList.contains('goToLink')) {
            ev.preventDefault();
            //loadWithAjax(ev.target.href); // had error when using fast async script loading
        }
    });
    localStorage.setItem('lastTab', $(this).attr('href'));
    if ($(".homepage-flag").length == 0) {
        window.location.href = "/";
    } else {
        if ($('.navbar-collapse').hasClass("navbar-collapse collapse in")) { // remove second collapse for mcguff
            $('.navbar-collapse').collapse('hide');
        }
        var lastTab = localStorage.getItem('lastTab');
        if (lastTab) {
            $("#myTab a[href=" + lastTab + "]").tab('show');
        }
    }
});

// use these links for nav
//<li><a href="#family" class="goToLink">Family</a></li>
//<li><a href="#company" class="goToLink">Company</a></li>
//<li><a href="#compounding" class="goToLink">Compounding</a></li>