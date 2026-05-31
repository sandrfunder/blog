import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alex Kshutashvili",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I am a minimal, SEO-friendly, accessible portfolio and blog for developers. I am an even more lightweight version of my popular theme Astro Sphere. I have Lighthouse scores of 100 across the board for performance, accessibility, best practices and SEO.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "10+ years fintech experience. Founded Finceh LLC (2018) and co-founded Neofin (2022), a no-code lending automation platform. Built solutions for banks like Unexbank and MTB Bank. Expert in launching 22+ fintech projects.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
