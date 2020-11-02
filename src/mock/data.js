import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bruna P. M. | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Hey! I'm Bruna. This website contains information on me, my projects and contact information.",
};

// HERO DATA
export const heroData = {
  title: 'Hey! My name is',
  name: 'Bruna',
  subtitle: "I'm a Full Stack Developer",
  cta: 'Bruna who?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "My name is Bruna de Paula Monarin (she/her). I'm a Full Stack Developer and Machine Learning enthusiast. I'm also graduating on Computer Engineering.",
  paragraphTwo:
    'I love the power of coding and I believe the key to deliver the best product to a client is being passionate about what you do.',
  paragraphThree:
    'I also love to study new technologies and to get to know different people and places.',
  resume: 'https://www.overleaf.com/read/csrfccmmgxjv', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Landing.png',
    title: 'Happy',
    info:
      "Happy is an application to connect good people and orphanages to help make children happier. It works by sharing the visiting times, address and information of Curitiba's refuges.",
    info2:
      'The front-end was coded using React and the back-end Node.js. The API was deployed using an AWS EC2 instance.',
    url: 'https://happy-curitiba.netlify.app/',
    repo: 'https://github.com/brunapm/happy-web', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Proffy.png',
    title: 'Proffy',
    info: 'Proffy was built to help teachers reach learners.',
    info2: 'The front-end was developed using React and the back-end using Node.js.',
    url: 'https://proffy-brunapm.netlify.app/',
    repo: 'https://github.com/brunapm/Proffy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DraSueny.png',
    title: "Dr. Sueny's Website",
    info: 'My sister is a rheumatologist and she wanted to promote her work online.',
    info2:
      'I helped her by creating a website with SEO, providing quick access to her information, tips on health and appointment booking.',
    url: 'https://www.reumatologistamaringa.com.br/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'LinkedIn Interface Clone',
    info:
      "I created this Interface Clone based on LinkedIn's homepage in an effort to learn more about componentization and Storybook.js.",
    info2: '',
    url: '',
    repo: 'https://github.com/brunapm/linkedin-ui-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Twitter.png',
    title: 'Twitter Interface Clone',
    info: 'I did this interface clone to learn Flexbox, which is a CSS 3 web layout model.',
    info2: "It's built on HTML and CSS only.",
    url: 'https://brunapm-twitter-clone.netlify.app/',
    repo: 'https://github.com/brunapm/Flexbox-Twitter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    "I'm open for mentoring and being mentored, pair programming and partnering in projects. I want to help people and organizations to get online. I'm also open for work. Want to talk to me?",
  btn: 'Just send me an e-mail!',
  email: 'brunamonarin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bruna-de-paula-monarin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/brunapm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
