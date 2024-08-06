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
    name: "Into the Wild Festival",
    location: "Sussex",
    date: "22 - 26 July 2024",
    thumbnail:
      "https://media.licdn.com/dms/image/C4D12AQFBJSkoJw7Whg/article-cover_image-shrink_720_1280/0/1564683587918?e=2147483647&v=beta&t=sxdaTVJSmUiNBpFTWFkRSpJcfpLUrt60a8NmEHY69E8",
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
    id: 2.5,
    name: "Street Food Circus - Fantastic Fete",
    location: "St. Donat's Castle",
    date: "2 -4 August",
    thumbnail:
      "https://www.wales247.co.uk/wp-content/uploads/2024/06/Another-castle-event-for-Street-Food-Circus-Big-Banquet-in-Caldicot-min-1024x683.jpg",
  },
  {
    id: 3,
    name: "Street Food Circus - Harbourside Festival",
    location: "Saundersfoot",
    date: "6 - 8 August",
    thumbnail:
      "https://streetfoodcircus.co.uk/sites/default/files/styles/carousel_landscape/public/2024-02/MCoE_Schooner-2_0.jpg?h=920929c4&itok=1_2aamGp",
  },
  {
    id: 4,
    name: "Rhostio Speciality Coffee",
    location: "16C Crwys Rd, Cardiff",
    date: "Every Friday Summer 2024",
    thumbnail:
      "https://europeancoffeetrip.com/wp-content/uploads/city-guides/cafes/4086/rhostiospecialtycoffee-cardiff-owners-12.jpeg",
  },
  {
    id: 5,
    name: "Sticky Fingers Street Food",
    location: "Richmond Road, Roath, Cardiff",
    date: "1 January - 30 June 2025",
    thumbnail:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/e4/14/73/venue.jpg",
  },
];
