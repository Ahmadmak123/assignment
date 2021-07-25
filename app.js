let itemsArray =  [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}
];
    console.log(itemsArray[0].price * itemsArray[0].quantity)
    console.log(itemsArray[1].price * itemsArray[1].quantity )
    console.log(itemsArray[2].price * itemsArray[2].quantity )
    console.log(itemsArray[3].price * itemsArray[3].quantity )
    console.log("---------------------------------------------")
    console.log(itemsArray[0].price * itemsArray[0].quantity + itemsArray[1].price * itemsArray[1].quantity + itemsArray[2].price * itemsArray[2].quantity + itemsArray[3].price * itemsArray[3].quantity )

// let test = {
//     firstName: "ahmad",
//     email: "@gmail.com",
//     password: "etc",
//     age: "21",
//     gender: "male",
//     city: "karachi",
//     country: "pakistan"
// }

// console.log(test.hasOwnProperty("age"))
// console.log(test.hasOwnProperty("country"))
// console.log(test.hasOwnProperty("firstName"))
// console.log(test.hasOwnProperty("lastName"))

// function Person(firstName,email,password,age,gender,city,country) {
//     this.firstName = firstName,
//     this.email = email,
//     this.password = password,
//     this.age = age,
//     this.gender = gender,
//     this.city = city,
//     this.country = country
// }

// let myData = new Person("ahmad","etc@gmail.com","etc","21","male","karachi","pakistan")
// console.log(myData.firstName);
// console.log(myData.email);
// console.log(myData.password);
// console.log(myData.age);
// console.log(myData.gender);
// console.log(myData.city);
// console.log(myData.country);

function Record2(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
};

 var arr = [];

function getInputValue() {
    var inputrec1 = document.getElementById("name").value;
    var inputrec2 = document.getElementById("gender").value;
    var inputrec3 = document.getElementById("address").value;
    var inputrec4 = document.getElementById("education").value;
    var inputrec5 = document.getElementById("profession").value;
    
    var rec1 = new Record2(inputrec1, inputrec2, inputrec3, inputrec4, inputrec5);
    arr.push(rec);
    localStorage.setItem("rec", JSON.stringify(rec));
              
}