import {
    mobile,
    backend,
    creator,
    web,
    bae,
    three,
    engr,
    dlg,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    hangman,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "设备经理",
      company_name: "32 ENGR Regiment",
      icon: engr,
      iconBg: "#383E56",
      date: "May 2013 - August 2014",
      points: [
        "Working with the Royal Engineers, I supported with maintaining the Hohne Barracks.",
        "This involved managing reports and liasing with external contractors to ensure faults were resolved in a timely manner",
        "The team I worked in dealt with people of almost any rank in the regiment so communication and understanding of military structure was paramount",
        "My largest achievement was implementing a new reporting database structure for staff to create reports themselves for review",
      ],
    },
    {
      title: "华为大使",
      company_name: "Carphone Warehouse - Three",
      icon: three,
      iconBg: "#E6DEDD",
      date: "Oct 2015 - August 2016",
      points: [
        "Worked as a sales rep focusing on the Huawei brand.",
        "Product expert and tech guru for managing phone repairs",
        "Built customer loyalty from focusing on the user experience and going above and beyond",
        "Upskilled other staff in the business on product specifications and sales techniques",
      ],
    },
    {
      title: "航空工程师",
      company_name: "BAE Systems",
      icon: bae,
      iconBg: "#383E56",
      date: "Aug 2016 - Nov 2017",
      points: [
        "Mechanical Engineer working on fast jet aircraft alongside the British RAF",
        "Worked as part of a team of professional team to deliver on high priority, time sensitive maintainence work",
        "Also worked as part of the contract neogtiation team dealing with contracts in Saudi Arabia, Oman and US",
        "Worked on development of new maintainence plans and techniques for streamlining workload.",
      ],
    },
    {
      title: "主题专家",
      company_name: "DLG",
      icon: dlg,
      iconBg: "#383E56",
      date: "Oct 2020 - Jun 2022",
      points: [
        "Sales consultant dealing in home insurance and Small to Medium enterprise insurance.",
        "Top 3 consultant in cross sales for multiple months in a row",
        "100% milestone achievement in all catergories for a period of 6 months running for end of my time here",
        "Supported and resolved issues for other consultants to ensure the success of the team",
      ],
    },
    {
      title: "软件工程师",
      company_name: "DLG",
      icon: dlg,
      iconBg: "#E6DEDD",
      date: "June 2022 - Present",
      points: [
        "In PROGRESS!!!",
        "...",
        "...",
        "...",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hangman",
      description:
        "A hangman game, one of many",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/Grandsgt",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };