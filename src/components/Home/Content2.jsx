import React from 'react';

const Content2 = () => {
    return (
        <div className="bg-base-100">
          
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 >OUR CURRICULUM</h2>
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl"
            >
              <circle
                fill="currentColor"
                fillOpacity="0.4"
                cx="44"
                cy="44"
                r="15.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-lg">
            <div className="px-10 py-20 text-center transition duration-300 transform bg-base-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold">
              Core Elements
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-base-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold">
              Pre-Production
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-base-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold">
              Production
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-base-100 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold">
              Post-Production
              </p>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Content2;