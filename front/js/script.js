$(document).ready(function () {
    var backButton = $('#backButton')

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()

        if (scrollTop > 200) {
            backButton.addClass('show')
        } else {
            backButton.removeClass('show')
        }
    })

    backButton.click(function () {
        $('html, body').animate(
            {
                scrollTop: $('#top').offset().top,
            },
            1,
        )
    })
})

$(document).ready(function () {
    $('#number , #email').click(function () {
        var textToCopy = $(this).text()

        var tempTextarea = $('<textarea>')
        tempTextarea.val(textToCopy)

        $('html').append(tempTextarea)

        tempTextarea.select()

        document.execCommand('copy')

        tempTextarea.remove()

        $(this).append(
            '<div class="copied p-2 bg-indigo-500 text-white rounded-md fixed top-8 left-1/2 transition-all animate-bounce transform -translate-x-1/2">کپی شد</div>',
        )

        setTimeout(function () {
            $('.copied').remove()
        }, 2000)
    })
})
