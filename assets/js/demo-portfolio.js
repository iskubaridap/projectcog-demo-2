try {
    const containerEl = document.getElementById('addGameDev');
    const mixer = mixitup(containerEl);
    const urlPage = window.location.href;
    const myPage = (urlPage.indexOf('=') > 0) ? urlPage.substring(urlPage.indexOf('=') + 1) : false;
    const titleAry = document.querySelectorAll('.title-item');
    const sectionAry = document.querySelectorAll('.sec-content');
    let sectTarget = myPage || 'app-game-dev';
    
    const resetSection = () => {
        titleAry.forEach(elem => {
            const titleElem = elem.querySelector('.title');
            if(titleElem.getAttribute('data-target') != sectTarget) {
                titleElem.classList.remove('active');
            }
        });
        sectionAry.forEach(elem => {
            if(elem.getAttribute('data-section') != sectTarget) {
                elem.classList.remove('active');
                $(elem).hide();
            }
        });
    };
    const setTarget = () => {
        titleAry.forEach(elem => {
            const titleElem = elem.querySelector('.title');
            if(titleElem.getAttribute('data-target') == sectTarget) {
                titleElem.classList.add('active');
            }
        });
        sectionAry.forEach(elem => {
            if(elem.getAttribute('data-section') == sectTarget) {
                elem.classList.add('active');
                $(elem).fadeIn();
            }
        });
    };
    
    titleAry.forEach(elem => {
        elem.addEventListener('click', (evt) => {
            const elemTarget = evt.target;
            const dataVal = elemTarget.getAttribute('data-target');
            if(dataVal !== sectTarget && dataVal) {
                sectTarget = dataVal;
                resetSection();
                setTarget();
            }
        });
    });
    console.log(sectTarget);
    resetSection();
    setTarget();
    $(function () {
    
        $(".dksort").each(function(){
            $(this).click(function(){
                
                var txt = $(this).find(".thumbnailsInfo").html();
                
                $("#thumbnailsInfoWrapper").fadeIn(function(){
                    $("#thumbnailsInfoViewer").html("");
                    $("#thumbnailsInfoViewer").html(txt);
                    
                    $("#thumbnailsInfoViewer .responsiveslides").responsiveSlides({
                        auto: false,
                        pager: false,
                        nav: true,
                        speed: 500,
                        namespace: "callbacks"
                    });
                    
                    $(".modal.in .modal-dialog").animate({opacity: 0});
    
                    $("#thumbnailsInfoWrapper .close").click(function(){
                        $("#thumbnailsInfoWrapper").fadeOut(function(){
                            $("#thumbnailsInfoViewer").html("");
                            
                            $(".modal.in .modal-dialog").animate({opacity: 1});
                        });
                    });
                });
            });
        });
        $('#addGameDev .portfolio').hover(
            function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad').fadeIn(250);
                $(this).find('.portfolio-img').stop().animate({top: -30}, 500, 'easeOutQuad');				
            },
            function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad').hide();
                $(this).find('.portfolio-img').stop().animate({top: 0}, 300, 'easeOutQuad');								
            }		
        );
    });
    
    mixer.destroy();
    mixitup(containerEl);
} catch(err) {}