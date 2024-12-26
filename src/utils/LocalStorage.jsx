const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare budget proposal",
        taskDescription: "Create a detailed budget proposal for the next quarter.",
        taskDate: "2024-12-20",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Complete project report",
        taskDescription: "Prepare and submit the final project report.",
        taskDate: "2024-12-21",
        category: "Work",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-12-22",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Meera",
    email: "em@x.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client presentation",
        taskDescription: "Prepare slides for client presentation.",
        taskDate: "2024-12-23",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update website",
        taskDescription: "Make updates to the company website.",
        taskDate: "2024-12-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Market research",
        taskDescription: "Conduct research on competitor strategies.",
        taskDate: "2024-12-25",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 0, failed: 1 },
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Data backup",
        taskDescription: "Ensure backup of all project data.",
        taskDate: "2024-12-25",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Research new tools",
        taskDescription: "Investigate tools for improved team collaboration.",
        taskDate: "2024-12-26",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Weekly newsletter",
        taskDescription: "Draft and send out the company newsletter.",
        taskDate: "2024-12-27",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Plan team outing",
        taskDescription: "Organize an outing for the team.",
        taskDate: "2024-12-28",
        category: "Event",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 4,
    firstName: "Asha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Bug fixing",
        taskDescription: "Fix high-priority bugs in the system.",
        taskDate: "2024-12-28",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "User feedback analysis",
        taskDescription: "Analyze user feedback and create a report.",
        taskDate: "2024-12-29",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare training materials",
        taskDescription: "Develop training materials for new hires.",
        taskDate: "2024-12-30",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Create marketing plan",
        taskDescription: "Develop a detailed marketing plan for Q1.",
        taskDate: "2024-12-31",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Server maintenance",
        taskDescription: "Perform scheduled maintenance on the servers.",
        taskDate: "2024-12-30",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Prepare training session",
        taskDescription: "Organize and prepare materials for training.",
        taskDate: "2024-12-31",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Social media updates",
        taskDescription: "Post updates on all company social media platforms.",
        taskDate: "2024-12-31",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Policy review",
        taskDescription: "Review company policies and update as needed.",
        taskDate: "2025-01-01",
        category: "Administrative",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
];



//

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem("admin", JSON.stringify(admin));


  // console.log(employees, admin);
  // return { employees, admin };
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;

  // console.log("Loaded employees:", employees);
  // console.log("Loaded admin:", admin);

  return { employees, admin };
};
