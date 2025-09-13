import 'package:flutter/material.dart';

//SOCIAL MEDIA LINKS
const String MAIL_ID = "souvikghosh687@gmail.com";
const String LINKEDLN_URL = "https://www.linkedin.com/in/iamsouviki";
const String GITHUB_URL = "https://github.com/iamsouviki";
const String TWITTER_URL = "https://twitter.com/iamsouviki";
const String INSTAGRAM_URL = "https://www.instagram.com/iamsouviki";
const String FACEBOOK_URL = "https://fb.com/iamsouviki";

//INTRODUCTION PAGE VARIABLE
const String NAME = "Souvik Ghosh";
const String PROFESSION_DETAILS =
    "Full-Stack Android Developer specializing in Core Java, Spring Boot, and Flutter, "
    "with expertise in developing end-to-end mobile solutions. Experienced in building "
    "robust backend systems with Java Spring Boot and MySQL, while creating responsive "
    "front-end interfaces with Flutter and Android (Java). Proficient in version control "
    "with Git and implementing complete SDLC for scalable applications.";

//IMAGE ASSET PATH
const String IMAGE_PATH = 'assets/images/souvikimagepassport.jpg';

//ABOUT ME SECTION
const String WHO_AM_I =
    "A passionate Full-Stack Android Developer with expertise in Core Java, Spring Boot, "
    "and Flutter development. I specialize in creating seamless mobile experiences with "
    "robust backend support. My technical stack includes:\n\n"
    "• Backend: Java Spring Boot, REST APIs, MySQL\n"
    "• Mobile: Android (Java), Flutter (Cross-platform)\n"
    "• Tools: Git, Android Studio, IntelliJ IDEA\n\n"
    "I enjoy tackling complex technical challenges and delivering scalable solutions that "
    "enhance user experience and system efficiency. When not coding, I love exploring new "
    "technologies and contributing to open-source projects.";

//EDUCATION
const String DEGREE =
    "Bachelor of Technology in Computer Science & Engineering (2017-2021)";
const String COLLEGE_NAME = "Saroj Mohan Institute Of Technology";
const String CGPA = "DGPA: 8.22";

const String TWELVETH_SCHOOL = "Katwa Bharati Bhaban";
const String TWELVETH_PERCENTAGE = "Percentage: 73.6%";

const String TENTH_SCHOOL = "Purulia Mahendra Vidyapith";
const String TENTH_PERCENTAGE = "Percentage: 85.71%";

//SKILLS
const List<String> Skills = [
  "Core Java",
  "Spring Boot",
  "Flutter",
  "Android (Java)",
  "MySQL",
  "Git",
  "RESTful APIs",
  "Dart",
  "Hibernate",
  "Maven",
  "JSON",
  "XML"
];

const Map<String, double> SkillPercentages = {
  "Core Java": 95.0,
  "Spring Boot": 90.0,
  "Flutter": 85.0,
  "Android (Java)": 90.0,
  "MySQL": 85.0,
  "Git": 90.0,
  "RESTful APIs": 88.0,
  "Dart": 85.0,
  "Hibernate": 80.0,
  "Maven": 75.0,
  "JSON": 90.0,
  "XML": 85.0,
};

//Experiences
const List<Map<String, String>> Experiences = [
  {
    "CompanyLogoPath": 'assets/images/tcslogo.jpeg',
    "CompanyName": "Tata Consultancy Services (TCS)",
    "WorkDescription": "Full-Stack Android Developer",
    "WorkDetails":
        "Developed end-to-end Android applications using Core Java and Spring Boot. "
            "Created RESTful APIs and managed MySQL databases. Implemented CI/CD pipelines "
            "using Git and delivered full-stack solutions for enterprise clients.",
    "WorkDuration": "Oct 2021 - Present"
  }
];

// UI Constants for Modern Design
const Color primaryColor = Colors.blue;
const Color secondaryColor = Colors.blueAccent;
const Color surfaceColor = Color(0xFF121212);
const Color backgroundColor = Colors.black;
const Color textPrimary = Colors.white;
const Color textSecondary = Colors.grey;

const TextStyle headingStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.bold,
  fontSize: 28,
  color: textPrimary,
);

const TextStyle subHeadingStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w500,
  fontSize: 20,
  color: textPrimary,
);

const TextStyle bodyStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.normal,
  fontSize: 16,
  color: textSecondary,
  height: 1.5,
);

const TextStyle skillStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w500,
  fontSize: 14,
  color: textPrimary,
);

// Spacings
const double smallPadding = 8.0;
const double mediumPadding = 16.0;
const double largePadding = 24.0;
const double cardElevation = 4.0;
const double borderRadius = 12.0;
