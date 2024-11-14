
export const achievementsData = [
  {
    title: "2 Star @Codechef",
    description:
      "I am a 2-star rated coder at Codechef. Competitive coding is the best way to test coding skills within time limits.",
    img:'./codechef.png'
  },
  {
    title: "IITian",
    img:'./iit.jpg',
    description:
      "I achieved a top 1.5% ranking among a highly competitive pool of 1.2 million candidates in the JEE Advanced examination.",
  },
  {
    title: "Silver Medalist",
    img:'./silver.jpg',

    description:
      "I was a 2-time back-to-back Silver Medalist for the National Science Olympiad organized by the Science Olympiad Foundation.",
  },
  {
    title: "Top Quarter Stock Trader",
    img:'./stock.jpg',
    description:
      "Secured a placement in the upper quartile of participants in a stock trading competition held by the Finance Society FEBS of IIT Bhubaneswar.",
  },
];

export const WhatDoIHelp = [
  "I help clients find innovative solutions to complex problems, using user-centered design to create impactful digital products.",
  "I specialize in process-driven design for digital platforms, helping businesses scale and optimize their user experience.",
];

export const workExp = [

  {
    place: "Orma",
    tenure: "Jan 2024 - Present",
    location: "New York, USA (Remote)",
    role: "Software Development Intern",
    detail:
      "Engineered core features for a React-based event photo-sharing app, implementing 15+ API, Postgres, and Prisma ORM enhancements. Developed highlights, slideshows, and timelines using Vision Camera in a camera-first app.",
  },
  {
    place: "UniBuzz",
    tenure: "Sep 2023 - Sep 2024",
    location: "Melbourne, Australia (Remote)",
    role: "Software Development Intern",
    detail:
      "Developed JavaScript scrapers to enhance data extraction from Wikipedia, CollegeBoard, and TopUniversity, achieving 95% accuracy. Set up CI/CD workflows on GitHub Actions and deployed MongoDB Atlas Search for improved data access.",
  }, {
    place: "JSON-Schema (Open Source Contributor)",
    tenure: "Mar 2024 - May 2024",
    location: "",
    role: "Open Source Contributor",
    detail:
      "Resolved critical UI and workflow bugs in JSON-Schema repositories as part of Google Summer of Code 2024, enhancing functionality and stability.",
  },
  {
    place: "E-Summit",
    tenure: "Nov 2021 - Jan 2023",
    location: "Bhubaneswar, India (Onsite)",
    role: "Associate",
    detail:
      "E-Summit is a Society that aims to bring early entrepreneurs, students, corporates, venture capitalists and start-ups with burgeoning ideas from all over the country to one platform.",
  },
];

export const comments = [
  {
    name: "Jerin Oommen",
    post: "Ceo & Founder , Vdev Inc",
    lor: "./jerin_letter.jpeg",
    linkedin: "https://www.linkedin.com/in/jerin-o-03378344/",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./jerin.jpg",
    product: "https://www.ourorma.com"
  },
  {
    name: "Aryan Bansal",
    post: "CeO & Founder , UniBuzz",
    lor: "./aryan_letter.jpeg",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./aryan.jpg",
    linkedin: "https://www.linkedin.com/in/aryan-bansal2311/",
    product: "https://www.unibuzz.org"
  },
  {
    name: "Utkarsh Gupta",
    post: "Manager at Bacpac",
    lor: "./utkarsh_letter.png",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./utkarsh.jpg",
    linkedin: "https://www.linkedin.com/in/utkarshg6/",
    product: "https://www.unibuzz.org"

  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const projects = [
  {
    name: "GuruChela",
    img: "./guruchela.png",
    tech: ["MERN Stack", "AI", "Razorpay", "Authentication"],
    detail: "A learning management system with course upload, viewing functionalities, and AI for lecture transcript generation.",
    link: "https://guru-chela-ui.vercel.app/",
  },
  {
    name: "Dewetting of Thin Films",
    img: "./dewetting.png",
    tech: ["Machine Learning", "Fourier Analysis"],
    detail: "B.Tech project focused on creating a predictive model for dewetting patterns in thin films, used for protective coatings.",
    link: "https://satyam-x10.github.io/portfolio/projects/dewetting",
  },
  {
    name: "Befit",
    img: "./befit.png",
    tech: ["Next.js", "AI", "LLM", "Machine Learning"],
    detail: "A healthcare platform for booking doctor appointments and accessing AI-powered consultations.",
    link: "https://befit-theta.vercel.app/",
  },
  {
    name: "PathGenie",
    img: "./pathgenie.png",
    tech: ["SaaS", "AI", "LLM", "SERP API", "MongoDB"],
    detail: "A SaaS platform that generates personalized learning flowcharts using AI and Google SERP API.",
    link: "https://pathgenie.vercel.app/",
  },
  {
    name: "Drop Love",
    img: "./droplove.jpg",
    tech: ["python, AI, Weather API, Chatbot"],
    detail: "This bot takes the city name of partners and if Weather is romantic it sends a Cute Shayari . It started a conversation , Ask them for Coffee . ❤️",
    link: "https://github.com/satyam-x10/DropLove",
  },
  {
    name: "Sylvan Stronghold",
    img: "./sylvanstronghold.png",
    tech: ["Unity 3D", "C#", "Game Development"],
    detail: "A Unity 3-d Farming Game developed on Unity",
    link: "https://www.linkedin.com/posts/satyamx10_gamedevelopment-unity-sylvanstronghold-activity-7109193238112088064-LE7x/",
  },
  {
    name: "IMBY",
    img: "./imby.png",
    tech: ["AI", "Chatbot", "Web Development","System Design"],
    detail: "A Website that helps you to talk to your loved ones and AI.",
    link: "https://github.com/satyam-x10/I-am-Beside-You",
  },
  {
    name: "Oscar",
    img: "./oscar.png",
    tech: ["Web Scraping", "API", "Web Development"],
    detail: "Website which provides data on Movies with Oscars",
    link: "https://satyam-x10.github.io/oscar/",
  },
];
