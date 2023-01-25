window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
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