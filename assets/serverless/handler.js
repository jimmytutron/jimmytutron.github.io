'use strict';

module.exports.portfolio = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      portfolio: [{
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