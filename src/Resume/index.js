import React, { Component } from 'react';
import http from 'http';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    // call Heroku every 5 minutes to prevent dyno from sleeping
    const callHeroku = () => http.get('http://veekas-react-resume.herokuapp.com');
    setInterval(callHeroku(), 300000);

    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
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
    education: [
      {
        university: 'Arizona State University',
        duration: 'July 2017',
        degree: 'BA, Political Science',
        cert: 'Certificate, Applied Business Data Analysis',
        courses: 'Statistics; Calculus; Economics of Healthcare; Applied Regression and Forecasting; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Science, Technology and Public Affairs',
        // courses: 'Science, Technology and Public Affairs; Information Technology and Culture; Political Statistics; Applied Regression and Forecasting; Economics of Healthcare; Business Process Management; Business Project Management; Business Intelligence; Advanced Excel in Business; Technology, Industry and Management in China',
        // activities: 'GlobalResolve (helped prototype a portable electricity generator and capacitor; conducted market research in Ghana); Undergraduate Student Government; Lambda Chi Alpha',
      },
      // {
      //   bootcamp: 'Fullstack Academy of Code',
      //   endDate: 'December 2017',
      //   program: 'Software Engineering Immersive',
      // },
    ],
    languages: [
      {
        name: 'JavaScript',
        proficiency: 0.8,
      },
      {
        name: 'HTML/CSS',
        proficiency: 0.7,
      },
      {
        name: 'SQL',
        proficiency: 0.5,
      },
      {
        name: 'R',
        proficiency: 0.5,
      },
      {
        name: 'Python',
        proficiency: 0.3,
      },
      {
        name: 'Ruby',
        proficiency: 0.2,
      },
    ],
    // databases: [
    //   'PostgreSQL',
    //   'Microsoft Access',
    //   'FileMaker Pro',
    // ],
    libraries: [
      'React',
      'Redux',
      'Express',
      'Sequelize',
      'GraphQL',
      'Apollo',
      'Typescript',
      'Node.js',
      'Mocha',
      'Jasmine',
      'Enzyme',
      'Jest',
      'Axios',
      'AJAX',
      'Socket.io',
      'jQuery',
      'Draft.js',
      'OAuth',
      'Chrome API',
      'VSCode API',
      'Bootstrap',
      'Ruby on Rails',
      'Passport',
      'Babel',
      'Webpack',
    ],
    tools: [
      'PostgreSQL',
      'Git',
      'Github',
      'JIRA',
      'Google Cloud Platform',
      'Dialogflow',
      'Amazon Web Services (AWS)',
      'Microsoft Excel',
      'VBA',
      'Microsoft Access',
      'FileMaker Pro',
      'Adobe Illustrator',
      'Adobe Photoshop',
    ],
    // interests: [
    //   '',
    //   '',
    //   '',
    // ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'Veekas@VeekasMeansProgress.com',
        link: 'mailto:Veekas@VeekasMeansProgress.com',
      },
      {
        name: 'Phone',
        faClass: 'fa fa-phone',
        display: '480.264.0124',
        link: 'tel:+14802640124',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/veekas',
        link: 'https://github.com/veekas',
      },
      {
        name: 'LinkedIn',
        faClass: 'fa fa-linkedin',
        display: 'linkedin.com/in/veekas',
        link: 'https://www.linkedin.com/in/veekas',
      },
      {
        name: 'Twitter',
        faClass: 'fa fa-twitter',
        display: 'twitter.com/veekas',
        link: 'https://www.twitter.com/veekas',
      },
      {
        name: 'Location',
        faClass: 'fa fa-home',
        display: 'New York, NY',
        link: 'https://www.google.com/maps/place/New+York,+NY+10005/',
      },
    ],
  },
  footerLinks: [
    {
      name: 'Website',
      faClass: 'fa fa-veekas',
      display: 'VeekasMeansProgress.com',
      link: 'http://VeekasMeansProgress.com',
    },
    {
      name: 'GitHub',
      faClass: 'fa fa-github',
      display: 'github.com/veekas',
      link: 'https://github.com/veekas',
    },
    {
      name: 'Twitter',
      faClass: 'fa fa-twitter',
      display: '@veekas',
      link: 'http://www.twitter.com/veekas',
    },
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/veekas',
      link: 'https://www.linkedin.com/in/veekas',
    },
  ],
  main: {
    firstName: 'Veekas',
    lastName: 'Shrivastava',
    subheader: {
      qualifier: 'Fullstack Javascript Developer',
      title: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      faClass: 'fa fa-veekas',
      name: 'VeekasMeansProgress.com',
      link: 'http://VeekasMeansProgress.com',
    },
    companies: [
      {
        name: 'VMP Consulting',
        color: 'rgb(77, 100, 141)',
        title: 'Full Stack Developer',
        date: 'Feb 2012–Present',
        location: 'New York, NY',
        achievements: [
          '(Starting in 2017) Building full stack web apps for political campaigns',
          'Executed online ad campaigns: 5%+ CTR for Google Adwords & Facebook Ads',
          'Mined insurance broker data to generate 7,000+ warm leads for a client',
        ],
      },
      {
        name: 'Arizona Technology Council',
        title: 'Director of Business & Community Partnerships',
        color: 'rgb(77, 100, 141)',
        date: 'Feb 2017–July 2017',
        location: 'Phoenix, AZ',
        achievements: [
          'Led team to transition from Excel spreadsheets to an internal database',
          'Project manager for UI/UX redesign of the organization’s Wordpress website',
        ],
      },
      {
        name: 'Oscar Health Insurance',
        title: 'Plan Guide',
        color: 'rgb(77, 100, 141)',
        date: 'Sept 2016–Jan 2017',
        location: 'Tempe, AZ',
        achievements: [
          'Top performer: over 2x enrollment rate & top 5% in total enrollments',
          'Created score-tracking web-app using Ruby on Rails: <a href="http://oscarpingpong.club" style="color: rgba(77, 100, 141, 1)">OscarPingPong.Club</a> <a href="http://oscarpingpong.club" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-external-link-square"></i></a>',
        ],
      },
      {
        name: 'Veekas Means Progress for Tempe Kids',
        color: 'rgb(77, 100, 141)',
        title: 'Governing Board Candidate (Tempe Elementary Schools)',
        date: 'Feb 2016–Nov 2016',
        location: 'Tempe, AZ',
        achievements: [
          'Received 15,669 votes after knocking 3,185 doors, calling over 6,000 people',
          'Designed website and graphics for digital and print use. <a href="https://github.com/veekas/TD3-2016-data" style="color: rgba(77, 100, 141, 1)">View on Github:</a> <a href="https://github.com/veekas/TD3-2016-data" style="color: rgba(77, 100, 141, 1)"><i class="fa fa-github"></i></a>',
        ],
      },
    ],
    projects: [
      {
        name: 'Open Source Contributor (React, Sequelize)',
        link: 'https://github.com/facebook/react/pull/11658',
        faClass: 'fa fa-github',
        tools: ['Javascript', 'React', 'Jest', 'Git', 'Github'],
        // achievements: [
        //   '',
        //   '',
        //   '',
        // ],
      },
      {
        name: 'CodeMode',
        link: 'https://www.youtube.com/watch?v=H9oYe_8Ks9M',
        faClass: 'fa fa-youtube',
        tools: ['Javascript', 'React', 'Redux', 'Google Chrome API', 'HTML/CSS', 'Express', 'Sequelize'],
        description: 'Chrome extension to convert Youtube videos into an interactive learning platform',
        achievements: [
          'Worked in an agile  team of four over two weeks to create our first extension',
          'Implemented UI/UX design and drawer functionality',
          'Full-featured: used content scripts, background processes, and a popup',
        ],
      },
      // {
      //   name: 'Audelio',
      //   link: 'https://github.com/veekas/podcast-project',
      // faClass: 'fa fa-github',
      //   tools: ['Javascript', 'React', 'Redux', 'Python', 'Express', 'Sequelize'],
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
      {
        name: 'Audelio',
        link: 'https://github.com/veekas/podcast-project',
        faClass: 'fa fa-github',
        tools: ['Javascript', 'React', 'Redux', 'Python', 'Express', 'Sequelize'],
        description: 'Podcast player and recommendation engine (in development)',
        // achievements: [
        //   'Something impressive will be said here',
        //   'Something impressive will be said here',
          // '<b><a href="https://github.com/jasonf7/memories-of-harambe">Vio</a></b> - mobile web app to film location-based video diaries with sentimental analysis (Participant at Hack the North 2016)',
          // '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
          // '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
          // '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
          // '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
        // ],
      },
      {
        name: 'Use Strict Everywhere',
        link: 'https://marketplace.visualstudio.com/items?itemName=veekas.use-strict-everywhere',
        faClass: 'fa fa-windows',
        tools: ['Typescript', 'VSCode API'],
        description: 'Visual Studio Code extension that converts a workspace to strict mode',
        achievements: [
          'Learned VSCode API, implemented, and deployed over a few days',
          'Currently offered in the VSCode extension marketplace with over 40 downloads',
        ],
      },
      {
        name: 'Easy Form to PDF',
        link: 'https://github.com/veekas/easy-form-to-pdf',
        faClass: 'fa fa-github',
        tools: ['Javascript', 'React', 'Redux', 'Draft.js', 'HTML/CSS', 'Express', 'Sequelize'],
        description: 'User-friendly Draft.js form that generates a PDF from inputs',
        achievements: [
          'Real-world project for Hopelink, a Seattle-based United Way affiliate',
          'Sole developer for form that implements Draft.js and Formik',
        ],
      },
      {
        name: 'Pokeball',
        link: 'https://fsa-pokeball.herokuapp.com',
        faClass: 'fa fa-external-link-square',
        tools: ['Javascript', 'React', 'Redux', 'Express', 'Sequelize'],
        description: 'A fully-developed mock e-commerce site selling Pokemon',
        achievements: [
          'Worked in agile team to implement e-commerce website over 1 week',
          'Contributions included full stack navigation, auth. functionality, and UI',
        ],
      },
    ],
  },
};

export default Resume;
