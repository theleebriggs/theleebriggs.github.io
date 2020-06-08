const basics = {
  name: "Lee Briggs",
  label: "Front End Developer",
  email: "coffeegunshow@gmail.com",
  phone: "0416 250 472",
  url: "https://theleebriggs.github.io",
  summary:
    '<p>Front end developer based in Melbourne, previously at <a href="https://aesop.com/">Aesop</a> and in London at <a href="https://gov.uk">Government Digital Service</a>. I work with a broad technology stack and use the best tools for the job. Currently Front End Lead at <a href="https://portable.com.au">Portable</a>.',
};

const work = [
  {
    name: 'Portable',
    position: 'Front End Lead',
    url: 'https://portable.com.au',
    startDate: '2018-09-01',
    endDate: '01',
    summary: '<p>Mentoring. Strategy/Growth. Headless CMS - Contentful, Wordpress. Building <strong>React</strong> applications with <strong>Node</strong> backends.</p>',
    tags: [
      'React',
      'NextJS',
      'Serverless',
      'Styled Components',
      'TypeScript'
    ]
  },
  {
    name: 'Today',
    position: 'Front End Developer ',
    url: 'https://today.design',
    startDate: '2018-05-01',
    endDate: '',
    summary: '<p>Short contract building <a href="https://www.myvictoria.vic.gov.au/">My Victoria</a>, a <strong>Vue/Nuxt</strong> application showing geographically based statistics and mapping data for the state of Victoria</p>',
    tags: [
      'Vue',
      'Nuxt'
    ]
  },
  {
    name: 'Aesop',
    position: 'Lead Front End Developer',
    url: 'https://aesop.com',
    startDate: '2017-12-01',
    summary: '<p>Developing across the <strong>React/Redux</strong> codebase for the eccomerce site <a href="https://aesop.com">aesop.com</a>. Working with partner agencies across the globe to handle integration and deployment cycles, as well as internal UX / design teams on campaign and platform improvements.</p>',
    tags: [
      'React',
      'Redux'
    ]
  },
  {
    name: 'Government Digital Service',
    position: 'Front End Developer',
    url: 'https://gov.uk',
    startDate: '2016-12-01',
    endDate: '2017-05-01',
    summary: '<p>Working in cross functional teams on the <a href="https://gov.uk">GOV.UK</a> platform as well as developing a <strong>Rails</strong> based internal content analysis / discovery tool.</p>',
    tags: [
      'Ruby',
      'Ruby on Rails'
    ]
  },
  {
    name: 'Head',
    position: 'Lead Front End Developer',
    url: 'http://headlondon.com/',
    startDate: '2014-05-01',
    endDate: '2016-12-01',
    summary: '<p>Leading and managing front end development; building primarily <strong>AngularJS</strong> applications, projects included <a href="https://www.prsformusic.com/press/2017/new-tool-for-music-creators-to-report-performances-and-help-manage-their-rights">Setlist Hub</a> and <a href="http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildAttentionExecutiveFunction/tea-ch-2/test-of-everyday-attention-for-children-second-edition.aspx?gclid=CP3XobiT088CFRdmGwod8_EKrQ">Pearson TEA-Ch2</a>.</p>',
  },
  {
    name: 'Moving Brands',
    position: 'Web Developer',
    url: 'http://movingbrands.com/',
    startDate: '2012-05-01',
    endDate: '2014-05-01',
    summary: '<p>Leading web development, working within a multi-disciplinary team to deliver web projects for diverse clients. Highlights included building the new front end of <a href="http://srf.ch">SRF</a> and working on an interactive music video for <a href="http://www.machinestop.com/">Duologue</a>.</p>',
  },
  {
    name: 'Cogapp',
    position: 'Developer',
    url: 'http://cogapp.com/',
    startDate: '2010-06-01',
    endDate: '2012-05-01',
    summary: '<p>Full stack development on a number of high profile projects including <a href="http://www.cogapp.com/our-work/dorling-kindersley-eyewitness-travel-guides">DK Eyewitness Travel</a>, <a href="http://www.cogapp.com/our-work/tate-modern-ai-weiwei">Ai Wei Wei</a> at the Tate Modern and the <a href="http://www.moma.org/explore/collection/ge/index">MoMA German Expressionism site</a>.</p>',
  }
]

const skills = {
  description: 'Using HTML, CSS and Javascript to build web products.',
  values: [
    'ES6',
    'React',
    'Node',
    'NextJS',
    'Webpack',
    'Styled Components',
    'Git',
    'TypeScript'
  ]
}

const education = [
  {
    institution: 'Southampton Solent University',
    area: 'Web Development',
    studyType: 'First Class BSc (Hons)'
  }
]

const interests = '<p>When I\'m not developing I enjoy table tennis, actual tennis and rewatching <a href="http://www.imdb.com/title/tt1073507/">Party Down</a>.</p>'

export default { basics, work, interests, skills, education }
