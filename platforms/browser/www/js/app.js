var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    name: 'Sounds Of Nature',
    theme: 'ios',
    version: 1.0,
    routes: routes,
    backend: 'http://sounds-of-nature.umakhan.tmweb.ru/',
    language: localStorage.language !== undefined ? localStorage.language : 'english',
    dialog: {
        buttonOk: 'Ок',
        buttonCancel: 'Отмена'
    },
    touch: {
        mdTouchRipple: false,
        tapHold: false,
        disableContextMenu: true,
        activeState: false,
        fastClicks: true
    },
    view: {
        iosDynamicNavbar: false,
        stackPages: true,
        preloadPreviousPage: false,
        removeElements: false
    },
    data: function () {

        var app = this;

       return {

           languages: {

               russian: {
                   sounds_of_nature: 'Звуки природы',
                   sea: 'Море',
                   train: 'Поезд',
                   bonfire: 'Костер',
                   rain: 'Дождь',
                   nature: 'Природа',
               },
               english: {
                   sounds_of_nature: 'Sounds Of Nature',
                   sea: 'Sea',
                   train: 'Train',
                   bonfire: 'Campfire',
                   rain: 'Rain',
                   nature: 'Nature',
               },
               arabian: {
                   sounds_of_nature: 'أصوات الطبيعة',
                   sea: 'البحر',
                   train: 'القطار',
                   bonfire: 'مشعل',
                   rain: 'المطر',
                   nature: 'طبيعة',
               }

           }

       };

    },
    methods: {
        lang: function (input) {

            var app = this;

            return app.data.languages[app.params.language][input];

        },
        getLink: function (path) {

            var app = this;

            return app.params.backend + path;

        }
    },
    on: {
        init: function () {

        }
    }
});

app.request.setup({
    beforeSend: function(xhr) {

    },
    complete: function(xhr) {

        console.log(xhr);

    },
    error: function () {

    }
});

$$(document).on('deviceready', function () {

    app.init();

    app.views.create('#view-main', {
        url: '/',
        main: true
    });

    if (app.device.android) {

        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);

    }

    if (app.device.ios) {

        setTimeout(function () {

            app.statusbar.hide();
            app.statusbar.show();

        });

    }

    setTimeout(function () {

        navigator.splashscreen.hide();

    }, 1000);

});
