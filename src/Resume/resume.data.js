const basics = {
  name: 'Lee Briggs',
  label: 'Front End Developer',
  email: 'coffeegunshow@gmail.com',
  phone: '0412 250 472',
  url: 'http://leebriggs.me',
  summary: '<p>Front end developer based in Melbourne, previously at <a href="https://aesop.com/">Aesop</a> and in London at <a href="https://gov.uk">Government Digital Service</a>. I work with a broad technology stack and use the best tools for the job, whether that means the latest library or plain old JS. Past projects include work for <strong>MoMa</strong>, <strong>Tate Modern</strong> and <strong>Tesco</strong>.</p>'
}

const work = [
  {
    name: 'Aesop',
    position: 'Lead Front End Developer',
    url: 'https://aesop.com',
    startDate: '2017-12-01',
    endDate: '2018-05-01',
    summary: 'Leading the front end team, develop and maintaining features across the eccommerce platform.',
    highlights: [],
    tags: [
      'React',
      'Redux'
    ]
  },
  {
    name: 'Zone Digital',
    position: 'Front End Developer (contract)',
    url: 'https://www.zonedigital.com/',
    startDate: '2017-06-01',
    endDate: '2017-08-01',
    summary: 'Building a React based admin tool to allow the backroom staff of PRS for Music to manage the submitted performances of their members.',
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
    summary: 'Working in multi-disciplinary teams on both the front end of GOV.UK as well as internal content analysis / discovery tools.',
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
    summary: 'Working in multi-disciplinary teams on both the front end of GOV.UK as well as internal content analysis / discovery tools.',
    highlights: [
      {
        name: 'Polecat RiskLocator',
        url: 'http://www.polecat.com/products/polecat-risklocator/',
        summary: 'Risk analysis product using data driven visualisations to help businesses identify risk around the globe.',
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
    position: 'Lead Front End Developer',
    url: 'http://movingbrands.com/',
    startDate: '2012-05-01',
    endDate: '2014-05-01',
    summary: 'Leading web development, both in an advisory and practical sense, working within a multi-disciplinary team to deliver web projects for diverse clients.',
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
    summary: 'Fullstack development on a number of high profile projects.',
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

export default { basics, work }
