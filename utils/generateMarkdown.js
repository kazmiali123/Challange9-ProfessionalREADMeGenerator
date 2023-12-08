// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return './images/apglv3.JPG';
    break;
    
    case 'GNU GPLv3':
      return './images/gplv3.JPG';
    break;
          
    case 'GNU LGPLv3':
      return './images/lpglv3.JPG';
    break;

    case 'Mozilla Public License 2.0':
      return './images/mpl2-0.JPG';
    break;

    case 'Apache License 2.0':
      return './images/apachel2-0.JPG';
    break;

    case 'MIT License':
      return './images/mitl.JPG';
    break;
    
    default:
      return "";
    
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
    break;
    
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    break;
          
    case 'GNU LGPLv3':
      return 'https://choosealicense.com/licenses/lgpl-3.0/';
    break;

    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    break;

    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    break;

    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';
    break;

    default:
      return "";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section;
  switch (license) {
    case 'GNU AGPLv3':
      section = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.';
    break;
    
    case 'GNU GPLv3':
      section = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
    break;
          
    case 'GNU LGPLv3':
      section = 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.';
    break;

    case 'Mozilla Public License 2.0':
      section = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
    break;

    case 'Apache License 2.0':
      section = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;

    case 'MIT License':
      section = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;

    default:
      return "";
  }

  return section;
} 

// function to generate markdown for README and calls the above functions for generating a badge, a link, and a section for the license. 
function generateMarkdown(data) {  
  let licenseBadge = renderLicenseBadge(data.licenseType);
  let licenseLink = renderLicenseLink(data.licenseType);
  let licenseSection = renderLicenseSection(data.licenseType);
  
  // retuns a string literal that will be used to create the README.md 
  return `
# ${data.projectTitle} 

![${data.licenseType}](${licenseBadge})

## Description
${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installInstructions}

## Usage
${data.usageInformation}

## Contributing
${data.contributionGuidelines}

## Test
${data.testInstructions}

## License
[${data.licenseType}](${licenseLink})

![${data.licenseType}](${licenseBadge})

${licenseSection}

## Questions
GitHub Page
[${data.gitUserName}](https://github.com/${data.gitUserName})

Email Contact

${data.emailAddress}

For any further questions on the application please use the email provided above to contact the development team.
`;

}

// export the generateMarkdown function from this js file to be used inside the index.js
module.exports = {
  generateMarkdown: generateMarkdown
};

