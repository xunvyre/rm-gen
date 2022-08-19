//exported function that calls the rest of the document
function generateMarkdown(data)
{
  console.log(data);
  return `${createLicenseBadge(data)}
# ${data.title}
## Description
${data.desc}${generateTOC(data)}${generateInst(data)}${generateUse(data)}${generateLicense(data)}${generateCont(data)}${generateTest(data)}
## Credits
${data.credits}
## Future Development
${data.dev}
## Contact
Please reach out to me with any questions or suggestions!
* Github: [${data.username}](https://github.com/${data.username}/)
* Email: ${data.email}
`;
};

//create the table of contents
const generateTOC = data =>
{
  //if-else statements for defining functions for the toc return
  if (data.toc === true)
  {
    if (data.confirmInst === true)
    {
      returnInst = () => {return `
* [Installation](https://github.com/${data.username}/${data.repo}#installation)`};
    }
    else
    {
      returnInst = () => ""
    }
    if (data.confirmUse === true)
    {
      returnUse = () => {return `
* [Usage](https://github.com/${data.username}/${data.repo}#usage)`};
    }
    else
    {
      returnUse = () => ""
    }
    if (data.confirmCont === true)
    {
      returnCont = () => {return `
* [Contribution](https://github.com/${data.username}/${data.repo}#contribution)`};
    }
    else
    {
      returnCont = () => ""
    }
    if (data.confirmTest === true)
    {
      returnTest = () => {return `
* [Testing](https://github.com/${data.username}/${data.repo}#contribution)`};
    }
    else
    {
      returnTest = () => ""
    }
    if (data.confirmLisence === true)
    {
      returnLisence = () => {return `
* [Lisencing](https://github.com/${data.username}/${data.repo}#contribution)`};
    }
    else
    {
      returnLisence = () => ""
    }
  }
  return `
## Table of Contents
${returnInst()}${returnUse()}
* [Future Development](https://github.com/${data.username}/${data.repo}#future-development)${returnCont()}${returnTest()}${returnLisence()}
* [Credits](https://github.com/${data.username}/${data.repo}#credits)`;
};


//create badge for the top of the readme
const createLicenseBadge = data =>
{
  if (data.confirmLisence === true)
  {
    return `![${data.license} badge.](https://img.shields.io/badge/License-${data.license}-pink.svg)
Made with Xunvyre's README generator ♡`;
  }
  else if (data.confirmLisence === false)
  {
    return `Made with Xunvyre's README generator ♡`;
  }
};

//generate certain sections based on confirmations
const generateInst = data =>
{
  if (data.confirmInst === true)
  {
    return `
## Installation
${data.inst}`;
  }
  else if (data.confirmInst === false)
  {
    return;
  }
};

const generateUse = data =>
{
  if (data.confirmUse === true)
  {
    return `
## Usage
${data.use}`;
  }
  else if (data.confirmUse === false)
  {
    return;
  }
};

const generateCont = data =>
{
  if (data.confirmCont === true)
  {
    return `
## Contribution
${data.cont}`;
  }
  else if (data.confirmCont === false)
  {
    return;
  }
};

const generateTest = data =>
{
  if (data.confirmTest === true)
  {
    return `
## Testing
${data.test}`;
  }
  else if (data.confirmTest === false)
  {
    return;
  }
};

const generateLicense = data =>
{
  if (data.confirmLisence === true)
  {
    return `
## Licensing
[This project is covered under the ${data.license} license.](https://choosealicense.com/licenses/${(data.license).toLowerCase()}/)`;
  }
  else if (data.confirmLisence === true)
  {
    return;
  }
};

//export
module.exports = generateMarkdown;