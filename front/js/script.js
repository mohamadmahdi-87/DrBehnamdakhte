// تابع نمایش و محو کردن دکمه با اسکرول
$(document).ready(function () {
    var backButton = $('#backButton')

    // افزودن رویداد اسکرول
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()

        // اگر اسکرول به بالا بیشتر از 200 پیکسل باشد، نمایش دکمه
        if (scrollTop > 200) {
            backButton.addClass('show')
        } else {
            backButton.removeClass('show')
        }
    })

    // افزودن رویداد کلیک به دکمه
    backButton.click(function () {
        // اسکرول به ای دی با ای دی #topElement
        $('html, body').animate(
            {
                scrollTop: $('#top').offset().top,
            },
            1,
        ) // زمان انیمیشن (میلی‌ثانیه)
    })
})
