# 20 12 09 JS Object Literals Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Review
1. Declare a function `userGreeting` that accepts on parameter `userName` and outputs the message `Hello [NAME]` using the parameter `userName`.
2. Call the function and check output in the browser.

## Lecture 
1. Declare an Object using Object Literal Notation
    - Declare a variable `bootcampInstructor` with properties `name`, `experience`, and `responsibility` and values `Kevin`, `15`, and `curriculum` respectively.
    - Output the object in the console
1. Output Property Values using Dot Notation
    - Output the name value of the `bootcampInstructor` object in the message "Bootcamp Instructor Name : [NAME]"
    - Output the experience value of the `bootcampInstructor` object in the message "Bootcamp Instructor Experience : [EXPERIENCE]"
    - Output the responsibility value of the `bootcampInstructor` object in the message "Bootcamp Instructor Responsibility : [RESPONSIBILITY]"
    - Declare a function that takes an instructor object and outputs the message "Name : [NAME] Experience : [EXPERIENCE] Responsibility : [RESPONSIBILITY]
    - Call the function passing in the `bootcampInstructor`
    - Declare two more instructor objects and pass them into the function defined above
1. Declaring an Array of Objects
    - Declare an array `instructors` and add all three instructor objects 
    - Iterate through the array of instructors calling the function defined above to output the properties of each instructor 
    - Output the total number of instructors
    - Output the number of instructors in the array with experience over 5 by iterating through the array and updating a counter on condition
1. Declare an Object using Object Literal Notation
    - Prompt the user to enter their favorite book title, author, and year released
    - Declare a variable `favBook` with properties `title`, `yearPublished`, and `author` with the values from the user
    - Output all properties in one console log.
