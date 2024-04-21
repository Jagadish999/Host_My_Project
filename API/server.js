const app = require('./index');
const PORT = 4000;

app.listen(PORT, ()=> {
    console.log('SERVER RUNNING IN PORT ' + PORT);
});