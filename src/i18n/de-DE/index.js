export default {
  // index
  indexPath: "../Start/willkommen.txt",
  welcomeTitle: "Hallo!",
  welcomeText:
    "Dieses Portfolio ist eine Sammlung einiger meiner Arbeiten und wurde mit Vue.js 3, Quasar 2 und Vite realisiert. Bei Fragen, Anregungen oder Interesse an einer Zusammenarbeit stehe ich dir gerne zur Verfügung. Ich freue mich darauf, von dir zu hören!",
  // about
  aboutTab: "Über mich",
  contactTab: "Kontakt",
  status: "verfügbar",
  aboutPath: "../Toni/LiesMich.txt",
  jobPosition: "Web / App Entwicklerin",
  location: "Hamburg, DE",
  readMePart1:
    "Hi! Ich bin Toni Dreger, eine Entwicklerin aus Hamburg. Mein Ziel ist es, Webseiten und Anwendungen zu erschaffen, die Ästhetik und Funktionalität vereinen. Mich begeistert die Möglichkeit, Werkzeuge zu implementieren, die den Alltag vereinfachen. Ich habe Spaß daran, Probleme zu lösen und neue Technologien kennenzulernen, um meine Fähigkeiten kontinuierlich zu verbessern und mich als Entwicklerin weiterzuentwickeln. Neben dem Programmieren interessiere ich mich für Musik, Tanzen, Zeichnen und Literatur (besonders gerne mag ich Sci-Fi). Allgemein bin ich eine kreative und zugewandte Person.",
  readMePart2:
    "Teamarbeit ist mir wichtig und ich strebe danach, ein positives und inklusives Arbeitsumfeld zu schaffen, in dem Wissen und Ideen geteilt werden. Nach Abschluss meines Studiums Media Systems an der HAW Hamburg mit dem Bachelor of Science bin ich momentan auf der Suche nach spannenden Möglichkeiten, meine Fähigkeiten in interessante Projekte einzubringen.",
  readMePart3:
    "Wenn du gerne mit mir zusammenarbeiten möchtest, melde dich. Ich freue mich besonders über Jobangebote rund um Vue.js, aber bin auch allgemein an Projekten der Software- oder Appentwicklung interessiert.",
  // work
  projectPath: "../Projekte{msg}",
  projectData: {
    date: "Datum",
    languages: "Sprachen",
  },
  toEGO: {
    subtitle: "Tagebuch-App für Introspektion",
    description:
      "ToEGO ist eine Tagebuch-App zur Selbstreflexion, die ich im Rahmen meiner Bachelorarbeit mit Vue.js und Quasar entwickelt habe. Mit ToEGO können Benutzer Notizen erstellen, um ihre Gedanken, Emotionen und Erfahrungen im Laufe des Tages zu verfolgen. Diese Notizen können vor der Erstellung eines Tagebucheintrags durchgesehen und reflektiert werden. Mit anpassbaren Vorlagen für Notizen und Tagebucheinträge können Benutzer Texte einfach formatieren und für die zukünftige Verwendung speichern. Sie können auch Standardvorlagen festlegen, die automatisch verwendet werden, wenn ein neuer Eintrag oder eine neue Notiz erstellt wird. Die App bietet eine anpassbare Benutzeroberfläche, die es Benutzern ermöglicht diese nach Belieben zu gestalten und Änderungen in Form von Themes abzuspeichern, welche an Anpassungsoptionen von Plattformen wie MySpace und früheren Blog-Sites erinnern und nostalgische Gefühle wecken.",
    features: [
      "hohe Individualisierbarkeit",
      "Stimmungstracker",
      "wiederverwendbare Vorlagen",
    ],
  },
  roomMe: {
    subtitle: "Verwaltungstool für Wohngemeinschaften",
    description:
      "RoomMe ist ein Verwaltungstool, das speziell für Personen entwickelt wurde, die in Wohngemeinschaften leben. Die Anwendung ermöglicht es Benutzern, Putzpläne zu erstellen, Aufgaben unter Mitbewohnern aufzuteilen und anpassbare Regeln festzulegen. Zum Beispiel können Mitbewohner bestimmte Aufgaben einer Person zuweisen oder sie untereinander rotieren. Sie können auch die Häufigkeit für jede Aufgabe festlegen, beispielsweise wöchentlich, alle zwei Wochen oder monatlich.\nDie Chat-Funktion erleichtert die Kommunikation zwischen Mitbewohnern, während die Ausgabenverfolgungsfunktion es Benutzern ermöglicht, Kosten zu überwachen und entsprechend zu verteilen. Mitbewohner können Artikel zu einer gemeinsamen Einkaufsliste hinzufügen und Käufe in der App protokollieren. Sie können angeben, mit welchen Mitbewohnern der Artikel geteilt wird, und die App bietet eine klare Aufschlüsselung darüber, wer wem was schuldet. RoomMe verfügt über einen WG-Familienbaum, der den Benutzern zeigt, wer in jedem Raum zu welchem Zeitpunkt gewohnt hat.",
    features: [
      "Familienbaum für Räume",
      "Rotation von Aufgaben",
      "Einkauf und Ausgabenübersicht",
      "Putzpläne",
    ],
  },
  hueLight: {
    subtitle: "Mit dem Raspberry Pi",
    description:
      "In diesem Projekt wurde eine App entwickelt, die einen Philips Hue Lichtstreifen auf der Grundlage von Toneingaben steuert. Python und Audioverarbeitungsbibliotheken ermöglichten der App die Interaktion mit dem Lichtstreifen über die deCONZ-API und Postman-Anfragen. Zu den Herausforderungen gehörten die technischen Beschränkungen des Lichtstreifens, die durch die Reduzierung der Befehlsrate und die Anpassung der Eingabeempfindlichkeit überwunden wurden. Mit der App wurde ein visuell ansprechendes Display geschaffen, das auf Toneingaben reagiert und kreative Lichteffekte bietet. Zu den Funktionen gehörten Tonhöhenerkennung (Aubio), Lautstärkeberechnung (Audioop) und Mikrofoneingabe (PyAudio). Das Projekt hat sein Ziel erreicht.",
    features: [
      "pitch and volume visualization",
      "VNC-viewer for easier management",
    ],
  },
};
