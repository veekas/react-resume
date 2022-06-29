import React, { Component } from "react";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: "flex" }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    institutions: [
      // {
      //   university: "Arizona State University",
      //   duration: "on hiatus since 2020",
      //   degree: "MS, Computer Science",
      //   // cert: "Economics, Applied Business Data Analysis",
      //   // courses:
      //   //   "Statistics; Calculus; Applied Regression and Forecasting; Business Project Management; Business Intelligence; Advanced Excel in Business; Science, Technology and Public Affairs",

      //   // FITS ON ONE PAGE WITHOUT FSA
      //   // courses: 'Statistics; Calculus; Economics of Healthcare; Applied Regression and Forecasting; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Science, Technology and Public Affairs',

      //   // courses: 'Science, Technology and Public Affairs; Information Technology and Culture; Political Statistics; Applied Regression and Forecasting; Economics of Healthcare; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Technology, Industry and Management in China',
      //   // activities: 'GlobalResolve (helped prototype a portable electricity generator and capacitor; conducted market research in Ghana); Undergraduate Student Government; Lambda Chi Alpha',
      // },
      {
        university: "Arizona State University",
        duration: "May 2018",
        degree: "BA, Political Science",
        cert: "Economics, Applied Business Data Analysis",
        // courses:
        //   "Statistics; Calculus; Applied Regression and Forecasting; Business Project Management; Business Intelligence; Advanced Excel in Business; Science, Technology and Public Affairs",

        // FITS ON ONE PAGE WITHOUT FSA
        // courses: 'Statistics; Calculus; Economics of Healthcare; Applied Regression and Forecasting; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Science, Technology and Public Affairs',

        // courses: 'Science, Technology and Public Affairs; Information Technology and Culture; Political Statistics; Applied Regression and Forecasting; Economics of Healthcare; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Technology, Industry and Management in China',
        // activities: 'GlobalResolve (helped prototype a portable electricity generator and capacitor; conducted market research in Ghana); Undergraduate Student Government; Lambda Chi Alpha',
      },
      // {
      //   bootcamp: "Fullstack Academy of Code",
      //   endDate: "December 2017",
      //   program: "Software Engineering Immersive",
      // },
    ],
    languages: [
      "professional use: modern JavaScript (ES6+, TypeScript), HTML5, CSS3, Rust, Groovy, Ruby",
      "additional exposure: Python, SQL, R, C++ 17, Scala",
    ],
    // databases: [
    //   'PostgreSQL',
    //   'Microsoft Access',
    //   'FileMaker Pro',
    // ],
    libraries: [
      "frameworks: React, Next.js, Vue.js, Svelte",
      "packagers: Webpack, Rollup",
      "back-end: NodeJS, Rails",
      "ORM: Sequelize",
      "APIs: Express.js, GraphQL",
      "testing: Storybook, React Testing Library, Jest, Enzyme",
      "code quality: Prettier, ESLint",
      "styles: SCSS, CSS Modules, CSS-in-JS",
      "transpilation: Babel",
      "state management: Redux, React Context API",
      "routing: React Router",
    ],
    tools: [
      "version control: git, Github",
      "CI/CD: Jenkins (Pipelines), CircleCI",
      "agile project management: JIRA, Pivotal",
      "testing: Codecov, CodeClimate",
      "design collaboration: inVision, Figma, Adobe Photoshop & Illustrator",
      "data storage: PostgreSQL, MongoDB, S3",
      "orchestration: Kubernetes, Elastic Beanstalk",
      "accessibility: Apple VoiceOver",
      "serverless: EC2, Lambda",
    ],
    // interests: [
    //   '',
    //   '',
    //   '',
    // ],
    links: [
      {
        name: "Email",
        faClass: "fa fa-envelope",
        display: "veekas.ashoka@gmail.com",
        link: "mailto:veekas.ashoka@gmail.com",
      },
      {
        name: "Phone",
        faClass: "fa fa-phone",
        display: "(480) 264-0124",
        link: "tel:+14802640124",
      },
      {
        name: "GitHub",
        faClass: "fa fa-github",
        display: "github.com/veekas",
        link: "https://github.com/veekas",
      },
      {
        name: "LinkedIn",
        faClass: "fa fa-linkedin",
        display: "linkedin.com/in/veekas",
        link: "https://www.linkedin.com/in/veekas",
      },
      {
        name: "Twitter",
        faClass: "fa fa-twitter",
        display: "twitter.com/veekas",
        link: "https://www.twitter.com/veekas",
      },
      // {
      //   name: "Location",
      //   faClass: "fa fa-home",
      //   display: "New York, NY",
      //   link: "https://www.google.com/maps/place/New+York,+NY+10005/",
      // },
    ],
  },
  footerLinks: [
    {
      name: "Website",
      faClass: "fa fa-veekas",
      display: "VeekasMeansProgress.com",
      link: "https://VeekasMeansProgress.com",
    },
    {
      name: "GitHub",
      faClass: "fa fa-github",
      display: "github.com/veekas",
      link: "https://github.com/veekas",
    },
    {
      name: "Twitter",
      faClass: "fa fa-twitter",
      display: "@veekas",
      link: "https://www.twitter.com/veekas",
    },
    {
      name: "Linkedin",
      faClass: "fa fa-linkedin",
      display: "linkedin.com/in/veekas",
      link: "https://www.linkedin.com/in/veekas",
    },
  ],
  main: {
    firstName: "Veekas",
    lastName: "Ashoka",
    subheader: {
      qualifier: "Full Stack JavaScript Developer",
      title: "Software Engineer",
      name: "Software Engineer",
    },
    website: {
      faClass: "fa fa-veekas",
      name: "VeekasMeansProgress.com",
      link: "https://VeekasMeansProgress.com",
    },
    companies: [
      {
        name: "Arcadia",
        color: "rgb(77, 100, 141)",
        title: "Software Engineer III",
        date: "July 2022–Present",
        location: "New York, NY",
        // achievements: [
        //   ""
        // ],
      },
      {
        name: "The Knot Worldwide (formerly XO Group, Inc)",
        color: "rgb(77, 100, 141)",
        title: [
          "Software Engineer - Core Systems",
          "Software Engineer - Marketplace",
          "Associate Software Engineer",
        ],
        date: ["Jan 2020-June 2022", "Oct 2019-Jan 2020", "May 2018-Oct 2019"],
        location: ["New York, NY", "New York, NY", "New York, NY"],
        achievements: [
          [
            'Co-maintained the company\'s shared frontend UI/UX framework <a href="https://docs.union.theknot.com" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
            "Led development on full redesigns of the following: global navigation/header, layout and grid system, buttons, links, and inline alerts",
            "Transitioned the company's shared UI/UX framework from CircleCI to Jenkins Pipelines",
            "Helped build an internal A/B testing service and REST API (Node.js/Express.js) to handle experiment management and user bucketing across brands",
            "Built a targeted build tool for our large monorepo using Rust",
            "Re-platformed and redesigned docs to use Storybook (in progress)",
            "Implemented accessibility updates to foundational components used on all pages, such as headers, forms, and buttons (WCAG 2.0 standards)",
            "Founding lead of 'TKWW in Solidarity', a group for employees to listen, learn, and grow as partners to marginalized peers and the wider TKWW community",
            "Member of Diversity, Equity, and Inclusion Council, a subset of representatives across the organization focused on working with executive leadership to implement policy change",
          ],
          [
            // "Led development of the 'Quick Start' A/B test on search pages to increase relevancy for couples",
          ],
          [
            // 'Lead engineer on the <a href="https://www.theknot.com/marketplace" style="color: rgba(77, 100, 141, 1)">Marketplace home page</a> <a href="https://www.theknot.com/marketplace" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a> redesign',
            // "Regular contributor to inner source UI/UX library",
            // "Organized an Advanced React workshop for internal and external engineers",
          ],
        ],
      },
      // {
      //   name: "VMP Consulting",
      //   color: "rgb(77, 100, 141)",
      //   title: "Full Stack Developer (prev. Chief Development Officer)",
      //   date: "Feb 2012–Present",
      //   location: "New York, NY",
      //   achievements: [
      //     "2017-Present: Built full stack web apps with Node.js and React.js",
      //     "Executed online ad campaigns: 5%+ CTR for Google Adwords & Facebook Ads",
      //     "Designed logos, mail pieces, and digital content with Photoshop and Illustrator",
      //     // 'Scraped and cultivated insurance broker data, generating 7,000+ warm leads',
      //   ],
      // },
      // {
      //   name: "Arizona Technology Council",
      //   title: "Director of Business & Community Partnerships",
      //   color: "rgb(77, 100, 141)",
      //   date: "Feb 2017–July 2017",
      //   location: "Phoenix, AZ",
      //   achievements: [
      //     "Led team to transition from Excel spreadsheets to an internal database",
      //     'Managed UI/UX redesign of the organization’s <a href="https://chiefscienceofficers.org/national/" style="color: rgba(77, 100, 141, 1)">Wordpress website</a> <a href="https://chiefscienceofficers.org/national/" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
      //   ],
      // },
      // {
      //   name: "Oscar Health Insurance",
      //   title: "Plan Guide",
      //   color: "rgb(77, 100, 141)",
      //   date: "Sept 2016–Jan 2017",
      //   location: "Tempe, AZ",
      //   achievements: [
      //     "Top performer: over 2x average enrollment rate & top 5% in total enrollments",
      //     'Created score-tracking web-app using Ruby on Rails, Oscar Ping Pong Club <a href="http://oscar-ping-pong.herokuapp.com" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
      //   ],
      // },
      // {
      //   name: 'Veekas Means Progress for Tempe Kids',
      //   color: 'rgb(77, 100, 141)',
      //   title: 'Governing Board Candidate (Tempe Schools)',
      //   date: 'Feb 2016–Nov 2016',
      //   location: 'Tempe, AZ',
      //   achievements: [
      //     // 'Received 15,669 votes after knocking 3,185 doors, calling 6,000+ people',
      //     'Designed website and graphics for digital and print use. <a href="https://github.com/veekas/TD3-2016-data" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
      //   ],
      // },
    ],
    projects: [
      {
        name: "Club Rust",
        // link: 'https://github.com/veekas/restaurant-search-example',
        // faClass: 'fa fa-github',
        tools: ["Rust"],
        // description: 'Yelp-like structured data search using Algolia and Open Table data',
        achievements: [
          'Livestream learning Rust, sometimes with help from a Rust core team member <a href="https://www.twitch.tv/tessaaaaaaaaaaaa" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
        ],
      },
      {
        name: "Climate Can't Wait 2022",
        // link: 'https://github.com/veekas/restaurant-search-example',
        // faClass: 'fa fa-github',
        tools: ["JavaScript", "React"],
        // description: 'Yelp-like structured data search using Algolia and Open Table data',
        achievements: [
          'Administrative Committee member for collaboration between 43+ organizations to pass bold climate policy at the state level <a href="https://www.climatecantwait.org" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
          'Designed, built, and maintained coalition website <a href="https://github.com/veekas/climate-cant-wait" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
        ],
      },
      {
        name: "Sunrise Movement NYC",
        // link: 'https://github.com/veekas/restaurant-search-example',
        // faClass: 'fa fa-github',
        tools: [],
        // description: 'Yelp-like structured data search using Algolia and Open Table data',
        achievements: [
          "Elected to hub leadership in 2021",
          'Led NYC\'s "Good Jobs for All" Campaign, which successfully pressured Senate Majority Leader Schumer to support the creation of a Civilian Climate Corps <a href="https://www.commondreams.org/news/2021/07/08/huge-schumer-commits-creating-civilian-climate-corps"  style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a> and partnered with him to promote it <a href="https://twitter.com/sunrisemvmt/status/1446204934865702918" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
          "Represented the organization in coalition meetings with other external partners",
        ],
      },
      {
        name: "Technical speaker",
        // link: 'https://github.com/veekas/restaurant-search-example',
        // faClass: 'fa fa-github',
        tools: ["JavaScript", "React"],
        // description: 'Yelp-like structured data search using Algolia and Open Table data',
        achievements: [
          'Virtual Reality on the Web with React 360 (ReactNYC, Dec. 2018) <a href="https://www.youtube.com/watch?v=yVNULzIkxCI" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-youtube"></i></a>',
          "Code-Splitting with React (ReactNYC, Nov. 2018)",
          'A Practical Introduction to Service Workers (ReactNYC, May 2018) <a href="https://www.youtube.com/watch?v=0QE5xb9s6mM" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-youtube"></i></a>',
        ],
      },
      {
        name: "Open source contributions",
        // link: 'https://github.com/facebook/react/pull/11658',
        // faClass: 'fa fa-github',
        tools: ["JavaScript", "React", "Jest", "HTML", "CSS", "Git", "Github"],
        achievements: [
          'Facebook - React (2018) <a href="https://github.com/facebook/react/pull/11658" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
          'Sequelize (2017) <a href="https://github.com/sequelize/sequelize/pull/8403" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
          'MDN (Mozilla Developer Network) - Interactive Examples (2017) <a href="https://github.com/mdn/interactive-examples" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
        ],
      },
      // {
      //   name: "Reasons Why I Love You",
      //   link: "https://github.com/veekas/reasons-why-i-love-you",
      //   faClass: "fa fa-github",
      //   tools: [
      //     "JavaScript",
      //     "Google Cloud Platform",
      //     "Actions on Google",
      //     "Dialogflow",
      //   ],
      //   description:
      //     "Action for Google Assistant that tells a significant other why you love them",
      //   achievements: [
      //     'Demo and customization instructions published on Valentines Day 2018 <a href="https://reasons-why-i-love-you.glitch.me/" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
      //   ],
      // },
      // {
      //   name: "CodeMode",
      //   link: "https://github.com/world-of-code/code-mode",
      //   faClass: "fa fa-github",
      //   tools: [
      //     "JavaScript",
      //     "React",
      //     "Redux",
      //     "Google Chrome API",
      //     "HTML/CSS",
      //     "Express",
      //     "Sequelize",
      //   ],
      //   description:
      //     "Chrome extension to turn Youtube video pages into an interactive learning platform",
      //   achievements: [
      //     // 'Worked in an agile  team of four over two weeks',
      //     "Implemented UI/UX design and drawer functionality",
      //     // 'Full-featured: used content scripts, background processes, and a popup',
      //     'Lead presenter for live product demonstration <a href="https://www.youtube.com/watch?v=H9oYe_8Ks9M" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-youtube"></i></a>',
      //   ],
      // },
      // {
      //   name: "Use Strict Everywhere",
      //   link: "https://marketplace.visualstudio.com/items?itemName=veekas.use-strict-everywhere",
      //   faClass: "fa fa-windows",
      //   tools: ["Typescript", "VSCode API"],
      //   description:
      //     "Microsoft Visual Studio Code extension that converts a workspace to strict mode",
      //   achievements: [
      //     // 'Learned VSCode API, implemented, and deployed over a few days',
      //     "Currently offered in the VSCode extension marketplace with 400+ downloads",
      //   ],
      // },
      // {
      //   name: 'Audelio',
      //   link: 'https://github.com/veekas/podcast-project',
      // faClass: 'fa fa-github',
      //   tools: ['JavaScript', 'React', 'Redux', 'Python', 'Express', 'Sequelize'],
      //   description: 'Podcast player and discovery engine',
      //   achievements: [
      //     'Something impressive will be said here',
      //     'Something impressive will be said here',
      //     // '<b><a href="https://github.com/jasonf7/memories-of-harambe">Vio</a></b> - mobile web app to film location-based video diaries with sentimental analysis (Participant at Hack the North 2016)',
      //     // '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
      //     // '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
      //     // '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
      //     // '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
      //   ],
      // },
      // {
      //   name: "Easy Form to PDF",
      //   link: "https://github.com/veekas/easy-form-to-pdf",
      //   faClass: "fa fa-github",
      //   tools: [
      //     "JavaScript",
      //     "React",
      //     "Redux",
      //     "Draft.js",
      //     "Formik",
      //     "HTML/CSS",
      //     "Express",
      //     "Sequelize",
      //   ],
      //   description:
      //     "User-friendly Draft.js form that generates a PDF from inputs",
      //   achievements: [
      //     "Project for Hopelink, a Seattle-based United Way affiliate",
      //   ],
      // },
      // {
      //   name: 'iTunes Search Example App',
      //   link: 'github.com/veekas/itunes-search-example',
      //   faClass: 'fa fa-github',
      //   tools: ['JavaScript', 'React', 'iTunes API'],
      //   description: 'Simple React app that searches for albums on iTunes',
      //   achievements: [
      //     // '',
      //   ],
      // },
      // {
      //   name: 'Restaurant Search Example App',
      //   link: 'https://github.com/veekas/restaurant-search-example',
      //   faClass: 'fa fa-github',
      //   tools: ['JavaScript', 'React', 'Open Table API', 'Algolia'],
      //   description: 'Yelp-like structured data search using Algolia and Open Table data',
      //   achievements: [
      //     // '',
      //   ],
      // },
      // {
      //   name: 'Audelio',
      //   link: 'https://audelio.netlify.com/',
      //   faClass: 'fa fa-external-link-square',
      //   tools: ['JavaScript', 'React', 'Apollo', 'GraphQL', 'PWA', 'Styled-Components', 'Jest', 'Enzyme', 'Travis-CI', 'Codecov'],
      //   description: 'Podcast player and discovery engine PWA (in development)',
      //   achievements: [
      //     // 'continuous integration, front-end mostly TDD with Jest/Enzyme',
      //   ],
      // achievements: [
      //   'Something impressive will be said here',
      //   'Something impressive will be said here',
      // '<b><a href="https://github.com/jasonf7/memories-of-harambe">Vio</a></b> - mobile web app to film location-based video diaries with sentimental analysis (Participant at Hack the North 2016)',
      // '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
      // '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
      // '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
      // '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
      // ],
      // },
      // {
      //   name: 'Pokeball',
      //   link: 'https://github.com/ABHVZ/pokeball',
      //   faClass: 'fa fa-github',
      //   tools: ['JavaScript', 'React', 'Redux', 'Express', 'Sequelize'],
      //   description: `A fully-developed mock e-commerce site 'selling' Pokemon`,
      //   achievements: [
      //     'Worked in five-oerson agile team over 1 week',
      //     'Contributions included full stack navigation, auth. functionality, and UI',
      //   ],
      // },
    ],
  },
};

export default Resume;
