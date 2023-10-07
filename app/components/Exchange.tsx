import React from "react";

const Exchange = () => {
  return (
    <section
      id="exchange"
      className="py-4 h-40  w-full grid grid-cols-6 bg-stone-100 border-y-4 border-stone-600"
    >
      <div className="col-span-2">
        <h1 className="text-4xl">Currency Calculator</h1>
        <p className="text-2xl">Check the exchange rate with our calcutor!</p>
      </div>
      <div className="col-span-4"></div>
    </section>
  );
};

export default Exchange;
