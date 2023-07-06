export default {
  //navigation
  work: "Projekte",
  about: "Profil",
  // index C:\Daten
  indexPath: "C:\\Start\\",
  welcomeMessage: "willkommen.txt",
  colors: "Farben.exe",
  welcomeTitle: "Hallo!",
  welcomeText:
    "Dieses interaktive Portfolio wurde mit Vue.js 3, Quasar 2 und Vite entwickelt und stellt eine Sammlung einiger meiner Arbeiten dar. Viel Spaß beim Umsehen. Der Quellcode für dieses Portfolio ist auf ",
  // about
  aboutTab: "Über mich",
  contactTab: "Kontakt",
  status: "verfügbar",
  aboutPath: "C:\\Profil\\LiesMich.txt",
  jobPosition: "Web / App Entwicklerin",
  location: "Hamburg, DE",
  readMePart1:
    "Hi! Ich bin Toni Dreger, eine Entwicklerin aus Hamburg. Mein Ziel ist es, Webseiten und Anwendungen zu erschaffen, die Ästhetik und Funktionalität vereinen. Mich begeistert die Möglichkeit, Werkzeuge zu implementieren, die den Alltag vereinfachen. Ich habe Spaß daran, Probleme zu lösen und neue Technologien kennenzulernen, um meine Fähigkeiten kontinuierlich zu verbessern und mich als Entwicklerin weiterzuentwickeln. Neben dem Programmieren interessiere ich mich für Musik, Tanzen, Zeichnen und Literatur (besonders gerne mag ich Sci-Fi). Allgemein bin ich eine kreative und zugewandte Person.",
  readMePart2:
    "Teamarbeit ist mir wichtig und ich strebe danach, ein positives und inklusives Arbeitsumfeld zu schaffen, in dem Wissen und Ideen geteilt werden. Nach Abschluss meines Studiums Media Systems an der HAW Hamburg mit dem Bachelor of Science bin ich momentan auf der Suche nach spannenden Möglichkeiten, meine Fähigkeiten in interessante Projekte einzubringen.",
  readMePart3: "Wenn du gerne mit mir zusammenarbeiten möchtest,",
  readMePart4:
    ". Ich freue mich besonders über Jobangebote rund um Vue.js, aber bin auch allgemein an Projekten der Software- oder Appentwicklung interessiert.",
  // work
  projectPath: "C:\\Projekte\\{msg}",
  projectData: {
    date: "Datum",
    languages: "Sprachen",
    teamSize: "Team",
    role: "Rolle",
  },
  toEGO: {
    subtitle: "Tagebuch-App für Introspektion",
    role: ["Full-stack Entwicklerin"],
    description:
      "ToEGO ist eine Tagebuch-App, die ich im Rahmen meiner Bachelorarbeit mit Vue.js und Quasar entwickelt habe. Sie dient als Werkzeug für die Selbstreflexion und ermöglicht es Benutzern, Ereignisse in ihrem Leben und ihre Erfahrungen im Laufe des Tages festzuhalten.\n\nBenutzer können Notizen erstellen, um ihre Gedanken, Emotionen und Erlebnisse zu verfolgen. Diese Notizen können vor der Erstellung eines Tagebucheintrags überprüft und reflektiert werden können.\n\nDie App bietet anpassbare Vorlagen für Notizen und Tagebucheinträge, die es Benutzern ermöglichen, Texte einfach zu formatieren und für zukünftige Verwendung zu speichern. Es besteht auch die Möglichkeit, Standardvorlagen festzulegen, die automatisch verwendet werden, wenn ein neuer Eintrag oder eine neue Notiz erstellt wird.\n\nToEGO verfügt über eine anpassbare Benutzeroberfläche. Benutzer können die Benutzeroberfläche nach ihren Vorlieben gestalten und Änderungen in Form von Themes speichern. Die Funktion ist inspiriert von Individualisierungsmöglichkeiten nostalgischer Plattformen wie MySpace und anderen Blog-Sites.",
    features: [
      "hohe Individualisierbarkeit",
      "Stimmungstracker",
      "wiederverwendbare Vorlagen",
    ],
  },
  roomMe: {
    subtitle: "Verwaltungstool für Wohngemeinschaften",
    role: ["Anwendungsentwicklung", "Qualitätssicherung"],
    description:
      "RoomMe ist ein Management-Tool, das speziell für Wohngemeinschaften entwickelt wurde. Es erleichtert die Aufgabenverteilung, die Ausgabenverfolgung- und verteilung, sowie die Kommunikation.\n\nMit RoomMe können Benutzer problemlos anpassbare Putzpläne erstellen, Aufgaben zuweisen oder untereinander rotieren lassen. Sie können auch die Häufigkeit für jede Aufgabe festlegen, beispielsweise wöchentlich, alle zwei Wochen oder monatlich. Die App bietet einen WG-Familienbaum, der für jedes Zimmer zeigt, wer bis zu welchem Zeitpunkt dort gewohnt hat.\n\nDie Chat-Funktion erleichtert die Kommunikation zwischen Mitbewohnern, während die Ausgabenverfolgung den Benutzern ermöglicht, Kosten genau zu überwachen und aufzuteilen. Die App bietet eine gemeinsame Einkaufsliste, um eine transparente Kostenverteilung unter allen Beteiligten zu gewährleisten.",
    features: [
      "Familienbaum für Räume",
      "Rotation von Aufgaben",
      "Einkauf und Ausgabenübersicht",
      "Putzpläne",
    ],
  },
  hueLight: {
    subtitle: "Mit dem Raspberry Pi",
    role: ["Python-Entwicklerin"],
    description:
      "In diesem Projekt wurde eine App entwickelt, die einen Philips Hue Lichtstreifen auf der Grundlage von Toneingaben steuert. Python und Audioverarbeitungsbibliotheken ermöglichten der App die Interaktion mit dem Lichtstreifen über die deCONZ-API und Postman-Anfragen.\n\nZu den Herausforderungen gehörten die technischen Beschränkungen des Lichtstreifens, die durch die Reduzierung der Befehlsrate und die Anpassung der Eingabeempfindlichkeit überwunden wurden. Mit der App wurde ein visuell ansprechendes Display geschaffen, das auf Toneingaben reagiert und kreative Lichteffekte bietet.\n\nZu den Funktionen gehörten Tonhöhenerkennung (Aubio), Lautstärkeberechnung (Audioop) und Mikrofoneingabe (PyAudio). Das Projekt hat sein Ziel erreicht.",
    features: [
      "pitch and volume visualization",
      "VNC-viewer for easier management",
    ],
  },
  kreideWelt: {
    subtitle: "Ein interaktives Augmented-Reality-Spiel",
    role: ["Raycast Implementierung", "Unity Entwicklung"],
    description:
      'Im Rahmen der Ausstellung "The Digital Plays With The Analogue" während des jährlichen HAW Hamburg Rundgangs entwickelt, zielt KreideWelt darauf ab, die Kluft zwischen der digitalen und realen Welt durch interaktive Erfahrungen zu überbrücken.\n\nSpieler interagieren direkt mit einer virtuellen Figur und ihrer Umgebung, indem Raycasts genutzt werden, um in der realen Welt zu zeichnen. Durch den Einsatz eines digitalen Stiftes navigieren die Spieler durch verschiedene Level und fördern dabei ihre Kreativität und Problemlösungsfähigkeiten.\n\nKreideWelt präsentiert das Potenzial von AR- und VR-Technologie und zeigt wie Spiele wie dieses Ausstellungen bereichern und den Besuchern ein besonderes Maß an Interaktivität bieten können.',
    features: [
      "Echtzeit-Raycast-Implementierung",
      "Unity und Vuforia Integration",
    ],
  },
  lab1999: {
    subtitle: "Ein immersives Point-and-Click-Abenteuer",
    role: ["Projektmanagerin", "Leitende Programmiererin", "Spiel-Designerin"],
    description:
      "In Lab. 1999 taucht die spielende Person in eine fesselnde Welt ein und erkundet das enigmatische Universum von Louis De Poitiers, einem Wissenschaftler, der von Kopfschmerzen und fragmentierten Erinnerungen geplagt wird. Gefangen in einem mysteriösen Laboratorium können die Fäden von Louis' Vergangenheit durch den Spieler entwirrt werden, um so den verstörenden Wahrheiten begegnen zu können, die Louis glaubte vergessen zu haben.\n\nLab. 1999 verfügt über ein besonderes duales Inventarsystem, das physische und mentale Objekte kombiniert und Spielern ermöglicht, Rätsel auf vielfältige Weise mit einer Vielzahl von Gegenständen zu lösen.\n\nObwohl dieses Projekt bereits älter ist, möchte ich es hier präsentieren, um meine erste Erfahrung in der Spieleentwicklung zu zeigen.",
    features: [
      "Mehrere Lösungswege",
      "Atmosphärische Erkundung",
      "Einzigartige Interaktionen mit Gegenständen",
    ],
  },
};
