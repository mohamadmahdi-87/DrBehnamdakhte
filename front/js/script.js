$(document).ready(function () {
    let currentImageIndex = 0;
    const images = ["/img/seyedGreenBack.jpg", "/img/inpeople.jpg", "/img/next-to-flag.jpg", "/img/whenSpeching.jpg"];

    function openModal(imageSrc) {
        const modal = $("#myModal");
        const modalImg = $("#modalImg");

        modal.css("display", "flex");
        modalImg.attr("src", imageSrc);
        currentImageIndex = images.indexOf(imageSrc);
    }

    function closeModal() {
        $("#myModal").css("display", "none");
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        $("#modalImg").attr("src", images[currentImageIndex]);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        $("#modalImg").attr("src", images[currentImageIndex]);
    }

    $(document).ready(function () {
        $("#closeModalBtn, #closeBtn").click(function () {
            closeModal();
        });

        $(window).click(function (event) {
            if ($(event.target).is("#myModal")) {
                closeModal();
            }
        });

        $("#prevBtn").click(function () {
            prevImage();
        });

        $("#nextBtn").click(function () {
            nextImage();
        });

        $(".cursor-pointer").click(function () {
            openModal($(this).find("img").attr("src"));
        });
    });

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
    $("#number, #email").click(function () {
        var textToCopy = $(this).text();

        var tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);

        $("html").append(tempTextarea);

        tempTextarea.select();

        document.execCommand("copy");

        tempTextarea.remove();

        // Show and animate the copied message
        $("#copied").fadeIn(500, function () {
            setTimeout(function () {
                $("#copied").fadeOut(500);
            }, 1000);
        });
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
    $(document).ready(function () {
        $("#newsDropdownSm").addClass("hidden");

        $("#faAngleDownSm").click(function () {
            $(this).toggleClass("rotate-180");
            $("#newsDropdownSm").slideToggle("fast");
        });
    });
});

$(document).ready(function () {
    setTimeout(function () {
        $("#myGallery1").removeClass("opacity-0").addClass("opacity-100", "");
    }, 300);
    setTimeout(function () {
        $("#myGallery2").removeClass("opacity-0").addClass("opacity-100", "");
    }, 450);
    setTimeout(function () {
        $("#myGallery3").removeClass("opacity-0").addClass("opacity-100", "");
    }, 600);
});
function imagesGallery() {
    return {
        isOpen: false,
        currentImage: 0,
        images: ["/img/whenSpeching.jpg", "/img/inpeople.jpg", "/img/next-to-flag.jpg", "/img/seyedGreenBack.jpg"],
        openModal(index) {
            this.currentImage = index;
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
        },
        nextImage() {
            this.currentImage = Math.min(this.currentImage + 1, this.images.length - 1);
        },
        prevImage() {
            this.currentImage = Math.max(this.currentImage - 1, 0);
        },
    };
}
$(document).ready(function () {
    let prevScrollpos = window.pageYOffset;
    let isImageOpen = false;

    // Function to handle image opening
    function openImage() {
        isImageOpen = true;
        $("#header").addClass("hidden");
    }

    // Function to handle image closing
    function closeImage() {
        isImageOpen = false;
        $("#header").removeClass("hidden");
    }

    // Set up scroll event listener
    $(window).scroll(function () {
        let currentScrollPos = window.pageYOffset;

        // Check if an image is open
        if (!isImageOpen) {
            if (prevScrollpos > currentScrollPos) {
                $("#header").css("transform", "translateY(0)");
            } else {
                $("#header").css("transform", "translateY(-100%)");
            }
        }

        prevScrollpos = currentScrollPos;
    });

    // Example usage when opening/closing an image
    $("#openImageBtn").click(function () {
        openImage();
    });

    $("#closeImageBtn").click(function () {
        closeImage();
    });
});
