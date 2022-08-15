//Install express server
const { stripGeneratedFileSuffix } = require('@angular/compiler/src/aot/util');
const express = require('express');
const path = require('path');
const { send } = require('process');
const app = express();
let app_path = '';
// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/sinaregt')));
app.get('*', (req,res)=> {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname,'dist/sinaregt/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 7020, console.log(process.env.PORT || 7020));