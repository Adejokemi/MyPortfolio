import React from "react";
import CtaButton from "./CtaButton";

const ContactForm = () => {
  return (
    <div className="lg:py-24 pb-12 w-5/6">
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
      <p className="text-sm text-gray-700 mb-6">
        I am always happy to hear from you
      </p>
      <form className=" ">
        <div className="mb-10">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b border-teal-950 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          />
        </div>

        <div className="mb-10">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b border-teal-950 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          />
        </div>

        <div className="mb-10">
          <label htmlFor="message" className="block mb-2 text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-b border-teal-950 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          ></textarea>
        </div>
        <CtaButton>S E N D</CtaButton>
      </form>
    </div>
  );
};
export default ContactForm;
