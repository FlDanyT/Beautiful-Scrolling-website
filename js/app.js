 gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // подключаем плагин плавного scroll

 if(ScrollTrigger.isTouch !==1) { // что бы не лагало на старых устройствах
    ScrollSmoother.create({  // каким элементам привязываемся
        wrapper: '.wrapper', // классы
        content: '.content',
        smooth: 1.5,  // скорость скрола
        effects: true // включаем эффекты для управления эффектами для отдельных блоков
    })

    gsap.fromTo('.hero-section', { opacity: 1}, { 

        opacity: 0, // пропажа элемента
        scrollTrigger: {
            trigger: '.hero-section', // элемент который будет появляться в после зрения
            start: 'center', // на какой позиции нужно начать анимацию
            end: '820', // на какой позиции нужно закончить анимацию
            scrub: true // возрощяем предыдущее значение
        }

    }) // { значение до анимации }, { значение во время скрола }


    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => { // делаем подгруздку всех элементов по очереди

        gsap.fromTo(item, { x: -70, opacity: 0 }, 
        {
            opacity: 1, x: 0,
            scrollTrigger: { 
                trigger: item,
                start: '-850', // на какой позиции нужно начать анимацию
                end: '-100', // на какой позиции нужно закончить анимацию
                scrub: true,
            }
        })

    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => { // делаем подгрузку всех элементов по очереди

        gsap.fromTo(item, { x: 70, opacity: 0 }, 
        {
            opacity: 1, x: 0,
            scrollTrigger: { 
                trigger: item,
                start: '-850', // на какой позиции нужно начать анимацию
                end: '-100', // на какой позиции нужно закончить анимацию
                scrub: true,
            }
        })

    });

 }
