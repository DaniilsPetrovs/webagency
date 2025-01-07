import React, {useState} from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";

const FaqMain = () => {
    const [imgTab, setImgTab] = useState(-1);
    return (
        <section className="section faq fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    <div className="col-12 col-lg-6">
                        <div className="faq__thumb fade-left">
                            <Image src={thumb} alt="Image"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="accordion" id="accordion">
                            <div
                                className={
                                    "accordion-item content__space fade-top" +
                                    (imgTab === 0 ? " faq-one-active" : " ")
                                }
                            >
                                <h5 className="accordion-header" id="headingOne">
                                    <button
                                        className={
                                            (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                                        }
                                        onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        How do you ensure the quality of your services?
                                    </button>
                                </h5>
                                <div
                                    id="collapseOne"
                                    className={`accordion-collapse collapse${
                                        imgTab === 0 ? " show " : ""
                                    }`}
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            We ensure the quality of our services by following a structured process that
                                            starts with thorough research and planning to understand your business goals
                                            and audience. Our experienced team of developers, designers, and digital
                                            marketing experts work together to deliver the best solutions tailored to
                                            your needs. Throughout the project, we conduct extensive testing and gather
                                            feedback to ensure everything meets your expectations before launch.
                                            Additionally, we provide post-launch support to ensure your digital
                                            solutions remain up-to-date and continue to perform optimally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "accordion-item content__space fade-top" +
                                    (imgTab === 1 ? " faq-one-active" : " ")
                                }
                            >
                                <h5 className="accordion-header" id="headingTwo">
                                    <button
                                        className={
                                            (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                                        }
                                        onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        How long does it take to complete a project?
                                    </button>
                                </h5>
                                <div
                                    id="collapseTwo"
                                    className={`accordion-collapse collapse${
                                        imgTab === 1 ? " show " : ""
                                    }`}
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            The timeline for completing a project depends on the complexity and scope of
                                            the work. Smaller projects, like simple websites or landing pages, typically
                                            take around 1-2 weeks. For medium-sized projects such as custom websites or
                                            e-commerce solutions, the timeline can range from 2 to 4 weeks. Larger
                                            projects, such as Web3 applications or enterprise systems, may take 1 month
                                            or longer. We will provide a detailed timeline after discussing your
                                            specific needs and goals during the consultation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "accordion-item content__space fade-top" +
                                    (imgTab === 2 ? " faq-one-active" : " ")
                                }
                            >
                                <h5 className="accordion-header" id="headingThree">
                                    <button
                                        className={
                                            (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                                        }
                                        onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        How much does it cost?
                                    </button>
                                </h5>
                                <div
                                    id="collapseThree"
                                    className={`accordion-collapse collapse${
                                        imgTab === 2 ? " show " : ""
                                    }`}
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            The cost of a project varies based on its features, scope, and complexity.
                                            We provide a customized proposal after understanding your requirements,
                                            ensuring you receive the best value for your investment. During our
                                            consultation, we will work with you to define a budget that aligns with your
                                            goals and project scope, and we will provide a clear breakdown of costs for
                                            full transparency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "accordion-item content__space fade-top" +
                                    (imgTab === 3 ? " faq-one-active" : " ")
                                }
                            >
                                <h5 className="accordion-header" id="headingFour">
                                    <button
                                        className={
                                            (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                                        }
                                        onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        How do I get started with your services?
                                    </button>
                                </h5>
                                <div
                                    id="collapseFour"
                                    className={`accordion-collapse collapse${
                                        imgTab === 3 ? " show " : ""
                                    }`}
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Getting started with our services is simple. You can reach out to us through
                                            our contact form or schedule a consultation to discuss your project in
                                            detail. We’ll review your goals, objectives, and ideas, then create a
                                            tailored plan that aligns with your business needs. Afterward, we’ll provide
                                            a proposal, and if everything looks good, we’ll guide you through each step
                                            of the process, from planning to launch and beyond.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqMain;
