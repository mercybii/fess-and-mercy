import React from 'react';

const Home = () => {
    return (
        <div className="text-center p-5">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Laundry Management System</h1>
            <p className="text-lg text-gray-600 mb-6">Effortlessly manage your laundry services with ease.</p>
            <div className="mt-5">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 mx-2">
                    View Services
                </button>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 mx-2">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Home;
