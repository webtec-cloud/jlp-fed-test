import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Mycart = () => {
  const Router = useRouter();
  const [allproducts, setallproducts] = useState([]);
  const id = Router.query.id;
  useEffect(() => {
    if (id)
      fetch("https://api.johnlewis.com/mobile-apps/api/v1/products/" + id)
        .then((res) => res.json())

        .then((res) => {
          if (!res.error) {
            if (localStorage.getItem("cartdata")) {
              setallproducts(
                [...JSON.parse(localStorage.getItem("cartdata")), res].filter(
                  (value, index, self) =>
                    index ===
                    self.findIndex((t) => t.productId === value.productId)
                )
              );

              localStorage.setItem(
                "cartdata",
                JSON.stringify(
                  [...JSON.parse(localStorage.getItem("cartdata")), res].filter(
                    (value, index, self) =>
                      index ===
                      self.findIndex((t) => t.productId === value.productId)
                  )
                )
              );
            } else {
              setallproducts([res]);

              localStorage.setItem("cartdata", JSON.stringify([res]));
            }
          }
        });
  }, [id]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">All Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {allproducts.length > 0 &&
            allproducts.map((item) => (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={item.media?.images?.urls[0]}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-evenly ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.title}</span>
                  </div>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">
                  ${item.price?.now}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${item.price?.now}
                </span>
              </div>
            ))}
        </div>
        <div className="w-1/4 ml-auto bg-gray-200 p-8 m-32  ">
          <div className="flex justify-between mb-6">
            <p className="text-xl font-bold m-auto  ">ORDER SUMMARY</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Sub Total</p>
            <p>
              $
              {allproducts
                .filter(
                  (value, index, self) =>
                    index ===
                    self.findIndex((t) => t.productId === value.productId)
                )
                .reduce(
                  (previousValue, currentValue) =>
                    previousValue + parseFloat(currentValue?.price?.now),
                  0
                )}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">total</p>
            <p>
              $
              {allproducts
                .filter(
                  (value, index, self) =>
                    index ===
                    self.findIndex((t) => t.productId === value.productId)
                )
                .reduce(
                  (previousValue, currentValue) =>
                    previousValue + parseFloat(currentValue?.price?.now),
                  0
                )}
            </p>
          </div>
          <Link href="/thanksforshopping">
            <button className="bg-blue-500 px-10 py-2 m-auto text-white mt-6  ">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
