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

//export
module.exports = generateMarkdown;