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
var home =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/home.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template)
                document.title = "Home";
                setMainNavActive('home');
            }, 'html')
        }
});
var about =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/about.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "About Us";
                setMainNavActive('about');
            }, 'html')
        }
});
var features =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
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
                    $.get( `./pages/features.html`, function (data) {
                        const template = _.template(data, {});
                        const pageContent = _this.$el.html(template);
                        
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
                        document.title = "Features";
                        setMainNavActive('features');
                    }, 'html')
                });
            };
            processRequest();
        }
});
var contact =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/contact.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Contact Us";
                setMainNavActive('contact');
            }, 'html')
        }
});
var success =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/success.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "Success";
                setMainNavActive('contact');
            }, 'html')
        }
});
var fail =  Backbone.View.extend({
    el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const _this = this;
            $.get( `./pages/fail.html`, function (data) {
                const template = _.template(data, {});
                _this.$el.html(template);
                document.title = "fail";
                setMainNavActive('contact');
            }, 'html')
        }
});