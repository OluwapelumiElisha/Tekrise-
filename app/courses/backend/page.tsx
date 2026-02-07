"use client";
import CourseDetailLayout from "@/app/Components/CourseDetailLayout";

// --- IMAGE  ---
import bgPattern from "@/app/assests/Background.png";
import serverSide from "@/app/assests/serverSide.svg";
import api from "@/app/assests/api.svg";
import database from "@/app/assests/database.svg";
import auth from "@/app/assests/auth.svg";
import deployment from "@/app/assests/deployment.svg";
import python from "@/app/assests/python.svg";

import whoIsForImg from "@/app/assests/backendPic.svg"; // Image of person coding
import clockIcon from "@/app/assests/Duration.svg";
import moneyIcon from "@/app/assests/Price.svg";
import classIcon from "@/app/assests/Class.svg";

const BackendPage = () => {

    const backendPoints = [
        {
            icon: serverSide,
            title: "Server-side Development",
            description: "Master the foundational technologies of web development."
        },
        {
            icon: api,
            title: "RESTful API Development",
            description: "Design and implement scalable RESTful APIs for modern applications."
        },
        {
            icon: database,
            title: "Database Management",
            description: "Work with SQL and NoSQL databases to store and manage data effectively."
        },
        {
            icon: auth,
            title: "Authentication & Security",
            description: "Implement secure authentication systems and protect user data."
        },
        {
            icon: deployment,
            title: "Deployment & Scaling",
            description: "Deploy applications to production and learn scaling strategies."
        },
        {
            icon: python,
            title: "Python Fundamentals",
            description: "Master the core concepts of Python, including object-oriented programming, data structures, and scripting."
        },
    ];

    const targetAudience = [
        { id: "01", text: "Beginners interested in Backend Development" },
        { id: "02", text: "Frontend developers looking to become a fullstack web developer" },
        { id: "03", text: "Anyone interested in building scalable server-side systems" },
    ];

    const faqData = [
        {
            question: "Do I need prior coding experience to join the Backend Development course?",
            answer: "Basic programming knowledge is helpful but not mandatory. The course supports beginners transitioning into backend development."
        },
        {
            question: "What kind of systems will I learn to build?",
            answer: "A: You’ll learn how to build APIs, manage databases, handle authentication, and develop server-side logic."
        },
        {
            question: "Is backend development harder than frontend development?",
            answer: "Backend development focuses more on logic and data handling, but it is approachable with proper guidance."
        },
        {
            question: "Will I work with databases and real backend tools?",
            answer: "Yes. You’ll work with real databases and production-ready backend tools."
        },
        {
            question: "What career paths does this course prepare me for?",
            answer: "Backend Developer, Full-Stack Developer, and Software Engineer roles."
        }
    ];

    return (
        <CourseDetailLayout
            // Hero
            title="Backend Development"
            highlightWord="Backend"
            description="Become a skilled Backend Engineer and learn to build systems for modern applications. Backend engineering is the backbone of reliable software. In this program, you’ll create servers, manage databases, and develop core logic using relevant programming languages. Gain skills to build scalable, secure software and grow in your tech career."
            heroBgPattern={bgPattern}

            // Curriculum
            learningPoints={backendPoints}

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


            conclusionTitle="Graduate with a strong portfolio and the skills to work as a Backend Developer."
            faqItems={faqData}
        />
    );
};

export default BackendPage;