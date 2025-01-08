// import React, { useState, useEffect } from "react";
// import HomeOneBanner from "./HomeOneBanner";
// import HomeThreeBanner from "./HomeThreeBanner";

// const ResponsiveBanner = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     // Check screen size on mount and update state on resize
//     useEffect(() => {
//         const checkScreenSize = () => {
//             setIsMobile(window.innerWidth <= 576); // Adjust breakpoint as needed
//         };

//         // Initial check
//         checkScreenSize();

//         // Listen for window resize
//         window.addEventListener("resize", checkScreenSize);

//         // Cleanup event listener on unmount
//         return () => {
//             window.removeEventListener("resize", checkScreenSize);
//         };
//     }, []);

//     return <>{isMobile ? <HomeThreeBanner /> : <HomeOneBanner />}</>;
// };

// export default ResponsiveBanner;


import React from "react";
import HomeOneBanner from "./HomeOneBanner";
import HomeThreeBanner from "./HomeThreeBanner";



const ResponsiveBanner = () => {
    return (
        <>
            <div className="desktop-banner">
                <HomeOneBanner />
            </div>
            <div className="mobile-banner">
                <HomeThreeBanner />
            </div>
        </>
    );
};

export default ResponsiveBanner;
