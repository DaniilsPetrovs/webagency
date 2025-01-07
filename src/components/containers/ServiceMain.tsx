// import  React from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";
//
// const ServiceMain = () => {
//   return (
//     <section className="section service-t">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="service-t__slider-w">
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 slidesPerGroup={1}
//                 speed={800}
//                 loop={true}
//                 centeredSlides={false}
//                 modules={[Autoplay, Navigation]}
//                 autoplay={{
//                   delay: 5000,
//                   disableOnInteraction: false,
//                   pauseOnMouseEnter: true,
//                 }}
//                 navigation={{
//                   nextEl: ".next-service-t",
//                   prevEl: ".prev-service-t",
//                 }}
//                 className="service-t__slider"
//                 breakpoints={{
//                   1400: {
//                     slidesPerView: 4,
//                   },
//                   1200: {
//                     slidesPerView: 3,
//                   },
//                   768: {
//                     slidesPerView: 2,
//                   },
//                 }}
//               >
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           01
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">Development</Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Front End</li>
//                         <li>Backend</li>
//                         <li>Mobile App</li>
//                         <li>Post Delivery Support</li>
//                         <li>server development</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           02
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">Web3 </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Smart Contract Development</li>
//                         <li>Crypto Wallet Integration</li>
//                         <li>Token Creation</li>
//                         <li>DApps Development</li>
//                         <li>Blockchain Consulting</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           03
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">E-Commerce</Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Online Stores</li>
//                         <li>Payment Integration</li>
//                         <li>Inventory Systems</li>
//                         <li>Mobile Shopping</li>
//                         <li>Launch Optimization</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           04
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">UI & UX Design</Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Hi-Fidelity Wireframe</li>
//                         <li>Design System</li>
//                         <li>Final Presentation</li>
//                         <li>Final Delivery</li>
//                         <li>Post Delivery Support</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           05
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">Digital </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>SEO Strategy</li>
//                         <li>Social Ads</li>
//                         <li>Email Campaigns</li>
//                         <li>Content Creation</li>
//                         <li>Brand Growth</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="slide-group">
//         <button aria-label="previous item" className="slide-btn prev-service-t">
//           <i className="fa-light fa-angle-left"></i>
//         </button>
//         <button aria-label="next item" className="slide-btn next-service-t">
//           <i className="fa-light fa-angle-right"></i>
//         </button>
//       </div>
//     </section>
//   );
// };
//
// export default ServiceMain;
import React from "react";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
    const services = [
        {
            id: "development",
            title: "Development",
            features: ["Front End", "Backend", "Mobile App", "Post Delivery", "Server Dev"],
        },
        {
            id: "web3",
            title: "Web3",
            features: ["Smart Contracts", "Wallet Integration", "Token Creation", "DApps Dev", "Blockchain Consulting"],
        },
        {
            id: "ecommerce",
            title: "E-Commerce",
            features: ["Online Stores", "Payment Integration", "Inventory Systems", "Mobile Shopping", "Launch Optimization"],
        },
        {
            id: "ui-ux",
            title: "UI & UX Design",
            features: ["Wireframes", "Design System", "Presentation", "Final Delivery", "Post Delivery"],
        },
        {
            id: "digital",
            title: "Digital Marketing",
            features: ["SEO Strategy", "Social Ads", "Email Campaigns", "Content Creation", "Brand Growth"],
        },
    ];

    return (
        <section className="section service-t">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="service-t__slider-w">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                speed={800}
                                loop={false}
                                centeredSlides={false}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={{
                                    nextEl: ".next-service-t",
                                    prevEl: ".prev-service-t",
                                }}
                                className="service-t__slider"
                                breakpoints={{
                                    1400: {slidesPerView: 4},
                                    1200: {slidesPerView: 3},
                                    768: {slidesPerView: 2},
                                }}
                            >
                                {services.map((service, index) => (
                                    <SwiperSlide key={service.id}>
                                        <div className="service-t-single-wrapper">
                                            <div className="service-t__slider-single">
                                                <div className="intro">
                          <span className="sub-title">
                            {`0${index + 1}`}
                              <i className="fa-solid fa-arrow-right"></i>
                          </span>
                                                    <h4>
                                                        <Link href={`/service-single?service=${service.id}`}>
                                                            {service.title}
                                                        </Link>
                                                    </h4>
                                                </div>
                                                <ul>
                                                    {service.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                                <div className="cta">
                                                    <Link href={`/service-single?service=${service.id}`}>
                                                        <i className="icon-arrow-top-right"></i>
                                                        <span>service details</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-group">
                <button aria-label="previous item" className="slide-btn prev-service-t">
                    <i className="fa-light fa-angle-left"></i>
                </button>
                <button aria-label="next item" className="slide-btn next-service-t">
                    <i className="fa-light fa-angle-right"></i>
                </button>
            </div>
        </section>
    );
};

export default ServiceMain;
