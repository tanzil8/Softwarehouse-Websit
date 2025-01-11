import React, { useState } from "react";
import { PlayCircle, X } from 'lucide-react';

const mediaData = [
  {
    id: 1,
    title: "Saylani Welfare Trust 2 Waqt Ka Khana Mustahiqeen Tak Kis Tarhan Pohncha Raha Hai?",
    date: "Wed Nov 20 2024",
    tag: "#Organisation",
    videoId: "gpmoq-Jl9vw"
  },
  {
    id: 2,
    title: "Empowering Pakistan's Tech Future with Saylani's SMIT Program | Gitex Global",
    date: "Thu Oct 17 2024",
    tag: "#Organisation",
    videoId: "8cb75U-a4yQ"
  },
  {
    id: 3,
    title: "Learn Turkish Language with Saylani | Enroll Now",
    date: "Thu Oct 17 2024",
    tag: "#Organisation",
    videoId: "bmkjDWTyDfY"
  },
  {
    id: 4,
    title: "System Design & Architecture Course | Saylani Mass IT Training",
    date: "Sun Oct 06 2024",
    tag: "#Organisation",
    videoId: "BtmXIhT66HU"
  },
  {
    id: 5,
    title: "Mobile on easy installment | Maulana Bashir Farooq Qadri",
    date: "Sun Oct 06 2024",
    tag: "#Organisation",
    videoId: "OiQQ1auqp7k"
  },
  {
    id: 6,
    title: "Saylani Welfare's REVOLUTIONARY Approach to Saving the Planet in 2024",
    date: "Sun Oct 06 2024",
    tag: "#Organisation",
    videoId: "JIRl-0yKA28"
  },
  {
    id: 7,
    title: "Saylani's 2024 Documentary | Shining Light Through Countless Initiatives",
    date: "Sun Oct 06 2024",
    tag: "#Organisation",
    videoId: "8dJX0y7do-E"
  },
  {
    id: 8,
    title: "Inauguration of Zaitoon Ashraf IT Park | A New Era of Tech Innovation",
    date: "Fri Sep 20 2024",
    tag: "#Organisation",
    videoId: "hCZ764_bvBw"
  }
];

function MediaUpdates() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-[#333] mb-16">
          Media Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaData.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
              onClick={() => setSelectedVideo(item.videoId)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/0.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <PlayCircle className="w-16 h-16 text-[#0D6DB7]" />
                </div>
                {/* Date Tag */}
                <div className="absolute top-3 right-3 bg-[#0D6DB7] text-white text-sm px-3 py-1.5 rounded">
                  {item.date}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8DC63F]">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-[#0D6DB7] z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaUpdates;

