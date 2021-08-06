export class Techs {
  starterYear = 2006;

  currentYear = new Date().getFullYear();

  years = new Array(this.currentYear - this.starterYear + 1).fill(this.starterYear).map((v, i) => v + i);

  timeline: {
    techs: {
      title: string;
      start: number;
      end?: number;
      background: string;
      color?: string;
      link?: string;
      main?: true;
    }[],
  }[] = [
    {
      techs: [{
        title: 'HTML',
        start: 2006,
        background: '#dd4b25',
        main: true,
      }],
    },
    {
      techs: [{
        title: 'CSS',
        start: 2006,
        background: '#254bdd',
        main: true,
      }],
    },
    {
      techs: [
        {
          title: 'Less',
          start: 2011,
          end: 2015,
          background: '#284b79',
          link: 'http://lesscss.org/',
        },
        {
          title: 'Sass',
          start: 2016,
          background: '#c76494',
          link: 'https://sass-lang.com/',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'JavaScript',
          start: 2007,
          background: '#efd81d',
          color: '#000000',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'TypeScript',
          start: 2015,
          background: '#0076c6',
          link: 'https://www.typescriptlang.org/',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'jQuery',
          start: 2008,
          end: 2015,
          background: '#0769ad',
          link: 'https://jquery.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'AngularJS',
          start: 2014,
          end: 2015,
          background: '#a6120d',
          link: 'https://angularjs.org/',
        },
        {
          title: 'Angular',
          start: 2016,
          background: '#dd0031',
          link: 'https://angular.io/',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'Jasmine+Karma',
          start: 2016,
          background: '#8a4182',
          link: 'https://jasmine.github.io/',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'Protractor E2E',
          start: 2020,
          background: '#dd0031',
          link: 'https://www.protractortest.org/#/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'React',
          start: 2019,
          end: 2020,
          background: '#61dafb',
          color: '#111111',
          link: 'https://reactjs.org/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Next.js',
          start: 2019,
          end: 2020,
          background: '#111111',
          link: 'https://nextjs.org/',
        },
      ],
    },
    {
      techs: [
        {
          title: '🦀Rust',
          start: 2020,
          background: '#dc3925',
          link: 'https://www.rust-lang.org/',
          main: true,
        },
      ],
    },
    {
      techs: [
        {
          title: 'Node.js',
          start: 2012,
          background: '#3e863d',
          link: 'https://nodejs.org/en/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Gulp',
          start: 2014,
          end: 2015,
          background: '#cf4647',
          link: 'https://gulpjs.com/',
        },
        {
          title: 'Webpack',
          start: 2016,
          background: '#1c78c0',
          link: 'https://webpack.js.org/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Express.js',
          start: 2012,
          background: '#6c6c6c',
          link: 'https://expressjs.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Fastify',
          start: 2020,
          background: '#202020',
          link: 'https://fastify.io/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'NestJS',
          start: 2018,
          end: 2020,
          background: '#e0234e',
          link: 'https://nestjs.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'GraphQL',
          start: 2018,
          end: 2020,
          background: '#e10098',
          link: 'https://graphql.org/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'MySQL',
          start: 2007,
          background: '#00758f',
          link: 'https://www.mysql.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'PostgreSQL',
          start: 2016,
          background: '#336791',
          link: 'https://www.postgresql.org/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'PHP',
          start: 2007,
          end: 2016,
          background: '#8892bf',
          link: 'https://www.php.net/index.php',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Apache',
          start: 2007,
          end: 2011,
          background: '#d12127',
          link: 'https://httpd.apache.org/',
        },
        {
          title: 'NGINX',
          start: 2012,
          background: '#009639',
          link: 'https://www.nginx.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'Docker',
          start: 2016,
          background: '#329eee',
          link: 'https://www.docker.com/',
        },
      ],
    },
    {
      techs: [
        {
          title: 'SVN',
          start: 2007,
          end: 2008,
          background: '#809cc9',
          link: 'https://subversion.apache.org/',
        },
        {
          title: 'Git',
          start: 2008,
          background: '#f64d27',
          link: 'https://git-scm.com/',
          main: true,
        },
      ],
    },
  ];
}
