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
    <div className="flex  flex-col">
      
      <main className="flex-grow bg-white">
        <section className="pt-16 pb-8" id="contact">
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
                               <p>Gulshan e iqbal</p>
                             </div>
                             <div className="flex gap-4">
                               <FaPhone className="text-blue-600 mt-1 flex-shrink-0" />
                               <div>
                                
                                 <p>Mobile:+(92) 3132662793</p>
                               </div>
                             </div>
                             <div className="flex gap-4">
                               <FaEnvelope className="text-blue-600 mt-1 flex-shrink-0" />
                               <p>umerkhan8028@gmail.com</p>
                             </div>
                           </div>
                         </div>

              <div className="flex-1 bg-gray-100 p-8 rounded-lg text-gray-800 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-blue-600">BRANCH OFFICES</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Gulshan e iqbal</p>
                      <p></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-2">Hyderi</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form and Image Section */}
          
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Contact2;

