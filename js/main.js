$(function(){
    $('#gallery').slick({
        centerMode: true,
        slide: '.elem',
        centerPadding: '60px',
        slidesToShow: 5
    });

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            // triggerHook: 'onLeave'
        }
    });

    var wipeAnimation = new TimelineMax()
            .fromTo("#two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone, delay: 2})  // in from left
            .to('#slide1Text', 3, {opacity: 0, left: '100%', delay: 1}, '0')

            .from('#slide2Title', 0.6, {autoAlpha: 0, left: '-300'}, '-=0.8')
            .from('#b2i', 0.8, {scale: 0}, '-=0.8')
            .from('#two hr', 0.8, {scale: 0}, '-=0.8')
            .from('#b2l1t', 0.4, {autoAlpha: 0, left: '-320'}, '-=0.8')
            .from('#b2l1d', 0.6, {autoAlpha: 0, left: '-340'}, '-=0.8')

            .from('#b2l2t', 0.8, {autoAlpha: 0, left: '-360'}, '-=0.8')
            .from('#b2l2d', 1, {autoAlpha: 0, left: '-380'}, '-=0.8')

            .from('#b2l3t', 1.2, {autoAlpha: 0, left: '-400'}, '-=0.8')
            .from('#b2l3d', 1.3, {autoAlpha: 0, left: '-420'}, '-=0.8')

            .fromTo("#three", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone, delay: 2})  // in from right

            .from('#slide3Title', 0.6, {autoAlpha: 0, left: '+300', delay: 1}, '-=0.8')
            .from('#b3i', 0.8, {scale: 0, delay: 1}, '-=0.8')
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

            .fromTo("#four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone, delay: 2}) // in from top

            .from('#slide4Title', 0.6, {autoAlpha: 0, top: '-50', delay: 1}, '-=0.8')
            .from('#gallery .elem', 1.4, {autoAlpha: 0, top: '-55', scale: 0, delay: 0.8}, '-=0.8')

            .fromTo("#five", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone, delay: 2.5}); // in from bottom

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
});