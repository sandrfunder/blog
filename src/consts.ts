import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Workoholic from Luhansk",
  EMAIL: "alex.kshutashvili@inbox.eu",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The home page of Alex Kshutashvili: entrepreneur, minimalist, human.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "The blog of Alex Kshutashvili: Explore a personal collection of writings, insightful musings, and ideas.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "The timeline of Alex Kshutashvili: Ventures, triumphs, challenges, and milestones that shaped my life.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "The Projects of Alex Kshutashvili: Driving innovation across Fintech, Neobanks, Lending Automation, and Mobile Platforms.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/kshutashv1l1",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/sandrfunder/awesome-company-as-a-service"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kshutashvili",
  }
];
