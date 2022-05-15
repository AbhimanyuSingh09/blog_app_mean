const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const url = "mongodb://localhost/127.0.0.1:27017/Myapp";
mongoose.connect(url ,{ 

 useNewUrlParser: true,
 useUnifiedTopology: true
})
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
module.exports =  mongoose;