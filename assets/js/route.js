var appRouter = Backbone.Router.extend({
    routes: {
        "": "homeRoute",
        "about": "aboutRoute",
        "features": "featuresRoute",
        "contact": "contactRoute",
        "success": "successRoute",
        "fail": "failRoute"
    },
    homeRoute: () => {
        new home();
    },
    aboutRoute: () => {
        new about();
    },
    featuresRoute: () => {
        new features();
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