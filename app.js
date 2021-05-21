const express = require('express');
const path = require('path');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const IndexRoutes = require('./routes/index');
const ProjectsRoutes = require('./routes/projects');

const app = express();

// i18n
i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
    backend: {
        loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
        order: ['querystring', 'cookie'],
        caches: ['cookie']
    },
    fallbackLng: 'en',
    preload: ['en', 'sv'],
    debug: false // Set to true when debugging
});

app.use(i18nextMiddleware.handle(i18next,  {
    removeLngFromUrl: true
    })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', IndexRoutes);
app.use('/projects', ProjectsRoutes);

app.use(express.static('public'));

// Error handling

module.exports = app;