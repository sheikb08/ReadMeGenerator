const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How can your project be utilized?",
        name: "usage"
    },
    {
        type: "list",
        message: "Select license",
        name: "license",
        choices: [
            "ISC",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What were the contributors of this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How did you test your project?",
        name: "test"
    },
    
    {
        type: "input",
        message: "Your Github username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
        console.log("Successful");
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function({
      title, 
      description, 
      installation,
      usage, 
      license, 
      contributors, 
      test, 
      username, 
      email}) {
        if (
        title !== "" && 
        description !== "" && 
        installation !=="" &&
        usage !=="" && 
        license !=="" && 
        contributors !=="" && 
        test !=="" && 
        username !=="" &&
        email !=="") {
            // console.log(generateMarkdown({
         

            writeToFile("README.md", generateMarkdown({
              title, 
              description, 
              installation,
              usage, 
              license, 
              contributors, 
              test, 
              username, 
              email}));
        }
        else {
            console.log("Please complete the form in its entirety!");
            init();
        }
    })

}

// function call to initialize program
init();
