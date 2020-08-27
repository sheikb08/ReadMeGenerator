// function to generate markdown for README
function generateMarkdown(data) {

  let license = data.license;
  let licenseName = "";
  let badge = "";
  
  if(license === "None")
    licenseName = "This project has no license";
  else{
    licenseName = "This project is licensed under the "+license;
    
    switch(license){
      case "ISC License" : 
  
        badge = "https://img.shields.io/badge/License-ISC-blue.svg";
        break;

      case "Apache License 2.0" : 
        
        badge = "https://img.shields.io/badge/license-Apache--2.0-blue";
        break;

      case "BSD 3 License" : 

        badge = "https://img.shields.io/badge/license-BSD%203-green";
        break;

      default :
        badge = "https://img.shields.io/badge/License-ISC-blue.svg";
    }
  }
  



  
  return `# ${data.title}  ![Github License](${badge})

  

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
* ${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Test
${data.test}

Contact Information:
Github: https://github.com/${data.username}

`;}

module.exports = generateMarkdown;
