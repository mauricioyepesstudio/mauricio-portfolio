import type { Project } from "./index";

const pizzaTacum: Project = {
  slug: "pizza-tacum",

  title: "Pizza Tacum",

  client: "Pizza Tacum",

  category: "Restaurant & Food",

  year: "2022",

  heroImage: "/projects/pizza-tacum/Artboard 1.png",

  gallery: [
    "/projects/pizza-tacum/Artboard 1.png",
    "/projects/pizza-tacum/Artboard 2.png",
    "/projects/pizza-tacum/Artboard 3.png",
    "/projects/pizza-tacum/Artboard 4.png",
    "/projects/pizza-tacum/Artboard 5.png",
    "/projects/pizza-tacum/Artboard 6.png",
    "/projects/pizza-tacum/Artboard 7.png",
    "/projects/pizza-tacum/Artboard 8.png",
  ],

  sections: [
    {
      title: "Brand Identity",
      images: [
        "/projects/pizza-tacum/Artboard 1.png",
        "/projects/pizza-tacum/Artboard 2.png",
      ],
    },
    {
      title: "Menu & Promotions",
      images: [
        "/projects/pizza-tacum/Artboard 3.png",
        "/projects/pizza-tacum/Artboard 4.png",
        "/projects/pizza-tacum/Artboard 5.png",
      ],
    },
    {
      title: "Digital Marketing",
      images: [
        "/projects/pizza-tacum/Artboard 6.png",
        "/projects/pizza-tacum/Artboard 7.png",
        "/projects/pizza-tacum/Artboard 8.png",
      ],
    },
  ],

  deliverables: [
    "Creative Direction",
    "Restaurant Branding",
    "Menu Design",
    "Advertising Design",
    "Social Media Campaigns",
    "Print Marketing",
    "Promotional Graphics",
    "Brand Identity",
  ],

  cover: {
    from: "#B91C1C",
    to: "#F59E0B",
  },

  excerpt:
    "Branding and promotional campaigns created for Pizza Tacum, combining vibrant food photography with bold graphic design to attract customers and strengthen brand recognition.",

  services: [
    "Creative Direction",
    "Brand Identity",
    "Graphic Design",
    "Restaurant Marketing",
    "Advertising",
    "Print Design",
    "Social Media",
  ],

  problem:
    "Develop a memorable restaurant identity capable of standing out in a competitive market while increasing customer engagement through attractive promotional materials.",

  strategy:
    "Create colorful, appetite-driven designs supported by bold typography, compelling offers and consistent branding across print and digital platforms.",

  solution:
    "Designed menus, flyers, social media campaigns, promotional advertisements and branded graphics that delivered a cohesive and engaging customer experience.",

  result:
    "Strengthened the restaurant's visual identity while providing marketing assets that increased brand awareness and supported customer acquisition campaigns.",

  metrics: [
    {
      label: "Industry",
      value: "Restaurant",
    },
    {
      label: "Campaigns",
      value: "35+",
    },
    {
      label: "Assets",
      value: "120+",
    },
    {
      label: "Role",
      value: "Creative Director",
    },
    {
      label: "Focus",
      value: "Restaurant Branding",
    },
  ],
};

export default pizzaTacum;