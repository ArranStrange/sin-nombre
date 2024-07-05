import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add EmailJS integration here
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
        className="mt-[50px]  max-w-xl mx-auto p-4 bg-transparent  rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-white rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
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
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
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
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDetails"
            className="block text-white font-bold mb-2"
          >
            Event Details
          </label>
          <input
            type="text"
            id="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
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
            value={formData.numberOfAttendees}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventDate"
            className="block text-white font-bold mb-2"
          >
            Event Date
          </label>
          <input
            type="text"
            id="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <div className=" flex justify-center align-middle">
          <button
            type="submit"
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
