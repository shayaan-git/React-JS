import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
  {
    fullName: "Lara Jean Covey",
    title: "Hopeless romantic writer",
    profileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    coverImage:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    likesCount: 12450,
    postCount: 86,
    viewsCount: 240000,
    followed: true
  },
  {
    fullName: "Peter Kavinsky",
    title: "Golden retriever",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likesCount: 18900,
    postCount: 102,
    viewsCount: 410000,
    followed: false
  },
  {
    fullName: "Elle Evans",
    title: "Rules breaker",
    profileImage:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    likesCount: 15400,
    postCount: 91,
    viewsCount: 330000,
    followed: true
  },
  {
    fullName: "Noah Flynn",
    title: "Boy with soft heart",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    coverImage:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    likesCount: 21000,
    postCount: 110,
    viewsCount: 520000,
    followed: false
  },
  {
    fullName: "Tessa Young",
    title: "Girl discovering life",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    coverImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    likesCount: 16780,
    postCount: 95,
    viewsCount: 380000,
    followed: true
  },
  {
    fullName: "Hardin Scott",
    title: "Emotionally complicated poet",
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    coverImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    likesCount: 22300,
    postCount: 120,
    viewsCount: 610000,
    followed: false
  },
  {
    fullName: "Natalie Bennett",
    title: "Love skeptic turned believer",
    profileImage:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    coverImage:
      "https://images.pexels.com/photos/19014648/pexels-photo-19014648.jpeg",
    likesCount: 9800,
    postCount: 72,
    viewsCount: 210000,
    followed: true
  },
  {
    fullName: "Josh Sanderson",
    title: "Best friend turned soulmate",
    profileImage:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    coverImage:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    likesCount: 13200,
    postCount: 88,
    viewsCount: 295000,
    followed: false
  },
  {
    fullName: "Monica de la Cruz",
    title: "Passionate sanity dreamer",
    profileImage:
      "https://images.pexels.com/photos/1698731/pexels-photo-1698731.jpeg",
    coverImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    likesCount: 17500,
    postCount: 99,
    viewsCount: 430000,
    followed: true
  },
  {
    fullName: "Alex Truelove",
    title: "Rom-com leading man",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage:
      "https://images.pexels.com/photos/35047961/pexels-photo-35047961.jpeg",
    likesCount: 14100,
    postCount: 84,
    viewsCount: 310000,
    followed: false
  }
];

  return (
    <div className="bg-black text-white h-full w-full flex flex-wrap gap-8 p-8">
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
};

export default App;
