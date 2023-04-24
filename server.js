const app = require("./app");

const mongoose = require("mongoose");
mongoose.set = ("strictQuery", true);

// const DB_HOST =
// "mongodb+srv://gera:AclO4nHocOjyqHuu@cluster0.cofqwen.mongodb.net/contacts_reader?retryWrites=true&w=majority";

const { DB_HOST } = process.env;
// for db
// password = AclO4nHocOjyqHuu;
// user=gera
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
