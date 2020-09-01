import React from 'react';

const SignUp = (props) => {
    return (       
        <form className="md:w-2/5 w-5/6 m-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Create your Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div class="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Create a Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                {/* ERROR MESSAGE  */}
                <p className="text-red-500 text-xs italic">
                    Password must be 8 characters long.
                </p>
            </div>
            <div class="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password, again
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                {/* ERROR MESSAGE  */}
                <p className="text-red-500 text-xs italic">
                    Passwords do not match. Try again.
                </p>
            </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
                </button>
            </div>
            <p className="mt-4 text-center">
                Have an account already? 
                <br />
                <span onClick={props.handleAcct} className="font-bold text-custom-red hover:text-custom-blue cursor-pointer">Sign In!</span>
            </p>
      </form>

    );
};

export default SignUp;