import project1 from "../assets/projects/image1.webp";
import project2 from "../assets/projects/image2.webp";
import project3 from "../assets/projects/image3.webp";
import project4 from "../assets/projects/image4.webp";
import project5 from "../assets/projects/image5.webp";
import img1 from "../assets/projects/img1.jpg";
import img2 from "../assets/projects/img2.jpg";
import img3 from "../assets/projects/img3.png";

export const HERO_CONTENT = `I am a motivated software engineering student specializing in scalable web applications and machine learning systems. With hands-on experience in front-end technologies like React and back-end platforms such as MySQL, PostgreSQL, and MongoDB, I have also explored machine learning with TensorFlow and PyTorch through academic projects and internships. My aim is to blend my knowledge of software development with machine learning to innovate and enhance user experiences across various digital platforms.`;

export const ABOUT_TEXT = `As an enthusiastic software engineering student, my academic and project-based experiences span from developing efficient web applications to implementing machine learning models. Well-versed in technologies such as React, Spring Boot, and various database systems, I also have a strong foundation in TensorFlow and PyTorch, applying these tools to solve real-world problems through predictive analytics and data-driven solutions. I am committed to a lifelong journey of learning and innovation, striving to merge cutting-edge technology with practical applications. Outside of my coursework, I actively participate in tech communities and contribute to open-source projects to further hone my skills.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - August 2024",
    image: img1,
    role: "Software Engineer Intern ",
    company: "PROXYM IT",
    description: `contributed to the development of an environmental preservation platform, focusing on creating features like event participation, product exchange, and real-time notifications. I utilized technologies such as Spring Boot, React.js, MySQL, and Docker to deliver a robust and scalable application. I also implemented JWT authentication, role-based routing, and API documentation using Swagger. My work was guided by Scrum methodology, and I honed my technical writing skills through detailed report preparation. This experience deepened my expertise in full-stack development and software deployment.`,
    technologies: ["React", "Spring Boot", "MySQL", "Docker","Git", "wagger", "Scrum methodology" ],
  },
  {
    year: "June 2024",
    image: img2,
    role: "Software Engineer Intern hine Learning and Software Development Intern",
    company: "Smart Web Marketing Agency",
    description: `played a key role in developing a platform for food recipe recommendations. I integrated various technologies, including React Native, Spring Boot, Flask, and PostgreSQL, to build a seamless and user-friendly application. My work involved fine-tuning YOLOv8 for image segmentation, implementing similarity search with a vector database, and utilizing TensorFlow and PyTorch for advanced image processing and NLP tasks. I also enhanced the platform's recipe recommendations by applying NLP techniques to YOLOv8 outputs. Throughout the project, I managed version control with Git and GitHub while adhering to Scrum practices. This internship significantly advanced my skills in machine learning, full-stack development, and project management.`,
    technologies: ["YOLOv8", "TensorFlow", "PyTorch", "NLP", "Similarity Search","Flask", "React Native", "Spring Boot", "Git" ],
  },
  {
    year: "June 2023 – August 2023",
    image: img3,
    role: "Software Engineer Intern ",
    company: "DomHome",
    description: `developed an internal task management application, leveraging React Native, Spring Boot, and MySQL to create a robust solution with secure user authentication and role-based access control. I designed and implemented RESTful APIs for efficient task management and developed an admin dashboard to oversee tasks and user roles. Additionally, I utilized Docker for seamless deployment across different environments, ensuring a smooth and consistent workflow. This experience enriched my expertise in full-stack development, API design, and deployment processes.`,
    technologies: ["React Native", " Spring Boot", "MySQL", " Git"],
  },
  
];

export const PROJECTS = [
  {
    title: "Application for Products to Boycott ",
    image: project1,
    description:
      "Developed a web application that helps users identify and boycott products from specific companies. Implemented web scraping techniques to gather data on companies, and utilized Spring Boot, React, and MySQL to ensure a smooth user experience.",
    technologies: ["Spring Boot", "React", "MySQL", "Web Scraping"],
  },
  {
    title: "Mobile Application for EduRecycle ",
    image: project2,
    description:
      "Designed a cross-platform mobile app using Spring Boot and Ionic to educate users on recycling practices. The app includes features like recycling tips, waste categorization, and a location-based recycling center finder.",
    technologies: ["Spring Boot", "Ionic", "GitHub"],
  },
  {
    title: "Automated Medical Image Diagnosis System",
    image: project3,
    description:
      "Created a machine learning model using TensorFlow and Keras for automatic diagnosis of medical conditions from X-ray and MRI images. Implemented image preprocessing with OpenCV to enhance accuracy and deployed the system for practical use.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
  },
  {
    title: "Desktop Application: Creation of a Library Management System",
    image: project4,
    description:
      "Developed a desktop application with Java and JavaFX to manage library resources, including books, users, and transactions. The app features an intuitive interface built with SceneBuilder to facilitate easy navigation and management.",
    technologies: ["Java", "JavaFX", "SceneBuilder"],
  },
  {
    title: "Natural Language Processing for Sentiment Analysis",
    image: project5,
    description:
      "Built a sentiment analysis tool using Python, NLTK, and spaCy to classify user reviews. The tool was deployed as a web-based application with Flask, providing an accessible platform for end users to gauge sentiment effectively.",
    technologies: ["Python", "NLTK", "paCy","Flask"],
  },
];

export const CONTACT = {
  address: "Avenue Sahel, Tunis, Tunisia, 1089 ",
  phoneNo: "+216 23 683 345 ",
  email: "ranimesboui7@gmail.com",
};
