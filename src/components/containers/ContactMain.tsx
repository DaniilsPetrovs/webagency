// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import phone from "public/images/phone.png";
// import mail from "public/images/mail.png";
// import location from "public/images/location.png";
// import time from "public/images/time.png";
//
// const ContactMain = () => {
//
//   const handleSubmit = async (event : any) => {
//     event.preventDefault();  // Prevent default form submission behavior
//
//     // Collect form data
//     const formData = {
//       name: event.target.contactName.value,
//       email: event.target.contactEmail.value,
//       subject: event.target.querySelector('.subject').value,
//       message: event.target.contactMessage.value,
//     };
//
//     // Send form data to your backend
//     try {
//       const response = await fetch('http://localhost:3001/api/sendmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//
//       });
//       console.log("My response ", response);
//
//       const responseData = await response.json();
//       if (responseData.success) {
//         alert('Message sent successfully!');
//       } else {
//         alert('Failed to send message.');
//       }
//     } catch (error) {
//       console.error('Failed to send message:', error);
//       alert('Error sending message.');
//     }
//   };
//
//   return (
//     <section className="section contact-m fade-wrapper">
//       <div className="container">
//         <div className="row gaper">
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="contact-m__single topy-tilt fade-top">
//               <div className="thumb">
//                 <Image src={phone} alt="Image" />
//               </div>
//               <div className="content">
//                 <h4>Phone & Fax</h4>
//                 <p>
//                   <Link href="tel:197-90-56-780">Mobile : +197-90-56-780</Link>
//                 </p>
//                 <p>
//                   <Link href="tel:197-90-56-780">Fax : +44-208-1234567</Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="contact-m__single topy-tilt fade-top">
//               <div className="thumb">
//                 <Image src={mail} alt="Image" />
//               </div>
//               <div className="content">
//                 <h4>Mail Address</h4>
//                 <p>
//                   <Link href="mailto:info.company@gmail.com">
//                     Info.company@gmail.com
//                   </Link>
//                 </p>
//                 <p>
//                   <Link href="mailto:info.company@gmail.com">
//                     Info.company@yahoo.com
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="contact-m__single topy-tilt fade-top">
//               <div className="thumb">
//                 <Image src={location} alt="Image" />
//               </div>
//               <div className="content">
//                 <h4>Our Location</h4>
//                 <p>
//                   <Link
//                     href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
//                     target="_blank"
//                   >
//                     85 Ketch Harbour RoadBensalem, PA 19020
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-xl-3">
//             <div className="contact-m__single topy-tilt fade-top">
//               <div className="thumb">
//                 <Image src={time} alt="Image" />
//               </div>
//               <div className="content">
//                 <h4>Office Hour</h4>
//                 <p>Sun - Thu 09 am - 06pm</p>
//                 <p>Fri - Sat 4 pm - 10pm</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="map-wrapper">
//               <div className="row gaper">
//                 <div className="col-12 col-lg-6">
//                   <div className="contact__map fade-top">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139177.94112094856!2d23.964268343380816!3d56.971836327431184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga!5e0!3m2!1sen!2slv!4v1734513125704!5m2!1sen!2slv"
//                       width="100"
//                       height="800"
//                       style={{ border: "0px" }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                 </div>
//                 <div className="col-12 col-lg-6">
//                   <div className="contact-main__form  fade-top">
//                     <h3>Leave A Message</h3>
//                     <form
//                         onSubmit={handleSubmit}
//                       action="#"
//                       method="post"
//                       className="section__content-cta"
//                     >
//                       <div className="group-wrapper">
//                         <div className="group-input ">
//                           <input
//                             type="text"
//                             name="contact-name"
//                             id="contactName"
//                             placeholder="Name"
//                           />
//                         </div>
//                         <div className="group-input ">
//                           <input
//                             type="email"
//                             name="contact-email"
//                             id="contactEmail"
//                             placeholder="Email"
//                           />
//                         </div>
//                       </div>
//                       <div className="group-input drt">
//                         <select className="subject">
//                           <option data-display="Subject">Subject</option>
//                           <option value="1">Service</option>
//                           <option value="2">Pricing</option>
//                           <option value="3">Support</option>
//                         </select>
//                       </div>
//                       <div className="group-input ">
//                         <textarea
//                           name="contact-message"
//                           id="contactMessage"
//                           placeholder="Message"
//                         ></textarea>
//                       </div>
//                       <div className="form-cta justify-content-start">
//                         <button type="submit" className="btn btn--primary">
//                           Send Message
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default ContactMain;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access form elements
    const form = event.currentTarget;

    // EmailJS parameters
    const serviceID = "service_lengv88";
    const templateID = "template_qededkc";
    const userID = "GCIKFXD95WoO48n6j";

    try {
      const result = await emailjs.sendForm(serviceID, templateID, form, userID);

      if (result.status === 200) {
        alert("Message sent successfully!");
        form.reset(); // Clear the form
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
      <section className="section contact-m fade-wrapper">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="contact-m__single topy-tilt fade-top">
                <div className="thumb">
                  <Image src={phone} alt="Image" />
                </div>
                <div className="content">
                  <h4>Social</h4>
                  <p>
                    <Link href="https://t.me/lovecoding77">Telegram</Link>
                  </p>
                  <p>
                    <Link href="https://www.instagram.com/">Instagram</Link>
                  </p>

                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="contact-m__single topy-tilt fade-top">
                <div className="thumb">
                  <Image src={mail} alt="Image" />
                </div>
                <div className="content">
                  <h4>Mail Address</h4>
                  <p>
                    <Link href="mailto:thewebcosmo@gmail.com">
                      thewebcosmo@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="contact-m__single topy-tilt fade-top">
                <div className="thumb">
                  <Image src={location} alt="Image" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>
                    <Link
                        href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                        target="_blank"
                    >
                      Europe, Riga
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="contact-m__single topy-tilt fade-top">
                <div className="thumb">
                  <Image src={time} alt="Image" />
                </div>
                <div className="content">
                  <h4>Office Hour</h4>
                  <p>Mon - Fri | 8 am - 8pm</p>
                  <p>Sat - Sun | 9 am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="map-wrapper">
                <div className="row gaper">
                  <div className="col-12 col-lg-6">
                    <div className="contact__map fade-top">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139177.94112094856!2d23.964268343380816!3d56.971836327431184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga!5e0!3m2!1sen!2slv!4v1734513125704!5m2!1sen!2slv"
                          width="100"
                          height="800"
                          style={{ border: "0px" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="contact-main__form fade-top">
                      <h3>Leave A Message</h3>
                      <form
                          onSubmit={handleSubmit}
                          className="section__content-cta"
                      >
                        <div className="group-wrapper">
                          <div className="group-input ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                          </div>
                          <div className="group-input ">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                          </div>
                        </div>
                        <div className="group-input ">
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                        ></textarea>
                        </div>
                        <div className="form-cta justify-content-start">
                          <button type="submit" className="btn btn--primary">
                            Send Message
                          </button>
                        </div>
                      </form>
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

export default ContactMain;
