import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import Footer from "../Footer";
import Header from "../Header";

// Sample data for projects for various categories
const data = [
  {
    href: "",
    category: "Karachi",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Karachi",
    img: "/assets/work/k2.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Karachi",
    img: "/assets/work/k3.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Karachi",
    img: "/assets/work/k4.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Lahore",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Lahore",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Lahore",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Islamabad",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
  {
    href: "",
    category: "Quetta",
    img: "/assets/work/k1.jpg",
    title: "Saddar",
  },
];

const Work2 = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-32 flex-grow ">
        <section className="container mx-auto px-4 py-16" id="work">
          <Tabs defaultValue="all" className="w-full flex flex-col">
            <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
              <AnimatedText text="Our Latest Works" textStyles="h2 mb-[30px] xl:mb-0" />
              <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                {tabData.map((item, index) => {
                  return (
                    <TabsTrigger
                      value={item.category}
                      key={index}
                      className="capitalize w-[120px]"
                      onClick={() => setTabValue(item.category)}
                    >
                      {item.category}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            <TabsContent value={tabValue} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                <AnimatePresence>
                  {filterWork.slice(0, visibleItems).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <WorkItem {...item} onImageClick={handleImageClick} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleItems < filterWork.length && (
                <div className="flex justify-center mt-12">
                  <button onClick={loadMoreItems} className="btn btn-accent">
                    Load more
                  </button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-screen"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Work2;