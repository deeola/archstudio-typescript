export type Sliders = {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  heroText: string;
};

export const SliderData: Sliders[] = [
  {
    image: {
      mobile: "/home/mobile/image-hero-federal.jpg",
      tablet: "/home/tablet/image-hero-federal.jpg",
      desktop: "/home/desktop/image-hero-federal.jpg",
    },
    title: "Federal II Tower",
    heroText:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches",
  },
  {
    image: {
      mobile: "/home/mobile/image-hero-paramour.jpg",
      tablet: "/home/tablet/image-hero-paramour.jpg",
      desktop: "/home/desktop/image-hero-paramour.jpg",
    },
    title: "Project Paramour",
    heroText:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: {
      mobile: "/home/mobile/image-hero-seraph.jpg",
      tablet: "/home/tablet/image-hero-seraph.jpg",
      desktop: "/home/desktop/image-hero-seraph.jpg",
    },
    title: "Seraph Station",
    heroText:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    image: {
      mobile: "/home/mobile/image-hero-trinity.jpg",
      tablet: "/home/tablet/image-hero-trinity.jpg",
      desktop: "/home/desktop/image-hero-trinity.jpg",
    },
    title: "Trinity Bank Tower",
    heroText:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];
