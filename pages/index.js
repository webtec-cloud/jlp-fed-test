import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import Headercarousel from "../components/headercarousel";
import Singlecard from "../components/singlecard";
import Footer from "../components/footer";

const Home = () => {
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch(
      "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
    )
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  console.log(value);
  return (
    <div>
      <Head>
        <title>JL &amp; Partners | Home</title>
        <meta name="keywords" content="shopping" />
      </Head>
      <div>
        <div className="h-[75vh] ">
          {" "}
          <Headercarousel />{" "}
        </div>
        <div className="flex justify-end pr-32 ">
          <Link href="/mycart">
            <button
              className="bg-black text-white text-xl px-12 py-4 flex items-center hover:bg-gray-200 hover:text-black"
              type="submit"
            >
              My Cart
              <i className="ml-2 fa-solid fa-cart-arrow-down text-3xl"></i>
            </button>
          </Link>
        </div>
        <h1 className="text-red-500 m-auto text-4xl font-bold flex justify-center">
          Dishwashers{" "}
        </h1>
        <div className={styles.contentcontainer}>
          {value.products &&
            value.products.slice(1, 21).map((item) => (
              <a className={styles.link}>
                <div className={styles.content}>
                  <Singlecard
                    title={item.title}
                    image={item.image}
                    price={item.variantPriceRange?.display?.max}
                    reviews={item.reviews}
                    productId={item.productId}
                  />
                </div>
              </a>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
