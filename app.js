const express = require('express');
const path = require('path');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-fs-backend');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')

// const IndexRoutes = require('./routes/index');
// const ProjectsRoutes = require('./routes/projects');

const app = express();

// Content-Security-Policty
// app.use(function (req, res, next) {
//     res.setHeader(
//         'Content-Security-Policy',
//         "script-src 'self' https://apis.google.com https://maxcdn.bootstrapcdn.com https://code.jquery.com" 
//     );
//     next();
// });

// i18n
i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
    backend: {
        loadPath: __dirname + '/public/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
        order: ['querystring', 'cookie'],
        caches: ['cookie']
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'sv'],
    preload: ['en', 'sv'],
    debug: false // Set to true when debugging
});

app.use(i18nextMiddleware.handle(i18next,  {
    removeLngFromUrl: true
    })
);

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

//index
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: path.join(__dirname, 'public')});
// })
app.get('/', (req, res) => {
    res.render('layout', { title: 'Sigfrid Stjärnholm', root: path.join(__dirname, 'public') });
})

//projects
app.get('/projects/bachelor_project', (req, res) => {
    res.render('projects/bachelor', { title: 'Sigfrid Stjärnholm', root: path.join(__dirname, 'public') });
})

// app.use('/', IndexRoutes);
// app.use('/projects', ProjectsRoutes);



// Error handling

module.exports = app;