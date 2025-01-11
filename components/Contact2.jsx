import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';

const Contact2 = () => {
  const [state, handleSubmit] = useForm("mzzzykqb");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-grow bg-white">
        <section className="pt-16 pb-32" id="contact">
          <div className="container mx-auto px-4">
            <AnimatedText
              text="Contact Us"
              textStyles="h2 mb-12 text-center text-gray-900"
            />
            
            {/* Address Section */}
           <div className="flex flex-col md:flex-row gap-8 mb-16">
                         <div className="flex-1 bg-gray-100 p-8 rounded-lg text-gray-800 shadow-md">
                           <h3 className="text-xl font-bold mb-6 text-blue-600">HEAD OFFICE</h3>
                           <div className="space-y-4">
                             <div className="flex gap-4">
                               <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                               <p>A-25, off Bahadur Shah Zafar Road, near Grappetite Chowrangi, Bahadurabad Bahadur Yar Jang CHS, Karachi, Karachi City, Sindh</p>
                             </div>
                             <div className="flex gap-4">
                               <FaPhone className="text-blue-600 mt-1 flex-shrink-0" />
                               <div>
                                 <p>Tel: (021) 111 729 526</p>
                                 <p>Mobile:(021) 111 729 526 / (021) 111 729 526</p>
                               </div>
                             </div>
                             <div className="flex gap-4">
                               <FaEnvelope className="text-blue-600 mt-1 flex-shrink-0" />
                               <p>abc@gmail.com</p>
                             </div>
                           </div>
                         </div>

              <div className="flex-1 bg-gray-100 p-8 rounded-lg text-gray-800 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-blue-600">BRANCH OFFICES</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Islamabad</p>
                      <p></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Lahore</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form and Image Section */}
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-6 w-full max-w-[480px] mx-auto lg:mx-0"
                >
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <label
                        htmlFor="firstname"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        First Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Last Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="example@email.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="+92 300 1234567"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      onChange={handleChange}
                      id="message"
                      name="message"
                      value={formData.message}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="Leave a message..."
                      rows="5"
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FaCheckCircle
                          className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                            showIcon ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <span
                          className={`transition-opacity duration-500 ease-in-out ${
                            showIcon ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          Send message
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              <div className="flex-1">
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/contact/contact2.jpg"
                    className="object-cover"
                    fill
                    quality={100}
                    alt="Contact office"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Contact2;

