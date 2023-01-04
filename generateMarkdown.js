// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
  return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">\n`;
} else {
  return "";
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if('') {
     return `[go to license](#License)\n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
  This project is licensed under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  #Table of Contents
  <div><a href="Description">Description</a></div>
  <div><a href="Installation">Installation</a></div>
  <div><a href="Usage">Usage</a></div>
  <div><a href="Contribution">Contribution</a></div>
  <div><a href="Tests">Tests</a></div>
  <div><a href="Questions">Questions</a></div>
  

  ## [Installation] 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribution 
  ${data.contribution}
  ## Tests 
  ${data.tests}
  ##Questions 
  If there's any questions, here is my contact info:
  [GitHub] (https://github.com/${data.githubUsername});
  [Email: ${data.email}] ()
  ${renderLicenseLink(data.license)}`;
  
  

}

module.exports = generateMarkdown;
