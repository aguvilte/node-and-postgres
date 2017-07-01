const express = require('express');
      cors = require('cors');
      app = express();

var db = require('./queries');

app.get('/api/user', db.getAllUsers);
app.get('/api/user/:id', db.getUserById);
// app.post('/api/blog', db.createUser);
// app.put('/api/blog', db.updateUser);
// app.delete('/api/blog', db.removeUser);

app.listen(3000, err => {
  console.log('Server listening on port 3000');
});
