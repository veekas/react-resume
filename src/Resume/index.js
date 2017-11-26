import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
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
    education: {
      university: 'Arizona State University',
      duration: 'July 2017',
      degree: 'BA Political Science;\nCert. Applied Business Data Analysis',
    },
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
        name: 'R',
        proficiency: 0.5,
      },
      {
        name: 'Typescript',
        proficiency: 0.4,
      },
      {
        name: 'Ruby',
        proficiency: 0.3,
      },
      {
        name: '6',
        proficiency: 0.2,
      },
    ],
    databases: [
      'PostgreSQL',
      '2',
      '3',
    ],
    libraries: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'Mocha',
      'Socket.io',
      'jQuery',
      'Sass/Less',
      'Ruby on Rails',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
    ],
    tools: [
      'Git',
      'Webpack',
      'Vim',
      'Unix',
      'Browserify',
      'Docker',
      'Visual Studio Code',
      'Agile Methodology',
      'Test Driven Development',
      'Adobe Illustrator',
      'Adobe Photoshop',
      '12',
      '13',
    ],
    interests: [
      'I <b>learn</b> about web and startups.',
      'I <b>dominate</b> in baddy, ping pong, League of Legends, and Tetris.',
      'I <b>love</b> tacos, anime, bubble tea, fitness, traveling, and team players.',
    ],
    links: [{
      name: 'Phone',
      faClass: 'fa fa-phone',
      display: '480.264.0124',
      link: 'tel:+14802640124',
    }, {
      name: 'Email',
      faClass: 'fa fa-envelope',
      display: 'Veekas@VeekasMeansProgress.com',
      link: 'mailto:Veekas@VeekasMeansProgress.com',
    }, {
      name: 'GitHub',
      faClass: 'fa fa-github',
      display: 'github.com/veekas',
      link: 'https://github.com/veekas',
    }],
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
      qualifier: 'Fullstack Javascript',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: 'VeekasMeansProgress.com',
      link: 'http://VeekasMeansProgress.com',
    },
    companies: [{
      name: 'Memebox',
      title: 'Data Engineer',
      color: 'rgb(77, 100, 141)',
      date: 'Winter 2017',
      location: 'Seoul, Korea',
      achievements: [
        'Maintained stable data pipelines built with <b>Spark</b> and <b>Spark Streaming</b>, with <b>Airflow</b> for scheduling (50+ GB data flow daily)',
        'Built <b>real time</b> data visualization and alerting tools',
        'Wrote data extraction tool for external sites using <b>Scrapy</b> that automatically refreshes for stale data periodically',
        'Extracted keywords from Korean text using Latent Dirichlet Allocation'
      ],
    }, {
      name: 'Zenreach',
      title: 'Junior Zengineer',
      color: 'rgb(77, 100, 141)',
      date: 'Spring 2016',
      location: 'San Francisco, US',
      achievements: [
        'Contributed to open-sourced <b><a href="https://github.com/quilljs/quill/releases/tag/v1.0.0-beta.8">Quill</a></b> project with over 13k stars on Github',
        'Created interactive visualizations for customer data, improving browser coverage to over <b>99%</b>',
        'Built drag & drop email composer using <b>React</b> with <b>Django</b>, with event tracking infrastructure and behavioural analytics',
      ],
    }, {
      name: 'Datera',
      color: 'rgb(77, 100, 141)',
      title: 'Full Stack JavaScript Developer',
      date: 'Fall 2015',
      location: 'Mountain View, US',
      achievements: [
        'Built interactive API explorer using the JSONSchema standard with <b>AngularJS</b>',
        'Added core features to an in-house <b>Javascript</b> SPA framework including duplex streams for model access and <b>React</b> support',
        'Designed and built admin panel for a distributed storage system',
      ],
    }, {
      name: 'Ten Thousand Coffees',
      title: 'Software Engineering Intern',
      color: 'rgb(77, 100, 141)',
      date: 'Winter 2015',
      location: 'Toronto, Canada',
      achievements: [
        'Re-architected the messaging system to support multiple participants and time-scheduling using the <b>MEAN</b> stack',
        'Ran email A/B tests, which increased user retention by <b>20%</b>',
        'Added complete i18n coverage to the web platform',
      ],
    }],
    projects: [{
      name: 'Zoo House',
      tools: [],
      achievements: [
        'Helped clients build fully fledged products such as <b><a href="https://www.coastlinemarket.com/">Coastline Market</a></b>, e-commerce and inventory management for fishing',
        'Worked with small team to transform fun projects into market-ready products, such as <b><a href="https://medicov.io/">Medicov</a></b> and <b><a href="https://luql.io/">Luql</a></b>',
      ],
    }, {
      name: 'Various Hacks',
      tools: [],
      achievements: [
        '<b><a href="https://github.com/jasonf7/memories-of-harambe">Vio</a></b> - mobile web app to film location-based video diaries with sentimental analysis (Participant at Hack the North 2016)',
        '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
        '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
        '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
        '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
      ],
    }],
  },
};

export default Resume;
