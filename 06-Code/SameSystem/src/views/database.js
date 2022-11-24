const mongose = require('mongose');

mongose.connect('mongodb://localhost/product-db-app',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

    then(db => console.log('DB is connected') )
   .catch(err => console.error(err));