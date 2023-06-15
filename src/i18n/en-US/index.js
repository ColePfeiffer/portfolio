export default {
  //navigation
  work: "Work",
  about: "About",
  indexPath: "C:\\Home\\welcome.txt",
  colorPickerPath: "C:\\Home\\ColorPicker.exe",
  welcomeTitle: "Hello!",
  welcomeText:
    "This portfolio is a collection of some of my work and was made with Vue.js 3, Quasar 2 and Vite. Feel free to browse around and get in touch if you have any questions or would like to work together.",
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
  readMePart3:
    "If you're interested in working together, please feel free to reach out. I'm especially happy about job offers around Vue.js, but I'm also interested in software or app development projects in general.",
  // work
  projectPath: "C:\\Work\\{msg}",
  projectData: {
    date: "Date",
    languages: "Languages",
  },
  toEGO: {
    subtitle: "Diary App for Introspection",
    description:
      "ToEGO is a diary app for introspection that I developed using Vue.js and Quasar as part of my bachelor's thesis. With ToEGO, users can create notes throughout the day to track their thoughts, emotions, and experiences. These notes can be looked through and reflected on before creating a diary entry. With customizable templates for notes and diary entries, users can easily format and save text for future use, and set default templates to be used automatically when creating a new entry or a new note. One of the app's unique features is its customizable interface, allowing users to style the app to their liking by creating themes, reminiscent of the customization options offered by platforms like MySpace and blog sites of the past.",
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
};
