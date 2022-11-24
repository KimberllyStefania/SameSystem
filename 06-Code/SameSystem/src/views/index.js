const express = requiere('express');
const path = requiere('path');
const exphtml = requiere('express-handlebars');
const methodOverride = requiere('method-override');
const session = requiere('express-session');

//Initializations
const app = express();
require('./database');
// setings
//app.set('port, process.env.PORT || 3000');
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', exphtml({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.html'
}));
app.set('view engine', '.html');

// Middlewares
app.use(express.urlendcoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true 
}));
// Global variables
//Routes
app.use(requiere('./routes/index'));
app.use(requiere('./routes/product'));
app.use(requiere('./routes/users'));
//Static Files
app.use(express.static(path.join(__dirname, 'public')));
// Server listenning
app.listen(app.get('port') , () => {
    console.log('Server on port', app.get('port'));
});