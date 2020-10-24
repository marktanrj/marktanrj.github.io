import udemyIcon from "../Images/udemyIcon.png";
import udemyGif from "../Images/udemy.gif";
import meme from "../Images/meme.jpg";
import portfolioImage from "../Images/portfolio.png";
import portfolioGif from "../Images/portfolio.gif";

export const projectData = {
  memetelegrambot: {
    id: "memetelegrambot",
    title: "Meme Telegram Bot",
    description: "Generate memes directly in Telegram Chats",
    details: "Generate memes directly in Telegram Chats",
    projectLink: "https://t.me/themememakerbot",
    chips: ["Node.js", "AWS Lambda", "Telegraf", "Jimp"],
    url: meme,
    gif: "https://i.imgur.com/YUjoAax.gif",
  },
  udemycourse: {
    id: "udemycourse",
    title: "Udemy Course (Telegram Bots)",
    description: "5.5 hours of tutorial building Telegram bots with Javascript and Node.js",
    details: "5.5 hours of tutorial building Telegram bots with Javascript and Node.js",
    projectLink: "https://www.udemy.com/course/build-telegram-bots-with-javascript-the-complete-guide/",
    chips: ["Node.js", "JavaScript"],
    url: udemyIcon,
    gif: udemyGif,
  },
  personalportfolio: {
    id: "personalportfolio",
    title: "Portfolio Website",
    description: "Showcase my projects",
    details: "Showcase my projects",
    projectLink: "https://github.com/marktanrj/marktanrj.github.io",
    chips: ["React", "Framer Motion"],
    url: portfolioImage,
    gif: portfolioGif,
  },
};
