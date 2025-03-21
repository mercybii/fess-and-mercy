import React from 'react';
import LaundryImage from '../assets/images/1.png';

const LaundryLanding = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Navigation Bar */}
            <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-blue-600">GetGo Laundry</h1>
                <div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2 hover:bg-blue-600">Sign In</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">SignUp</button>
                </div>
            </nav>
            
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row items-center mt-10 w-full max-w-6xl">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left p-6">
                    <h2 className="text-4xl font-bold text-gray-800">Get your laundry & dry cleaning within 24 hours</h2>
                    <p className="text-lg text-gray-600 mt-4">A convenient laundry solution that helps protect the environment.</p>
                    <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Learn More</button>
                </div>
                
                {/* Image Section */}
                <div className="lg:w-1/2 p-6 flex justify-center">
                    <img src={LaundryImage} alt="Laundry Service" className="w-full max-w-md rounded-lg shadow-md" />
                </div>
            </div>
            
            {/* Booking Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full max-w-4xl">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Schedule your collection</h3>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-600">Earliest</label>
                        <input type="time" className="border p-2 rounded w-full" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-600">Latest</label>
                        <input type="time" className="border p-2 rounded w-full" />
                    </div>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Search Slot</button>
                </div>
            </div>
        </div>
    );
};

export default LaundryLanding;
