"use client";
import CourseDetailLayout from "@/app/Components/CourseDetailLayout";

// --- IMAGE  ---
import bgPattern from "@/app/assests/Background.png";
import dataType from "@/app/assests/dataType.svg";
import dataCleaning from "@/app/assests/datacleaning.svg";
import sql from "@/app/assests/sql.svg";
import powerBi from "@/app/assests/ExcelBi.svg";
import dataIcon from "@/app/assests/introData.svg";
import datainter from "@/app/assests/datainter.svg";

import whoIsForImg from "@/app/assests/DataPic.svg";
import clockIcon from "@/app/assests/Duration.svg";
import moneyIcon from "@/app/assests/Price.svg";
import classIcon from "@/app/assests/Class.svg";

const ui_ux = () => {

    const dataPoints = [
        {
            icon: dataIcon,
            title: "Introduction to Data Analysis",
            description: "Learn what data analysis is, the roles in analytics, and how data moves from collection to insight. Get hands-on by setting up Excel, Power BI, and Python."
        },
        {
            icon: dataType,
            title: "Types of Data & Sources",
            description: "Learn the different types of data, where data comes from, and how it’s used responsibly—while working with real datasets."
        },
        {
            icon: dataCleaning,
            title: "Data Cleaning with Excel",
            description: "Learn how to clean messy data by fixing missing values, removing duplicates, and correcting errors in Excel."
        },
        {
            icon: sql,
            title: "Introduction to Databases and SQL",
            description: "Learn core database concepts and write your first SQL queries using SELECT, WHERE, and ORDER BY."
        },
        {
            icon: powerBi,
            title: "Data Visualization with Excel and Power BI",
            description: "Create charts, dashboards, and interactive reports to communicate data insights effectively."
        },
        {
            icon: datainter,
            title: "Data Interpretation & Business Insights",
            description: "Learn how to interpret results, and present data-driven insights that inform real-world decisions."
        },
    ];

    const targetAudience = [
        { id: "01", text: "Beginners who want to start a career in data analytics." },
        { id: "02", text: "Anyone in business, finance, marketing, or operations who wants to leverage data for better decisions." },
        { id: "03", text: "Individuals who want hands-on experience with Excel, SQL, Python, and Power BI and more." },
        { id: "04", text: "Individuals who enjoy designing solutions, improving usability, and crafting intuitive experiences." },
    ];

    const faqData = [
        {
            question: "Is this Data Analysis course suitable for beginners?",
            answer: "Yes. The course starts from the fundamentals and is designed for learners with no prior data experience."
        },
        {
            question: "What tools will I learn in this data analysis program?",
            answer: "You’ll gain hands-on experience with widely used data analysis tools."
        },
        {
            question: "Will I work with real datasets?",
            answer: "Yes. You’ll work with real-world datasets to understand practical data analysis."
        },
        {
            "question": "Do I need strong math skills to succeed in this course?",
            "answer": "No. You only need basic math like percentages, averages, and simple formulas. Most data analysis focuses more on understanding data and using tools than advanced mathematics."
        },
        {
            "question": "What roles does this course prepare me for?",
            "answer": "This course prepares you for roles such as Data Analyst, Junior Data Analyst, Business Analyst, Reporting Analyst, and Data Assistant."
        }

    ];

    return (
        <CourseDetailLayout
            // Hero
            title="Data Analysis"
            highlightWord="Data"
            description="Master data analysis from the ground up using Excel, SQL, Python, and Power BI. Through practical, real-world projects, this program transforms beginners into job-ready analysts with the problem-solving and business insight employers value."
            heroBgPattern={bgPattern}

            // Curriculum
            learningPoints={dataPoints}

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


            conclusionTitle="Graduate with a strong portfolio and the skills to work as a Data Analyst."
            faqItems={faqData}
        />
    );
};

export default ui_ux;