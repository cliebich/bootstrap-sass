// when tab is fired change appearance
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var tab = $(e.target);
    var allTabs = $('a[data-toggle="tab"]');
    allTabs.removeClass("disabled");
    tab.addClass("disabled");
    var head = $("#head");
    var navbar = $(".navbar");
    var comLogo = $(".company-logo");

    head.removeClass("mcguff-main mcguff-noanim mcguff-company mcguff-compounding");
    navbar.removeClass("navbar-family navbar-company navbar-compounding");
    comLogo.removeClass("logo-family logo-company logo-compounding");

    if (tab.attr("id") == "family") {
        head.addClass("mcguff-main");
        navbar.addClass("navbar-family");
        comLogo.addClass("logo-family");
    } else if (tab.attr("id") == "company") {
        head.addClass("mcguff-company")
        navbar.addClass("navbar-company");
        comLogo.addClass("logo-company");
    } else if (tab.attr("id") == "Compounding") {
        head.addClass("mcguff-compounding");
        navbar.addClass("navbar-compounding");
        comLogo.addClass("logo-compounding");
    }
    // set localstorage tabname based on id of tab
    window.localStorage.LastActiveTabName = tab.attr("id");
});

// when click on nav set localstorage tabname then goto homepage if necessary
// otherwise just show tab based on data-tabname
$(".goToLink").click(function () {
    var TabName = $(this).data("tabname");
    if ($(".homepage-flag").length == 0) {
        window.localStorage.LastActiveTabName = TabName;
        window.location.href = "/";
    } else {
        if ($('.navbar-collapse').hasClass("navbar-collapse in")) {
            $('.navbar-collapse').collapse('hide');
        }
        $("#" + TabName).tab("show");
    }
});

// show correct tab when page loads based on localstorage
$(document).ready(function () {
    if (window.localStorage.LastActiveTabName != null && window.localStorage.LastActiveTabName !== "") {
        $("#" + window.localStorage.LastActiveTabName).tab('show');
    }
});


// use these links for nav
//<a href="#" class="goToLink" data-tabname="family">Home</a>
//<a href="#" class="goToLink" data-tabname="family">Family</a>
//<a href="#" class="goToLink" data-tabname="company">Company</a>
//<a href="#" class="goToLink" data-tabname="compounding">Compounding</a>