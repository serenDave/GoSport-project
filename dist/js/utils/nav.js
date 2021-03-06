$(document).ready(() => {
    $("body").append(`
        <div class="page__up-btn">
            <div class="page__up-btn--content">></div>
        </div>
    `);

    $("body").waypoint(function (direction) {
        if (direction == "down") {
            $(".page__up-btn").addClass("page__up-btn--visible");
        } else {
            $(".page__up-btn").removeClass("page__up-btn--visible");
        }
    }, {
        offset: "-75%"
    });

    $(".page__up-btn").click(function () {
        $("html, body").animate({ scrollTop: $("body").offset().top }, 1500);
    });

    setTimeout(() => {
        const token = localStorage.getItem("token");
        if (token) {
            $("#cabinet-link").attr("href", "http://127.0.0.1:8080/cabinet.html");
        } else {
            $("#cabinet-link").attr("href", "http://127.0.0.1:8080/login.html");
        }
    }, 500);
});