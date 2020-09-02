import React from "react";

const ShoppingCart = (props) => {
  return (
    <div>
      <br></br>
      <center>
        <h1 className="text-3xl">Your Cart</h1>
      </center>
      <div>
        <br></br>
        <center>
          <table className="table-auto shadow-xl rounded-lg text-lg ">
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">"myUrl.jpg"</td>
              <td className="border px-4 py-2">Hamburger</td>
              <td className="border px-4 py-2">$6.99</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">$6.99</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">"myUrl.jpg"</td>
              <td className="border px-4 py-2">Fries</td>
              <td className="border px-4 py-2">$4.99</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">$9.98</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">"myUrl.jpg"</td>
              <td className="border px-4 py-2">Coke</td>
              <td className="border px-4 py-2">$1.99</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">$1.99</td>
            </tr>
          </table>
        </center>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <center>
        <div>
          <span className="m-4 text-lg uppercase hover:text-custom-green lg:py-2 lg:px-6 lg:shadow-md lg:text-white lg:bg-custom-green lg:rounded-md lg:hover:bg-green-600 lg:hover:text-white cursor-pointer">
            Checkout
          </span>
        </div>
      </center>
      <br></br>
      <br></br>
    </div>
  );
};

export default ShoppingCart;
