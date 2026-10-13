/**
 * Central media paths for assets under /public/images.
 * Filenames must match files in public/images exactly (including spaces).
 */
export const mediaPaths = {
  logo: "/images/Web_Logo.png",
  menuPdf: "/menu/Menu.pdf",
  heroBackground: "/images/hero_image.jpg",
  heroBackgroundMobile: "/images/hero_mobile_view.jpg",
  heroBackgroundFallback: "/images/media.jpg",
  heroFoodCutout: "/images/media.jpg",
  pizza: "/images/media%20(1).jpg",
  friedChicken: "/images/media%20(2).jpg",
  wrap: "/images/media%20(3).jpg",
  crownPizza: "/images/media%20(4).jpg",
  cheesyFries: "/images/media%20(5).jpg",
  gourmetBurgerBoard: "/images/media%20(7).jpg",
  sharingFeast: "/images/media%20(7).jpg",
  pizzaBurgerNight: "/images/media%20(8).jpg",
  aboutImage: "/images/gallery (3).jpg",
  /** All gallery (x) images under public/images */
  gallery: [
    "/images/gallery (1).jpg",
    "/images/gallery (2).jpg",
    "/images/gallery (3).jpg",
    "/images/gallery (4).jpg",
    "/images/gallery (5).jpg",
    "/images/gallery (6).jpg",
    "/images/gallery (7).jpg",
    "/images/gallery (8).jpg",
    "/images/gallery (9).jpg",
  ],
} as const;
