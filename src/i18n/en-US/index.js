export default {
  //navigation
  work: "Work",
  about: "About",
  indexPath: "C:\\Home\\",
  welcomeMessage: "welcome.txt",
  colors: "Colors.exe",
  welcomeTitle: "Hello!",
  welcomeText:
    "This interactive portfolio was developed using Vue.js 3, Quasar 2, and Vite, showcasing a collection of my work. Feel free to explore and browse through the projects. The source code for this portfolio can be found on ",
  // about
  aboutTab: "About",
  contactTab: "Contact",
  status: "available",
  aboutPath: "C:\\About\\ReadMe.txt",
  jobPosition: "Web / App Developer",
  location: "Hamburg, Germany",
  readMePart1:
    "Hi! I'm Toni Dreger, a web developer based in Hamburg, Germany. I have a passion for creating websites, applications, and digital experiences that blend aesthetics and functionality. My goal is to build products and tools that provide value to people, either by making their lives easier or by bringing them joy, and to learn and grow as a developer in the process. Beyond coding, I immerse myself in music, dancing, drawing, and literature (mostly Sci-Fi) and am overall a rather creative and approachable person.",
  readMePart2:
    "I value teamwork and strive to create a positive and inclusive work environment where knowledge is shared and ideas are valued. Learning from others and contributing to a supportive team culture are essential to me. After attaining a Bachelor degree of Science in Media Systems from the HAW Hamburg I'm currently seeking exciting opportunities to contribute my skills to impactful projects.",
  readMePart3: "If you're interested in working together, please feel free to",
  readMePart4:
    ". I'm especially happy about job offers around Vue.js, but I'm also interested in software or app development projects in general.",
  // work
  projectPath: "C:\\Work\\{msg}",
  projectData: {
    date: "Date",
    languages: "Languages",
    teamSize: "Team Size",
    role: "Role",
  },
  toEGO: {
    subtitle: "Diary App for Introspection",
    role: ["Full-stack Developer"],
    description:
      "ToEGO is a diary app for introspection that I developed as part of my Bachelor's thesis using Vue.js and Quasar. It serves as a tool for self-reflection, allowing users to capture events in their life and experiences throughout the day.\n\nUsers can create notes to track their thoughts, emotions, and experiences, which can be reviewed and reflected upon before creating a diary entry. The app provides customizable templates for notes and diary entries, making it easy for users to format their text and save it for future use. Additionally, users can set default templates that are automatically applied when creating a new entry or note.\n\nToEGO features a customizable user interface that allows users to personalize it according to their preferences. Users can save their changes, and they have the option to select or create various themes, reminiscent of the customization options offered by platforms like MySpace and other nostalgic blog sites.",
    features: ["customizable ui", "mood tracking", "reuseable templates"],
  },
  roomMe: {
    subtitle: "Managing tool for shared flats",
    role: ["Application Development", "Testing Collaborator"],
    description:
      "RoomMe is a management tool designed for shared flats. It streamlines task allocation, communication, and expense tracking for roommates, enhancing their daily life.\n\nWith RoomMe, users can easily create customizable cleaning schedules and allocate tasks among roommates. The app offers a unique family tree feature, showcasing the history of roommates in each room.\n\nThe chat function facilitates easy communication among roommates, while the expense tracking feature allows users to monitor costs and split them accurately. The app provides a shared grocery list feature, ensuring transparent cost-sharing among roommates.",
    features: [
      "cleaning schedules",
      "rotation of assigned tasks",
      "expense tracking",
      "family tree for rooms",
    ],
  },
  hueLight: {
    subtitle: "On a Raspberry Pi",
    role: ["Python Developer"],
    description:
      "This project created an app that manipulates a Philips Hue light strip based on sound input. Python and audio-processing libraries enabled the app to interact with the light strip via the deCONZ API and Postman requests.\n\nChallenges included the light strip's technical limitations, which were overcome by reducing the command rate and adjusting input sensitivity. The app created a visually appealing display that responds to sound input and provides creative lighting effects.\n\nFeatures included pitch recognition (Aubio), volume calculation (Audioop) and microphone input (PyAudio). The project successfully achieved its goal.",

    features: [
      "pitch and volume visualization",
      "VNC-viewer for easier management",
    ],
  },
  kreideWelt: {
    subtitle: "An Interactive Augmented Reality Game",
    role: ["Raycast Implementation", "Unity Development"],
    description:
      'Developed as part of the exhibition "The Digital Plays With The Analogue" during the annual HAW Hamburg Rundgang, KreideWelt aims to bridge the gap between the digital and real worlds through interactive experiences.\n\nPlayers engage directly with a virtual character and its environment by utilizing raycasts to draw in the real world. By leveraging a digital stylus, players navigate through levels, fostering creativity and problem-solving skills.\n\nKreideWelt showcases the potential of AR and VR technology and how such games could enhance exhibitions and provide visitors with unique levels of interactivity.',
    features: [
      "Real-Time Raycast Implementation",
      "Unity and Vuforia Integration",
    ],
  },
  lab1999: {
    subtitle: "An Immersive Point-and-Click Adventure",
    role: ["Project Manager", "Lead Programmer", "Game Designer"],
    description:
      "In Lab. 1999, an immersive point-and-click adventure, you'll explore the enigmatic world of Louis De Poitiers, a scientist plagued by headaches and fragmented memories. Trapped within a mysterious laboratory, Louis must untangle the threads of his past and confront the unsettling truths lurking behind its walls.\n\nLab. 1999 features a unique dual inventory system, combining physical and mental objects, empowering players to solve puzzles in multiple ways using a variety of items.\n\nEven though this is an old project, it was my initial venture into Unity and I wanted to include it here to showcase my first endeavor in game development.",
    features: [
      "Multiple solutions",
      "Atmospheric Exploration",
      "Unique Item Interactions",
    ],
  },
};
