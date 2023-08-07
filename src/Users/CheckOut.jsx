import React, { useContext, useState } from "react";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/order", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify,
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-[#0b1324] ">
      <div className="max-w-md mx-auto p-8 rounded shadow-md dark:shadow-slate-800">
        <h1 className="primary-highlighter dark:text-[#38bdf8]">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-[#515d6f]  dark:text-[#7a899d]  text-sm font-bold mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cardName"
              className="block text-[#515d6f]  dark:text-[#7a899d]  text-sm font-bold mb-2"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardName"
              className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="expiryDate"
                className="block text-[#515d6f]  dark:text-[#7a899d]  text-sm font-bold mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="cvv"
                className="block text-[#515d6f]  dark:text-[#7a899d]  text-sm font-bold mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-center mt-10 cursor-pointer w-full bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
