import React from 'react';

const SignIn = (props) => {
    return (
        <form className="lg:w-350 w-full bg-white rounded-lg shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4 uppercase">Sign In</h2>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div class="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            {/* ERROR MESSAGE  */}
            <p className="text-red-500 text-xs italic">Please enter a password.</p>
            </div>
        <div className="flex flex-col items-center justify-between">
          <button className="bg-custom-limegreen hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <br />
          <p className="text-sm mt-4 text-green-500 hover:text-green-600 cursor-pointer">
            Forgot Password?
          </p>
        </div>
            <p className="mt-4 text-center">
                No account? 
                <br />
                <span onClick={props.handleAcct} className="font-bold text-custom-green hover:text-custom-limegreen cursor-pointer">Sign Up!</span>
            </p>
      </form>

    );
};

export default SignIn;