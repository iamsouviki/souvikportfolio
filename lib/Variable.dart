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

// Modern UI Theme Constants
const Color primaryColor = Color(0xFF6366F1); // Indigo 600
const Color primaryVariant = Color(0xFF4F46E5); // Indigo 700
const Color secondaryColor = Color(0xFF14B8A6); // Teal 500
const Color secondaryVariant = Color(0xFF0D9488); // Teal 600
const Color surfaceColor = Color(0xFF1F2937); // Grey 800
const Color backgroundColor = Color(0xFF111827); // Grey 900
const Color textPrimary = Colors.white;
const Color textSecondary = Color(0xFFB3B3B3); // Grey 400
const Color errorColor = Color(0xFFEF4444); // Red 500
const Color successColor = Color(0xFF10B981); // Emerald 500
const Color buttonShadowColor =
    Color(0x4D4F46E5); // primaryVariant with 0.3 opacity

// Gradients
const LinearGradient primaryGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [primaryColor, primaryVariant],
);
const LinearGradient backgroundGradient = LinearGradient(
  begin: Alignment.topCenter,
  end: Alignment.bottomCenter,
  colors: [backgroundColor, surfaceColor],
);

// Text Styles with Ubuntu font
const TextStyle headingStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w700,
  fontSize: 32,
  color: textPrimary,
  letterSpacing: 0.5,
  shadows: [
    Shadow(
      offset: Offset(0, 2),
      blurRadius: 4,
      color: Colors.black54,
    ),
  ],
);

const TextStyle subHeadingStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w600,
  fontSize: 24,
  color: textPrimary,
  letterSpacing: 0.25,
);

const TextStyle bodyStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w400,
  fontSize: 16,
  color: textSecondary,
  height: 1.6,
  letterSpacing: 0.1,
);

const TextStyle skillStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w500,
  fontSize: 16,
  color: textPrimary,
  letterSpacing: 0.3,
);

const TextStyle buttonTextStyle = TextStyle(
  fontFamily: 'Ubuntu',
  fontWeight: FontWeight.w600,
  fontSize: 16,
  color: textPrimary,
  letterSpacing: 0.5,
);

// Decorations
const BoxDecoration cardDecoration = BoxDecoration(
  color: surfaceColor,
  borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
  boxShadow: [
    BoxShadow(
      color: Colors.black26,
      blurRadius: 8,
      offset: Offset(0, 4),
    ),
  ],
);

const BoxDecoration buttonDecoration = BoxDecoration(
  gradient: primaryGradient,
  borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
  boxShadow: [
    BoxShadow(
      color: buttonShadowColor,
      blurRadius: 6,
      offset: Offset(0, 3),
    ),
  ],
);

// Spacings and Sizes
const double smallPadding = 8.0;
const double mediumPadding = 16.0;
const double largePadding = 24.0;
const double extraLargePadding = 32.0;
const double cardElevation = 8.0;
const double borderRadius = 16.0;
const double iconSize = 28.0;
const double avatarSize = 120.0; // For profile photo
