import React, { useEffect, useState } from "react";

interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  thumbnail: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleLocationClick = (location: string) => {
    const query = encodeURIComponent(location);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-10 mb-10">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 mt-6 text-white">Event Listings</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="shadow-xl rounded-lg overflow-hidden"
            >
              <img
                src={event.thumbnail}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold mb-2 uppercase">
                  {event.name}
                </h2>
                <p className="text-white mb-2">{event.date}</p>
                <button
                  onClick={() => handleLocationClick(event.location)}
                  className="text-white hover:text-orange"
                >
                  {event.location}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
