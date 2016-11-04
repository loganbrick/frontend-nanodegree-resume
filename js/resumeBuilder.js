var bio = {
  "name": "Logan Brick",
  "role": "Electrical Engineer",
  "contacts": {
    "mobile": "608-425-8243",
    "email": "logan.brick@gmail.com",
    "github": "https://github.com/loganbrick",
    "twitter": "@LoganBrick",
    "location": "Madison, WI"
  },
  "welcomeMessage": "Hello, and welcome to my resume!",
  "skills": [
    "Electrical Design", "Software Design", "IT Management"
  ],
  "biopic": "images_src/LBResized.jpg",

  "display": function() {

    //Define the variable for the Bio display
    var formattedBioName;
    var formattedBioRole;
    var bioContactType;
    var formattedContact;
    var formattedBioPic;
    var formattedSkill;
    var formattedWelcome;

    // Insert my bio name so that skills can be displayed
    formattedBioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedBioName);

    //Insert my bio role
    formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name").after(formattedBioRole);


    //Insert my bio's contacts. len is dependent on the amount of bio.contacts keys--avoiding for-in
    for (var contact = 0, len = Object.keys(bio.contacts).length; contact < len; contact++) {

      //Get the contact name using Object keys
      bioContactType = Object.keys(bio.contacts)[contact];
      //Replace both the contact name (type) and the contact data
      formattedContact = HTMLcontactGeneric.replace("%contact%", bioContactType).replace("%data%", bio.contacts[bioContactType]);
      //Append the contact information to the resume
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }

    //Add the welcome message
    formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    //Add the bio picture
    formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    // Add skills if there are any!
    $("#header").append(HTMLskillsStart);
    for (var skill = 0, len = bio.skills.length; skill < len; skill++) {

      formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

var education = {
  "schools": [{
    "name": "University of Wisconsin, Madison",
    "location": "Madison, Wisconsin",
    "degree": "Bachelors of Science",
    "majors": ["Electrical Engineering"],
    "dates": "2010 - 2014",
    "url": "http://wisc.edu"
  }],

  "onlineCourses": [{
    "title": "Frond-End Web Developer Nanodegree",
    "school": "Udacity.com",
    "dates": "September, 2015 - Present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }],

  "display": function() {

    //Define education variable
    var formattedEducationName;
    var formattedEducationLocation;
    var formattedEducationDegree;
    var formattedEducationMajors;
    var formattedEducationDates;
    var formattedEducationURL;
    var formattedEducationSchool;

    for (var school = 0, len = education.schools.length; school < len; school++) {

      //Append a new school
      $("#education").append(HTMLschoolStart);

      //Set all the variables to formatted version of the current school's elements
      formattedEducationName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      //Append each school variable to the education section
      $(".education-entry:last").append(formattedEducationName);
      $(".education-entry:last").append(formattedEducationDegree);
      $(".education-entry:last").append(formattedEducationDates);
      $(".education-entry:last").append(formattedEducationLocation);

      //Majors requires additional logic because it is an array
      for (var major = 0, len2 = education.schools[school].majors.length; major < len2; major++) {
        formattedEducationMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedEducationMajors);
      }

    }

    //Start the Online Courses section
    $("#education").append(HTMLonlineClasses);

    for (var course = 0, len = education.onlineCourses.length; course < len; course++) {

      //Append a new online course
      $("#education").append(HTMLschoolStart);

      //Set the online course variables
      formattedEducationName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedEducationSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      formattedEducationDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      fromattedEducationURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

      //Append each online course variable
      $(".education-entry:last").append(formattedEducationName);
      $(".education-entry:last").append(formattedEducationSchool);
      $(".education-entry:last").append(formattedEducationDates);
      $(".education-entry:last").append(formattedEducationURL);
    }

  }
};

var work = {
  "jobs": [{
    "employer": "TranSmart Technologies, Inc.",
    "title": "Electrical Engineer",
    "location": "Chicago, IL",
    "dates": "February 2015 - Present",
    "description": "An electrical engineering position performing electrical design, software design, and information technology management."
  }, {
    "employer": "Brickworks, LLC",
    "title": "Assistant Handy Man",
    "location": "Dodgeville, WI",
    "dates": "May, 2014 - Present",
    "description": "A handy man position with my family's business."
  }, {
    "employer": "Library Technology Group",
    "title": "IT Helpdesk Technician",
    "location": "Madison, WI",
    "dates": "May, 2011 - May, 2014",
    "description": "A helpdesk position with the University of Wisconsin-Madison's Library Technolgy Group."
  }, ],

  "display": function() {

    //Define a variable for each element of the Work section
    var formattedWorkEmployer;
    var formattedWorkTitle;
    var formattedWorkLocation;
    var formattedWorkDates;
    var formattedWorkDescription;

    //For as long as a job remains in the jobs array, add it to the page
    for (var job = 0, len = work.jobs.length; job < len; job++) {

      //Append a new work experience
      $("#workExperience").append(HTMLworkStart);

      //Set all the variables to formatted version of the current job's elements
      formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      //Append each job variable to the work experience section
      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
};

var projects = {
  "projects": [{
    "title": "Animal Trading Card",
    "dates": "September, 2016",
    "description": "A trading card featuring my favorite animal!",
    "images": ["images_src/TCResized.png"]
  }, {
    "title": "Portfolio Site",
    "dates": "October, 2016",
    "description": "The future location of my web development portfolio.",
    "images": ["images_src/PSResized.png"]
  }],

  "display": function() {

    for (var project = 0, len = projects.projects.length; project < len; project++) {

      //Create project variables
      var formattedProjectTitle;
      var formattedProjectDates;
      var formattedProjectDescription;
      var formattedProjectImages;

      //Append a new project
      $("#projects").append(HTMLprojectStart);

      //Define project variables
      formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

      //Append the projects
      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      //Project images requires additional logic because it is an array
      for (var image = 0, len2 = projects.projects[project].images.length; image < len2; image++) {
        formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImages);
      }

      console.log(project);
    }
  }
};

//Call display functions
bio.display();
education.display();
work.display();
projects.display();

//Add the interactive map!
$("#mapDiv").append(googleMap);