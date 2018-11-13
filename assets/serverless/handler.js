'use strict';

module.exports.portfolio = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      portfolio: [{
          name: "ME.dia",
          image: "assets/imgs/media.png",
          image_alt: "ME.dia logo",
          repo_url: "https://github.com/jimmytutron/ME-dia",
          deployed_url: "http://media-2018.herokuapp.com",
          description: "ME.dia is a full stack application that generates cross platform media and entertainment recommendations. Find new movies and tv shows to watch!",
          tags: ["Express", "Node", "Handlebars", "MySQL"]
        },
        {
          name: "Thanos Simulator",
          image: "assets/imgs/thanos.png",
          image_alt: "Thanos Simulator",
          repo_url: "https://github.com/jimmytutron/Thanos-Simulator",
          deployed_url: "https://mysterious-harbor-91238.herokuapp.com/",
          description: "This is a full stack web app harnessing the powers of the infinity stones... Using a MVC design pattern, this app integrates a MySQL database to query and route data and uses Handlebars to template HTML",
          tags: ["Express", "Node", "Handlebars", "MySQL"]
        },
        {
          name: "s0mBbr@",
          image: "assets/imgs/sombra.png",
          image_alt: "sombra logo",
          repo_url: "https://github.com/jimmytutron/s0mbr-",
          deployed_url: "N/A",
          description: "A command line application built in Node.js. You act as Sombra, an infamous hacker, who can take in various paramaters to 'hack' the terminal",
          tags: ["Node"]
        },
        {
          name: "Imagination Station",
          image: "assets/imgs/imaginationstation.png",
          image_alt: "trains",
          repo_url: "https://github.com/jimmytutron/ImaginationStation",
          deployed_url: "https://jimmytu.com/ImaginationStation/",
          description: "A train schedule application that incorporates Firebase to host arrival and departure data. The app will retrieve and manipulate this information with Moment.js.",
          tags: ["Firebase", "Moment.js"]
        },
        {
          name: "The Sorting Hat",
          image: "assets/imgs/hogwarts.png",
          image_alt: "hogwarts logo",
          repo_url: "https://github.com/jimmytutron/sorting-hat",
          deployed_url: "https://still-scrubland-73712.herokuapp.com/",
          description: "An interactive survey that prompts users with a series of questions and compares their results and sorts them into their proper Hogwarts house",
          tags: ["Node", "Express"]
        },
        {
          name: "Career Deer",
          image: "assets/imgs/careerdeer.png",
          image_alt: "hogwarts logo",
          repo_url: "https://github.com/jimmytutron/career-deer",
          deployed_url: "https://careerdeer.io/",
          description: "A jobs application progress tracker! Ever feel like a deer in the headlights when it comes to your job search? With Career Deer, we’ll turn you from the hunted into the hunter and help you track down the job of your dreams.",
          tags: ["MongoDB", "Express", "React", "Node", "Material UI"]
        },
        {
          name: "Square Up",
          image: "assets/imgs/squareup.png",
          image_alt: "Square Up Logo",
          repo_url: "https://github.com/jimmytutron/square-up",
          deployed_url: "https://jimmytu.com/square-up/",
          description: "Test your memory! Try to click on each picture without clicking the same picture again. Get hit with the Ddu Du Ddu Du!",
          tags: ["React", "Node"]
        },
        {
          name: "e•gif•phany",
          image: "assets/imgs/egifphany.png",
          image_alt: "flower and logo",
          repo_url: "https://github.com/jimmytutron/eGIFphany",
          deployed_url: "https://jimmytutron.github.io/eGIFphany/",
          description: "A web page of aesthetically pleasing gifs and images based on art and design. Basically really pretty gifs. Gifs are generated dynamically using the Giphy API",
          tags: ["JQuery", "Giphy API"]
        },
        {
          name: "Who's That Pokemon!?",
          image: "assets/imgs/pokemon.png",
          image_alt: "who's that pokemon",
          repo_url: "https://github.com/jimmytutron/WhosThatPokemon",
          deployed_url: "https://jimmytu.com/WhosThatPokemon/",
          description: "A simple trivia game in which you are tasked with one simple question. Who's that Pokemon!?",
          tags: ["JQuery"]
        },
        {
          name: "Avatar - Master the Elements",
          image: "assets/imgs/avatar.png",
          image_alt: "aang in the avatar state",
          repo_url: "https://github.com/jimmytutron/AvatarMasterTheElements",
          deployed_url: "https://jimmytu.com/AvatarMasterTheElements/",
          description: "Interactive web browser game where you must help Aang achieve the Avatar State! Combine the powers of the elements in order to achieve perfect harmony",
          tags: ["JQuery"]
        },
        {
          name: "Foodtroverts",
          image: "assets/imgs/foodtrovert.png",
          image_alt: "foodtroverts logo",
          repo_url: "https://github.com/jimmytutron/Foodtroverts",
          deployed_url: "https://jimmytu.com/Foodtroverts/",
          description: "Foodtroverts is a platform built with the intention of bringing people together, everyone has to eat so why not add some company? Get matched with fellow foodies and enjoy new food adventures",
          tags: ["JQuery", "Firebase", "Google Places API"]
        },
        {
          name: "Delos Inc.",
          image: "assets/imgs/delos.png",
          image_alt: "delos inc logo",
          repo_url: "https://github.com/jimmytutron/delosinc",
          deployed_url: "N/A",
          description: "Welcome to Delos Destinations. In this command line app built with Node, guests as well as administrators have access to various tools that interact with Delos' MySQL database. Guest are able to purchase narrative slots to play through inside one of our six parks.",
          tags: ["Node", "MySQL"]
        },
        {
          name: "Psychic Game",
          image: "assets/imgs/psychic.png",
          image_alt: "pink desert",
          repo_url: "https://github.com/jimmytutron/Psychic_Game",
          deployed_url: "https://jimmytu.com/Psychic_Game/",
          description: "Test your psychic abilities! In this basic browser game you are challenged to guess what letter the computer is guessing! But be warned, you only have 10 chances to win!",
          tags: ["Vanilla Javascript"]
        },
        {
          name: "BLACKPINK Bootstrap",
          image: "assets/imgs/blackpink.png",
          image_alt: "BLACKPINK members",
          repo_url: "https://github.com/jimmytutron/BLACKPINK-Bootstrap",
          deployed_url: "http://jimmytu.com/BLACKPINK-Bootstrap/",
          description: "A simple bootstrap fanpage dedicated to kpop group BLACKPINK",
          tags: ["Bootstrap"]
        },
        {
          name: "New York Times Scraper",
          image: "assets/imgs/nyt.png",
          image_alt: "New York",
          repo_url: "https://github.com/jimmytutron/nyt-scraper-mern",
          deployed_url: "https://scraper-nyt-react.herokuapp.com/",
          description: "A MERN application that scrapes articles from the New York Times",
          tags: ["MongoDB", "Express", "React", "Node"]
        },
        // {
        //   name: "",
        //   image: "",
        //   image_alt: "",
        //   repo_url: "",
        //   deployed_url: "",
        //   description: "",
        //   tags: []
        // }
      ]
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};