// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
        document.getElementById("preloder").classList.add("d-none");
        document.body.classList.remove("overflow-hidden")
    }, 2000)
    // slider
$('.slider-for').slick({
    arrow: false,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    responsive: [{
            breakpoint: 991.5,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767.5,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.5,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slider-nav').slick({
    arrow: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});