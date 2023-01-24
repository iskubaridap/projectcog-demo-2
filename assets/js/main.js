$(document).ready(function () {
    router = new appRouter();
    Backbone.history.start();

    /* document.querySelectorAll('.nav-link').forEach((elem) => {
        elem.addEventListener('click', (evt) => {
            const e = evt.target;
            document.querySelectorAll('.nav-link').forEach((_elem) => {
                _elem.classList.remove('menu-active');
                if(!_elem.classList.contains('hvr-shutter-in-horizontal')) {
                    _elem.classList.add('hvr-shutter-in-horizontal');
                }
            });
            e.classList.remove('hvr-shutter-in-horizontal');
            e.classList.add('menu-active');
        });
    }); */
});