const basics = {
  name: 'Lee Briggs',
  label: 'Front End Developer',
  email: 'coffeegunshow@gmail.com',
  phone: '0416 250 472',
  url: 'https://theleebriggs.github.io',
  summary: '<p>Front end developer based in Melbourne, previously at <a href="https://aesop.com/">Aesop</a> and in London at <a href="https://gov.uk">Government Digital Service</a>. I work with a broad technology stack and use the best tools for the job, whether that means the latest library or plain old JS. Past projects include work for <strong>MoMa</strong>, <strong>Tate Modern</strong> and <strong>Tesco</strong>.</p>'
}

const work = [
  {
    name: 'Aesop',
    position: 'Lead Front End Developer',
    url: 'https://aesop.com',
    startDate: '2017-12-01',
    endDate: '2018-05-01',
    summary: '<p>Leading and managing front end development; developing new and existing features across the <strong>React</strong> / <strong>Redux</strong> codebase for the eccomerce site <a href="https://aesop.com">aesop.com</a>. Working with partner agencies across the globe to handle integration and deployment cycles, as well as internal UX / design teams on campaign and platform improvements.</p>',
    highlights: [],
    tags: [
      'React',
      'Redux'
    ]
  },
  {
    name: 'Zone Digital',
    position: 'Front End Developer',
    url: 'https://www.zonedigital.com/',
    startDate: '2017-06-01',
    endDate: '2017-08-01',
    summary: '<p>Short term contract to build a <strong>React</strong> / <strong>Redux</strong> based dashboard which allowed the backroom staff of PRS for Music to manage the submitted performances of their members.</p>',
    highlights: [],
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
    highlights: [],
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
    summary: '<p>Leading and managing front end development; building primarily <strong>AngularJS</strong> applications, projects included <a href="http://www.polecat.com/products/polecat-risklocator/">Polecat RiskLocator</a>, <a href="https://www.prsformusic.com/press/2017/new-tool-for-music-creators-to-report-performances-and-help-manage-their-rights">Setlist Hub</a> and <a href="http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildAttentionExecutiveFunction/tea-ch-2/test-of-everyday-attention-for-children-second-edition.aspx?gclid=CP3XobiT088CFRdmGwod8_EKrQ">Pearson TEA-Ch2</a>.</p>',
    highlights: [
      {
        name: 'Polecat RiskLocator',
        url: 'http://www.polecat.com/products/polecat-risklocator/',
        summary: 'Risk analysis product using data driven visualizations to help businesses identify risk around the globe.',
        tags: [
          'D3',
          'Angular'
        ]
      },
      {
        name: 'Tesco MAID',
        url: '',
        summary: 'data dashboard to show how various data sources at Tesco could be combined to give decision makers additional insights.',
        tags: [
          'D3'
        ]
      },
      {
        name: 'Pearson TEA-Ch2',
        url: 'http://www.pearsonclinical.co.uk/Psychology/ChildCognitionNeuropsychologyandLanguage/ChildAttentionExecutiveFunction/tea-ch-2/test-of-everyday-attention-for-children-second-edition.aspx?gclid=CP3XobiT088CFRdmGwod8_EKrQ',
        summary: 'Rebuilding a clinical assessment tool for child cognition. Rewrote a web app in BackboneJS packaged using Node Webkit to be run without an internet connection.',
        tags: [
          'Backbone',
          'NW.js'
        ]
      }
    ]
  },
  {
    name: 'Moving Brands',
    position: 'Web Developer',
    url: 'http://movingbrands.com/',
    startDate: '2012-05-01',
    endDate: '2014-05-01',
    summary: '<p>Leading web development, both in an advisory and practical sense, working within a multi-disciplinary team to deliver web projects for diverse clients. Highlights included building the new front end of <a href="http://srf.ch">SRF</a> and working on an interactive music video for <a href="http://www.machinestop.com/">Duologue</a>.</p>',
    highlights: [
      {
        name: 'SRF',
        url: 'http://srf.ch/',
        summary: 'Build of the Swiss national broadcaster’s site, working with a back-end team based in Zurich, delivering front end templates for both desktop and mobile, travelling throughout the project to be on-hand for testing and integration.',
        tags: [
          'Bootstrap',
          'Jquery'
        ]
      },
      {
        name: 'Duologue interactive video',
        url: 'http://www.machinestop.com/',
        summary: 'Music video which used 3D data from a Kinect, coupled with WebGL and Backbone.js to create an interactive experience based in the browser.',
        tags: [
          'Backbone'
        ]
      }
    ]
  },
  {
    name: 'Cogapp',
    position: 'Developer',
    url: 'http://cogapp.com/',
    startDate: '2010-06-01',
    endDate: '2012-05-01',
    summary: '<p>Full stack development on a number of high profile projects including <a href="http://www.cogapp.com/our-work/dorling-kindersley-eyewitness-travel-guides">DK Eyewitness Travel</a>, <a href="http://www.cogapp.com/our-work/tate-modern-ai-weiwei">Ai Wei Wei</a> at the Tate Modern and the <a href="http://www.moma.org/explore/collection/ge/index">MoMA German Expressionism site</a>.</p>',
    highlights: [
      {
        name: 'DK Eyewitness Travel apps',
        url: 'http://www.cogapp.com/our-work/dorling-kindersley-eyewitness-travel-guides',
        summary: 'Transforming the printed versions of these travel guides into iOS apps. Building a Python based application to transform large XML files into a working iOS app.',
        tags: [
          'Python'
        ]
      },
      {
        name: 'Tate Modern Ai Wei Wei exhibition',
        url: 'http://www.cogapp.com/our-work/tate-modern-ai-weiwei',
        summary: 'Interactive kiosks in the Turbine Hall allowing visitors to answer questions and record a video response to the art on display.',
        tags: [
          'Bash',
          'Livecode'
        ]
      },
      {
        name: 'MoMA German Expressionism site',
        url: 'http://www.machinestop.com/',
        summary: 'Site to showcase MoMA\'s German Expressionism collection.',
        tags: [
          'PHP',
          'Smarty'
        ]
      }
    ]
  }
]

const skills = {
  description: 'Using HTML, CSS and Javascript to build web products; framework / library wise my go to is React.',
  values: [
    'ES6',
    'React',
    'Redux',
    'Vue',
    'Node',
    'D3',
    'Webpack',
    'SASS',
    'Git'
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
