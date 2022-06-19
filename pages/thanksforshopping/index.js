import Link from "next/link";
import React from "react";

const Thanksforshopping = () => {
  return (
    <div className="items-center flex justify-center flex-col h-screen ">
      <h1 className="text-green-500 text-5xl font-bold ">
        Thanks for Shopping
      </h1>
      <Link href="/">
        <button className="bg-black text-white font-bold px-10 py-2 cursor-pointer mt-4">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Thanksforshopping;
