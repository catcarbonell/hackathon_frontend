import React from 'react';
import unload from '../../Assets/img-05.jpg';

const Two = () => {
    return(
        <div className="overflow-hidden h-auto my-2 lg:flex-row flex flex-col justify-center content-center items-center m-auto bg-white">
             <div className="lg:w-1/2">
                <img src={ unload } className="object-cover w-full" alt="People helping unload a truck full of groceries" />
            </div>
            <div className="lg:flex lg:flex-col lg:w-1/3 px-12 py-20">
                <h2 className="lg:text-3xl text-xl text-left font-bold uppercase">
                    #shoplocal
                </h2>
                <p className="text-lg text-justify mt-4">
                    <span className="font-bold uppercase">Us to You</span> is working across America to safely to distribute individually packaged, fresh meals in communities and small business that need support – for children and families to pick up and take home, as well as delivery to seniors who cannot venture outside. To date, Us to you has provided over 25 million meals in more than 400 cities.
                </p>
                
                <p className="text-lg text-justify mt-4">
                    Traditional safety nets like school feeding programs, city services, and food banks are struggling to meet basic needs. Seniors, who are isolated for their safety, are unable to access meal services. Meanwhile, the country’s hospital workers are more stretched than ever before.
                </p>
            </div>
           

        </div>
    );
}

export default Two;