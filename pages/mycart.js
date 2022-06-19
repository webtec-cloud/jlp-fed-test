import Link from "next/link";
import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { useRouter } from "next/router";

Array.prototype.unique = function () {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const Mycart = () => {
  let [Num, setNum] = useState(0);

  const Router = useRouter();
  console.log(Router.query);
  const [value, setValue] = useState({});
  const [allproducts, setallproducts] = useState([]);
  const id = Router.query.id;
  console.log(value);
  let incrementNumber = (id, qty) => {
    const singleProduct = allproducts.find((x) => x.productId === id);
    console.log(singleProduct);
    if (Num < 10) {
      console.log(localStorage.getItem("cartdata"));
      setallproducts([
        ...JSON.parse(localStorage.getItem("cartdata")),
        { ...singleProduct, qty: singleProduct.qty + 1 },
      ]);
      localStorage.setItem(
        "cartdata",
        JSON.stringify(
          allproducts.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.productId === value.productId)
          )
        )
      );
      setNum(Number(Num) + 1);
    }
  };
  let decrementNumber = () => {
    if (Num > 0) {
      setNum(Num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  // useEffect(() => {
  //   setallproducts(JSON.parse(localStorage.getItem("cartdata")));
  // }, []);

  useEffect(() => {
    if (id)
      fetch("https://api.johnlewis.com/mobile-apps/api/v1/products/" + id)
        .then((res) => res.json())

        .then((res) => {
          if (!res.error) {
            if (localStorage.getItem("cartdata")) {
              setallproducts([
                ...JSON.parse(localStorage.getItem("cartdata")),
                { ...res, qty: 1 },
              ]);

              setValue(res);
              console.log(res);

              localStorage.setItem(
                "cartdata",
                JSON.stringify(
                  [
                    ...JSON.parse(localStorage.getItem("cartdata")),
                    { ...res, qty: 1 },
                  ].filter(
                    (value, index, self) =>
                      index ===
                      self.findIndex((t) => t.productId === value.productId)
                  )
                )
              );
            } else {
              setallproducts([{ ...res, qty: 1 }]);

              setValue(res);
              console.log(res);
              localStorage.setItem(
                "cartdata",
                JSON.stringify([{ ...res, qty: 1 }])
              );
            }
          }
        });
  }, [id]);
  console.log(
    allproducts.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.productId === value.productId)
    )
  );
  return (
    <div>
      <h1 className="text-4xl m-auto font-bold mb-20 w-full flex justify-center">
        My Cart{" "}
      </h1>
      <div className="w-full m-auto bg-gray-200 p-8 ">
        <div className="flex justify-between mb-6">
          <p className="text-lg font-bold ">product image</p>

          <p className="text-lg font-bold ">product</p>
          <p className="text-lg font-bold ">price</p>
          <p className="text-lg font-bold ">quanity</p>
          <p className="text-lg font-bold ">total</p>
        </div>
        {allproducts.length > 0 &&
          allproducts
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.productId === value.productId)
            )
            .map((item) => (
              <div className="flex justify-between">
                <img
                  className="h-8 object-cover mr-1 "
                  src={item.media?.images?.urls[0]}
                />
                <p className="flex">{item.title}</p>
                <p>${item.price?.now}</p>
                <p>
                  <button
                    onClick={decrementNumber}
                    className="rounded-full p-2 bg-yellow-400 text-lg mr-2"
                  >
                    -
                  </button>
                  {item.qty}
                  <button
                    onClick={() => incrementNumber(item.productId, item.qty)}
                    className="rounded-full p-2 bg-yellow-400 text-lg ml-2"
                  >
                    +
                  </button>
                </p>
                <p>${item.price?.now}</p>
              </div>
            ))}
      </div>
      <div className="w-1/4 ml-auto bg-gray-200 p-8 m-32  ">
        <div className="flex justify-between mb-6">
          <p className="text-lg font-bold m-auto  ">cart total</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">sub total</p>
          <p>
            $
            {allproducts.reduce(
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
            {allproducts.reduce(
              (previousValue, currentValue) =>
                previousValue + parseFloat(currentValue?.price?.now),
              0
            )}
          </p>
        </div>
        <Link href="/thanksforshopping">
          <button className="bg-blue-500 px-10 py-2 m-auto text-white mt-6  ">
            proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mycart;
