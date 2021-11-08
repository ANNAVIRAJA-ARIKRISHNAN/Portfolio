export const RecentProjectData = [
  {
    title: "Portfolio",
    tech: "React, Typescript, Redux, CSS",
    description:"My personal page for telling who im and what i know.",
    image: process.env.PUBLIC_URL + "/images/portfolio.jpg",
    buttons: [
      {
        label: "Live",
        link: "https://annaviraja.netlify.app/",
      },
      {
        label: "Source",
        link: "https://github.com/ANNAVIRAJA-ARIKRISHNAN/Portfolio",
      },
    ],
  },
  {
    title: "Stories",
    tech:
      "React, Redux, Node, MongoDB, Express, axios, Webpack, Material-UI, React-Google-Login",
      description:"Share stories with every-one. Have features which allows user signin and signup with email or use google credentials. After login - create a stories, users can comment and likes for others stories.",
    image: process.env.PUBLIC_URL + "/images/stories.jpg",
    buttons: [
      { label: "Live", link: "https://stories-app-337.herokuapp.com/" },
      {
        label: "Source",
        link: "https://github.com/ANNAVIRAJA-ARIKRISHNAN/stories-mern",
      },
    ],
  },
  {
    title: "Pizza Kadai",
    tech:
      "React, Node, MongoDB, Express, axios, Webpack, BCryptjs, Cloudinary",
      description:"The User signin or signup. Select the pizza and Customize your toppings. Add the product in the cart and place the order. Admin can, add new and edit the available pizza and toppings as per store availablity.",
    image: process.env.PUBLIC_URL + "/images/pizza-kadai.jpg",
    buttons: [
      { label: "Live", link: "https://pizza-kadai.herokuapp.com/" },
      {
        label: "Source",
        link: "https://github.com/ANNAVIRAJA-ARIKRISHNAN/pizza-kadai-mern",
      },
    ],
  },
  {
    title: "Trending Market",
    tech:
      "React, Node, MongoDB, Express, axios, Webpack, BCryptjs, JWT, React-Bootstrap",
      description:"The User signin or signup. Search the product and then add to the cart to place the order. User can review the product (comments, ratings). Admin can, add new and edit the product details (name, description, images, quantity, price).",
    image: process.env.PUBLIC_URL + "/images/trending-market.jpg",
    buttons: [
      { label: "Live", link: "https://trending-market.herokuapp.com/" },
      {
        label: "Source",
        link: "https://github.com/ANNAVIRAJA-ARIKRISHNAN/trending-market-mern",
      },
    ],
  },
];
