var bio = {
  "name" : "Logan Brick",
  "role" : "Electrical Engineer",
  "contacts" : {
    "mobile" : "608-425-8243",
    "email" : "logan.brick@gmail.com",
    "github" : "https://github.com/loganbrick",
    "twitter" : "@LoganBrick",
    "location" : "Madison, WI"
  },
  "welcomeMessage" : "Hello, and welcome to my resume!",
  "skills" : [
    "Electrical Design", "Software Design", "IT Management"
  ],
  "biopic" : "images_src/LBResized.jpg",

  "display": function() {
    // Insert my bio name so that skills can be displayed
    var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedBioName);

    //Insert my bio role
    var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name").after(formattedBioRole);


    //Insert my bio's contacts. len is dependent on the amount of bio.contacts keys
    for (var contact = 0, len = Object.keys(bio.contacts).length; contact < len; contact++) {

      //Get the contact name using Object keys
      var bioContactType = Object.keys(bio.contacts)[contact];
      //Replace both the contact name (type) and the contact data 
      var formattedContact = HTMLcontactGeneric.replace("%contact%", bioContactType).replace("%data%", bio.contacts[bioContactType]);
      //Append the contact information to the resume
      $("#topContacts").append(formattedContact);
    }

    //Add the bio picture
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    // Add skills if there are any!
    $("#header").append(HTMLskillsStart);
    for (var skill = 0, len = bio.skills.length; skill < len; skill++) {

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
}

var education = {
  "schools": {
    "name": "University of Wisconsin, Madison",
    "city": "Madison, Wisconsin",
    "degree": "Bachelors",
    "majors": ["Electrical Engineering"],
    "date": "2010 - 2014",
    "url": "http://wisc.edu"
  },

  "onlineCourses": {
    "title": "Frond-End Web Developer Nanodegree",
    "school": "Udacity.com",
    "dates": "September, 2015 - Present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
}

var work = {
  "jobs": [
    {
      "employer": "TranSmart Technologies, Inc.",
      "title": "Electrical Engineer",
      "dates": "February 2015 - Present",
      "description": "An electrical engineering position performing electrical design, software design, and information technology management."
    },
    {
      "employer": "Brickworks, LLC",
      "title": "Assistant Handy Man",
      "dates": "May, 2014 - Present",
      "description": "A handy man position with my family's business."
    },
    {
     "employer": "Library Technology Group",
      "title": "IT Helpdesk Technician",
      "dates": "May, 2011 - May, 2014",
      "description": "A helpdesk position with the University of Wisconsin-Madison's Library Technolgy Group." 
    },
  ],

  "display": function() {

    //Define a variable for each element of the Work section
    var formattedWorkEmployer;
    var formattedWorkTitle;
    var formattedWorkDates;
    var formattedWorkDescription;

    //For as long as a job remains in the jobs array, add it to the page
    for (var job = 0, len = work.jobs.length; job < len; job++) {

      //Append a new work experience
      $("#workExperience").append(HTMLworkStart);

      //Set all the variables to formatted version of the current job's elements
      formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      
      //Append each job variable to the work experience section
      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

var relevantProjects = {
  "projects": [
    {
      "title": "Animal Trading Card",
      "dates": "September, 2016",
      "description": "A trading card featuring my favorite animal!",
      "images": "images_src/TCResized.png"
    },
    {
      "title": "Portfolio Site",
      "dates": "October, 2016",
      "description": "The future location of my web development portfolio.",
      "images": "images_src/PSResized.png"
    }
  ]
}


bio.display();
work.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(formattedBioName) {
  var myName = formattedBioName.trim("").split(" ");
  myName[1] = myName[1].toUpperCase();

  return myName[0] + " " + myName[1];
}

projects.display = function() {
  for (project in relevantProjects.projects) {
    $("#projects").append(HTMLprojectStart);

    formattedProjectTitle = HTMLprojectTitle.replace("%data%", relevantProjects.projects[project].title);
    formattedProjectDates = HTMLprojectDates.replace("%data%", relevantProjects.projects[project].dates);
    formattedProjectDescription = HTMLprojectDescription.replace("%data%", relevantProjects.projects[project].description);
    formattedProjectImages = HTMLprojectImage.replace("%data%", relevantProjects.projects[project].images);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImages);
  }
}

projects.display();