import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  title = 'CV - Valentin Maupin';

  tag = {
    meta_description: '<meta name="description" content="Valentin Maupin est un élève ingénieur en informatique et réseaux/télécommunications à IMT Lille Douai. Découvrez son CV." />',
    og_title: '<meta property="og:title" content="CV de Valentin Maupin - élève ingénieur à IMT Lille Douai" />',
    og_lang: '<meta property="og:locale" content="fr" />',
    og_description: '<meta property="og:udescription" content="Valentin Maupin est un élève ingénieur en informatique et réseaux/télécommunications à IMT Lille Douai. Découvrez son CV." />',
  };

  menu = {
    name: 'Valentin Maupin',
    langue: 'Français',
    lang: 'fr',
    language: 'French',
    home: 'Accueil',
    description: 'Description',
    education: 'Formation',
    profexp: 'Expériences Professionnelles',
    skills: 'Savoir-Faire',
    qualities: 'Qualités',
    hobbies: 'Hobbies',
    contact: 'Contact',
    profExp: 'Expériences',
  };

  keywords = {
    keywords: 'Mots-Clefs',
    loading: 'Chargement',
    iam: 'Je suis',
    welcome: 'Bienvenue',
    menu: 'Menu',
    it: 'Informatique',
    programming: 'Programmation',
    download: 'Télécharger',
    tel: 'Téléphone',
    age: 'Age',
    email: 'E-mail',
    address: 'Adresse',
    name: 'Nom',
    fname: 'Prénom',
    search: 'Chercher',
    subject: 'Sujet',
    message: 'Message',
    sport: 'Sport',
    linux: 'Linux',
  };

  company = {
    title: 'Entreprises citées',
    partpol: 'Cabinet de conseil en Pologne',
    erd: 'Entreprise spécialisée en e-réputation, social média et community management',
    manorga: 'Entreprise de production de rayonnages industriels',
    decathlon: 'Entreprise de distribution d\'articles de sport',
    flint: 'Entreprise de production d\'encres d\'emballages',
    capgemini: 'Une des plus grosses entreprises de services du numérique (ESN) dans le monde',
  };

  text = {
    position: 'Data Scientist & Développeur Web',
    description: 'Freelance Data Scientist (orienté ML Engineer) & Développeur Web (Java, Angular). En cours de formation Angular.',
    download: 'Une version imprimable (format PDF) de mon CV est disponible ici :',
    downloadDoc: 'https://drive.google.com/file/d/1-OSggK5hBkGvFO3IwoolCUjIEreHBVvA/view?usp=sharing',
    bio: 'Après plus de 3 ans d\'expérience autour développement Web et du Big Data sur des projets d\'envergure, je propose désormais mes services en freelance.<br>' +
      '<br>' +
      'Muni d\'un diplôme d\'ingénieur en informatique ainsi que d\'un Mastère Spécialisé en Data Science, je souhaite vous accompagner sur votre réussite dans les missions suivantes :<br>' +
      '<br>' +
      '● Data<br>' +
      '- Nettoyage/Préparation de données<br>' +
      '- Analyse de données<br>' +
      '- Mise en place d\'un modèle de Machine Learning<br>' +
      '<br>' +
      'Technologies de prédilection : Python, Tensorflow/Pytorch, Spark<br>' +
      '<br>' +
      '● Développement <br>' +
      '- Développement Back-End (Java)<br>' +
      '- Développement Front-End (Angular, HTML/CSS, JavaScript/TypeScript)<br>' +
      '- Développement de scripts serveurs (Python)<br>' +
      '<br>' +
      'Je suis localisé à Lyon mais j\'ai la possibilité de me déplacer ponctuellement en dehors.<br>' +
      'Particulièrement soucieux de la qualité du code et de la pérennisation de ma production, je priorise les clients qui vont dans ce sens. <br>' +
      '<br>' +
      'Au plaisir de travailler avec vous, n\'hésitez pas à me contacter pour discuter de votre projet.',
  };


  education = [
    {
      dates: '2010-2013',
      title: 'Baccalauréat',
      school: 'Lycée Cassini de Clermont (60)',
      intro: 'Baccalauréat scientifique mention "Bien" option informatique. <br>Matières principales :',
      bulletPoints: [
        'Mathématiques',
        'Physique-chimie',
        'Sciences et vie de la terre (SVT)',
      ],
      conclusion: ''
    },
    {
      dates: '2013-2015',
      title: 'Préparation intégrée',
      school: 'Télécom-Lille (59650)',
      intro: 'Enseignements :',
      bulletPoints: [
        '<b>Travail en équipe</b> : nombreux projets hebdomadaires et travaux (pratiques et théoriques) en groupe de projet.',
        'Apprendre à communiquer et <b>faire des présentations</b>',
        'Apprendre à faire des <b>comptes rendus</b> de projet ainsi que des synthèses d\'études',
        'Mathématiques, probabilités et statistiques',
        'Electronique, physique des matériaux, Electromagnétisme',
        'Programmation (C) et réseaux informatiques',
        'Langues vivantes (Anglais et Allemand)',
        'Structures d\'entreprises et comptabilité'
      ],
      conclusion: '+ Autres enseignements obligatoires (Anglais, Réseau, Signal, Electronique, Marketing, Communication, Comptabilité, Finances...'
    },
    {
      dates: '2015-2018',
      title: 'Cycle ingénieur',
      school: 'IMT Lille Douai (59650) : Ecole d\'ingénieurs issue de la fusion entre Télécom-Lille et les Mines de Douai',
      intro: 'Les spécialités choisies :',
      bulletPoints: [
        'Ingénierie du Logiciel (en Java)',
        'Conception d’Applications pour le Système d’Information',
        'Ingénierie des Architectures Distribuées (en Java)',
        'BIG Multimédia DATA (en Java et Python)',
        'Management des Activités de Conseil et de Service'
      ],
      conclusion: '+ Autres enseignements obligatoires (Anglais, Réseau, Signal, Electronique, Marketing, Communication, Comptabilité, Finances...'
    }
  ];

  skills = [
    ['Développement Java/JEE', '70%', '★★★☆☆'],
    ['Python', '60%', '★★★☆☆'],
    ['Linux (Debian, Ubuntu)', '80%', '★★★★☆'],
    ['Data Science/Machine Learning', '65%', '★★★☆☆'],
    ['Angular', '50%', '★★☆☆☆'],
    ['Analyse et compréhension', '75%', '★★★★☆']
  ];

  interests = {
    title: 'Mes centres d\'interêt',
    IT: '				',
    health: '							',
    sport: 'Sport',
    learning: 'Apprentissage',
    technologies: 'Technologies',
  };

  qualities = {
    adaptability: 'Polyvalent',
    rigor: 'Rigoureux',
    openminded: 'Ouvert d\'esprit',
    autonomous: 'Autonome',
    organisation: 'Organisé',
  };

  contact = {
    title: 'N\'hésitez pas à me contacter',
    name: 'Maupin',
    position: 'El&#232;ve ingénieur en réseaux et télécommunications',
    address: 'Rue de Saint-Cyr, 69009 Lyon',
    tel: '06 62 95 68 44',
    email: 'valentin@maupin.eu',
    copy: '© 2016 - Tous droits réservés',
    mentions: 'Mentions légales',
    mentionsLink: 'mentionslegales.html',
  };

  constructor() {
  }

  getContact(): {} {
    return this.contact;
  }

  getSkillsCounter(): any[] {
    const size = Math.ceil(this.skills.length / 2);
    return new Array(size);
  }
}
