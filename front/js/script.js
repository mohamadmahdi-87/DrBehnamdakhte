$(document).ready(function () {
    var backButton = $("#backButton");

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {
            backButton.addClass("show");
        } else {
            backButton.removeClass("show");
        }
    });

    backButton.click(function () {
        $("html, body").animate(
            {
                scrollTop: $("#top").offset().top,
            },
            1,
        );
    });

    $("#number , #email").click(function () {
        var textToCopy = $(this).text();

        var tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);

        $("html").append(tempTextarea);

        tempTextarea.select();

        document.execCommand("copy");

        tempTextarea.remove();

        $(this).append('<div class="copied p-2 bg-indigo-500 text-white rounded-md fixed top-8 left-1/2 transition-all animate-bounce transform -translate-x-1/2">کپی شد</div>');

        setTimeout(function () {
            $(".copied").remove();
        }, 2000);
    });

    let prevScrollpos = window.pageYOffset;

    $(window).scroll(function () {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            $("#header").css("transform", "translateY(0)");
        } else {
            $("#header").css("transform", "translateY(-100%)");
        }

        prevScrollpos = currentScrollPos;
    });
    $(document).ready(function () {
        $("#newsDropdown").addClass("hidden");

        $("#news").mouseenter(function () {
            $("#newsDropdown").slideDown("fast");
            $(this).addClass("hover:text-amber-300");
        });

        $("#news").mouseleave(function () {
            $("#newsDropdown").slideUp("fast");
            $(this).removeClass("hover:text-amber-300");
        });
        $("#news").mouseenter(function () {
            $("#faAngleDown").addClass("rotate-180");
        });
        $("#news").mouseleave(function () {
            $("#faAngleDown").removeClass("rotate-180");
        });
    });
    $(document).ready(function () {
        $("#newsDropdown1").addClass("hidden");

        $("#news1").mouseenter(function () {
            $("#newsDropdown1").slideDown("fast");
            $(this).addClass("hover:text-amber-300");
        });

        $("#news1").mouseleave(function () {
            $("#newsDropdown1").slideUp("fast");
            $(this).removeClass("hover:text-amber-300");
        });
        $("#news1").mouseenter(function () {
            $("#faAngleDown1").addClass("rotate-180");
        });
        $("#news1").mouseleave(function () {
            $("#faAngleDown1").removeClass("rotate-180");
        });
    });
});
