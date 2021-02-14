const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

class User{
  constructor(){
    this._id = faker.random.number();
    this.Name = faker.name.firstName();
    this.Last_Name = faker.name.lastName();
    this.Phone = faker.phone.phoneNumber();
    this.Email = faker.internet.email();
    this.Password = faker.internet.password();
  }
}

class Companies{
  constructor(){
    this._id = faker.random.number();
    this.Name = faker.company.companyName();
    this.Address = faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.zipCodeByState() + ', ' + faker.address.country();
  }
}



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Companies());
});

const Users = new User();
const Company = new Companies();

app.get("/api/company/new", (req, res) => {

  res.json([new User(), new Companies()]);
});


app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );