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
    title: "BloodBytes",
    category: "CODING CONTEST",
    type: "UPCOMING",
    description:
      "A Halloween-themed coding showdown built around competitive programming, logic and problem solving.",
    tag: "01",
    mode: "Competitive Programming",
    status: "Upcoming",
    details:
      "Battle against time, bugs and brain-teasers in a coding contest designed to test your programming instincts."
  },

  {
    title: "Code UnCode",
    category: "COMPETITIVE PROGRAMMING",
    type: "PAST",
    description:
      "A flagship ICPC-style competitive programming championship for developers who love challenging problems.",
    tag: "02",
    mode: "Individual Contest",
    status: "Past",
    details:
      "Code UnCode brings programmers together for multi-stage algorithmic challenges and high-level competitive programming."
  },

  {
    title: "Code Bounty",
    category: "CODING CONTEST",
    type: "PAST",
    description:
      "An intra-college competitive programming event designed to test problem-solving skills across multiple rounds.",
    tag: "03",
    mode: "Competitive Programming",
    status: "Past",
    details:
      "A two-round coding contest where participants compete under time constraints and put their problem-solving skills to the test."
  }
];

export default events;