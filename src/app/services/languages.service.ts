import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  title = 'CV - Valentin Maupin';

  tag = {
    meta_description: '<meta name="description" content="Valentin Maupin est un ingénieur en informatique spécialisé en Data et en développement. Découvrez son CV." />',
    og_title: '<meta property="og:title" content="CV de Valentin Maupin - ingénieur data & dév" />',
    og_lang: '<meta property="og:locale" content="fr" />',
    og_description: '<meta property="og:udescription" content="Valentin Maupin est un ingénieur en informatique spécialisé en Data et en développement. Découvrez son CV." />',
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
    description: 'Ingénieur en Data et en développement Web',
    download: 'Une version imprimable (format PDF) de mon CV est disponible ici :',
    downloadDoc: 'https://drive.google.com/file/d/1-OSggK5hBkGvFO3IwoolCUjIEreHBVvA/view?usp=sharing',
    bio: 'Après plus de 3 ans d\'expérience autour développement Web et de la Data sur des projets d\'envergure, ' +
        'je suis désormais en poste chez Devoteam Revolve afin d\'acquérir des compétences cloud.<br>' +
      '<br>' +
      'Muni d\'un diplôme d\'ingénieur en informatique ainsi que d\'un Mastère Spécialisé en Data Science, ' +
        'je suis capable de travailler sur les tâches suivantes :<br>' +
      '<br>' +
      '<ul><b>Data :</b></ul>' +
      '<li>Nettoyage/Préparation de données</li>' +
      '<li>Analyse de données</li>' +
      '<li>Mise en place d\'un modèle de Machine Learning</li><br>' +
      'Technologies de prédilection : Python, Tensorflow/Pytorch, Spark<br>' +
      '<br>' +
      '<ul><b>Développement :</b></ul>' +
      '<li>Développement Back-End (Java)</li>' +
      '<li>Développement Front-End (Angular, HTML/CSS, JavaScript/TypeScript)</li>' +
      '<li>Développement de scripts serveurs (Python)</li><br>' +
      'Actuellement localisé à Lyon, je vais passer prochainement sur la région Toulousaine.<br>' +
      'Particulièrement soucieux de la qualité du code et de la pérennisation de ma production, je priorise les projets qui vont dans ce sens. <br>' +
      '<br>' +
      'Au plaisir de travailler avec vous, n\'hésitez pas à me contacter.',
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
    },

    {
      dates: '2019-2020',
      title: 'Mastère Spécialisé',
      school: 'INSA Toulouse + ENSEEIHT (31200)',
      intro: 'Formation complémentaire d\'une année en Data Science en alternance avec le groupe Capgemini.' +
          'Cette formation a eu pour but de m\'apporter des compétences complémentaires en Data.',
      bulletPoints: [
        'Traitement de données : nettoyage de données, imputation de données manquantes, préparation et analyse de données',
        'Machine Learning : apprentissage statistique, apprentissage automatique, méthodes ensemblistes, Deep Learning (MLP, CNN, autoencodeurs, GAN, ...)',
        'Infrastructures système et réseau virtualisés pour le Big Data : virtualisation système & réseaux (OpenStack, hyperviseur type 1&2, Docker), Cloud (AWS/GCP), …',
        'Stockage et traitement distribué : NoSQL (types de bdd, Neo4j, MongoDb), Hadoop, Spark + Spark Streaming, architecture micro-services (API + Docker)…'
      ],
      conclusion: '+ Autres enseignements : algorithmes d\'optimisation'
    }
  ];

  experiences = [
    {
      dates: '2016-2017 : Août-Janvier',
      title: 'Stage informatique chez Partenaire Pologne',
      companyDesc: 'Cabinet de conseil spécialisée dans le développement international.',
      intro: 'Développement web :',
      bulletPoints: [
        'Création d\'un site internet pour un client (HTML, CSS, PHP, JavaScript)',
        'Modification des sites WordPress de l\'entreprise',
        'Création de scripts et macro PHP, JS (JQuery), imacro pour automatiser les tâches des employés',
          'Création d\'un serveur CRM vtiger sur un serveur Debian',
      ],
      conclusion: ''
    },
    {
      dates: '2016 : Février-Mai',
      title: 'Stage Marketing chez EReputationDefender',
      companyDesc: 'Startup spécialisée dans la gestion de l\'e-réputation, le Community Management et la formation en\n' +
          '            Social Media',
      intro: 'Compréhension de l\'importance du marketing en entreprise :',
      bulletPoints: [
        'Analyse marketing de la structure d\'accueil',
        'Analyse de la communication interne et externe',
        'Création et animation des pages professionnelles sur les réseaux sociaux (Facebook, linked-in,\n' +
        '              Twitter, ...)',
          'Réalisation d\'un flyer et du site internet'
      ],
      conclusion: ''
    },

    {
      dates: '2015 : Avril-Juin',
      title: 'Stage réseaux informatiques chez Manorga',
      companyDesc: 'Manorga est une moyenne entreprise spécialisée dans la fabrication\n' +
          '            de rayonnages industriels',
      intro: 'Découverte des réseaux informatiques en entreprise à travers les missions suivantes :',
      bulletPoints: [
        'Compréhension & analyse du réseaux informatique',
        'Création d\'un serveur Redmine (Appli de gestion de projets) sous Linux (Debian 7)',
        'Migration de domaines des postes clients pour une migration Active Directory',
        'Migration des postes de Postfix & Thunderbird vers Microsoft & Outlook',
        'Analyse du fonctionnement du VPN MPLS'
      ],
      conclusion: ''
    },

    // {
    //   dates: 'Eté 2014 et 2015',
    //   title: 'Travail saisonnier chez Flint Group',
    //   companyDesc: 'Une des plus grandes entreprises de production d\'encres d\'emballages au monde',
    //   intro: 'Chargement de machines de production dans un environnement chimique classé SEVESO',
    //   bulletPoints: [],
    //   conclusion: ''
    // },

    {
      dates: '2014 : Février-Mars',
      title: 'Stage découverte du monde professionnel chez Décathlon',
      companyDesc: 'Décathlon est une entreprise internationale de distribution d\'articles de sport',
      intro: 'Découverte du monde de lèntreprise et plus particulièrement celui des retailers à travers les missions suivantes :',
      bulletPoints: [
        'Conseil et renseignements aux clients',
        'Réalisation de l\'inventaire des stocks',
        'Prise en charge des commandes clients',
        'Hôte de caisse et hôte d\'accueil du magasin'
      ],
      conclusion: ''
    },

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
    position: 'Ingénieur en Data et en développement Web',
    address: 'Boulevard du 11 novembre 1918, 69100 Villeurbanne',
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
