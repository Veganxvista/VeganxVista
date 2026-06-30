/**
 * blogs.js
 * Hardcoded placeholder blog posts for VeganVista.
 */

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'future-of-sustainable-leather',
    title: 'The Future of Sustainable Leather: Why Cactus Is Leading the Revolution',
    excerpt:
      'The fashion industry is at a crossroads. With growing awareness of environmental impact, brands are searching for alternatives to traditional animal leather. Cactus leather has emerged as a frontrunner, offering unmatched sustainability credentials without compromising on quality or aesthetics.',
    content: `The fashion industry is at a crossroads...`, // Full content placeholder
    image: '/assets/Hero/robot-hand-blog-page.jpg',
    date: '23 Dec 2025',
    readTime: '5 min read',
    category: 'Sustainability',
    featured: true,
  },
  {
    id: 2,
    slug: 'cactus-leather-manufacturing',
    title: 'How We Make Cactus Leather: A Behind-the-Scenes Look',
    excerpt:
      'From harvest to finished material — a deep dive into our zero-waste cactus leather manufacturing process in Ahmedabad.',
    content: `Our manufacturing process starts at sunrise...`,
    image: '/assets/Hero/robot-hand-blog-page.jpg',
    date: '15 Nov 2025',
    readTime: '4 min read',
    category: 'Technology',
    featured: false,
  },
  {
    id: 3,
    slug: 'luxury-brands-going-vegan',
    title: '5 Luxury Brands Switching to Plant-Based Materials in 2025',
    excerpt:
      'Major fashion houses are embracing sustainable materials. We explore the shift toward plant-based alternatives and what it means for the industry.',
    content: `The luxury fashion world is transforming...`,
    image: '/assets/Hero/robot-hand-blog-page.jpg',
    date: '02 Oct 2025',
    readTime: '6 min read',
    category: 'Industry',
    featured: false,
  },
  {
    id: 4,
    slug: 'certifications-matter',
    title: 'Why Certifications Matter in Sustainable Materials',
    excerpt:
      'OEKO-TEX, REACH, PETA — what do these certifications actually mean, and why should brands insist on certified suppliers?',
    content: `Certifications are not just badges...`,
    image: '/assets/Hero/robot-hand-blog-page.jpg',
    date: '18 Sep 2025',
    readTime: '3 min read',
    category: 'Standards',
    featured: false,
  },
];

export const getFeaturedPost = () => BLOG_POSTS.find((p) => p.featured);
export const getOtherPosts = () => BLOG_POSTS.filter((p) => !p.featured);
