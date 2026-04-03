export const movies = [
  { title: "Wrong Side of Love", year: "2024", genre: "Drama", url: "https://www.youtube.com/embed/z6ZOdg1g2N8?&mute=1" },
  { title: "A New Kind of Love", year: "2024", genre: "Action", url: "https://www.youtube.com/embed/yNneavztRZw?&mute=1" },
  { title: "Hate At First Meet", year: "2024", genre: "Romance", url: "https://www.youtube.com/embed/Qt0jSfi5-I8?&mute=1" },
  { title: "Monster In-Law", year: "2023", genre: "Comedy", url: "https://www.youtube.com/embed/UpQUBctntDo?&mute=1" },
  { title: "The Truth About Us", year: "2023", genre: "Drama", url: "https://www.youtube.com/embed/DRaviwJBmK8?&mute=1" },
  { title: "Call It Karma", year: "2023", genre: "Drama", url: "https://www.youtube.com/embed/HOcDLDUBBn0?&mute=1" },
  { title: "Checkmate of The Heart", year: "2023", genre: "Romance", url: "https://www.youtube.com/embed/kvy7OyDGkIU?&mute=1" },
  { title: "Good Deed Gone Bad", year: "2023", genre: "Drama", url: "https://www.youtube.com/embed/HRRHYy9_3Mg?&mute=1" },
  { title: "A Groom For Christmas", year: "2023", genre: "Romance", url: "https://www.youtube.com/embed/gPc9-QFmREo?&mute=1" },
  { title: "Love Like Leftovers", year: "2023", genre: "Drama", url: "https://www.youtube.com/embed/-4x101z8zkc?&mute=1" },
  { title: "Bond and Lies", year: "2023", genre: "Romance", url: "https://www.youtube.com/embed/inT0MuIif40?&mute=1" }
];

export const documentaries = [
  {
    title: "Colorism",
    category: "Human Stories",
    url: "https://www.youtube.com/embed/RQxakcvb36k",
    description: "A documentary on discrimination based on skin tone and the lived experiences of people with albinism."
  },
  {
    title: "Overview of Propcom Mai-karfi",
    category: "Development",
    url: "https://www.youtube.com/embed/90vUobUSzgw",
    description: "An overview of a market-development project designed to improve livelihoods in northern Nigeria."
  },
  {
    title: "Bat Couple: Nigeria's Bat Researchers",
    category: "Nature & Science",
    url: "https://www.youtube.com/embed/NMZG0hwMe6o",
    description: "A story of Nigerian bat researchers and the ecological value of bats in local communities."
  }
];

export const series = [
  { title: "The New Girl (Season 1)", episodes: "10 Episodes", genre: "Drama", url: "https://www.youtube.com/embed/f8tLNLKzXLU?&mute=1" },
  { title: "The New Girl (Season 2)", episodes: "10 Episodes", genre: "Drama", url: "https://www.youtube.com/embed/vgBXLgmIuI8?&mute=1" },
  { title: "The New Girl (Season 3)", episodes: "10 Episodes", genre: "Drama", url: "https://www.youtube.com/embed/UEOdSiCticw?&mute=1" },
  { title: "Officer Rambo", episodes: "Series", genre: "Comedy", url: "https://www.youtube.com/embed/R92YThEFmhY?&mute=1" },
  { title: "Three Broke Friends", episodes: "Series", genre: "Comedy", url: "https://www.youtube.com/embed/k8laMlEZsec?&mute=1" },
  { title: "The Ultimate Rivalry", episodes: "Series", genre: "Comedy", url: "https://www.youtube.com/embed/3AFjnYsKTi4?&mute=1" },
  { title: "Trapped (Season 1)", episodes: "Season 1", genre: "Drama", url: "https://www.youtube.com/embed/KSuDtFCdt1Q?si?&mute=1" },
  { title: "Trapped (Season 2)", episodes: "Season 2", genre: "Drama", url: "https://www.youtube.com/embed/bWZdwNmoFo4?&mute=1" }
];

export const yawaSkits = [
  { title: "ROBIN HOOD CHRISTMAS (Yawaskits - Episode 292)", url: "https://www.youtube.com/embed/z8cUQoj7Bj8?&mute=1" },
  { title: "WOMAN POWER (Yawaskits - Episode 265)", url: "https://www.youtube.com/embed/AeOIo8vKlN4?&mute=1" },
  { title: "BLACKMAIL BUSINESS (Yawaskits - Episode 263)", url: "https://www.youtube.com/embed/yjEZLpHqMI8?&mute=1" },
  { title: "THE MIDDLE MEN (Yawaskits - Episode 261)", url: "https://www.youtube.com/embed/Sd9rfnPX-b4?&mute=1" },
  { title: "THE BOOK OF GOODIES (Yawaskits - Episode 254)", url: "https://www.youtube.com/embed/i8kU0XWMoc4?si?&mute=1" },
  { title: "LOVE LANGUAGE (Yawaskits - Episode 251)", url: "https://www.youtube.com/embed/rH9uE5WkDnk?&mute=1" },
  { title: "AFRICAN GENIE (Yawaskits, Episode 200)", url: "https://www.youtube.com/embed/fgUFBXW38PY?&mute=1" },
  { title: "TRENCHES AirBnB (Family Invasion) (Yawaskits, Episode 205)", url: "https://www.youtube.com/embed/nJLgaZ7JHmY?&mute=1" }
];

export const getYouTubeThumb = (url) => {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

export const extractYouTubeVideoId = (url) => {
  if (!url) return "";
  const embedMatch = url.match(/embed\/([^?&/]+)/);
  if (embedMatch) return embedMatch[1];
  const watchMatch = url.match(/[?&]v=([^?&/]+)/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch) return shortMatch[1];
  return "";
};

export const toYouTubeWatchUrl = (urlOrId) => {
  if (urlOrId == null || urlOrId === "") return "https://www.youtube.com/";
  const s = String(urlOrId);
  const id = s.includes("http") ? extractYouTubeVideoId(s) : s;
  return id ? `https://www.youtube.com/watch?v=${id}` : "https://www.youtube.com/";
};
