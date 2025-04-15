// Configuration des matières pour toutes les sections
const matieresParSection = {
    '1-ma': [
        "Mathématiques Appliquées",
        "Algorithmique",
        "Bases de données",
        "Programmation C",
        "Systèmes d'information",
        "Anglais technique"
    ],
    '1-isi': [
        "Algorithmique et programmation",
        "Architecture des ordinateurs",
        "Mathématiques discrètes",
        "Systèmes d'exploitation",
        "Bases de données",
        "Anglais technique"
    ],
    '2-isi': [
        "Système sur puce (SoC) & Technologies d'interfaçage",
        "Conception des circuits logiques & Synthèse VHDL",
        "Développement mobile",
        "Développement mobile TP",
        "Tests de logiciels (Certification ISTQB)",
        "Anglais",
        "Programmation web TP",
        "Programmation web",
        "Projet tutoré",
        "Tests de logiciels",
        "CLE",
        "Sécurité informatique TP",
        "Projet fédéré"
    ],
    '3-isi': [
        "Intelligence Artificielle",
        "Big Data",
        "Cloud Computing",
        "Réseaux avancés",
        "Sécurité informatique",
        "Projet de fin d'études"
    ],
    '1-si': [
        "Introduction aux SI",
        "Bases de données",
        "Réseaux informatiques",
        "Programmation Java",
        "Gestion de projet",
        "Anglais technique"
    ],
    '2-si': [
        "Administration des SI",
        "Data Mining",
        "ERP",
        "Développement web avancé",
        "Sécurité des SI",
        "Projet intégré"
    ],
    '3-si': [
        "Business Intelligence",
        "Gouvernance des SI",
        "Cloud Computing",
        "Management des SI",
        "Projet de fin d'études"
    ],
    '1-master-ma': [
        "Mathématiques avancées",
        "Modélisation statistique",
        "Analyse numérique",
        "Recherche opérationnelle",
        "Séminaire de recherche"
    ],
    '2-master-ma': [
        "Théorie des graphes",
        "Optimisation combinatoire",
        "Data Science",
        "Mémoire de master"
    ],
    '1-master-assir': [
        "Sécurité des réseaux",
        "Cryptographie",
        "Forensique numérique",
        "Droit informatique",
        "Séminaire de recherche"
    ],
    '2-master-assir': [
        "Sécurité cloud",
        "Pentesting avancé",
        "Gestion des risques",
        "Mémoire de master"
    ],
    '1-mr-ds': [
        "Fondements du Data Science",
        "Machine Learning",
        "Big Data Technologies",
        "Visualisation de données",
        "Séminaire de recherche"
    ],
    '2-mr-ds': [
        "Deep Learning",
        "Traitement du langage naturel",
        "Projet Data Science",
        "Mémoire de recherche"
    ]
};

// Liste complète des étudiants pour chaque section (exemple avec 2ISI)
const etudiantsParSection = {
    '1-MA': [
        {nom: 'SAIDI', prenom: 'SALAH'},
        {nom: 'BARHOUMI', prenom: 'CHAIMA'},
        {nom: 'SAIDI', prenom: 'MOUA'},
        // ...
    ],
    '1-isi': [
        {nom: 'GAMMOUDI', prenom: 'MOHAMED'},
        {nom: 'BARHOUMI', prenom: 'MOUNIR'},
    ],
    '2-isi': [
        {nom: 'TLILI', prenom: 'HENI'},
        {nom: 'JMAL', prenom: 'ANOUAR'},
        {nom: 'HAMMAMI', prenom: 'ISLEM'},
        {nom: 'JABNOUNI', prenom: 'BILEL'},
        {nom: 'BEN AHMED', prenom: 'TAHA'},
        {nom: 'AOUADI', prenom: 'KHAOULA'},
        {nom: 'HEMLI', prenom: 'AYOUB'},
        {nom: 'DHAHRI', prenom: 'SAIEFEDDINE'},
        {nom: 'AMRI', prenom: 'BILEL'},
        {nom: 'GHOZZI', prenom: 'JIHED'},
        {nom: 'KHLIFI', prenom: 'RIHAB'},
        {nom: 'KHELIFI', prenom: 'MOHAMED'},
        {nom: 'BALGHOUTHI', prenom: 'KHOULOUD'},
        {nom: 'CHWAYA', prenom: 'ABDELAZIZ'},
        {nom: 'GAIEH', prenom: 'NARJES'},
        {nom: 'OUTAY', prenom: 'GHOFRANE'},
        {nom: 'DERBALI', prenom: 'AYOUB'},
        {nom: 'BACCAR', prenom: 'ICHRAK'},
        {nom: 'TLILI', prenom: 'MAHDI'},
        {nom: 'ALOUI', prenom: 'MOKHTAR'},
        {nom: 'ZENATI', prenom: 'MAYEZ'},
        {nom: 'TOUIL', prenom: 'NESRINE'},
        {nom: 'BEN HALIMA', prenom: 'MARAM'},
        {nom: 'BEN RHOUMA', prenom: 'TALEL'},
        {nom: 'BEN ACHOUR', prenom: 'ZAYNEB'},
        {nom: 'BEN ALI', prenom: 'MANAR'},
        {nom: 'DRIDI', prenom: 'MOHAMED'},
        {nom: 'BEN SLIMENE', prenom: 'SAHAR'},
        {nom: 'JENNENE', prenom: 'ISKANDER'},
        {nom: 'LAAMIRI', prenom: 'DOUA'},
        {nom: 'LAAMIMI', prenom: 'LINDA'},
        {nom: 'BEN IBRAHIM', prenom: 'MED AIIZ'},
        {nom: 'SLOUMA', prenom: 'HIBA'},
        {nom: 'SLEIMI', prenom: 'ROUDAYNA'},
        {nom: 'BEN HAMIDA', prenom: 'SARAH'},
        {nom: 'BEN JEMAA', prenom: 'RAHMA'},
        {nom: 'TARHOUNI', prenom: 'NOURHENE'},
        {nom: 'BOUSSEMA', prenom: 'SALSABIL'},
        {nom: 'HAMMAMI', prenom: 'YASMINE'},
        {nom: 'KSOURI', prenom: 'MOHAMED AZIZ'},
        {nom: 'AISSA', prenom: 'HIBATALLAH'},
        {nom: 'BEN MNA', prenom: 'MARAM'},
        {nom: 'REBAI', prenom: 'AYA'},
        {nom: 'NAGATTI', prenom: 'NASSIM'},
        {nom: 'RAWEN', prenom: 'IYED'},
        {nom: 'BOUDHIR', prenom: 'AMAL'},
        {nom: 'MEDDEB', prenom: 'HOUSSEM'},
        {nom: 'KHMIRI', prenom: 'SOFIAN'},
        // ... (tous les autres étudiants de 2ISI)
    ],
    // Pour les autres sections, vous devrez ajouter les listes d'étudiants
    '3-isi': [
        {nom: 'SALHI', prenom: 'KARIM'},
        {nom: 'BOUCHAMAOUI', prenom: 'DALEL'},
        // ...
    ],
    '1-si': [
        {nom: 'BOUGHANMI', prenom: 'OUSSEMA'},
        {nom: 'RAJHI', prenom: 'SAFWEN'},
        // ...
    ],
    '2-si': [
        {nom: 'DHAHBI', prenom: 'MOHAMED'},
        {nom: 'AWECHRI', prenom: 'KOSSAY'},
        // ...
    ],
    '3-si': [
        {nom: 'DERBALI', prenom: 'KHADIJA'},
        {nom: 'OMRI', prenom: 'FAOUZI'},
        // ...
    ],
    '1-Mastère-MA': [
        {nom: 'BEN ALI', prenom: 'KARIM'},
        {nom: 'MATRI', prenom: 'JABER'},
        // ...
    ],
    '2-Mastère-MA': [
        {nom: 'BEN ALI', prenom: 'HAYET'},
        {nom: 'BEN ROMADHAN', prenom: 'SAMIR'},
        // ...
    ],
    '1-Mastère-ASSIR':[
        {nom: 'BOUABID', prenom: 'YASSMINE'},
        {nom: 'LAHDHIRI', prenom: 'KARIM'}
    ],
    '2-Mastère-ASSIR':[
        {nom: 'BOUABID', prenom: 'BASSEM'},
        {nom: 'JABRI', prenom: 'ACHREF'}
    ],
    '1-MR-DS':[
        {nom: 'BRAHMI', prenom: 'ZOHOUR'},
        {nom: 'HENI', prenom: 'MOHAMED'}
    ],
    '2-MR-DS':[
        {nom: 'MSAKNI', prenom: 'SALWA'},
        {nom: 'BARHOUMI', prenom: 'NADA'}
    ],
    // Ajoutez les autres sections de la même manière
};

// Fonction pour déterminer si un étudiant est éliminé (plus de 5 absences)
function estElimine(absences) {
    return absences > 3;
}

// Modifier la fonction genererAbsences pour inclure le statut d'élimination
function genererAbsences() {
    const absencesCount = Math.floor(Math.random() * 8); // 0-7 absences
    return {
        absences: absencesCount,
        derniere: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        elimine: estElimine(absencesCount)
    };
}

// Structure complète des données
const matieresEtudiants = {};

// Remplir les données pour toutes les sections
Object.keys(matieresParSection).forEach(sectionId => {
    matieresEtudiants[sectionId] = {};
    
    matieresParSection[sectionId].forEach(matiere => {
        const etudiantsSection = etudiantsParSection[sectionId] || [];
        matieresEtudiants[sectionId][matiere] = etudiantsSection.map(etudiant => {
            const absences = genererAbsences();
            return {
                nom: etudiant.nom,
                prenom: etudiant.prenom,
                absences: absences.absences,
                derniere: absences.derniere,
                elimine: absences.elimine
            };
        });
    });
});

// Modifier la fonction afficherEtudiants pour afficher le statut d'élimination
function afficherEtudiants(sectionId, matiere) {
    const etudiants = matieresEtudiants[sectionId][matiere] || [];
    studentsTable.innerHTML = '';
    
    if (etudiants.length === 0) {
        document.getElementById('no-data-message').style.display = 'block';
        document.getElementById('students-table').style.display = 'none';
    } else {
        document.getElementById('no-data-message').style.display = 'none';
        document.getElementById('students-table').style.display = 'table';
        
        etudiants.forEach(etudiant => {
            const row = document.createElement('tr');
            if (etudiant.elimine) {
                row.classList.add('elimine');
            }
            row.innerHTML = `
                <td>${etudiant.nom}</td>
                <td>${etudiant.prenom}</td>
                <td class="absence-count">${etudiant.absences}</td>
                <td class="date-recorded">${etudiant.derniere}</td>
                <td class="status">${etudiant.elimine ? 'Éliminé' : 'Non éliminé'}</td>
            `;
            studentsTable.appendChild(row);
        });
    }
}