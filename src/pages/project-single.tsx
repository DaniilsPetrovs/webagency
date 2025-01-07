// import React from "react";
// import Layout from "@/components/layout/Layout";
// import CmnBanner from "@/components/layout/banner/CmnBanner";
// import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
// import UxProcess from "@/components/containers/service-details/UxProcess";
// import {useRouter} from "next/router";
//
// type ProjectType =
//     | "webdevelopment"
//     | "ecommerce"
//     | "brand"
//     | "nft"
//     | "web3"
//     | "store"
//     | "crypto";
//
// // Define the shape of each project's data
// type ProjectData = {
//     title: string;
//     roadmap: string;
//     description: string;
//     about: string;
//     includes: string;
//     sectors: string;
//     owner: string;
//     projectdate: string;
//     result: string;
// };
//
// // Data for each project
// const projectData: Record<ProjectType, ProjectData> = {
//     webdevelopment: {
//         title: "Web-Development",
//         roadmap: "",
//         description: `
//       Detailed description of the web development project.
//     `,
//         about: `
//       This project focuses on building modern websites using cutting-edge technologies.
//     `,
//         includes: "Web design, backend development, front-end development",
//         sectors: "Tech, E-commerce, Startups",
//         owner: "Tech Corp Ltd.",
//         projectdate: "2023-06-15",
//         result: "Completed with a fully responsive website and integrated backend system.",
//     },
//     ecommerce: {
//         title: "E-Commerce",
//         roadmap: "",
//         description: `
//       Detailed description of the e-commerce website development.
//     `,
//         about: `
//       This project involves building an online store with payment gateway integration.
//     `,
//         includes: "Product pages, shopping cart, checkout process",
//         sectors: "Retail, E-commerce, Fashion",
//         owner: "Retail Solutions Ltd.",
//         projectdate: "2023-08-01",
//         result: "A fully operational online store with an integrated payment system.",
//     },
//     brand: {
//         title: "Brand",
//         roadmap: "",
//         description: `
//       Detailed description of the branding project.
//     `,
//         about: `
//       This project involves creating a brand identity from scratch, including logos, colors, and typography.
//     `,
//         includes: "Branding, logo design, brand identity creation",
//         sectors: "Marketing, Branding, Design",
//         owner: "Creative Agency",
//         projectdate: "2023-05-10",
//         result: "A new brand identity that resonates with target customers.",
//     },
//     nft: {
//         title: "NFT Collection Design",
//         roadmap: "",
//         description: `
//       Detailed description of the NFT design project.
//     `,
//         about: `
//       This project involves creating a unique NFT collection with custom designs.
//     `,
//         includes: "NFT design, smart contract development",
//         sectors: "Blockchain, Art, Collectibles",
//         owner: "Crypto Art Studio",
//         projectdate: "2023-07-20",
//         result: "Launched a successful NFT collection with high demand.",
//     },
//     web3: {
//         title: "Web3 Project Launch",
//         roadmap: "",
//         description: `
//       Detailed description of the Web3 project launch.
//     `,
//         about: `
//       This project is focused on developing a decentralized application on the Web3 framework.
//     `,
//         includes: "Blockchain development, dApp creation, tokenomics",
//         sectors: "Blockchain, Crypto, Tech",
//         owner: "Web3 Innovators",
//         projectdate: "2023-09-05",
//         result: "Successfully launched a decentralized application on the blockchain.",
//     },
//     store: {
//         title: "Store Development",
//         roadmap: "",
//         description: `
//       Detailed description of the store development project.
//     `,
//         about: `
//       This project involves building a store with a seamless shopping experience and integrations.
//     `,
//         includes: "Store design, payment gateway, inventory management",
//         sectors: "Retail, E-commerce, Business",
//         owner: "Business Ventures Ltd.",
//         projectdate: "2023-03-30",
//         result: "Launched a fully functional online store with secure payments.",
//     },
//     crypto: {
//         title: "Crypto Application",
//         roadmap: "",
//         description: `
//       Detailed description of the crypto application development.
//     `,
//         about: `
//       This project focuses on developing a mobile application for cryptocurrency transactions.
//     `,
//         includes: "Crypto wallet, transaction tracking, price alerts",
//         sectors: "Finance, Blockchain, Crypto",
//         owner: "Crypto Technologies",
//         projectdate: "2023-10-15",
//         result: "Successfully launched a secure crypto wallet application.",
//     },
// };
//
// const ProjectDetails = () => {
//     const router = useRouter();
//     const { project } = router.query;
//     // If service is not found or invalid, redirect to the "Our Services" page
//     if (!project || typeof project !== "string" || !(project in projectData)) {
//         router.push("/our-projects");
//         return null; // You can return null to prevent rendering the page while redirecting
//     }
//
//     const currentProject = projectData[project as ProjectType];
//     return (
//         <Layout header={2} footer={5} video={0}>
//             <CmnBanner
//                 title={currentProject.title}
//                 navigation="Brand Identity"
//                 parent="Projects"
//                 parentLink="our-projects"
//             />
//             {/* Pass currentProject as prop */}
//             <ProjectDetailsMain projectData={currentProject} />
//             <UxProcess />
//         </Layout>
//     );
// };
//
// export default ProjectDetails;


// const ProjectDetails = () => {
//
//     return (
//         <Layout header={2} footer={5} video={0}>
//             <CmnBanner
//                 title="Brand Identity"
//                 navigation="Brand Identity"
//                 parent="Projects"
//                 parentLink="our-projects"
//             />
//             <ProjectDetailsMain />
//             <UxProcess />
//         </Layout>
//     );
// };
//
// export default ProjectDetails;


import React, {useEffect, useState} from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";
import {useRouter} from "next/router";

type ProjectType =
    | "webdevelopment"
    | "ecommerce"
    | "brand"
    | "nft"
    | "web3"
    | "store"
    | "crypto";

// Define the shape of each project's data
type ProjectData = {
    title: string;
    roadmap: string;
    description: string;
    about: string;
    includes: string;
    sectors: string;
    owner: string;
    projectdate: string;
    result: string;
    images: string[];
};

// Data for each project
const projectData: Record<ProjectType, ProjectData> = {
    webdevelopment: {
        title: "Web-Development",
        roadmap: `
        1. Research: Understand client needs and analyze the market.
        2. Design: Create wireframes and get client approval.
        3. Develop: Build front-end and back-end functionality.
        4. Test: Ensure cross-browser compatibility and fix bugs.
        5. Deploy: Launch and monitor the website.
        `,
        description: "LaRollers.com is a premier digital platform representing an elite car service provider based in the United States. The website was meticulously designed to reflect the professionalism and reliability of the brand, combining an aesthetically pleasing interface with practical functionality. Every aspect of the site has been thoughtfully crafted to ensure a seamless user experience.The design features a modern and polished layout, incorporating intuitive navigation that allows users to effortlessly explore the service offerings. Key sections are clearly defined and strategically organized, making it simple for visitors to find the information they need.",
        about: "This project focuses on building modern websites using cutting-edge technologies.",
        includes: "Web design, backend development, front-end development",
        sectors: "Tech, E-commerce, Startups",
        owner: "LaRollers Ltd",
        projectdate: "https://www.larollers.com",
        result: "Completed with a fully responsive website and integrated backend system.",
        images: [
            "/images/projectdetails/poster-one.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    ecommerce: {
        title: "E-Commerce",
        roadmap: `
        1. Plan: Define key features and requirements.
        2. Design: Craft user-friendly interfaces.
        3. Develop: Implement front-end, back-end, and payment systems.
        4. Test: Perform usability and security checks.
        5. Launch: Go live and provide post-launch support.
        `,
        description: "JunovaNails.co.uk is a sophisticated and modern website tailored for a nail salon, offering an elegant digital presence that reflects the professionalism and artistry of the brand. It features visually appealing layouts with a calming color palette, showcasing the salon’s services, pricing, and portfolio. The site also includes seamless appointment booking functionality, enabling users to easily schedule visits online. With a focus on accessibility, the website ensures an effortless browsing experience for users on both desktop and mobile devices.",
        about: "This project involves building an online store with payment gateway integration.",
        includes: "Product pages, shopping cart, checkout process",
        sectors: "Retail, E-commerce, Fashion",
        owner: "JunovaNails Ltd",
        projectdate: "https://junovanails.co.uk",
        result: "A fully operational online store with an integrated payment system.",
        images: [
            "/images/projectdetails/poster-two.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    brand: {
        title: "Brand",
        roadmap: `
        1. Discover: Conduct brand research and workshops.
        2. Strategize: Define mission, vision, and messaging.
        3. Design: Create logo, color palette, and typography.
        4. Implement: Apply branding across materials.
        5. Launch: Roll out branding and gather feedback.
        `,
        description: "Website represents the premium digital presence of a high-end barbershop, designed to showcase the brand’s expertise in grooming and styling. The website exudes sophistication with a sleek, masculine aesthetic and clean layout. It prominently highlights services such as haircuts, beard grooming, and styling packages. The site includes a booking system for scheduling appointments, detailed descriptions of services, and testimonials from satisfied clients. A gallery section showcases the shop’s expertise, while a responsive design ensures seamless usability on all devices.",
        about: "This project involves creating a brand identity from scratch, including logos, colors, and typography.",
        includes: "Branding, logo design, brand identity creation",
        sectors: "Marketing, Branding, Design",
        owner: "KingsBarberClub Ltd",
        projectdate: "https://kingsbarberclub.co.uk",
        result: "A new brand identity that resonates with target customers.",
        images: [
            "/images/projectdetails/poster-three.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    nft: {
        title: "NFT Collection Design",
        roadmap: `
        1. Concept: Define themes and unique ideas.
        2. Create: Design distinctive NFT assets.
        3. Integrate: Deploy smart contracts and tokenomics.
        4. List: Set up on marketplaces like OpenSea.
        5. Promote: Market and launch the collection.
        `,
        description: "Detailed description of the NFT design project.",
        about: "This project involves creating a unique NFT collection with custom designs.",
        includes: "NFT design, smart contract development",
        sectors: "Blockchain, Art, Collectibles",
        owner: "",
        projectdate: "",
        result: "Launched a successful NFT collection with high demand.",
        images: [
            "/images/projectdetails/poster-four.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    web3: {
        title: "Web3 Project Launch",
        roadmap: `
        1. Research: Define app features and blockchain tech.
        2. Plan: Design smart contracts and system architecture.
        3. Develop: Build the app and test functionality.
        4. Audit: Ensure security and fix vulnerabilities.
        5. Launch: Deploy and engage with the community.
        `,
        description: "Metadrop.com is a state-of-the-art platform designed for exclusive NFT drops and innovative Web3 projects. The website serves as a hub for NFT enthusiasts and creators, providing a streamlined, visually stunning interface to showcase upcoming releases and events. It includes features such as dynamic countdowns for NFT drops, detailed project information, and seamless integration with blockchain wallets for secure transactions. The site emphasizes transparency and exclusivity, creating an engaging environment for both buyers and creators.",
        about: "This project is focused on developing a decentralized application on the Web3 framework.",
        includes: "Blockchain development, dApp creation, tokenomics",
        sectors: "Blockchain, Crypto, Tech",
        owner: "Metadrop Ltd",
        projectdate: "https://metadrop.com",
        result: "Successfully launched a decentralized application on the blockchain.",
        images: [
            "/images/projectdetails/poster-five.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    store: {
        title: "Store Development",
        roadmap: `
        1. Plan: Define store features and user workflows.
        2. Design: Create an intuitive shopping experience.
        3. Develop: Build storefront and backend functionality.
        4. Test: Ensure usability and smooth performance.
        5. Launch: Go live and monitor feedback.
        `,
        description: "Brixton Cycles is a premier bike shop offering a wide range of bicycles, accessories, and repair services, located in the heart of Brixton, London. Their website is a seamless online shopping experience that features a user-friendly interface, showcasing an extensive selection of bicycles, parts, and cycling gear. Customers can browse through various categories like mountain bikes, road bikes, electric bikes, and accessories. The website also highlights services like bike repairs, maintenance, and custom bike builds, alongside detailed product descriptions and specifications. Additionally, the site includes a blog and useful resources for cyclists, keeping them informed about the latest trends and biking events.",
        about: "This project involves building a store with a seamless shopping experience and integrations.",
        includes: "Store design, payment gateway, inventory management",
        sectors: "Retail, E-commerce, Business",
        owner: "BrixtonCycles Ltd",
        projectdate: "https://brixtoncycles.co.uk",
        result: "Launched a fully functional online store with secure payments.",
        images: [
            "/images/projectdetails/poster-six.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
    crypto: {
        title: "Crypto Application",
        roadmap: `
        1. Plan: Define wallet, tracking, and alert features.
        2. Design: Develop a secure, user-friendly interface.
        3. Develop: Implement wallet and API integration.
        4. Test: Ensure security and usability.
        5. Launch: Deploy app and gather feedback.
        `,
        description: "RabbitHole.gg is an interactive platform focused on offering users a deep dive into the world of Web3 and blockchain-based gaming. The website serves as a gateway for users to explore and participate in various decentralized applications (dApps), games, and NFT-related activities. The platform provides engaging tutorials, guides, and experiences that allow users to \"earn while they learn,\" participating in tasks that introduce them to blockchain technology and decentralized finance (DeFi). Users can interact with a range of games, earn rewards, and level up their knowledge about the Web3 ecosystem through hands-on learning experiences.",
        about: "This project focuses on developing a mobile application for cryptocurrency transactions.",
        includes: "Crypto wallet, transaction tracking, price alerts",
        sectors: "Finance, Blockchain, Crypto",
        owner: "RabbitHole Ltd",
        projectdate: "https://rabbithole.gg",
        result: "Successfully launched a secure crypto wallet application.",
        images: [
            "/images/projectdetails/poster-seven.png",
            "/images/projectdetails/one-one.png",
            "/images/projectdetails/one-two.png",
            "/images/projectdetails/one-three.png",
            "/images/projectdetails/one-four.png",
            "/images/projectdetails/one-five.png",
        ]
    },
};

const ProjectDetails = () => {
    const router = useRouter();
    const { project } = router.query;

    useEffect(() => {
        // Redirect if the project is invalid or not found
        if (!project || typeof project !== "string" || !(project in projectData)) {
            router.push("/our-projects");
        }
    }, [project, router]);

    // Ensure rendering only occurs after validation in useEffect
    if (!project || typeof project !== "string" || !(project in projectData)) {
        return null; // Prevent rendering while redirecting
    }

    // Fetch the current project data based on the dynamic route parameter
    const currentProject = projectData[project as ProjectType];

    return (
        <Layout header={2} footer={5} video={0}>
            <CmnBanner
                title={currentProject.title}
                navigation={currentProject.title}
                parent="Projects"
                parentLink="/our-projects"
            />
            {/* Pass the currentProject data to the ProjectDetailsMain component */}
            <ProjectDetailsMain projectData={currentProject} />
            {/*<UxProcess />*/}
        </Layout>
    );
};

export default ProjectDetails;

