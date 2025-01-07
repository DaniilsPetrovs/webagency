    // import React from "react";
    // import Layout from "@/components/layout/Layout";
    // import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
    // import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
    // import UxProcess from "@/components/containers/service-details/UxProcess";
    // import CtaTwo from "@/components/containers/service-details/CtaTwo";
    //
    // const ServiceDetails = () => {
    //   return (
    //     <Layout header={2} footer={5} video={false}>
    //       <ServiceDetailsBanner />
    //       <ServiceDetailsMain />
    //       <UxProcess />
    //       <CtaTwo />
    //     </Layout>
    //   );
    // };
    //
    // export default ServiceDetails;
    import React from "react";
    import { useRouter } from "next/router";
    import Layout from "@/components/layout/Layout";
    import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
    import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
    import UxProcess from "@/components/containers/service-details/UxProcess";
    import CtaTwo from "@/components/containers/service-details/CtaTwo";
    import { useEffect } from "react";


    type ServiceType = "development" | "web3" | "ecommerce" | "ui-ux" | "digital";

    const serviceData: Record<ServiceType, { title: string; description: string; about: string; images: string[]; }> = {
        development: {
            title: "Development",
            description: `
            Our development services are designed to bring your ideas to life through innovative and custom-built digital solutions. 
            We specialize in designing and developing websites and mobile applications that are not only visually appealing 
            but also highly functional and user-friendly. Whether you need a small business website, a complex enterprise 
            platform, or a feature-rich mobile app, we have the expertise to deliver.
        `,
            about: `
            Our team excels in creating dynamic websites, cross-platform mobile apps, and scalable software solutions that 
            align with your business goals. With a focus on performance and usability, we ensure that your digital presence 
            stands out in a crowded online space. Security is at the heart of our development process, and we integrate robust 
            solutions like secure payment systems, API connections, and data encryption for your peace of mind.

            From initial consultation to post-launch support, we prioritize collaboration and communication. Our process 
            involves thorough planning, wireframing, coding, testing, and deployment. Post-launch, we provide ongoing 
            support to ensure your solution evolves with your business.
        `,
            images: [
                "/images/servicedetails/banner-one.png",
                "/images/servicedetails/section-one.png"
            ]
        },
        web3: {
            title: "Web3",
            description: `
            Dive into the decentralized future with our Web3 development services. Web3 represents the next evolution of the 
            internet, where users have greater control over their data and interactions. Our expertise in blockchain 
            technologies allows us to create secure, transparent, and decentralized solutions tailored to your unique 
            requirements.
        `,
            about: `
            We specialize in developing decentralized applications (DApps), creating smart contracts, and building crypto 
            wallets. Whether you’re looking to establish a blockchain-powered marketplace, a DeFi solution, or a private 
            ledger system, we provide the technical expertise and strategic guidance to bring your vision to life.

            Our developers have deep experience with Ethereum, Binance Smart Chain, and other blockchain platforms. We build 
            systems that prioritize security, scalability, and seamless integration with existing workflows. Additionally, 
            we ensure compliance with industry standards and help you navigate the complexities of blockchain technology.

            Web3 isn't just a trend—it's the future. Partner with us to pioneer decentralized ecosystems that redefine 
            transparency, efficiency, and user empowerment.
        `,
            images: [
                "/images/servicedetails/banner-two.png",
                "/images/servicedetails/section-two.png"
            ],
        },
        ecommerce: {
            title: "E-Commerce",
            description: `
            The world of online shopping is evolving, and we’re here to ensure your business stays ahead. Our E-Commerce 
            services are designed to create seamless, secure, and visually stunning online stores that deliver exceptional 
            user experiences and drive sales.
        `,
            about: `
            Our E-Commerce solutions include custom store design, advanced payment gateway integration, inventory 
            management systems, and powerful analytics. We create mobile-responsive platforms that ensure your customers 
            enjoy a consistent and intuitive shopping experience, whether they’re browsing on a smartphone or a desktop.

            We understand the importance of performance and speed in online retail. Our developers use the latest 
            technologies to ensure fast load times and smooth navigation. Additionally, we incorporate SEO best practices 
            to increase your store’s visibility and attract more customers.

            From initial strategy and design to launch and ongoing maintenance, we’re with you every step of the way. Whether 
            you’re launching your first online store or enhancing an existing one, we’ll help you achieve your business 
            goals with innovative E-Commerce solutions.
        `,
            images:[
                "/images/servicedetails/banner-three.png",
                "/images/servicedetails/section-three.png"
            ],
        },
        "ui-ux": {
            title: "UI & UX Design",
            description: `
            First impressions matter, and our UI/UX design services are dedicated to creating interfaces that captivate 
            and engage users. We combine aesthetics with functionality to design digital experiences that leave a lasting 
            impact.
        `,
            about: `
            We start by understanding your audience and business objectives. Through in-depth research and wireframing, 
            we conceptualize designs that align with your brand and user needs. Next, we move to high-fidelity prototypes 
            and rigorous testing to ensure optimal usability and performance.

            Our designs go beyond just looking good—they solve problems. We create intuitive navigation systems, 
            thoughtful user flows, and consistent visual elements that make interactions seamless and enjoyable. 
            Every element is optimized for mobile and desktop experiences.

            Whether you're launching a new app or redesigning an existing platform, our UI/UX solutions help you 
            build stronger connections with your users, increase engagement, and boost conversions.
        `,
            images:[
                "/images/servicedetails/banner-four.png",
                "/images/servicedetails/section-four.png"
            ],
        },
        digital: {
            title: "Digital Marketing",
            description: `
            In today’s fast-paced digital world, having a strong online presence is essential for business success. Our 
            digital marketing services are designed to help you connect with your audience, build brand awareness, and 
            achieve measurable growth.
        `,
            about: `
            We offer comprehensive services including SEO, social media marketing, content creation, email campaigns, 
            and paid advertising. Our strategies are data-driven, ensuring that every campaign is targeted and results-oriented.

            Every business is unique, which is why we create tailored marketing plans that align with your goals and 
            budget. Whether you’re looking to drive website traffic, increase leads, or grow your social media following, 
            we deliver strategies that work.

            Our team stays on top of the latest trends and algorithms to ensure your brand remains competitive. From 
            crafting engaging content to optimizing your campaigns for conversions, we provide end-to-end solutions 
            for digital success.

            Let us help you turn your digital channels into powerful tools for growth and engagement.
        `,
            images:[
                "/images/servicedetails/banner-five.png",
                "/images/servicedetails/section-five.png"
            ],
        },
    };

    const ServiceDetails = () => {
        const router = useRouter();
        const { service } = router.query;

        useEffect(() => {
            // If service is not found or invalid, redirect to the "Our Services" page
            if (!service || typeof service !== "string" || !(service in serviceData)) {
                router.push("/our-services");
            }
        }, [service, router]); // Dependency array ensures it runs only when service or router changes

        // Prevent rendering until we know whether we are redirecting
        if (!service || typeof service !== "string" || !(service in serviceData)) {
            return null;
        }

        const currentService = serviceData[service as ServiceType];

        return (
            <Layout header={2} footer={5} video={false}>
                <ServiceDetailsBanner title={currentService.title} />
                <ServiceDetailsMain description={currentService.description} about={currentService.about} images={currentService.images} />
                {/*<UxProcess />*/}
                <CtaTwo />
            </Layout>
        );
    };

    export default ServiceDetails;

