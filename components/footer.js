import React from "react";

const Footer = () => {
  return (
    <div className="h-fit py-20 bg-blue-500 text-white text-sm font-light">
      <div className="gap-20 m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center w-3/4">
        <div className="">
          <h3 className="font-bold">e-commerce application next.js</h3>
          <p className="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam consequuntur molestias unde distinctio! Magnam dignissimos
            impedit recusandae, ab natus error dolore quae in illo laborum
            repellendus magni dolorem aspernatur?
          </p>
        </div>
        <div>
          <h3 className="font-bold">e-commerce marketplace</h3>
          <p className="pt-2 cursor-pointer">all products</p>{" "}
          <p className="pt-2 cursor-pointer">new products</p>
          <p className="pt-2 cursor-pointer">Latest products</p>{" "}
          <p className="pt-2 cursor-pointer">popular products</p>
        </div>
        <div>
          <h3 className="font-bold">e-commerce marketplace</h3>
          <p className="pt-2 cursor-pointer">all products</p>{" "}
          <p className="pt-2 cursor-pointer">new products</p>
          <p className="pt-2 cursor-pointer">Latest products</p>{" "}
          <p className="pt-2 cursor-pointer">popular products</p>
        </div>
        <div>
          <h3 className="font-bold">e-commerce marketplace</h3>
          <p className="pt-2 cursor-pointer">all products</p>{" "}
          <p className="pt-2 cursor-pointer">new products</p>
          <p className="pt-2 cursor-pointer">Latest products</p>{" "}
          <p className="pt-2 cursor-pointer">popular products</p>
        </div>
      </div>
      <div>
        <hr className="w-3/4 m-auto mt-12"></hr>
      </div>
      <div className="flex flex-col lg:flex-row w-3/4 m-auto items-center justify-between pl-2">
        <div className="cursor-pointer">
          <p>copyright 2022 e-commerce</p>
        </div>
        <div className="flex">
          <div className="pr-12">
            <i className="fa-brands fa-twitter pl-2 "></i>
            <i className="fa-brands fa-facebook-f pl-2 "></i>
            <i className="fa-brands fa-youtube pl-2 "></i>
            <i className="fa-brands fa-pinterest pl-2"></i>
            <i className="fa-brands fa-instragram pl-2"></i>
          </div>
          <p className="pr-4">privacy policy</p>
          <p>terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
