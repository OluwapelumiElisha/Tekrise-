"use client";
import CourseDetailLayout from "@/app/Components/CourseDetailLayout";

// --- IMAGE  ---
import bgPattern from "@/app/assests/Background.png";
import user from "@/app/assests/user-search-01.svg";
import info from "@/app/assests/information.svg";
import wireframing from "@/app/assests/wire.svg";
import testing from "@/app/assests/Testing.svg";
import uiuxIcon from "@/app/assests/uiux2.svg";
import protype from "@/app/assests/fe_prototype.svg";

// import python from "@/app/assests/python.svg";

import whoIsForImg from "@/app/assests/uiPic.svg";
import clockIcon from "@/app/assests/Duration.svg";
import moneyIcon from "@/app/assests/Price.svg";
import classIcon from "@/app/assests/Class.svg";

const ui_ux = () => {

    const uiPoints = [
        {
            icon: uiuxIcon,
            title: "Introduction to UI/UX Design",
            description: "Learn the fundamentals of User Interface (UI) and User Experience (UX) design principles."
        },
        {
            icon: user,
            title: "User Research ",
            description: "Learn to conduct interviews and surveys, create user personas, and define user problems using empathy mapping."
        },
        {
            icon: info,
            title: "Information Architecture",
            description: "Master the basics of Information Architecture (IA), map user journeys with sitemaps and flows, and craft effective UX copy."
        },
        {
            icon: wireframing,
            title: "Wireframing and Usability Testing",
            description: "Learn to use wireframing tools and create effective wireframes. Plan and conduct user tests, then evaluate and document the results."
        },
        {
            icon: testing,
            title: "Visual Design & Design Systems",
            description: "Learn color theory, typography, spacing, and layout principles. Create reusable components and scalable design systems."
        },
        {
            icon: protype,
            title: "Prototyping & Design Handoff",
            description: "Build interactive prototypes, present design decisions confidently, and collaborate effectively with developers."
        },
    ];

    const targetAudience = [
        { id: "01", text: "Beginners who want to start a career in UI/UX or digital product design." },
        { id: "02", text: "People who want to design better digital products and improve user experiences." },
        { id: "03", text: "Those in tech, marketing, or business roles who want to understand UI/UX to enhance their work." },
        { id: "04", text: "Individuals who enjoy designing solutions, improving usability, and crafting intuitive experiences." },
    ];

    const faqData = [
        {
            question: "Do I need drawing or artistic skills to learn UI/UX design?",
            answer: "No. UI/UX design focuses on usability, problem-solving, and user experience rather than drawing skills."
        },
        {
            question: "What tools will I use during the UI/UX Design course?",
            answer: "You’ll use industry-standard design tools to create wireframes, prototypes, and interfaces."
        },
        {
            question: "Will I build a design portfolio during the course?",
            answer: "Yes. You’ll complete projects that form a professional design portfolio."
        },
        {
            "question": "Is this course suitable for career switchers?",
            "answer": "Yes. The course is beginner-friendly and designed to guide career switchers step by step into UI/UX design, even with no prior design experience."
        },
        {
            "question": "What career opportunities are available after completing this course?",
            "answer": "After completing this course, you can pursue roles such as UI Designer, UX Designer, Product Designer, Junior UX Researcher, and Design Assistant."
        }
    ];

    return (
        <CourseDetailLayout
            // Hero
            title="UI/UX Design"
            highlightWord="UI/UX"
            description="Kickstart your career as a Product Designer. Master UI and UX design from scratch, craft meaningful user experiences, build a strong portfolio through hands-on projects, and get ready to land your dream job in the digital design world."
            heroBgPattern={bgPattern}

            // Curriculum
            learningPoints={uiPoints}

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


            conclusionTitle="Graduate with a strong portfolio and the skills to work as a UI/UX Designer, Product Designer, UX Designer."
            faqItems={faqData}
        />
    );
};

export default ui_ux;