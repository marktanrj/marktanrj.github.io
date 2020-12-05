import udemyIcon from "../Images/udemyIcon.png";
import udemyGif from "../Images/udemy.gif";
import meme from "../Images/meme.jpg";
import portfolioImage from "../Images/portfolio.png";
import portfolioGif from "../Images/portfolio.gif";
import vulnpredscoringImage from "../Images/vulnpredscoring.jpg";

export const projectData = {
  vulnerabilityprediction: {
    id: "vulnerabilityprediction",
    title: "Vulnerability Prediction Scoring",
    cardDescription: "Final Year Project",
    cardChips: ["React", "Flask", "MySQL"],
    details: [
      {
        header: "Description",
        text: `As part of my final year project, my group and I created a vulnerability prediction scoring dashboard`,
      },
      {
        header: "Contributions",
        text: `Experimented with LightGBM in Python. Integrated backend APIs with React app and made components dynamic. Created MySQL database on Google Cloud using CloudSQL, integrated with Flask using SQLAlchemy`,
      },
    ],
    url: vulnpredscoringImage,
  },
  personalportfolio: {
    id: "personalportfolio",
    title: "Portfolio Website",
    cardDescription: "Showcase my projects",
    cardChips: ["React", "Framer Motion"],
    details: [
      {
        header: "Motivation",
        text: "I built this website as my personal portfolio to showcase my projects",
      },
      {
        header: "Description",
        text: "The website was created with minimalist design and to learn about framer motion framework",
      },
    ],
    buttons: {
      "Github Repo": {
        url: "https://github.com/marktanrj/marktanrj.github.io",
        theme: "primary",
      },
    },
    url: portfolioImage,
    gif: portfolioGif,
  },
  udemycourse: {
    id: "udemycourse",
    title: "Udemy Course (Telegram Bots)",
    cardDescription: "5.5 hours of tutorial building Telegram bots with Javascript and Node.js",
    cardChips: ["Node.js", "JavaScript"],
    details: [
      {
        header: "Motivation",
        text:
          "Prior to making the course, I have been developing Telegram bots for a year to learn about Node.js and JavaScript. I decided to challenge myself and make a course with the knowledge I have as a small side-hustle.",
      },
      {
        header: "Description",
        text:
          "I spent about 2 months planning, recording and video editing the course. Overall, it has 5.5 hours of tutorial content teaching students how to build Telegram bots using Telegraf framework.",
      },
    ],
    buttons: {
      "Udemy Link": {
        url: "https://www.udemy.com/course/build-telegram-bots-with-javascript-the-complete-guide/",
        theme: "primary",
      },
    },
    url: udemyIcon,
    gif: udemyGif,
  },
  memetelegrambot: {
    id: "memetelegrambot",
    title: "Meme Telegram Bot",
    cardDescription: "Generate memes directly in Telegram Chats",
    cardChips: ["Node.js", "AWS Lambda", "Telegraf", "Jimp"],
    details: [
      {
        header: "Description",
        text: "This Telegram bot allows users to input messages to the bot, and generate memes images directly in Telegram Chats.",
      },
    ],
    buttons: {
      "Telegram Bot Link ": {
        url: "https://t.me/themememakerbot",
        theme: "primary",
      },
    },
    url: meme,
    gif: "https://i.imgur.com/YUjoAax.gif",
  },
};
