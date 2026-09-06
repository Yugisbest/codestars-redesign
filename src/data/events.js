// const events = [
//   {
//     title: "Code UnCode",
//     category: "Competitive Programming",
//     date: "Coding Challenge"
//   },
//   {
//     title: "Code Bounty",
//     category: "Coding Contest",
//     date: "Problem Solving"
//   },
//   {
//     title: "BloodBytes",
//     category: "Technical Event",
//     date: "Build • Compete • Create"
//   }
// ];

// export default events;

// New updated code below:

// we're changing:
// date
// to:
// description
// tag
// because our previous date values weren't really dates.

const events = [
  {
    title: "Code UnCode",
    category: "COMPETITIVE PROGRAMMING",
    description:
      "A coding challenge focused on problem solving, algorithms and competitive programming.",
    tag: "01",
    mode: "Online / Offline",
    status: "Featured",
    details:
      "Test your problem-solving ability through programming challenges."
  },
  {
    title: "Code Bounty",
    category: "CODING CONTEST",
    description:
      "Put your programming skills to the test by solving challenging problems under pressure.",
    tag: "02",
    mode: "Online / Offline",
    status: "Featured",
    details:
      "Compete against other developers and solve problems within a limited time."
  },
  {
    title: "BloodBytes",
    category: "TECHNICAL EVENT",
    description:
      "A technical event combining coding, creativity and competitive problem solving.",
    tag: "03",
    mode: "Event",
    status: "Featured",
    details:
      "A technical experience designed to challenge your coding and problem-solving skills."
  }
];

export default events;