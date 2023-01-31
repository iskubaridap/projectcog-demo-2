const AppGameModel = Backbone.Model.extend({
    defaults: {
        title: '',
        category: '',
        mixClass: '',
        dataCat: '',
        portfolioImgSrc: '',
        modalId: ''
    }
});

var AppGameModel1 = new AppGameModel({
    title: 'HA CPR Game',
    category: 'Games/elearning',
    mixClass: 'addGameApp',
    dataCat: 'addElearning',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/aha.png',
    modalId: 'aha-modal-wrap'
});
var AppGameModel2 = new AppGameModel({
    title: 'Angry Cow',
    category: 'Games/elearning',
    mixClass: 'addGameGames',
    dataCat: 'addElearning',
    portfolioImgSrc: './assets/imgs/portfolios/Games/angry-cow-thmb.png',
    modalId: 'angry-cow-modal-wrap'
});
var AppGameModel3 = new AppGameModel({
    title: 'ELearning Dashboard',
    category: 'Tools/Apps',
    mixClass: 'addGameTools',
    dataCat: 'addGameTools',
    portfolioImgSrc: './assets/imgs/portfolios/Apps/mcafee-dashboard.png',
    modalId: 'mcafee-dashboard-modal-wrap'
});
var AppGameModel4 = new AppGameModel({
    title: 'Translation Tool',
    category: 'Tools/Apps',
    mixClass: 'addGameTools',
    dataCat: 'addGameTools',
    portfolioImgSrc: './assets/imgs/portfolios/Tools/CogTranslate.png',
    modalId: 'translationTool-modal-wrap'
});
var AppGameModel5 = new AppGameModel({
    title: 'Various',
    category: 'Games',
    mixClass: 'addGameGames',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/Games/explore.png',
    modalId: 'various-games-modal-wrap'
});
var AppGameModel6 = new AppGameModel({
    title: 'Halo Quest',
    category: 'APP/eLearning',
    mixClass: 'addGameApp addElearning',
    dataCat: 'addElearning',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/halo.png',
    modalId: 'visualInfography-modal-wrap'
});
var AppGameModel7 = new AppGameModel({
    title: 'Measure Evaluation',
    category: 'eLearning',
    mixClass: 'addElearning',
    dataCat: 'addElearning',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/impResearch.png',
    modalId: 'measure-evaluation-modal-wrap'
});
var AppGameModel8 = new AppGameModel({
    title: 'Memory &amp; Matching',
    category: 'eLearning/Game',
    mixClass: 'addGameGames',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/Games/matching.png',
    modalId: 'memory-games-modal-wrap'
});
var AppGameModel9 = new AppGameModel({
    title: 'Drag &amp; Drop',
    category: 'eLearning',
    mixClass: 'addElearning',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/drag-drop.png',
    modalId: 'drop-drag-modal-wrap'
});
var AppGameModel10 = new AppGameModel({
    title: 'Conversational Training',
    category: 'E-Learning',
    mixClass: 'addElearning',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/conversational_elearning.png',
    modalId: 'conversational-modal-wrap'
});
var AppGameModel11 = new AppGameModel({
    title: 'Flash Cards',
    category: 'E-Learning',
    mixClass: 'addElearning',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/flash_cards-E-learning.png',
    modalId: 'flash-cards-modal-wrap'
});
var AppGameModel12 = new AppGameModel({
    title: 'Scenario Activities',
    category: 'E-Learning',
    mixClass: 'addElearning',
    dataCat: 'addGameGames',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/scenario-activities-e-learning.png',
    modalId: 'scenario-modal-wrap'
});
var AppGameModel13 = new AppGameModel({
    title: 'On-Demand Training &amp; Activities',
    category: 'E-Learning/Apps',
    mixClass: 'addElearning addGameApp',
    dataCat: 'addGameGame',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/on-demand-training-and-activities.png',
    modalId: 'on-demand-modal-wrap'
});
var AppGameModel14 = new AppGameModel({
    title: 'Leaderboard',
    category: 'Tools',
    mixClass: 'addGameTools',
    dataCat: 'addGameGame',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/leaderboardtools.png',
    modalId: 'leaderboard-modal-wrap'
});
var AppGameModel15 = new AppGameModel({
    title: 'Translator',
    category: 'Tools',
    mixClass: 'addGameTools',
    dataCat: 'addGameGame',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/translator-tools.png',
    modalId: 'translator-modal-wrap'
});
var AppGameModel16 = new AppGameModel({
    title: 'Halo Quest',
    category: 'E-learning',
    mixClass: 'addElearning',
    dataCat: 'addGameGame',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/halo-quest.jpg',
    modalId: 'halo-quest-modal-wrap'
});
var AppGameModel17 = new AppGameModel({
    title: 'Space Invaders',
    category: 'Games',
    mixClass: 'addGameGames',
    dataCat: 'addGameGame',
    portfolioImgSrc: './assets/imgs/portfolios/elearning/space-invaders.jpg',
    modalId: 'space-invaders-modal-wrap'
});