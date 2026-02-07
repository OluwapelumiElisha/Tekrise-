"use client";
import CourseDetailLayout from "@/app/Components/CourseDetailLayout";

// --- IMAGE  ---
import bgPattern from "@/app/assests/Background.png"; 
import htmlIcon from "@/app/assests/html.svg";
import responsiveIcon from "@/app/assests/responsive-web.svg";
import frameworkIcon from "@/app/assests/modern-frameworks.svg";
import accessIcon from "@/app/assests/web-acc.svg";
import projectIcon from "@/app/assests/real-world.svg";
import reactIcon from "@/app/assests/reactJs.svg";

import whoIsForImg from "@/app/assests/FrontendImage.svg"; // Image of person coding
import clockIcon from "@/app/assests/Duration.svg";
import moneyIcon from "@/app/assests/Price.svg";
import classIcon from "@/app/assests/Class.svg";

const FrontendPage = () => {
  
  const frontendPoints = [
    {
      icon: htmlIcon,
      title: "HTML, CSS & JavaScript",
      description: "Master the foundational technologies of web development."
    },
    {
      icon: responsiveIcon,
      title: "Responsive Web Design",
      description: "Build websites that work seamlessly across all devices."
    },
    {
      icon: frameworkIcon,
      title: "Modern Frameworks",
      description: "Learn industry-standard frameworks like React and  other development tools."
    },
    {
      icon: accessIcon,
      title: "Web Accessibility Basics",
      description: "Create inclusive experiences for all users."
    },
    {
      icon: projectIcon,
      title: "Real-world Projects",
      description: "Build a professional portfolio with hands-on projects."
    },
    {
      icon: reactIcon,
      title: "Getting started with ReactJS",
      description: "SPA introduction,  SPA Vs  Server side rendering  client apps, React project setup, React.js overview, etc."
    },
  ];

  const targetAudience = [
    { id: "01", text: "Beginners interested in web development" },
    { id: "02", text: "Designers transitioning into development" },
    { id: "03", text: "Anyone who wants to build user-facing applications" },
  ];

  const faqData = [
    {
       question: "Is this Frontend Development course suitable for beginners?",
       answer: "Yes. This course is designed for beginners with little or no coding experience and gradually builds skills from the basics to real-world frontend development."
    },
    {
       question: "What tools and technologies will I use in this course?",
       answer: "You’ll work with modern frontend tools and technologies commonly used in the industry to build responsive applications."
    },
    {
       question: "Will I build real websites during the training?",
       answer: "Yes. You’ll build hands-on projects that reflect real-world frontend development scenarios."
    },
    {
       question: "What opportunities are available after completing this course?",
       answer: "Graduates can work as Junior Frontend Developers, Freelancers, or UI Engineers in various tech companies."
    }
  ];

  return (
   <CourseDetailLayout 
      // Hero
      title="Frontend Development"
      highlightWord="Frontend"
      description="Become a skilled Frontend Engineer and build responsive, user-friendly websites with HTML, CSS, JavaScript, Bootstrap, and React.js. Apply your skills through hands-on projects to create dynamic web and mobile applications, guided by experienced senior engineers, and graduate ready for today’s web development industry."
      heroBgPattern={bgPattern}

      // Curriculum
      learningPoints={frontendPoints}

      // NEW: Who This Course Is For
      whoIsForImage={whoIsForImg}
      targetAudience={targetAudience}

      // NEW: Course Details
      logistics={{
        duration: "6 Months",
        fee: "₦350,000",
        mode: "Physical & Virtual",
        durationIcon: clockIcon,
        feeIcon: moneyIcon,
        modeIcon: classIcon
      }}


      conclusionTitle="Graduate with a strong portfolio and the skills to work as a Frontend Developer."
      faqItems={faqData}
    />
  );
};

export default FrontendPage;