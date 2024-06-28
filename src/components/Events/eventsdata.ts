interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  thumbnail: string;
}

export const events: Event[] = [
  {
    id: 1,
    name: "Sticky Fingers Street Food",
    location: "Richmond Road, Roath, Cardiff",
    date: "1 January - 30 June 2024",
    thumbnail:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/e4/14/73/venue.jpg",
  },
  {
    id: 2,
    name: "The Royal Welsh Agricultural Show",
    location: "Llanelwedd, Builth Wells",
    date: "22 - 25 July 2024",
    thumbnail:
      "https://rwas.wales/app/uploads/2022/02/Royal-Welsh-Show-2-scaled.jpg",
  },
  {
    id: 3,
    name: "Rhostio Speciality Coffee",
    location: "16C Crwys Rd, Cardiff",
    date: "Every Friday Summer 2024",
    thumbnail:
      "https://europeancoffeetrip.com/wp-content/uploads/city-guides/cafes/4086/rhostiospecialtycoffee-cardiff-owners-12.jpeg",
  },
  {
    id: 4,
    name: "Sticky Fingers Street Food",
    location: "Richmond Road, Roath, Cardiff",
    date: "1 January - 30 June 2025",
    thumbnail:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/e4/14/73/venue.jpg",
  },
  {
    id: 3,
    name: "Rhostio Speciality Coffee",
    location: "16C Crwys Rd, Cardiff",
    date: "Every Friday Summer 2024",
    thumbnail:
      "https://europeancoffeetrip.com/wp-content/uploads/city-guides/cafes/4086/rhostiospecialtycoffee-cardiff-owners-12.jpeg",
  },
];
