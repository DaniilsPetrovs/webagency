
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";
import hrseven from "public/images/projects/hr-seven.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  // Array of projects for dynamic rendering
  const projects = [
    {
      id: "webdevelopment",
      title: "Web Landing Development",
      image: hrone,
      alt: "Web Landing Development",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Website",
      image: hrtwo,
      alt: "E-Commerce Website",
    },
    {
      id: "brand",
      title: "Brand Identity Development",
      image: hrthree,
      alt: "Brand Identity Development",
    },
    {
      id: "nft",
      title: "NFT Collection Drawing",
      image: hrfour,
      alt: "NFT Collection Drawing",
    },
    {
      id: "web3",
      title: "Web3 Project Launch",
      image: hrfive,
      alt: "Web3 Project Launch",
    },
    {
      id: "store",
      title: "Business Store Development",
      image: hrsix,
      alt: "Business Store Development",
    },
    {
      id: "crypto",
      title: "Crypto Application",
      image: hrseven,
      alt: "Crypto Application",
    },
  ];

  // ScrollTrigger animation setup
  // useEffect(() => {
  //   const ele = slider.current;

  //   if (window.innerWidth >= 992 && ele) {
  //     const rightSections = gsap.utils.toArray(".project-sl__single");

  //     const pin = gsap.to(rightSections, {
  //       xPercent: -100 * (rightSections.length - 3),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ele,
  //         pin: true,
  //         invalidateOnRefresh: true,
  //         start: "center center-=100",
  //         scrub: 1,
  //         end: () => "+=" + (slider.current?.offsetWidth || 0),
  //         markers: false,
  //       },
  //     });

  //     return () => {
  //       pin.kill();
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const ele = slider.current;

    if (ele) {
      const rightSections = gsap.utils.toArray(".project-sl__single");

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop and laptop behavior
        const pin = gsap.to(rightSections, {
          xPercent: -100 * (rightSections.length - 3),
          ease: "none",
          scrollTrigger: {
            trigger: ele,
            pin: true,
            invalidateOnRefresh: true,
            start: "center center-=100",
            scrub: 1,
            end: () => "+=" + ele.scrollWidth,
            markers: false, // Enable markers for debugging
          },
        });

        return () => {
          pin.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        // Tablet and mobile behavior
        const pin = gsap.to(rightSections, {
          xPercent: -100 * (rightSections.length - 1), // Adjusted for smaller screens
          ease: "none",
          scrollTrigger: {
            trigger: ele,
            pin: true,
            invalidateOnRefresh: true,
            start: "center center+=100",
            scrub: 1,
            end: () => "+=" + ele.scrollWidth, // Dynamic end calculation
            markers: false, // Enable markers for debugging
          },
        });

        return () => {
          pin.kill();
        };
      });

      return () => mm.revert();
    }
  }, []);


  return (
      <section className="section project-sl" ref={slider}>
        {projects.map((project, index) => (
            <div className="project-sl__single" key={project.id}>
              <div className="thumb">
                <Link href={`/project-single?project=${project.id}`}>
                  <Image src={project.image} alt={project.alt} />
                </Link>
              </div>
              <div className="content">
                <h2>
                  <Link href={`/project-single?project=${project.id}`}>{project.title}</Link>
                </h2>
              </div>
            </div>
        ))}
      </section>
  );
};

export default ProjectMain;
