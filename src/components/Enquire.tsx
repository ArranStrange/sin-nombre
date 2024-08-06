import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, ValidationError } from "@formspree/react";
import { inView, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "./assets/images/Logo3.png";

const Enquire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    eventType: "Wedding",
    eventDetails: "",
    numberOfAttendees: "",
    eventDate: "",
    message: "",
  });
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [state, handleSubmit] = useForm("mzzpbkkj");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-evenly w-screen">
        <div
          id="aboutus"
          className="flex flex-col h-[400px] w-screen bg-black items-center border-b-2 border-b-white"
        >
          <img src={Logo} alt="Logo" className="h-2/4 mt-20" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            ref={ref}
            className="mt-100 mb-30 z-1 flex flex-row justify-center items-center lg:w-[90%] sm:w-[50%] h-2/3 bg-transparent text-white"
          >
            <h1 className="mb-30 text-xl sm:w-[90%] lg:w-[70%] text-center text-wrap">
              Thank you for getting in touch! <br />
              We will reply as soon as possible.
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sin Nombre Enquiry Form</title>
        <meta
          name="description"
          content="Cardiff Based Mexican Street Food Enquiry Food, Enquire for Weddings, Coporate Events, Pop-up and Festivals"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="mt-[50px] max-w-xl mx-auto p-4 bg-transparent rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-white rounded-md"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-white font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError
            prefix="Phone Number"
            field="phoneNumber"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventType"
            className="block text-white font-bold mb-2"
          >
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="Wedding">Wedding</option>
            <option value="Private function">Private function</option>
            <option value="Festival">Festival</option>
            <option value="Pop-up">Pop-up</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError
            prefix="Event Type"
            field="eventType"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDetails"
            className="block text-white font-bold mb-2"
          >
            Event Location
          </label>
          <input
            type="text"
            id="eventDetails"
            name="Location"
            value={formData.eventDetails}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError
            prefix="Event Details"
            field="eventDetails"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numberOfAttendees"
            className="block text-white font-bold mb-2"
          >
            Approx. Number of Attendees
          </label>
          <input
            type="number"
            id="numberOfAttendees"
            name="numberOfAttendees"
            value={formData.numberOfAttendees}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError
            prefix="Number of Attendees"
            field="numberOfAttendees"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDate"
            className="block text-white font-bold mb-2"
          >
            Event Date <i className="text-sm">(If Known)</i>
          </label>
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError
            prefix="Event Date"
            field="eventDate"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex justify-center align-middle">
          <button
            type="submit"
            disabled={state.submitting}
            className="z-19 w-1/2 p-2 bg-white text-black font-bold rounded-md hover:bg-transparent border hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Enquire;
