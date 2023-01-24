var appRouter = Backbone.Router.extend({
    routes: {
        "": "homeRoute",
        "app-game": "appGameRoute",
        "e-learning": "eLearningRoute",
        "widgets-whatnot": "widgetsWhatnotRoute",
        "contact": "contactRoute",
        "success": "successRoute",
        "fail": "failRoute"
    },
    homeRoute: () => {
        new home();
    },
    appGameRoute: () => {
        new appGame();
    },
    eLearningRoute: () => {
        new eLearning();
    },
    widgetsWhatnotRoute: () => {
        new widgetsWhatNot();
    },
    contactRoute: () => {
        new contact();
    },
    successRoute: () => {
        new success();
    },
    failRoute: () => {
        new fail();
    }
});