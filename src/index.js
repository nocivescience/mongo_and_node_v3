const path= require('path')
const app=require('express')();
//settings
app.set('port', process.env.PORT||3000);

app.listen(
    app.get('port'),console.log('servidor en ', app.get('port'))
);
