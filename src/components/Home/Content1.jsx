import React from 'react';

const Content1 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
              Sporty Scholars
              <br className="hidden md:block" />
             
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
               
                </span>
              </span>
            </h2>
            <p className="text-base  md:text-lg">
           Spend wonderful time with your children and help them to develop their skills
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-base-300 border-l-4 shadow-sm ">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                   A place where you can find everything for your child
                </h6>
                <p className="text-sm ">
                    Find out how much they enjoy doing sport
                </p>
              </div>
            </div>
            <div className="bg-base-300 border-l-4 shadow-sm ">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                    A place where you can find everything for your child
                </h6>
                <p className="text-sm ">
                    Find out how much they enjoy doing sport
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://i.ibb.co/fYCb0fQ/banner4.webp"
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default Content1;