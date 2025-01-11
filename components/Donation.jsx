import React from 'react';

const DonationCTA = () => {
  const handleDonateClick = () => {
    // Replace with actual donation page URL
    window.location.href = 'https://www.saylaniwelfare.com/en/donate';
  };

  return (
    <div className="min-h-screen bg-[#7FDFD4] py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#7FDFD4]">SAYLANI FOOD STALL</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Support our mission to provide nutritious meals to those in need across Pakistan. Your donation can make a real difference in someone's life.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <button 
              onClick={handleDonateClick}
              className="w-full bg-[#7FDFD4] text-white py-4 px-8 rounded-lg font-semibold text-xl hover:bg-[#6fcec3] transition-colors"
            >
              Donate Now
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-[#7FDFD4]">300,000+</h4>
              <p className="text-gray-600">Meals Served Daily</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#7FDFD4]">50+</h4>
              <p className="text-gray-600">Food Stalls</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#7FDFD4]">100%</h4>
              <p className="text-gray-600">Donation Utilization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCTA;

