import udemyIcon from "../Images/udemyIcon.png";
import udemyGif from "../Images/udemy.gif";
import meme from "../Images/meme.jpg";
import portfolioImage from "../Images/portfolio.png";
import portfolioGif from "../Images/portfolio.gif";
import vulnpredscoringImage from "../Images/vulnpredscoring.jpg";
import vulnArchitectureImage from "../Images/vulnarchitecture.jpg";

export const projectData = {
  vulnerabilityprediction: {
    id: "vulnerabilityprediction",
    title: "Vulnerability Prediction Scoring",
    cardDescription: "Final Year Project",
    cardChips: ["React", "Flask", "MySQL"],
    cardImage: vulnpredscoringImage,
    allChips: ["React", "Redux Thunk", "Material UI", "Chart.js", "Flask", "SQLAlchemy", "GCP CloudSQL MSQL", "Pandas"],
    details: [
      {
        header: "Project Type",
        text: `IS483 - IS Application Project (Final Year Project with real client). 5-person group project`,
      },
      {
        header: "Project Date",
        text: `June - December 2020`,
      },
      {
        header: "Description",
        text: `Vulnerability prediction scoring webapp that allow users to input CVE, tags and/or vendors and output probability of exploitation with analysis. Features CVE search from webscraped sources, dashboard for data visualization, and file upload for CRUD functionalities.`,
      },
      {
        header: "Contributions",
        text: [
          `Assisted with planning of app's architecture`,
          `Created MySQL database with GCP CloudSQL, integrated with Flask using SQLAlchemy`,
          `Integrated backend APIs with React app, used Redux Thunk for asyncronous code`,
          `Made frontend dynamic and wrote clean code with high reusability using HOC, pure components`,
          `Implemented fuzzysort for CVE search functionality`,
          `Created API documentation page using Redocs`,
          `Created file upload feature using React Dropzone and validate form with Joi`,
          `Webscraped various vulnerability websites using BeautifulSoup`,
          `Webscraped Twitter using Selenium Python`,
          `Experimented and built LightGBM machine learning model`,
        ],
      },
    ],
    detailsMedia: [vulnArchitectureImage, vulnpredscoringImage],
  },
  personalportfolio: {
    id: "personalportfolio",
    title: "Portfolio Website",
    cardDescription: "Showcase my projects",
    cardChips: ["React", "Framer Motion"],
    cardGif: portfolioGif,
    cardImage: portfolioImage,
    allChips: ["React", "Framer Motion", "Github Pages", "CloudFlare"],
    details: [
      {
        header: "Website Creation",
        text: `October 2020`,
      },
      {
        header: "Motivation/Description",
        text:
          "This website was built to showcase my personal projects. Also, to learn about the framer motion framework, and hosting on Github Pages with CloudFlare CDN",
      },
    ],
    buttons: {
      "Github Repo": {
        url: "https://github.com/marktanrj/marktanrj.github.io",
        theme: "primary",
      },
    },
    detailsMedia: [portfolioGif],
  },
  udemycourse: {
    id: "udemycourse",
    title: "Udemy Course (Telegram Bots)",
    cardDescription: "5.5 hours of tutorial building Telegram bots with Javascript and Node.js",
    cardChips: ["Node.js", "JavaScript", "Telegraf"],
    cardGif: udemyGif,
    cardImage: udemyIcon,
    allChips: ["Node.js", "JavaScript", "Telegraf", "AWS Lambda"],
    details: [
      {
        header: "Project Type",
        text: `Side Hustle. Individual`,
      },
      {
        header: "Course Creation",
        text: `November - December 2019`,
      },
      {
        header: "Motivation",
        text:
          "Prior to making the course, I have been developing Telegram bots for a year to learn about Node.js and JavaScript. I decided to challenge myself and create a course with the knowledge I have as a small side-hustle.",
      },
      {
        header: "Description",
        text:
          "2 months were spent planning, recording of screen with voice-over, and editing videos. The course has 5.5 hours of video content to teach students how to build Telegram bots using JavaScript and the Telegraf framework. After 12 months, the course has enrolled over 5200 students with a peak rating of 4.8 stars on Udemy.",
      },
    ],
    buttons: {
      "Udemy Link": {
        url: "https://www.udemy.com/course/build-telegram-bots-with-javascript-the-complete-guide/",
        theme: "primary",
      },
    },
    detailsMedia: [udemyGif],
  },
  memetelegrambot: {
    id: "memetelegrambot",
    title: "Meme Telegram Bot",
    cardDescription: "Generate memes directly in Telegram Chats",
    cardChips: ["Node.js", "AWS Lambda", "Telegraf", "Jimp"],
    allChips: ["Node.js", "AWS Lambda", "Telegraf", "Jimp"],
    cardGif: "https://i.imgur.com/YUjoAax.gif",
    cardImage: meme,
    details: [
      {
        header: "Description",
        text: "This Telegram bot allows users to input text messages, and output generated memes images directly in Telegram Chats.",
      },
    ],
    buttons: {
      "Telegram Bot Link ": {
        url: "https://t.me/themememakerbot",
        theme: "primary",
      },
    },
    detailsMedia: ["https://i.imgur.com/YUjoAax.gif"],
  },
};
