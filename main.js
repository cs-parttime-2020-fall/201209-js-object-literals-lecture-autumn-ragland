// console.log("20 12 09 JS Object Literals Lecture"); // sanity check

// REVIEW
// Declare a function userGreeting that accepts one parameter userName and outputs the message Hello [NAME] using the parameter userName.
function userGreeting(userName){
    console.log(`Hello ${userName}`);
}
// Call the function and check output in the browser.
// userGreeting("Autumn");

// LECTURE
// [1] Declare an Object using Object Literal Notation ---------------------------------

// Declare a variable bootcampInstructor with properties name, experience, and responsibility and values Kevin, 15, and curriculum respectively.
let bootcampInstructor = {
    name : "Kevin",
    experience : 15,
    responsibility : "curriculum"
}

// Output the object in the console
console.log(bootcampInstructor);


// [2] Output Property Values using Dot Notation ---------------------------------
// // Output the name value of the bootcampInstructor object in the message "Bootcamp Instructor Name : [NAME]"
// console.log(bootcampInstructor.name);
// console.log(`Bootcamp Instructor Name : ${bootcampInstructor.name}`);

// // Output the experience value of the bootcampInstructor object in the message "Bootcamp Instructor Experience : [EXPERIENCE]"
// console.log(bootcampInstructor.experience);
// console.log(`Bootcamp Instructor Experience : ${bootcampInstructor.experience}`);

// // Output the responsibility value of the bootcampInstructor object in the message "Bootcamp Instructor Responsibility : [RESPONSIBILITY]"
// console.log(bootcampInstructor.responsibility);
// console.log(`Bootcamp Instructor Responsibility : ${bootcampInstructor.responsibility}`);

// Declare a function that takes an instructor object and outputs the message "Name : [NAME] Experience : [EXPERIENCE] Responsibility : [RESPONSIBILITY]
function printInstructor(instructor){
    console.log(`Name : ${instructor.name}\nExperience : ${instructor.experience}\nResponsibility : ${instructor.responsibility}`);
}
// // Call the function passing in the bootcampInstructor
// printInstructor(bootcampInstructor);
// Declare two more instructor objects
let partTimeProgramInstructor = {
    name : "Autumn",
    experience:  2,
    responsibility : "Grading and Supplemental Material"
}
console.log(partTimeProgramInstructor);
let alumniInstructor = {
    name : "Kenn",
    experience : 10,
    responsibility : "Alumni Engagement"
}
console.log(alumniInstructor);
// // and pass them into the function defined above
// printInstructor(partTimeProgramInstructor);
// printInstructor(alumniInstructor);

// [3] Declaring an Array of Objects ---------------------------------
// Declare an array instructors and add all three instructor objects
let instructors = [bootcampInstructor, partTimeProgramInstructor, alumniInstructor];
console.log(instructors);

// Iterate through the array of instructors calling the function defined above to output the properties of each instructor
for(let i = 0; i < instructors.length; i++){
    printInstructor(instructors[i]);
}

// Output the total number of instructors
console.log(`Total number of instructors ${instructors.length}`);

// Output the number of instructors in the array with experience over 5 by iterating through the array and updating a counter on condition
let XP = 0; // declare a counter
// iterate through array elements
for(let i = 0; i < instructors.length; i++){
    // if instructor's experience value is greater than 5
    if(instructors[i].experience > 5){
        // check that logic is good so far
        // console.log("XP greater than 5"); 
        XP = XP + 1; // update the value of the counter
    }
}
// output updated value for XP
console.log(`Total number of instructors with XP over 5 : ${XP}`); 

// [4] Declare an Object using Object Literal Notation ---------------------------------
// Prompt the user to enter their favorite book title, author, and year released
let userTitle = prompt("What is the name of your favorite book?");
let userAuthor = prompt("Who is the author of your favorite book?");
let userYear = prompt("What year was your favorite book released?");

// Declare a variable favBook with properties title, yearPublished, and author with the values from the user
let favoriteBook = {
    title : userTitle,
    author : userAuthor,
    yearPublished : userYear
}

// Output all properties in one console log.
console.log(`Book Title : ${favoriteBook.title}\nBook Author : ${favoriteBook.author}\nYear Published : ${favoriteBook.yearPublished}`);