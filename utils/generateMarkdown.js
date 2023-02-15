// function to generate markdown for README
function generateMarkdown(data) {
  //switch statement to select correct licence badge and notice depending on input
  let badge;
  let licenseNotice;

  switch (data.license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseNotice = "This application is covered under the MIT license.";
      break;
    case "Apache 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseNotice =
        "This application is covered under the Apache 2.0 license.";
      break;
    case "GPL 3.0":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseNotice = "This application is covered under the GPL 3.0 license.";
      break;
    case "BSD 3":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseNotice = "This application is covered under the BSD 3 license.";
      break;
    default:
      badge = "";
      licenseNotice = "This application does not have a license.";
  }

  return `
  
  ${badge}

  # ${data.title}

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

   ${data.credits}

  ## License 
  
  ${licenseNotice}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  My Github profile [click here](https://github.com/${data.githubUsername})

  Contact me by email with any questions at ${data.email}

`;
}
module.exports = generateMarkdown;
