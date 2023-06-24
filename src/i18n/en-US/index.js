export default {
  //navigation
  work: "Work",
  about: "About",
  indexPath: "C:\\Home\\",
  welcomeMessage: "welcome.txt",
  colors: "Colors.exe",
  welcomeTitle: "Hello!",
  welcomeText:
    "This interactive portfolio was made with Vue.js 3, Quasar 2 and Vite and is a collection of some of my work. Feel free to browse around!",
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
  },
  toEGO: {
    subtitle: "Diary App for Introspection",
    description:
      "ToEGO is a diary app for introspection that I developed as part of my Bachelor's thesis using Vue.js and Quasar. It serves as a tool for self-reflection, allowing users to capture events in their life and experiences throughout the day. Users can create notes to track their thoughts, emotions, and experiences, which can be reviewed and reflected upon before creating a diary entry.\nThe app provides customizable templates for notes and diary entries, making it easy for users to format their text and save it for future use. Additionally, users can set default templates that are automatically applied when creating a new entry or note.\nToEGO features a customizable user interface, allowing users to personalize it according to their preferences. Changes can be saved, and various themes reminiscent of the customization options offered by platforms like MySpace and blog sites are available for selection or creation.",
    features: ["customizable ui", "mood tracking", "reuseable templates"],
  },
  roomMe: {
    subtitle: "Managing tool for shared flats",
    description:
      "RoomMe is a management tool designed specifically for individuals living in shared flats. The application enables users to create cleaning schedules, allocate tasks among roommates, and customize rules to fit their preferences. For example, roommates can assign specific tasks to particular individuals or rotate them between themselves. They can also set the frequency for each task, whether it be weekly, bi-weekly, or monthly. RoomMe offers a unique family tree feature that shows users who lived in each room and when. The chat function facilitates easy communication among roommates, while the expense tracking feature allows users to monitor costs and split them accordingly. Roommates can add items to a shared grocery list and log purchases in the app. They can specify which roommates the item will be shared with, and the app will provide a clear breakdown of who owes what to whom.",
    features: [
      "cleaning schedules",
      "rotation of assigned tasks",
      "expense tracking",
      "family tree for rooms",
    ],
  },
  hueLight: {
    subtitle: "On a Raspberry Pi",
    description:
      "This project created an app that manipulates a Philips Hue light strip based on sound input. Python and audio-processing libraries enabled the app to interact with the light strip via the deCONZ API and Postman requests. Challenges included the light strip's technical limitations, which were overcome by reducing the command rate and adjusting input sensitivity. The app created a visually appealing display that responds to sound input and provides creative lighting effects. Features included pitch recognition (Aubio), volume calculation (Audioop) and microphone input (PyAudio). The project achieved its goal.",
    features: [
      "pitch and volume visualization",
      "VNC-viewer for easier management",
    ],
  },
  kreideWelt: {
    subtitle: "An Interactive Augmented Reality Game",
    description:
      'Developed as part of the exhibition "The Digital Plays With The Analogue" during the annual HAW Hamburg Rundgang, KreideWelt aims to bridge the gap between the digital and real worlds through interactive experiences.\nPlayers engage directly with a virtual character and its environment by utilizing raycasts to draw in the real world. By leveraging a digital stylus, players navigate through levels, fostering creativity and problem-solving skills. KreideWelt showcases the potential of AR and VR technology and how such games could enhance exhibitions and provide visitors with unique levels of interactivity.',
    features: [
      "Real-Time Raycast Implementation",
      "Unity and Vuforia Integration",
    ],
  },
  lab1999: {
    subtitle: "An Immersive Point-and-Click Adventure",
    description:
      "In Lab. 1999, an immersive point-and-click adventure, you'll explore the enigmatic world of Louis De Poitiers, a scientist plagued by headaches and fragmented memories. Trapped within a mysterious laboratory, Louis must untangle the threads of his past and confront the unsettling truths lurking behind its walls. Lab. 1999 features a unique dual inventory system, combining physical and mental objects, empowering players to solve puzzles in multiple ways using a variety of items. Even though this is an old project, it was my initial venture into Unity and I wanted to include it here to showcase my first endeavor in game development.",
    features: [
      "Multiple solutions",
      "Atmospheric Exploration",
      "Unique Item Interactions",
    ],
  },
};
