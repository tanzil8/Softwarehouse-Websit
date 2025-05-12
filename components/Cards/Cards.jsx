"use client";

import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCss3,
} from "react-icons/fa";

const journey = [
  // Main Contacts
  {
    type: "experience",
    company: "Acconts & Audit Headed By Mr. Saad Hasan (FCA)",
    logoUrl: "/assets/journey/experience/hammer.svg",
    position: "",
    // duration: "Jul 2021 - Present",
    description: "Saad Hassan is a commerce graduate from University of Karachi. He became member of the institute of Chartered Accountants of Pakistan (ICAP) in 1998 from FORD, RHODES, ROBSON, MORROW, Chartered Accountants (Member firm of Ernst & Young International), Karachi. He became the member as Fellow Institute of Corporate Secretaries of Pakistan (FCIS), in 1994 and is also the member of Income Tax Bar Association, Karachi. He has over 20 years of rich experience in the field of Accounting, Statutory Audits, Internal Audits, Information Systems Audits, Management & Financial Consultancy, Direct Taxation, VAT/Sales tax, Service tax, Company Law matters, Approvals from government agencies, Services relating to financial operations and Software implementation."
    
  },
 
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">FINANCIAL ASSOCIATES</TabsTrigger>
          {/* real value instead of sector was experience */}
          <TabsTrigger value="education">STAFF STRENGTH</TabsTrigger>
          <TabsTrigger value="skills">CAREERS</TabsTrigger>
          {/* real value instead of career was my skills */}
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
