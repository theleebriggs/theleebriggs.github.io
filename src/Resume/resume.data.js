const basics = {
  name: "Lee Briggs",
  label: "Full Stack Developer",
  email: "theleebriggs@gmail.com",
  phone: "0416 250 472",
  url: "https://theleebriggs.github.io",
  github: 'theleebriggs',
  summary:
    '<p>I have been building for the web for over 10 years, in lead roles in both agencies and in-house, in Australia and the UK. The last few years have seen me building full stack Javascript applications; I\'m passionate about design systems and bridging the gap between design and development.</p><p>As a tech lead, I believe in giving teams the tools they need to deliver great work; whether that means writing code for process automation, setting out what best practice looks like, or mentoring the team through shared learning. My role is to unblock and help the team grow.</p>',
};

const work = [
  {
    name: 'Portable',
    position: 'Tech Lead',
    url: 'https://portable.com.au',
    startDate: '2018-09-01',
    summary: '<p>Part of the tech leadership team, defining the wider tech strategy across tools, stack and growth areas; providing mentorship to the team; scoping projects and working collaboratively with clients.</p><p>Full stack development of digital products using <strong>React</strong>, <strong>Styled Components</strong>, Node (<strong>NestJS</strong>, <strong>Serverless</strong>), with <strong>Terraform</strong> to build on <strong>AWS</strong> infrastructure.</p>',
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
    position: 'Full Stack Developer ',
    url: 'https://today.design',
    contract: true,
    startDate: '2018-05-01',
    endDate: '2018-08-01',
    summary: '<p>Building <a href="https://www.myvictoria.vic.gov.au/" target="_blank" rel="noopener noreferrer">My Victoria</a>, a <strong>Vue + Nuxt</strong> application combining geospatial and census data into a searchable platform for the state of Victoria.</p>',
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
    endDate: '2018-05-01',
    summary: '<p>Leading and managing work across the front end codebase for the eccomerce site <a href="https://aesop.com" target="_blank" rel="noopener noreferrer">aesop.com</a>. Working with partner agencies across the globe to handle integration and deployment cycles, as well as internal UX / design teams on campaign and platform improvements.</p>',
    tags: [
      'React',
      'Redux'
    ]
  },
  {
    name: 'Government Digital Service',
    position: 'Full Stack Developer',
    url: 'https://gov.uk',
    startDate: '2016-12-01',
    endDate: '2017-05-01',
    contract: true,
    summary: '<p>Working in cross functional teams on the <a href="https://gov.uk" rel="noopener noreferrer">GOV.UK</a> platform as well as developing a <strong>Ruby on Rails</strong> based internal content analysis and discovery tool.</p>',
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
    summary: '<p>Leading and managing front end development; building primarily <strong>AngularJS</strong> applications, projects included <a href="https://www.prsformusic.com/press/2017/new-tool-for-music-creators-to-report-performances-and-help-manage-their-rights" target="_blank" rel="noopener noreferrer">Setlist Hub</a> and <a href="http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildAttentionExecutiveFunction/tea-ch-2/test-of-everyday-attention-for-children-second-edition.aspx?gclid=CP3XobiT088CFRdmGwod8_EKrQ" target="_blank" rel="noopener noreferrer">Pearson TEA-Ch2</a>.</p>',
  },
  {
    name: 'Moving Brands',
    position: 'Web Developer',
    url: 'http://movingbrands.com/',
    startDate: '2012-05-01',
    endDate: '2014-05-01',
    summary: '<p>Leading web development, working within a multi-disciplinary team to deliver web projects for diverse clients. Highlights included building the new front end of <a href="http://srf.ch" target="_blank">SRF</a> and working on an interactive music video for <a href="http://www.machinestop.com/" target="_blank" rel="noopener noreferrer">Duologue</a>.</p>',
  },
  {
    name: 'Cogapp',
    position: 'Developer',
    url: 'http://cogapp.com/',
    startDate: '2010-06-01',
    endDate: '2012-05-01',
    summary: '<p>Full stack development on a number of high profile projects including <a href="http://www.cogapp.com/our-work/dorling-kindersley-eyewitness-travel-guides" target="_blank" rel="noopener noreferrer">DK Eyewitness Travel</a>, <a href="http://www.cogapp.com/our-work/tate-modern-ai-weiwei" target="_blank" rel="noopener noreferrer">Ai Wei Wei</a> at the Tate Modern and the <a href="http://www.moma.org/explore/collection/ge/index" target="_blank" rel="noopener noreferrer">MoMA German Expressionism site</a>.</p>',
  }
]

const skills = {
  description: 'Using HTML, CSS and Javascript to build web products. Currently enjoying NextJS with Styled Components.',
  values: [
    'React',
    'Node',
    'Webpack',
    'NextJS',
    'Styled Components',
    'Git',
    'Serverless',
    'TypeScript',
    'Cypress',
    'AWS',
  ]
}

const education = [
  {
    institution: 'Southampton Solent University',
    area: 'Web Development',
    studyType: 'First Class BSc (Hons)'
  }
]

export default { basics, work, skills, education }
