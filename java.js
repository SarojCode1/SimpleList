// function  checkDriverAge() {
//     var age = prompt ("what is your age");
//     if (Number (age)< 18){
//         alert("Sorry you are too young to drive. Pwering off");
//     }
//     else if(Number(age) === 18){
//         alert("Congratulation on your first year of Driving. Enjoy your ride!");
//     }
//     else if(Number(age)> 18){
//         alert("powering on Enjoy your Ride!");
//     }
// }

// var checkDriverAge2 = function(){
//     var age = prompt ("what is your age");
//     if (Number (age)< 18){
//         alert("Sorry you are too young to drive. Pwering off");
//     }
//     else if(Number(age) === 18){
//         alert("Congratulation on your first year of Driving. Enjoy your ride!");
//     }
//     else if(Number(age)> 18){
//         alert("powering on Enjoy your Ride!");
//     }
// }
// function checkDriverAge(age){
//     if(Number(age)< 18){
//         return" Sorry, you  are too young to drive";
//     }
//     else if (Number(age)>18){
//         return"powering on. Enjoy your ride!";
//     }
//     else if (Number(age) === 18){
//         return"congratulation on your first year of driving. Enjoy the ride!";
//     }
// }
// var list = ["man", "women", "child"];
// console.log(list[2]);
//   var list = ["tiger","apple", "cat" ];
// console.log(list[1]);

// var list=["Banana", "Apple", "Oranges","Blueberries"];
// list.shift();
//  list.sort();
// list.push("Kiwi");
// list.splice(0, 2,);
// list.reverse();

// var login = {

// username :  "saroj",
// password: "2444",
// age:"23",
// keywods :["run","dark"]

// // };
// // var list = [
// //     {
// //         username: " maya",
// //         password: "secret"
// //     },
// //     {
// //         username: "Man",
// //         password: "top"
// //     }

// // ];
// var database = [
//     {
//         username:  "saroj",
//         password: "getin"
//     },
//     {
//         username:  "maya",
//         password: "123"
//     },
//     {
//         username:  "sally",
//         password: "897"
//     }
// ];
// var newsFeed = [
//     {
//         username: "Boby",
//         timeline: "I am soo tired"
//     },
//     {
//         username:"sally",
//         timeline:" this is okya"
//     }
// ];
// function isusernameValid(username, password){
//     for( var i = 0; i< database.length; i++){
//         if(database[i].username === username && 
//             database[i].password === password){
//             return true;
//         }
//     }
// return false;
// }
// function signin(username, password){
//     if(isusernameValid(username, password)){
//         console.log(newsFeed);

//     } else{
//         alert("sorry your username and password is invalid");
//     }
// }
// var userNamePrompt = prompt("what is your username");
// var passwordPromt = prompt("What is your password");
//     signin(userNamePrompt, passwordPromt);

// var todos =[
//     "clean",
//     "wash",
//     "cook",
//     "eat"
// ];
// for( var i = 0; i<todos.length; i++){
//     // console.log(todos[i] + "!");
//     todos[i] = todos[i] + "!"
//     console.log(todos);
// }
// todos.forEach(function(todo,i){
//     console.log(todos, i); 
// })

// var count = 0;
// while(count <  4){
//     console.log(count);
//     count++
// }

// var counttwo = 10
// do {
//     console.log(counttwo);
//     counttwo --;

// } while(counttwo > 0);
// var button = document.getElementsByTagName("button")[0]
// button.addEventListener("mouseenter", function(){
//     console.log("Click!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
// Select all existing li elements
var existingLis = document.querySelectorAll("ol li");
// giving the function the length of tthe inpuut 
function inputLength(){
    return input.value.length;
}

// Iterate through the li elements
existingLis.forEach(function(li) {
    // Create a delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    // Append the delete button to the li element
    li.appendChild(deleteBtn);
    // Add an event listener to the delete button
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
});
// adding the entered item to the bottom of the list 
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteBtn);
    ol.appendChild(li);
    input.value = "";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
}
function addlistAfterClick(){
    if ( inputLength () > 0){
        createListElement();
    }
}
function addlistAfterKeypress(){
    if ( inputLength ()> 0 && event.keyCode === 13){
        createListElement();
    }
}
    button.addEventListener("click", addEventListener);
    input.addEventListener("keypress", addlistAfterKeypress);

