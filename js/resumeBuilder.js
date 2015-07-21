var bio = {
	"name": "Steve Corley",
	"role": "....Moving from Web Development to Web Creation",
	"contacts": {
		"mobile": "423-637-8992",
		"email": "stevecorley91@gmail.com",
		"github": "SCorley0901",
		"twitter": "@SteveCorley2",
		"location": "Chattanooga TN 37421"
	},
	"welcomeMessage": "Welcome and thanks for visiting my webpage!!",
	"bioPic": "images/fry.jpg",
	"skills": [
		"RPG4",
		"SQL",
		"Java",
		"HTML / CSS"],

	display:  function() {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header1").append(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header1").append(formattedRole);



		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		if(bio.skills.length > 0) {

			$("#header4").append(HTMLskillsStart);
			for (skill in bio.skills) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skillsH3").append(formattedSkill);
			}
		}

//		I included the commented out code for the pic. I didn't want it in my page.
//		var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//		$("#header1").append(formattedbioPic);





		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
	}
}


// This is the function to animate the skills text.

$(function () {
    $('.tlt').textillate();
})

// Display the bio info
bio.display();


// Work JSON

var work = {
	"jobs": [
		{
			"employer": "Grace Academy",
			"title": "Director of IT / Computer Science Teacher",
			"location": "Chattanooga TN",
			"dates": "August 2014 - Current",
			"description": "Supervise a staff of four to perform all of the IT services and CS teaching for a school of 600. This includes maintenance of of Lan and wireless network, servers, over 150 PCs, and 400 iPads.Teaching responsibilities include classes on Microsoft Office, graphic arts, HTML, CSS, and Python. The IT team also trains teachers to use technology in the classroom."
		},
		{
			"employer": "Woodland Park Baptist Church",
			"title": "Elder/Family Pastor",
			"location": "Chattanooga TN",
			"dates": "January 2009 - July 2014",
			"description": "As a family pastor I had responsibility for both children and student ministries. This included curriculum development, volunteer recruitment and training, and event planning. I had a team of 5 full-time employees, about 50 part-time employees and about 200 volunteers that I was leading."
		},
		{
			"employer": "Great American Deli",
			"title": "Director of IT / Vice President of Operations",
			"location": "Ooltewah TN",
			"dates": "September 1982 - December 2008",
			"description": "I developed all of the software the company used. In the process of that undertaking I was promoted several times. I ultimately ended up as VP of Operations. I was responsible for IT, a plant team of 100 employees and 6 plant managers. We produced over 250,000 packages a week and distributed another 150,000 packages. I also had responsibility for our trucking fleet and drivers."
		}
	],

	display:  function() {

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

// Display the work info
work.display();

// Education JSON
var education = {
	"schools": [
		{
			"name": "University of TN at Chattanooga",
			"location": "Chattanooga TN",
			"degree": "Bachelor of Science",
			"majors": "Physics",
			"dates": "December 1988",
			"url": "https://www.utc.edu"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Nanodegree",
			"majors": "Introduction to Programming",
			"dates": "March 2015 - May 2015",
			"url": "https://www.udacity.com"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Nanodegree",
			"majors": "Frontend Web Developer",
			"dates": "Currently enrolled",
			"url": "https://www.udacity"
		},
		{
			"name": "Capella University",
			"location": "Online",
			"degree": "Classes toward an MBA",
			"majors": "MBA - Management",
			"dates": "2006 - 2007",
			"url": "https://www.capella.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "The Basics of the Web and HTML",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Creating a Structured Document",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "CSS Style and HTML Structure",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Serious Programming - Python",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Variables and Strings",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Python Functions",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Control Flow and Loops: If and While",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Debugging Techniques",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Structured Data: Lists and For Loops",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "How to Solve Problems",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Programming with Objects",
			"school": "Udacity",
			"date": "May 2015",
			"url": "hhttps://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Abstraction",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Using Functions",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Using Classes",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Making Classes",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Networks",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Forms",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Python Break Modulus and Dictionaries",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Working with the Google AppEngine",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Validation",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "HTML Templates",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to Databases",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
		},
		{
			"title": "Introduction to HTML and CSS",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Introduction to JQuery",
			"school": "Udacity",
			"date": "May 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Several classes toward an MBA",
			"school": "Capella University",
			"date": "06012007",
			"url": "https://capella.edu"
		}
	],

	display:  function() {

		if(education.schools.length > 0) {


			for (school in education.schools) {
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
				$(".education-entry:last").append(formattedSchoolName);

				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedSchoolDegree);

				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedSchoolDates);

				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolLocation);

				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedSchoolMajor);

			}
		}

		if(education.onlineCourses.length > 0) {


			for (course in education.onlineCourses) {
				$("#online").append(HTMLonlineClasses);
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				formattedonlineTitle = formattedonlineTitle.replace("#",education.onlineCourses[course].url);
				$("#onlineStart:last").append(formattedonlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				$("#onlineStart:last").append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				$("#onlineStart:last").append(formattedonlineDates);

				var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$("#onlineStart:last").append(formattedonlineURL);

			}
		}
	}
}

//Display Education info
education.display();

//Projects JSON
var projects = {
	"projects": [
		{
			"title": "Measuring the Average Weight of a Raindrop",
			"dates": "Sept 1986 - May 1986",
			"description": "Developed the instrumentation to measure drop counts and volume collected. Interfaced the instrumentation to an analog to digital circuit of my own design. Connected the ADC circuit to a RS232 interface. Wrote the code to collect the data and do the analysis over the course of a thunderstorm",
			"images": "images/freeios7.com_apple_wallpaper_raindrops-blue_iphone4.jpg"
		},
		{
			"title": "Background Radiation  ",
			"dates": "Sept 1987 - May 1987",
			"description": "Developed the instrumentation to measure the background cosmic radiation in the long radio wave wavelengths. Interfaced the instrumentation to the same ADC circuit designed in the raindrop project. Cpnnected the ADC to a RS232 interface. Wrote the code to collect the data and do the analysis over the course of over a month",
			"images": "images/cmb1.jpg"
		},
		{
			"title": "Accounting Software",
			"dates": "Development and Maintenance 1982 - 2008",
			"description": "Wrote all of the accounting software this privately held company used - from scratch. The business was so unique that at that time nothing canned exsisted that would work. The software development included Accounts Receivable, Accounts Payable, Sales Reconciliation and General Ledger. The code started in RPGII and moved to RPGIV over the course of several years. After the initial development I was responsible for updates and maintenance of the software. This included all of the software I wrote over the years.",
			"images": "images/great-american-deli-since-1959-78490888.jpg"
		},
		{
			"title": "Plant Operations",
			"dates": "Development and Maintenance 1983 - 2008",
			"description": "This firm also has a manufacturing plant. This plant would make over 250,000 ready-to-eat food items a week. I wrote all of the software to manage the plant. This included scheduling, human resources, inventory control, ordering, and fulfillment.",
			"images": "images/foodplant.jpg"
		},
		{
			"title": "Quality Control",
			"dates": "Development and Maintenance 1984 - 2008",
			"description": "Ready-to-eat food plants have very unique needs for Quality Control. This plant had huge amounts of QC data that ranged from lab tests to records. I wrote the software to manage the QC process from the lab to the plant floor. This also included data analysis on hundreds of data points collected every day.",
			"images": "images/lab-image.jpg"
		},
		{
			"title": "Vehicle Maintenance",
			"dates": "Development and Maintenance 1984 - 2008",
			"description": "This company owned their own distribution channel. This required over 150 cars, truck, vans, and tractor-trailers. All of the company vehicle records were on paper before I wrote the software to manage this huge expense. The software kept up with all the the maintenance records and scheduled maintenance. It also gave us data analysis to help prevent breakdowns and minimize costs.",
			"images": "images/photo-tractor-trailer.jpg"
		},
		{
			"title": " Handheld Computers on Sales Routes  ",
			"dates": "Implementation, training and maintenance 1996 - 2008",
			"description": "Great American Deli owned 60 sales routes that delivered products to over 5000 stores in 11 states. We needed a solution for assisting sales and get data back from the routes. I was responsible for sourcing, evaluating and implementing a vendor for this solution. Norand did the front-end software including the hardware. I was responsible for integrating with my back-end software. I also also wrote our training materials and did much of the actual training. It was a very successful project.",
			"images": "images/Norand_hero_626px.jpg"
		},
		{
			"title": "iPads for students",
			"dates": "Ongoing....",
			"description": "Implementation of a one to one rollout of iPads to 5th through 12th grade students. This project has involved Wireless upgrades, server upgrades, and education app sourcing. It has involved learning Apache tomcat, OS X server and Casper/JAMF",
			"images": "images/ipads.jpg"
		},
		{
			"title": "Steve's Miniwiki",
			"dates": "April 2015",
			"description": "This project involved developing a application on Google's AppEngine. I focused on making a wiki on the subjects I had been studying in a Udacity Nanodegree. The site is still up at http://miniwiki-961.appspot.com/",
			"images": "images/miniwiki.png"
		},
		{
			"title": "Development of a programming class to high school students",
			"dates": "Ongoing....",
			"description": "I am in the process of developing the curriculum for high school students that have not had any exposure to programming before. I will be teaching this material starting in August. It will included HTML, CSS and Python.",
			"images": "images/Computer_Lab.jpg"
		}
	],
	display:  function() {
		for (project in projects.projects) {
			$(".sp-slides").append(HTMLprojectStartSlide);

			var formattedImage = HTMLprojectSlideImage.replace("%data%", projects.projects[project].images);
			$(".sp-slide:last").append(formattedImage);

			var formattedTitle = HTMLprojectSlideHeading.replace("%data%",projects.projects[project].title);
			$(".sp-slide:last").append(formattedTitle);

			var formattedDates = HTMLprojectSlideDates.replace("%data%",projects.projects[project].dates);
			$(".sp-slide:last").append(formattedDates);

			var formattedDescription = HTMLprojectSlideDescription.replace("%data%",projects.projects[project].description);
			$(".sp-slide:last").append(formattedDescription);

			$(".sp-slide:last").append(HTMLprojectDivClose);


		}
	}
}

//Display projects info
projects.display();



// Display the Google Map
$("#mapDiv").append(googleMap);