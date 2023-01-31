const setMainNavActive = (link) => {
    const e = document.querySelector(`.nav-link[aria-current="${link}"]`);
    document.querySelectorAll('.nav-link').forEach((_elem) => {
        _elem.classList.remove('menu-active');
        if(!_elem.classList.contains('hvr-shutter-in-horizontal')) {
            _elem.classList.add('hvr-shutter-in-horizontal');
        }
    });
    e.classList.remove('hvr-shutter-in-horizontal');
    e.classList.add('menu-active');
}
const setModalSection = (appsDevModal) => {
    return new Promise((resolve, reject) => {
        $.get( `./pages/apps-dev-modal/${appsDevModal}.html`, function (data) {
            resolve(data);
        }, 'html')
    });
};
const showLoading = () => {
    $('#main-content').removeClass('active');
    $('#page-loader').removeClass('inactive');
};
const hideLoading = () => {
    $('#main-content').addClass('active');
    $('#page-loader').addClass('inactive');
};
var home =  Backbone.View.extend({
    el: $('#main-content'),
    initialize: function(){
        showLoading();
        this.render();
    },
    render: function(){
        const _this = this;
        $.get( `./pages/home.html`, function (data) {
            const template = _.template(data, {});
            _this.$el.html(template);
            document.title = "Home";
            setTimeout(() => {
                hideLoading();
            }, 500);
            /* _this.$el.ready(() => {
                console.log('foobar');
            }); */
            // setMainNavActive('home');
        }, 'html');
    }
});
var about =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/about.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "About Us";
                hideLoading();
                // setMainNavActive('about');
            }, 'html')
        }
});
var appGame =  Backbone.View.extend({
    el: $('#main-content'),
    model: AppGameCollections,
    initialize: function(){
        showLoading();
        this.render();
    },
    events: {
        'click .dksort': 'dkSortEvent',
        'mouseover #addGameDev .portfolio': 'onThumbnail',
        'mouseout #addGameDev .portfolio': 'outThumbnail',
    },
    dkSortEvent: function(evt) {
        var txt = $(evt.currentTarget).find(".thumbnailsInfo").html();
        
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
    },
    onThumbnail: function(evt) {
        $(evt.currentTarget).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad').fadeIn(250);
        $(evt.currentTarget).find('.portfolio-img').stop().animate({top: -30}, 500, 'easeOutQuad');		
    },
    outThumbnail: function(evt) {
        $(evt.currentTarget).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad').hide();
        $(evt.currentTarget).find('.portfolio-img').stop().animate({top: 0}, 300, 'easeOutQuad');
    },
    render: function(){
        const _this = this;
        const processRequest = async () => {
            const aha = await setModalSection('aha');
            const angryCow = await setModalSection('angry-cow');
            const mcafeeDashboard = await setModalSection('mcafee-dashboard');
            const translationTool = await setModalSection('translationTool');
            const variousGames = await setModalSection('various-games');
            const visualInfography = await setModalSection('visualInfography');
            const measureEvaluation = await setModalSection('measure-evaluation');
            const memoryGames = await setModalSection('memory-games');
            const dropDrag = await setModalSection('drop-drag');
            const conversational = await setModalSection('conversational');
            const flashCards = await setModalSection('flash-cards');
            const scenario = await setModalSection('scenario');
            const onDemand = await setModalSection('on-demand');
            const leaderboard = await setModalSection('leaderboard');
            const translator = await setModalSection('translator');
            const haloQuest = await setModalSection('halo-quest');
            const spaceInvaders = await setModalSection('space-invaders');
            Promise.all([
                aha, angryCow, mcafeeDashboard, translationTool, 
                variousGames, visualInfography, measureEvaluation,
                memoryGames, dropDrag, conversational, flashCards,
                scenario, onDemand, leaderboard, translator, haloQuest, spaceInvaders]).then((result) => {
                $.get( `./pages/app-game.html`, function (data) {
                    const template = _.template(data, {variable: 'data'});
                    const pageContent = _this.$el.html((template({model: _this.model.toJSON()})));
                    const containerEl = document.getElementById('addGameDev');
                    const mixer = mixitup(containerEl);
                    
                    $(pageContent).find(`#aha-modal-wrap`).append(aha);
                    $(pageContent).find(`#angry-cow-modal-wrap`).append(angryCow);
                    $(pageContent).find(`#mcafee-dashboard-modal-wrap`).append(mcafeeDashboard);
                    $(pageContent).find(`#translationTool-modal-wrap`).append(translationTool);
                    $(pageContent).find(`#various-games-modal-wrap`).append(variousGames);
                    $(pageContent).find(`#visualInfography-modal-wrap`).append(visualInfography);
                    $(pageContent).find(`#measure-evaluation-modal-wrap`).append(measureEvaluation);
                    $(pageContent).find(`#memory-games-modal-wrap`).append(memoryGames);
                    $(pageContent).find(`#drop-drag-modal-wrap`).append(dropDrag);
                    $(pageContent).find(`#conversational-modal-wrap`).append(conversational);
                    $(pageContent).find(`#flash-cards-modal-wrap`).append(flashCards);
                    $(pageContent).find(`#scenario-modal-wrap`).append(scenario);
                    $(pageContent).find(`#on-demand-modal-wrap`).append(onDemand);
                    $(pageContent).find(`#leaderboard-modal-wrap`).append(leaderboard);
                    $(pageContent).find(`#translator-modal-wrap`).append(translator);
                    $(pageContent).find(`#halo-quest-modal-wrap`).append(haloQuest);
                    $(pageContent).find(`#space-invaders-modal-wrap`).append(spaceInvaders);
                    document.title = "App & Game Development";
                    setTimeout(() => {
                        hideLoading();
                    }, 500);
                    mixer.destroy();
                    mixitup(containerEl);
                    // setMainNavActive('features');
                }, 'html')
            });
        };
        processRequest();
    }
});
var eLearning =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/e-learning.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "E-Learning Solution";
                hideLoading();
                // setMainNavActive('contact');
            }, 'html')
        }
});
var widgetsWhatNot =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/widgets-or-not.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Widgets & Whats-nots";
                hideLoading();
                // setMainNavActive('contact');
            }, 'html')
        }
});
var contact =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/contact.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Contact Us";
                hideLoading();
                // setMainNavActive('contact');
            }, 'html')
        }
});
var success =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/success.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Success";
                hideLoading();
                // setMainNavActive('contact');
            }, 'html')
        }
});
var fail =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            showLoading();
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/fail.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Fail";
                hideLoading();
                // setMainNavActive('contact');
            }, 'html')
        }
});