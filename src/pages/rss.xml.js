import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner, Lasse Claes | Blog",
    description: "My journey learning Astro",
    site: "https://lacj-astro-tutorial.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
