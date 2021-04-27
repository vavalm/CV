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

    company = [
        {
            name:'Devoteam Revolve',
            desc: 'ESN spécialisé dans le Cloud AWS',
            url: 'https://revolve.team',
            logoUrl: '../../../assets/img/logos/revolve.png'
        },
        {
            name:'Capgemini',
            desc: 'Une des plus grosses entreprises de services du numérique (ESN) dans le monde',
            url: 'http://capgemini.com',
            logoUrl: '../../../assets/img/logos/capgemini.png'
        },
        {
            name:'Partenaire Pologne',
            desc: 'Cabinet de conseil en Pologne',
            url: 'http://partenairepologne.com',
            logoUrl: '../../../assets/img/logos/partenairepologne.png'
        },
        {
            name:'EReputationDefender',
            desc: 'Entreprise spécialisée en e-réputation, social média et community management',
            url: 'http://ereputationdefender.com',
            logoUrl: '../../../assets/img/logos/ereputationdefender.png'
        },
        {
            name:'Manorga',
            desc: 'Entreprise de production de rayonnages industriels',
            url: 'http://manorga.com',
            logoUrl: '../../../assets/img/logos/manorga.jpg'
        },
        {
            name:'Décathlon',
            desc: 'Entreprise de distribution d\'articles de sport',
            url: 'http://decathlon.com',
            logoUrl: '../../../assets/img/logos/decathlon.png'
        },
        {
            name:'Flint Group',
            desc: 'Entreprise de production d\'encres d\'emballages',
            url: 'http://www.flintgrp.com/',
            logoUrl: '../../../assets/img/logos/revolve.png'
        },
    ];

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
            startDate: '2010',
            endDate: '2013',
            title: 'Baccalauréat',
            school: 'Lycée Cassini de Clermont (60)',
            context: 'Baccalauréat scientifique mention "Bien" option informatique.',
            prevBulletPoints: 'Matières principales :',
            bulletPoints: [
                'Mathématiques',
                'Physique-chimie',
                'Sciences et vie de la terre (SVT)',
            ],
            conclusion: ''
        },
        {
            startDate: '2013',
            endDate: '2015',
            title: 'Préparation intégrée',
            school: 'Télécom-Lille (59650)',
            context: 'Entrée en prépa intégrée à l\'école sur concours (GEIPI POLYTECH)',
            prevBulletPoints: 'Enseignements :',
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
            startDate: '2015',
            endDate: '2018',
            title: 'Cycle ingénieur',
            school: 'IMT Lille Douai (59650) : Ecole d\'ingénieurs issue de la fusion entre Télécom-Lille et les Mines de Douai',
            context: 'Mon objectif dans le cursus : me spécialiser dans le développement informatique.',
            prevBulletPoints: 'Les spécialités choisies :',
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
            startDate: '2019',
            endDate: '2020',
            title: 'Mastère Spécialisé',
            school: 'INSA Toulouse + ENSEEIHT (31200)',
            context: 'Formation complémentaire d\'une année en Data Science en alternance avec le groupe Capgemini.' +
                'Cette formation a eu pour but de m\'apporter des compétences complémentaires en Data.',
            prevBulletPoints: 'Enseignements :',
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
        startDate: 'janv. 2021',
        endDate: 'aujourd\'hui',
        title: '[CDI] Data engineer',
        companyDesc: 'ESN spécialisé dans les services Cloud & DevOps sur AWS',
        context: 'Mise en place de plusieurs briques du MLOps dans l\'équipe client afin d\' automatiser les process' +
            ' et notamment le déploiement des modèles de Machine Learning en production sur le Cloud.',
        client: 'Airbus',
        projectName: 'Insider Protection',
        projectPurpose: 'Détection des activités malicieuses sur les comptes utilisateurs grâce à l\'IA.',
        projectProduct: 'Algorithmes de Machine Learning (Clustering + Classification) qui évalue la probabilité qu\'un ' +
            'compte utilisateur ait été volé et/ou soit utilisé à des fins maleveillantes',
        teamSize: '6',
        role: 'Cloud & Data engineer',
        method: 'Agile SAFe',
        ProductUsers: 'Equipe sécurité',
        prevBulletPoints: 'Réalisations :',
        bulletPoints: [
          'Workshop avec le client : Clarification du besoin et échange autour de propositions de solutions',
          'Réalisation de l\'architecture Cloud (AWS) afin de mettre en place le MLOps',
        ],
        technicalEnv: [
          'Langages : Python',
          'Frameworks / bibliothèques : Pandas, Numpy, Pytorch, nltk, spacy',
          'Système/Cloud : Docker (+ Compose), AWS EC2, Linux',
          'Méthodes utilisées de prétraitement de texte : tokenization, stopwords, lemmatisation',
          'Méthodes utilisées de NLP : word2vec, BERT',
        ],
        conclusion: ''
      },
        {
            startDate: 'sept 2019',
            endDate: 'oct. 2020',
            title: '[Alternance] Data Scientist/Dév Python',
            companyDesc: 'Filiale de Capgemini, une des plus grosses ESN (Entreprise de Service du Numérique) au monde',
            context: 'Formation accordée par le groupe Capgemini pour suivre le Mastère Spécialisée VALDOM (Data Science) en parallèle.' +
                'Présent en temps plein en entreprise en dehors des périodes de formation. Projet réalisé dans les locaux de Sogeti (Groupe Capgemini) à Blagnac.',
            client: 'Sogeti',
            projectName: 'AI4Staffing',
            projectPurpose: 'Aide à la décision pour le placement des consultants sur les projets selon les besoins des clients.',
            projectProduct: 'Application Web avec un moteur d\'extraction de données de CV et de recommandation de profil grâce à l\'intelligence artificielle.',
            teamSize: '15',
            role: 'Data Scientist & Dév Python',
            method: 'Agile SCRUM',
            ProductUsers: 'Commerciaux et managers de la société',
            prevBulletPoints: 'Réalisations :',
            bulletPoints: [
                'Data Science : Comparatif de techniques NLP',
                'Data Science : Mise en place d’un modèle de machine learning (NLP) afin d’extraire des compétences des champs de texte. Utilisation du modèle BERT',
                'Dév : Conception de l\'application (+bdd sqlite) back-end en UML',
                'Dév : Préparation des environnements pour les dévs et testeurs via Docker',
                'Dév : Développement des briques de base de la partie de préparation et traitement des données',
                'Dév : Module d\'anonymisation de CV (nom, prénoms, expériences)',
                'Dév : Mise en recette et en production sur des environnements AWS EC2 (Linux)'
            ],
            technicalEnv: [
                'Langages : Python',
                'Frameworks / bibliothèques : Pandas, Numpy, Pytorch, nltk, spacy',
                'Système/Cloud : Docker (+ Compose), AWS EC2, Linux',
                'Méthodes utilisées de prétraitement de texte : tokenization, stopwords, lemmatisation',
                'Méthodes utilisées de NLP : word2vec, BERT',
            ],
            conclusion: ''
        },
        {
            startDate: 'mars 2019',
            endDate: 'juil. 2019',
            title: '[CDI] Data Engineer',
            companyDesc: 'Une des plus grosses ESN (Entreprise de Service du Numérique) au monde',
            context: ' Projet à temps plein dans les locaux d\'Airbus (M93 à St Martin du Touch)',
            client: 'Airbus',
            projectName: 'Skywise PC-SPC',
            projectPurpose: 'Suivre et maitriser la production des pièces. Etre alerté des écarts de volume et de qualité afin de mettre en place rapidement des actions.',
            projectProduct: 'Dashboard avec des indicateurs statistiques et des graphiques sur la maitrise des procédés de fabrication des pièces.',
            teamSize: '7',
            role: 'Data Engineer',
            method: 'Agile SCRUM',
            ProductUsers: 'Equipes de production des usines Airbus',
            prevBulletPoints: 'Réalisations :',
            bulletPoints: [
                'Refactoring du code Python existant pour optimiser les performances et assurer la perrenité du code.',
                'Optimisation de la pipeline de transformation de données sur de gros volumes de données',
                'Mettre en place de nouveaux indicateurs statistiques',
                'Mise en place des test unitaires automatisés avec pytest'
            ],
            technicalEnv: [
                'Langages : Python',
                'Frameworks / PySpark',
                'Outils : Foundry (Palantir)',
            ],
            conclusion: ''
        },
        {
            startDate: 'sept. 2018',
            endDate: 'févr. 2019',
            title: '[CDI] Développeur Web',
            companyDesc: 'Une des plus grosses ESN (Entreprise de Service du Numérique) au monde',
            context: 'Embauche en CDI post alternance. Projet dans une équipe Agile SAFe de 27 personnes (2 équipes de réalisation, 1 équipe système, des encadrants fonctionnels, PO/PM...)',
            client: 'Enedis',
            projectName: 'PRAC',
            projectPurpose: 'Numériser et faciliter les processus de création des demandes de raccordement au réseau électrique.',
            projectProduct: 'Application web internet et intranet',
            teamSize: '27',
            role: 'Développeur Web',
            method: 'Agile SAFe',
            ProductUsers: 'Clients finaux d\'enedis (portail internet), agents Enedis (portail intranet)',
            prevBulletPoints: 'Réalisations :',
            bulletPoints: [
                'Embauche en CDI post alternance. Projet dans une équipe Agile SAFe de 27 personnes (2 équipes de réalisation, 1 équipe système, des encadrants fonctionnels, PO/PM...)',
                'Test des User Stories (fonctionnalités) et création de tests automatisés (TNR)',
                'Résolution d\'incidents en production et analyse d\'anomalie survenues en production dans le cadre de la MCO (Maintenance en Condition Opérationnelle)',
                'Participation au chantier de test : analyse et mise en place d\'actions dans le but d\'améliorer les tests des équipes de réalisation.',
                'Amélioration continue des documents de formation pour les nouveaux arrivants'
            ],
            technicalEnv: [
                'Langages : Java 1.6, HTML/CSS, JavaScript',
                'Frameworks / bibliothèques : JavaEE, Spring, Jquery',
                'BDD : Oracle SQL',
                'Midleware : webMethods',
            ],
            conclusion: ''
        },
        {
            startDate: 'sept. 2017',
            endDate: 'août 2018',
            title: '[Alternance] Développeur Web',
            companyDesc: 'Une des plus grosses ESN (Entreprise de Service du Numérique) au monde',
            context: 'Alternance (3 mois de cours et 9 mois complet en entreprise). Projet Enedis Prac : intégration une équipe Agile SAFe de 27 personnes (2 équipes de réalisation, 1 équipe système, des encadrants fonctionnels PO/PM...)',
            client: 'Enedis',
            projectName: 'PRAC',
            projectPurpose: 'Numériser et faciliter les processus de création des demandes de raccordement au réseau électrique.',
            projectProduct: 'Application web internet et intranet',
            teamSize: '27',
            role: 'Développeur Web',
            method: 'Agile SAFe',
            ProductUsers: 'Clients finaux d\'enedis (portail internet), agents Enedis (portail intranet)',
            prevBulletPoints: 'Objectifs :',
            bulletPoints: [
                'Monter en compétence sur la partie technique (principalement java et WebMethods) et fonctionnelle du projet',
                'Participation aux tâches quotidiennes et à la vie du projet d\'une équipe agile SAFe',
                'Développer des User Stories',
                'Tester des User Stories et créer des tests automatisés pour la phase de TNR',
                'Résolution d\'incidents en production et analyse d\'anomalie survenues en production dans le cadre de la MCO (Maintenance en Condition Opérationnelle)',
            ],
            technicalEnv: [
                'Langages : Java 1.6, HTML/CSS, JavaScript',
                'Frameworks / bibliothèques : JavaEE, Spring, Jquery',
                'BDD : Oracle SQL',
                'Midleware : webMethods',
            ],
            conclusion: ''
        },
        {
            startDate: 'août. 2016',
            endDate: 'Janv. 2017',
            title: '[Stage] Gestion DSI chez Partenaire Pologne',
            companyDesc: 'Cabinet de conseil spécialisée dans le développement international.',
            context: 'Développement web :',
            bulletPoints: [
                'Création d\'un site internet pour un client (HTML, CSS, PHP, JavaScript)',
                'Modification des sites WordPress de l\'entreprise',
                'Création de scripts et macro PHP, JS (JQuery), imacro pour automatiser les tâches des employés',
                'Création d\'un serveur CRM vtiger sur un serveur Debian',
            ],
            conclusion: ''
        },
        {
            startDate: 'Fév. 2016',
            endDate: 'Mai 2016',
            title: '[Stage] Assistant Marketing chez EReputationDefender',
            companyDesc: 'Startup spécialisée dans la gestion de l\'e-réputation, le Community Management et la formation en\n' +
                '            Social Media',
            context: 'Compréhension de l\'importance du marketing en entreprise :',
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
            startDate: 'Avril 2015',
            endDate: 'Juin 2015',
            title: '[Stage] Assistant réseau chez Manorga',
            companyDesc: 'Manorga est une moyenne entreprise spécialisée dans la fabrication\n' +
                '            de rayonnages industriels',
            context: 'Découverte des réseaux informatiques en entreprise à travers les missions suivantes :',
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
            startDate: 'Fév. 2014',
            endDate: 'Mars 2014',
            title: '[Stage] Vendeur chez Décathlon',
            companyDesc: 'Décathlon est une entreprise internationale de distribution d\'articles de sport',
            context: 'Découverte du monde de l\'entreprise et plus particulièrement celui des retailers à travers les missions suivantes :',
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

    interests = [
        {
            fullName: 'Sport-Nutrition-Santé :',
            shortName: 'Sport',
            beforeBulletPoints: '',
            bulletPoints: [
                'Pratique de la musculation et autres activités d\'endurance',
                'Lecture régulière d\'articles et de revues sur la nutrition',
                'Surveillant d\'une salle de sport étudiante durant de 2015 à 2017',
                'Diplômé secouriste (PSC1)'
            ],
        },
        {
            fullName: 'Informatique-Technologies-Multimédia :',
            shortName: 'Apprentissage',
            beforeBulletPoints: '',
            bulletPoints: [
                'Lecture journalière des actualités',
                'Apprentissage régulier en autonomie de logiciels, langages/frameworks de développement, outils, ...'
            ],
        }
    ];

    interestsIcon = [
        {
            className: 'map-icon-university',
            text: 'Apprentissage'
        },
        {
            className: 'map-icon-gym',
            text: 'Sport'
        },
        {
            className: 'map-icon-electronics-store',
            text: 'Technologie'
        },
    ]

    qualities = ['Polyvalent','Rigoureux','Ouvert d\'esprit',
    'Autonome','Organisé'];

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
