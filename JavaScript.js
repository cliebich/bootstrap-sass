$(document).ready(function () {
    // show active tab on reload
    if (location.hash !== '') $('a[href="' + location.hash + '"]').tab('show');
    else {
        $('a[href="#family"]').tab('show'); //  fix for jump to tab anchor by setting default tab
    } 

    // remember the hash in the URL without jumping
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if (history.pushState) {
            history.pushState(null, null, '#' + $(e.target).attr('href').substr(1));
            var tab = window.location.hash.substr(1);
            var head = $("#head");

            $(".goToLink").removeClass('disabled');
            $('.goToLink[data-tabname = ' + tab + ']').addClass('disabled');
            if (tab == "family") {
                head.addClass("mcguff-main");
            } if (tab == "company") {
                head.addClass("mcguff-company");
            }
            if (tab == "compounding") {
                head.addClass("mcguff-compounding");
            }
        } else {
            location.hash = '#' + $(e.target).attr('href').substr(1);
        }
    });
});

// when tab is fired change appearance
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var tab = $(e.target);

    //tab.addClass("disabled");
    var head = $("#head");
    //var navbar = $(".navbar");
    //var comLogo = $(".company-logo");

    head.removeClass("mcguff-main mcguff-noanim mcguff-company mcguff-compounding");
    //navbar.removeClass("navbar-family navbar-company navbar-compounding");
    //comLogo.removeClass("logo-family logo-company logo-compounding");

    if (tab.attr("id") == "family") {
        head.addClass("mcguff-main");
        //navbar.addClass("navbar-family");
        //comLogo.addClass("logo-family");
    } else if (tab.attr("id") == "company") {
        head.addClass("mcguff-company");
        //navbar.addClass("navbar-company");
        //comLogo.addClass("logo-company");
    } else if (tab.attr("id") == "compounding") {
        head.addClass("mcguff-compounding");
        //navbar.addClass("navbar-compounding");
        //comLogo.addClass("logo-compounding");
    }
});


$(".goToLink").click(function () {
    var TabName = $(this).data("tabname");
    if ($(".homepage-flag").length == 0) {
        window.location.href = "/";
    } else {
        if ($('.navbar-collapse').hasClass("navbar-collapse collapse in")) { // remove second collapse for mcguff
            $('.navbar-collapse').collapse('hide');
        }
        $("#myTab a[href=#" + TabName + "]").tab('show');
    }
});

// use these links for nav
//<a href="#" class="goToLink" data-tabname="family">Home</a>
//<a href="#" class="goToLink" data-tabname="family">Family</a>
//<a href="#" class="goToLink" data-tabname="company">Company</a>
//<a href="#" class="goToLink" data-tabname="compounding">Compounding</a>