//**HEADER & BIO SECTION**

var bio = {
  "name" : "Laurel Hechanova",
  "role" : "Designer, Developer",
  "contact" : {
    "mobile" : "+1 773 319 2325",
    "email" : "laurel@thisisaok.com",
    "twitter" : "twitter.com/hechanova",
    "github" : "github.com/hechanova",
    "blog" : "blog.thisisaok.com",
    "location" : "San Francisco, CA"
  },
  "bioPic" : "images/laurelhechanova.jpg",
  "welcomeMsg" : "Hello. Thanks for stopping by.",
  "skills" : ["Design", "Development", "Illustration"]
};

bio.display = function (){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#title").prepend(formattedRole);
    $("#title").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace(/#|%data%/g, bio.contact.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace(/#|%data%/g, bio.contact.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedBlog = HTMLblog.replace(/#|%data%/g, bio.contact.blog);
    $("#topContacts").append(formattedBlog);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcome);
};
bio.display();

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
};

//**WORK SECTION**

var work =
  {
    "jobs" :
      [
        {
          "employer" : "Findery",
          "title" : "Product Designer",
          "dates" : "2013 - Present",
          "location" : "San Francisco, CA",
          "description" : "UI and UX design for iOS, Android and web apps",
          "url" : "http://www.findery.com"
        },
        {
          "employer" : "Freelance",
          "title" : "Designer",
          "dates" : "2011 - 2013",
          "location" : "Chicago, IL",
          "description" : "UI and graphic design for small businesses and non-profits",
          "url" : "http://www.thisisaok.com"
        },
        {
          "employer" : "mStoner",
          "title" : "Designer",
          "dates" : "2007 - 2011",
          "location" : "Chicago, IL",
          "description" : "UI and graphic design for colleges and universities",
          "url" : "http://www.mstoner.com"
        }
      ]
  };


work.display = function(){
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDate);
    var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDesc);
  }
};
work.display();


//**PROJECTS SECTION**

var projects =
  {
    "projects" :
    [
      {
        "title" : "Findery iOS app",
        "dates" : "2013 - 2014",
        "description" : "iOS application that allows people to attach content to geographic coordinates",
        "images" : ["images/fi01.png", "images/fi02.png", "images/fi03.png"],
        "url" : "https://itunes.apple.com/us/app/findery-discover-share-destinations/id597596497?mt=8"
      },
      {
        "title" : "Findery Android app",
        "dates" : "2014",
        "description" : "Android application utilizing Findery's platform",
        "images" : ["images/fa01.jpg", "images/fa02.jpg", "images/fa03.jpg"],
        "url" : "https://play.google.com/store/apps/details?id=com.twobkco.findery&hl=en"
      },
      {
        "title" : "Desktop Wallpaper",
        "dates" : "2012",
        "description" : "iOS application that allows users to buy and sell designer clothing",
        "images" : ["images/il01.jpg", "images/il02.jpg", "images/il03.jpg"],
        "url" : "http://swsii.tumblr.com"
      }
    ]
  };

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var newTitle = HTMLprojectTitle.replace("#", projects.projects[project].url);
    var formattedTitle = newTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

//**EDUCATION SECTION**

var education =
  {
    "schools" :
    [
      {
        "name" : "Columbia College Chicago",
        "location" : "Chicago, IL",
        "degree" : ["BFA"],
        "dates" : 2005,
        "major" : "Graphic Design"
      },
      {
        "name" : "University of Guam",
        "location" : "Mangilao, GU",
        "dates" : 2000,
        "degree" : ["BFA"],
        "major" : ["Fine Arts"]
      }
    ],
    "online" :
    [
      {
        "title" : "Front-End Web Dev Nanodegree",
        "school" : "Udacity",
        "dates" : 2014,
        "url" : "http://www.udacity.com/course/ud804"
      }
    ]
  };

education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);

    var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDate);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  };

  // for(course in education.onlineCourses){
  //
  //   var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
  //   var formattedTitle = title.replace("#", education.onlineCourses[course].url);
  //   var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
  //   $(".education-entry:last").append(formattedTitle + formattedSchool);
  //
  //   var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
  //   $(".education-entry:last").append(formattedDates);
  // }


  for(online in education.online) {

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    // online classes section

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);

    // combines the School and Degree
    var formattedOnlineHeading =  formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineHeading);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);
  }
};
education.display();

// onlineCourses.display = function(){
//   for(course in education.onlineCourses){
//     $("#education").append(HTMLonlineClasses);
//
//     var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
//     $(".education-entry:last").append(formattedTitle);
//
//     var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
//     $(".education-entry:last").append(formattedSchool);
//
//     var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
//     $(".education-entry:last").append(formattedDates);
//
//     var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
//     $(".education-entry:last").append(formattedURL);
//   }
// };
// onlineCourses.display();

//**MAP**

$("#mapDiv").append(googleMap);

//**INT'L BUTTON**

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//**FOOTER CONTACTS**

// $("#footerContacts").append(formattedMobile);
// $("#footerContacts").append(formattedEmail);
// $("#footerContacts").append(formattedTwitter);
// $("#footerContacts").append(formattedGithub);
