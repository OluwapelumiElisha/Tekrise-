"use client";
import CourseDetailLayout from "@/app/Components/CourseDetailLayout";

// --- IMAGE  ---
import bgPattern from "@/app/assests/Background.png";
import frontend from "@/app/assests/Frontend-Development.svg";
import backend from "@/app/assests/database.svg";
import fullstack from "@/app/assests/full-stack.svg";
import auth from "@/app/assests/auth.svg";
import testing from "@/app/assests/Testing.svg";
// import python from "@/app/assests/python.svg";

import whoIsForImg from "@/app/assests/fullStack.svg";
import clockIcon from "@/app/assests/Duration.svg";
import moneyIcon from "@/app/assests/Price.svg";
import classIcon from "@/app/assests/Class.svg";

const FullStackPage = () => {

    const fullstackPoints = [
        {
            icon: frontend,
            title: "Frontend Development",
            description: "Master the skills to create websites and web applications from scratch using HTML, CSS, JavaScript, and React."
        },
        {
            icon: backend,
            title: "Backend Development",
            description: "Learn how to design and build APIs using Node.js and Express. Manage databases with PostgreSQL and MongoDB, and implement authentication, testing, and deployment pipelines."
        },
        {
            icon: fullstack,
            title: "Full-Stack Integration",
            description: "Connect the frontend and backend seamlessly using React and Node. Deploy your full-stack application with cloud tools like Render and Netlify, launch it live, and showcase it in your developer portfolio."
        },
        {
            icon: auth,
            title: "Authentication & Authorization",
            description: "Implement secure user authentication with JWT, OAuth, password hashing, and role-based access control."
        },
        {
            icon: testing,
            title: "Testing & Debugging Full-Stack Applications",
            description: "Write unit, integration, and API tests. Debug code effectively and handle common runtime errors."
        },
        {
            icon: auth,
            title: "Database Design & Performance Optimization",
            description: "Design efficient data models, write optimized queries, and improve application performance through indexing, caching, and scalable architecture practices."
        },
    ];

    const targetAudience = [
        { id: "01", text: "Beginners who want to start a career in web development" },
        { id: "02", text: "Developers who want to become proficient in both frontend and backend technologies." },
        { id: "03", text: "Professionals looking to switch into tech or development roles." },
    ];

    const faqData = [
        {
            question: "Is this Full-Stack Development course suitable for beginners?",
            answer: "The program is structured to guide beginners through both frontend and backend development."
        },
        {
            question: "What makes this course different from learning frontend and backend separately?",
            answer: "You’ll learn how to integrate frontend and backend systems and deploy complete applications."
        },
        {
            question: "Will I deploy real applications during the course?",
            answer: "Yes. You’ll deploy live applications and understand the full development lifecycle."
        },
        {
            "question": "How intensive is the Full-Stack Development program?",
            "answer": "The program is intensive and hands-on, with regular coding tasks, projects, and real-world practice that require consistent time and effort."
        },
        {
            "question": "What roles can I apply for after completing this course?",
            "answer": "You can apply for roles such as Frontend Developer, Backend Developer, Full-Stack Developer, Junior Software Engineer, or Web Developer."
        }

    ];

    return (
        <CourseDetailLayout
            // Hero
            title="Full-Stack Development"
            highlightWord="Full-Stack"
            description="Kickstart your career as a Full-Stack Developer. Learn to build complete web applications by mastering both frontend and backend technologies. Gain hands-on experience designing, developing, and deploying real-world projects from start to finish."
            heroBgPattern={bgPattern}

            // Curriculum
            learningPoints={fullstackPoints}

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


            conclusionTitle="Graduate with a strong portfolio and the practical skills needed to launch your career as a Full-Stack Developer."
            faqItems={faqData}
        />
    );
};

export default FullStackPage;