import { createContext } from "react";

export const PostDataContext = createContext();

const PostContext = ({ children }) => {
  const data = [
    {
      id: 1,
      characterName: "Peter Parker",
      username: "spidey_sense",
      universe: "Marvel",
      profileImage:
        "https://images.unsplash.com/photo-1608889175378-7b1b0b3c4d1a",
      postImage: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde",
      caption:
        "With great power comes great responsibility. Also... rent is due again. 🕷️",
      likes: 154320,
      commentsCount: 8921,
      isVerified: true,
      postedAt: "2026-02-20T10:15:00Z",
    },
    {
      id: 2,
      characterName: "Bruce Wayne",
      username: "dark_knight",
      universe: "DC",
      profileImage:
        "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1",
      postImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Gotham does not sleep. Neither do I. 🦇",
      likes: 243890,
      commentsCount: 12450,
      isVerified: true,
      postedAt: "2026-02-18T22:40:00Z",
    },
    {
      id: 3,
      characterName: "Tony Stark",
      username: "iam_ironman",
      universe: "Marvel",
      profileImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      postImage: "https://images.unsplash.com/photo-1581091870627-3a31d9b06c3a",
      caption:
        "Built a new suit. Because why not? Genius. Billionaire. Philanthropist. 🚀",
      likes: 389120,
      commentsCount: 18932,
      isVerified: true,
      postedAt: "2026-02-15T14:05:00Z",
    },
    {
      id: 4,
      characterName: "Diana Prince",
      username: "wonder_warrior",
      universe: "DC",
      profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      postImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      caption: "Fighting for peace, justice, and equality. ⚔️",
      likes: 198765,
      commentsCount: 10234,
      isVerified: true,
      postedAt: "2026-02-17T09:30:00Z",
    },
    {
      id: 5,
      characterName: "Logan",
      username: "wolverine_x",
      universe: "Marvel",
      profileImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      postImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      caption: "Healing fast. Aging slow. Still angry. 🐺",
      likes: 167890,
      commentsCount: 7543,
      isVerified: false,
      postedAt: "2026-02-19T18:20:00Z",
    },
  ];

  return (
    <div>
      <PostDataContext.Provider value={data}>
        {children}
      </PostDataContext.Provider>
    </div>
  );
};

export default PostContext;
