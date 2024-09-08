"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume content
    var resumeContent = "\n        <h3 class=\"editable\" contenteditable=\"true\">".concat(name, "</h3>\n        <p class=\"editable\" contenteditable=\"true\">Email: ").concat(email, "</p>\n        <p class=\"editable\" contenteditable=\"true\">Phone: ").concat(phone, "</p>\n        <h4>Education</h4>\n        <p class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n        <h4>Work Experience</h4>\n        <p class=\"editable\" contenteditable=\"true\">").concat(workExperience, "</p>\n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li class=\"editable\" contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Display the generated resume
    document.getElementById('resume-content').innerHTML = resumeContent;
    // Generate URL
    var resumeURL = "https://".concat(username, ".vercel.app/resume"); // Simulated URL
    document.getElementById('resume-url').textContent = resumeURL;
    // Show share link and download button
    document.getElementById('share-link').style.display = 'block';
    document.getElementById('download-pdf').style.display = 'inline';
    // Log for debugging
    console.log("Resume content generated:", resumeContent);
    console.log("Resume URL generated:", resumeURL);
    // Make sections editable
    makeSectionsEditable();
});
// Function to enable editing of resume sections
function makeSectionsEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            // Optional: Add any validation or saving logic here on focus out
        });
    });
}
// Download PDF function
(_b = document.getElementById('download-pdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var element = document.getElementById('resume-content');
    if (element) {
        (0, html2pdf_js_1.default)()
            .from(element)
            .save("".concat(document.getElementById('username').value, "_resume.pdf"));
    }
});
