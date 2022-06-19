import ProductCarousel from "../../components/product-carousel/product-carousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../index.module.scss";
import Footer from "../../components/footer";
import Singleproductcarousel from "../../components/singleproductcarousel";

const ProductDetail = () => {
  const [data, setValue] = useState({});
  const [xdata, setxValue] = useState(2);
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    fetch("https://api.johnlewis.com/mobile-apps/api/v1/products/" + id)
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, [id]);
  console.log(data);

  return (
    <div>
      {data && (
        <>
          <div>
            <div
              className={styles.itemcontainer}
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>
          <div>
            <div className={styles.imagecontainer}>
              <div className={styles.ProductCarousel}>
                <Singleproductcarousel
                  image1={data.media?.images.urls[0]}
                  image2={data.media?.images.urls[1]}
                  image3={data.media?.images.urls[2]}
                />
              </div>
              <div className={styles.pricecontainer}>
                <h1 className="text-2xl font-bold">£{data.price?.now}</h1>
                {data.details?.editorsNotes &&
                  data.details?.editorsNotes
                    .split("</p>")
                    .slice(0, xdata)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="heading-red"
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      ></div>
                    ))}

                {data.details?.editorsNotes && xdata === 2 && (
                  <button
                    onClick={() => setxValue(20)}
                    className="rounded-xl px-4 py-2 bg-blue-400"
                  >
                    Read More
                  </button>
                )}
                <div>{data.displaySpecialOffer}</div>
                <div>{data.additionalServices?.includedServices}</div>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="text-3xl font-bold ">Product information</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.details?.productInformation,
                }}
              ></div>
            </div>
            <h3 className="mt-20 text-2xl">Product specification</h3>
            <ul className={styles.tablecontainer}>
              {data.details?.features[0].attributes.map((item, i) => (
                <li className={styles.itemstable} key={i}>
                  <div className={styles.tablecontent}>
                    <div dangerouslySetInnerHTML={{ __html: item.name }} />
                    <p>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetail;
