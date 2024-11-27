require('dotenv').config();
global.baseDIR = __dirname;
const express = require('express'),
PORT = process.env.PORT || 3000,
schoolRoute = require('./routes/school'),
app = express();

app.use('/api', schoolRoute);



app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/', schoolRoute);


app.listen(PORT,()=>{
    
})


app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        message: 'Route not found'
    });
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) { 
        res.status(400).json({
            status: false,
            message: 'Invalid JSON format'
        });
    }
});


