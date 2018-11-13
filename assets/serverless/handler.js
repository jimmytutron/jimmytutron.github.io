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
          name: "The Sorting Hat",
          image: "assets/imgs/hogwarts.png",
          image_alt: "hogwarts logo",
          repo_url: "https://github.com/jimmytutron/sorting-hat",
          deployed_url: "https://still-scrubland-73712.herokuapp.com/",
          description: "An interactive survey that prompts users with a series of questions and compares their results and sorts them into their proper Hogwarts house",
          tags: ["Node", "Express"]
        },
        {
          name: "The Sorting Hat",
          image: "assets/imgs/hogwarts.png",
          image_alt: "hogwarts logo",
          repo_url: "https://github.com/jimmytutron/career-deer",
          deployed_url: "https://careerdeer.io/",
          description: "A jobs application progress tracker! Ever feel like a deer in the headlights when it comes to your job search? With Career Deer, we’ll turn you from the hunted into the hunter and help you track down the job of your dreams.",
          tags: ["MongoDB", "Express", "React", "Node", "Material UI"]
        },
        {
          name: "The Sorting Hat",
          image: "assets/imgs/hogwarts.png",
          image_alt: "hogwarts logo",
          repo_url: "https://github.com/jimmytutron/career-deer",
          deployed_url: "https://careerdeer.io/",
          description: "A jobs application progress tracker! Ever feel like a deer in the headlights when it comes to your job search? With Career Deer, we’ll turn you from the hunted into the hunter and help you track down the job of your dreams.",
          tags: ["MongoDB", "Express", "React", "Node", "Material UI"]
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        },
        {
          name: "",
          image: "",
          image_alt: "",
          repo_url: "",
          deployed_url: "",
          description: "",
          tags: []
        }

      ]
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};