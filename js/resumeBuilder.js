var awesomeThoughts;
var funThoughts;
var formattedName = HTMLheaderName.replace("%data%", "Logan Brick");
var formattedRole = HTMLheaderRole.replace("%data%", "Electrical Engineer");

awesomeThoughts="I'm Logan, and I am AWESOME MAN REALLY NEAT 100% FUNTIME JAM SESH."
funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

//console.log(awesomeThoughts)
//$("#main").append(funThoughts)

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
  "welcomeMessage" : "Welcome, friend. You're neat. Enjoy it here, dude.",
  "skills" : [
    "Math", "Complete Sobriety", "High-fiving"
  ],
  "bioPic" : "images/fry.jpg"
}

var work = {};
work.position = "Friendly Chum";
work.employer = "My friends";
work.years = "24";

var education = {};
education["name"] = "University of Wisconsin, Madison";
education["years"] = "2010-2014";
education ["city"] = "Madison, Wisconsin";

$("#main").append(work["position"]);
$("#main").append(education.name);

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
