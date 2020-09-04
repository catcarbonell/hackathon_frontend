import React from 'react';
const CompletedPurchase = () => {

    return(
        <div className="flex flex-col justify-center m-auto w-full h-screen">
            <div className="rounded-lg py-10 px-8 self-center items-center content-center lg:w-1/3 w-5/6 bg-white shadow">
                <h3 className="text-3xl">
                    Thank you for your purchase!
                </h3>
                <p className="text-xl">
                    Your driver will arrive in approximately <span className="font-bold">10 minutes!</span>
                </p>
                <img className="mx-auto rounded-lg my-8" src="https://media2.giphy.com/media/5tlq0pRndGu8U/giphy.gif?cid=ecf05e47d7bjy6z1edfolo58mbgha97fkp55zgjkjmfs9zf7&rid=giphy.gif" alt="Dumbledore and Snape celebrating" />
            </div>

        </div>
    );
}

export default CompletedPurchase;