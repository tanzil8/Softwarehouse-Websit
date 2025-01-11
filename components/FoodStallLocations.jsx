import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getGoogleMapsUrl } from "@/lib/mapUtils";

const foodStalls = {
  Karachi: [
    { name: "Saddar Food Stall", location: "Saddar Town, Karachi Saylani Dastarkhwan" },
    { name: "Gulshan-e-Iqbal Food Stall", location: "Gulshan-e-Iqbal, Karachi" },
    { name: "North Nazimabad Food Stall", location: "North Nazimabad, Karachi" },
  ],
  Lahore: [
    { name: "Johar Town Food Stall", location: "Johar Town, Lahore" },
    { name: "Gulberg Food Stall", location: "Gulberg, Lahore" },
    { name: "Model Town Food Stall", location: "Model Town, Lahore" },
  ],
  Islamabad: [
    { name: "F-10 Food Stall", location: "F-10 Markaz, Islamabad" },
    { name: "G-9 Food Stall", location: "G-9 Markaz, Islamabad" },
    { name: "Blue Area Food Stall", location: "Blue Area, Islamabad" },
  ],
};

function FoodStallLocations() {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="py-16 bg-[#7FDFD4]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-white">SAYLANI</span>
            <span className="text-black"> FOOD STALL</span>
          </h1>
          <p className="text-white text-lg">Locations Across Pakistan</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <Tabs defaultValue="Karachi" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {Object.keys(foodStalls).map((city) => (
                <TabsTrigger 
                  key={city} 
                  value={city}
                  className="data-[state=active]:bg-[#7FDFD4] data-[state=active]:text-white"
                >
                  {city}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(foodStalls).map(([city, stalls]) => (
              <TabsContent key={city} value={city}>
                <div className="rounded-lg">
                  <ul className="divide-y divide-gray-100">
                    {stalls.map((stall, index) => (
                      <li
                        key={index}
                        className="py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 px-4 rounded-lg transition-colors"
                        onClick={() => setSelectedLocation(stall.location)}
                      >
                        <div className="text-lg font-medium text-gray-800">
                          {stall.name}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-2">
                          {stall.location}
                          <svg
                            className="w-5 h-5 text-[#7FDFD4]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {selectedLocation && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Selected Location: {selectedLocation}
              </h3>
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <iframe
                  src={getGoogleMapsUrl(selectedLocation)}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodStallLocations;

