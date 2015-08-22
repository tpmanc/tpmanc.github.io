$(function(){
    $('#gallery').slick({
        centerMode: true,
        slide: '.elem',
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('#gallery').on('reInit', function(event, slick){
        console.log('anus');
    });

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            // triggerHook: 'onLeave'
        }
    });

    var wipeAnimation = new TimelineMax()
            .fromTo("#two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone, delay: 4})  // in from left
            .to('#slide1Text', 3, {opacity: 0, left: '100%', delay: 1}, '0')

            .from('#slide2Title', 0.6, {autoAlpha: 0, left: '-300'}, '-=0.8')
            .from('#b2i', 0.8, {scale: 0, delay: 2}, '-=0.8')
            .from('#two hr', 0.8, {scale: 0}, '-=0.8')
            .from('#b2l1t', 0.4, {autoAlpha: 0, left: '-320'}, '-=0.8')
            .from('#b2l1d', 0.6, {autoAlpha: 0, left: '-340'}, '-=0.8')

            .from('#b2l2t', 0.8, {autoAlpha: 0, left: '-360'}, '-=0.8')
            .from('#b2l2d', 1, {autoAlpha: 0, left: '-380'}, '-=0.8')

            .from('#b2l3t', 1.2, {autoAlpha: 0, left: '-400'}, '-=0.8')
            .from('#b2l3d', 1.3, {autoAlpha: 0, left: '-420'}, '-=0.8')

            .fromTo("#three", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone, delay: 4})  // in from right

            .from('#slide3Title', 0.6, {autoAlpha: 0, left: '+300', delay: 1}, '-=0.8')
            .from('#b3i', 0.8, {scale: 0, delay: 2}, '-=0.8')
            .from('#three hr', 0.8, {scale: 0}, '-=0.8')
            .from('#b3l1t', 0.4, {autoAlpha: 0, left: '+320'}, '-=0.8')
            .from('#b3l1d', 0.6, {autoAlpha: 0, left: '+340'}, '-=0.8')

            .from('#b3l2t', 0.8, {autoAlpha: 0, left: '+360'}, '-=0.8')
            .from('#b3l2d', 1, {autoAlpha: 0, left: '+380'}, '-=0.8')

            .from('#b3l3t', 1.2, {autoAlpha: 0, left: '+400'}, '-=0.8')
            .from('#b3l3d', 1.3, {autoAlpha: 0, left: '+420'}, '-=0.8')

            .from('#b3l4t', 1.2, {autoAlpha: 0, left: '+400'}, '-=0.8')
            .from('#b3l4d', 1.3, {autoAlpha: 0, left: '+420'}, '-=0.8')

            .from('#b3l5t', 1.2, {autoAlpha: 0, left: '+400'}, '-=0.8')
            .from('#b3l5d', 1.2, {autoAlpha: 0, left: '+420'}, '-=0.8')

            .from('#b3l6t', 1.2, {autoAlpha: 0, left: '+400'}, '-=0.8')
            .from('#b3l6d', 1.2, {autoAlpha: 0, left: '+420'}, '-=0.8')

            .fromTo("#four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from top

            .from('#slide4Title', 0.6, {autoAlpha: 0, top: '-50', delay: 2}, '-=0.8')
            .from('#gallery', 1.4, {autoAlpha: 0, top: '-55', delay: 2}, '-=0.8')

            .fromTo("#five", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 4}) // in from bottom

            .from('#slide5Title', 0.6, {autoAlpha: 0, bottom: '+55', delay: 1}, '-=0.8')
            .from('#slide5Title img', 0.8, {scale: 0, delay: 2}, '-=0.8')
            .from('#five hr', 0.8, {scale: 0}, '-=0.8')
            .from('#b5l1t', 0.4, {autoAlpha: 0, bottom: '+50'}, '-=0.8')
            .from('#b5l1d', 0.6, {autoAlpha: 0, bottom: '+55'}, '-=0.8')

            .from('#b5l2t', 0.8, {autoAlpha: 0, bottom: '+60'}, '-=0.8')
            .from('#b5l2d', 1, {autoAlpha: 0, bottom: '+65'}, '-=0.8')

            .from('#b5l3t', 1.2, {autoAlpha: 0, bottom: '+70'}, '-=0.8')
            .from('#b5l3d', 1.3, {autoAlpha: 0, bottom: '+75'}, '-=0.8')

            .from('#b5l4t', 1.2, {autoAlpha: 0, bottom: '+80'}, '-=0.8')
            .from('#b5l4d', 1.3, {autoAlpha: 0, bottom: '+85'}, '-=0.8');

    new ScrollMagic.Scene({
        triggerElement: "#container",
        triggerHook: 'onLeave',
        duration: "800%"
    })
    .setPin("#container")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);

    $('#gallery .zoom').on('click', function(){
        var img = $(this).closest('a').data('href');
        var c = $('<div class="box-modal" />');
            c.html('<img src="' + img + '">');
            c.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
            $.arcticmodal({
                content: c
        });
    });

    $('html.touch #gallery .elem').on('click', function(e){
        $('#gallery .elem.active').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
    });

    var body = $('body');
    body.on('click', function(){
        $('#gallery .elem.active').removeClass('active');
    });

    // google analitics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-39716520-2', 'auto');
    ga('send', 'pageview');
});