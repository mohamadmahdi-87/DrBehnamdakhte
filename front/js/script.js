$(document).ready(function () {
    // شیء حاوی معادل فارسی فایل‌ها
    const fileTranslations = {
        index: "تصمیم تازه",
        articles: "مقالات",
        bio: "بیوگرافی",
        books: "تالیفات",
        CityNews: "اخبار شهرستانی",
        gallery: "گالری",
        news: "اخبار",
        ProvincialNews: "اخبار استانی",
        RegionalNews: "اخبار منطقه ای",
        speechs: "سخنرانی های دکتر بهنام داخته",
        // ادامه ترجمه‌ها...
    };

    // تابع برای استخراج نام فایل بدون پسوند از مسیر و ترجمه
    function getFileNameWithoutExtension(path) {
        const fileName = path.split("/").pop(); // دریافت نام فایل
        const nameWithoutExtension = fileName.split(".").slice(0, -1).join("."); // حذف پسوند فایل
        return translateFileName(nameWithoutExtension); // ترجمه نام فایل بدون پسوند و بازگرداندن آن
    }

    // تابع برای ترجمه نام فایل
    function translateFileName(fileName) {
        return fileTranslations[fileName] || fileName; // اگر ترجمه وجود دارد، آن را بازگردانید، در غیر اینصورت نام فایل را بازگردانید
    }

    // تنظیم عنوان صفحه با نام فایل بدون پسوند و ترجمه
    document.title = getFileNameWithoutExtension(window.location.pathname);

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
        s;
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
        images: [
            "/img/dakhte/4nafareDakhte.jpg",
            "/img/dakhte/dakhteWithBaghery.jpg",
            "/img/dakhte/darhalDoa.jpg",
            "/img/dakhte/dastjamie2.jpg",
            "/img/dakhte/seNafare3.jpg",
            "/img/dakhte/teamFootbal.jpg",
            "/img/dakhte/dastjamieBehnamDakhte.jpg",
            "/img/dakhte/doNafare2.jpg",
            "/img/dakhte/doNafare3.jpg",
            "/img/dakhte/dorhamiDakhte.jpg",
            "/img/dakhte/dorhamiDakhte4.jpg",
            "/img/dakhte/dorhamiDakhte3.jpg",
            "/img/dakhte/dorhamiDakhte5.jpg",
        ],
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

    // Set up scroll event listener
    $(window).scroll(function () {
        let currentScrollPos = window.pageYOffset;

        // Check if no image is open
        if (!$(".image-container").hasClass("open")) {
            if (prevScrollpos > currentScrollPos) {
                $("#header-lg , #header-ms").css("transform", "translateY(0)");
            } else {
                $("#header-lg , #header-ms").css("transform", "translateY(-100%)");
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
    var splide = new Splide("#main-slider", {
        width: "85%",
        height: "73vh",
        pagination: false,
        cover: true,
    });

    var thumbnails = document.getElementsByClassName("thumbnail");
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            splide.go(index);
        });
    }

    splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove("is-active");
            }

            thumbnail.classList.add("is-active");
            current = thumbnail;
        }
    });

    splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
    new Splide("#splide", {
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
    }).mount();
});
// $(document).ready(function () {
//     // فهرستی از فرزنده‌های ul
//     var listItems = $("#scrollNews li");
//     // فهرستی از نمایش داده شده
//     var visibleIndex = 0;
//     // اولین فرزند را نمایش دهید
//     $(listItems[visibleIndex]).show();

//     // انجام انیمیشن و نمایش فرزند بعدی
//     function showNextItem() {
//         // مخفی کردن فرزند فعلی
//         $(listItems[visibleIndex]).fadeOut();
//         // افزایش شاخص نمایش داده شده
//         visibleIndex = (visibleIndex + 1) % listItems.length;
//         // نمایش فرزند بعدی با انیمیشن
//         $(listItems[visibleIndex]).fadeIn();
//     }

//     // انجام انیمیشن هر ۳ ثانیه
//     setInterval(showNextItem, 800);
// });
$(document).ready(function () {
    var title = $("title").text();
    $("#siteTitle").text(title);
});
