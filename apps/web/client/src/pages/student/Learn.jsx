import React from 'react'
import { useState } from 'react'
import CourseCard from '../../components/CourseCard';

const Learn = () => {
  const [category, setCategory] = useState("Enrolled");

  const courses = [
    {
      title: "Web Development Fundamentals",
      status: "Enrolled",
      description: "In this comprehensive course, you will delve deep into the fundamentals of web development. Starting with HTML, you'll learn how to structure the content of your web pages and create semantic markup. Next, you'll move on to CSS, where you'll discover how to style your web pages, add layouts, and create beautiful designs. Finally, you'll explore JavaScript, the programming language of the web, and learn how to add interactivity and dynamic behavior to your websites. By the end of this course, you'll have a solid understanding of the core concepts of web development and be ready to dive deeper into more advanced topics.",
    },
    {
      title: "Introduction to Data Science",
      status: "Completed",
      description: "Welcome to the fascinating world of data science! In this introductory course, you'll learn the foundational concepts and techniques used in data analysis. You'll start by understanding the importance of data and how it can be used to gain insights and make informed decisions. Then, you'll explore various data analysis techniques, such as data cleaning, data visualization, and statistical analysis. Finally, you'll get hands-on experience with popular data science tools and libraries like Python, Pandas, and Matplotlib. Whether you're a beginner or someone looking to refresh your skills, this course will provide you with a solid foundation in data science.",
    },
    {
      title: "Mobile App Development",
      status: "Enrolled",
      description: "Are you ready to dive into the exciting world of mobile app development? In this hands-on course, you'll explore mobile app development for both iOS and Android platforms using React Native. You'll start by setting up your development environment and learning the basics of React Native. Then, you'll build several real-world mobile applications, including a todo list app, a weather app, and a social media app. Along the way, you'll learn important concepts such as navigation, state management, and integrating APIs. By the end of this course, you'll have the skills and confidence to develop your own mobile apps from scratch.",
    },
    {
      title: "Machine Learning Essentials",
      status: "Enrolled",
      description: "Unlock the power of machine learning with this essential course! In this comprehensive introduction, you'll learn the fundamental concepts of machine learning and how to apply them in real-world scenarios. You'll start by understanding the basic principles of machine learning, including supervised and unsupervised learning, classification, and regression. Then, you'll explore popular machine learning algorithms such as linear regression, decision trees, and neural networks. Finally, you'll get hands-on experience with Python and popular machine learning libraries like scikit-learn and TensorFlow. Whether you're new to machine learning or looking to expand your skills, this course has everything you need to get started.",
    },
    {
      title: "Graphic Design Basics",
      status: "Completed",
      description: "Welcome to the world of graphic design! In this foundational course, you'll learn the basics of graphic design tools and principles for creating visually appealing designs. You'll start by exploring essential design concepts such as color theory, typography, and layout. Then, you'll get hands-on experience with popular graphic design software like Adobe Photoshop and Illustrator. Along the way, you'll learn how to create logos, posters, business cards, and other design assets. By the end of this course, you'll have the skills and knowledge to create stunning designs for both print and digital media.",
    },
    {
      title: "Database Management Fundamentals",
      status: "Enrolled",
      description: "Dive into the world of database management with this comprehensive course! In this introductory course, you'll learn the basics of database management systems and SQL. You'll start by understanding the importance of databases and how they are used to store and manage data. Then, you'll explore fundamental database concepts such as tables, rows, and columns. Finally, you'll get hands-on experience with SQL, the standard language used to interact with databases. Whether you're a beginner or someone looking to refresh your skills, this course will provide you with a solid foundation in database management.",
    },
    {
      title: "Python Programming",
      status: "Completed",
      description: "Welcome to the world of Python programming! In this comprehensive course, you'll learn the fundamentals of the Python programming language, including data structures, functions, and control flow. You'll start by understanding the basic syntax of Python and how to write simple programs. Then, you'll explore more advanced topics such as object-oriented programming, file handling, and error handling. Along the way, you'll get hands-on experience with Python by working on practical coding exercises and projects. Whether you're new to programming or looking to expand your skills, this course has something for everyone.",
    },
    {
      title: "Digital Marketing Strategies",
      status: "Other Courses",
      description: "Are you ready to take your marketing skills to the next level? In this comprehensive course, you'll explore various digital marketing strategies including SEO, SEM, and social media marketing. You'll start by understanding the basic principles of digital marketing and how they can be applied to different platforms and channels. Then, you'll dive deep into advanced topics such as keyword research, content marketing, and conversion optimization. Along the way, you'll learn how to create effective digital marketing campaigns that drive traffic, generate leads, and increase sales. Whether you're a beginner or an experienced marketer, this course will help you master the art of digital marketing.",
    },
    {
      title: "Cybersecurity Fundamentals",
      status: "Other Courses",
      description: "With cyber threats on the rise, cybersecurity has never been more important. In this essential course, you'll gain an understanding of cybersecurity concepts and best practices to protect against cyber threats. You'll start by learning about common cyber threats and attack vectors, including malware, phishing, and ransomware. Then, you'll explore various cybersecurity technologies and techniques for securing networks, systems, and data. Along the way, you'll get hands-on experience with cybersecurity tools and simulations to reinforce your learning. Whether you're new to cybersecurity or looking to enhance your skills, this course will provide you with the knowledge and confidence to defend against cyber threats.",
    },
    {
      title: "UI/UX Design Principles",
      status: "Other Courses",
      description: "Welcome to the exciting world of UI/UX design! In this comprehensive course, you'll learn the principles of user interface (UI) and user experience (UX) design for creating intuitive and user-friendly interfaces. You'll start by understanding the basic principles of design, including layout, typography, and color theory. Then, you'll explore key UX concepts such as user research, information architecture, and interaction design. Along the way, you'll get hands-on experience with popular design tools like Adobe XD and Figma. Whether you're a beginner or an experienced designer, this course will help you create engaging and effective user experiences.",
    },
    {
      title: "Project Management Basics",
      status: "Completed",
      description: "Welcome to the world of project management! In this foundational course, you'll learn the basics of project management methodologies and tools for successful project execution. You'll start by understanding the role of a project manager and the key phases of the project lifecycle. Then, you'll explore essential project management concepts such as scope, schedule, budget, and risk management. Along the way, you'll get hands-on experience with popular project management tools like Asana and Trello. Whether you're new to project management or looking to refresh your skills, this course will provide you with the knowledge and confidence to lead successful projects.",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      status: "Other Courses",
      description: "Welcome to the fascinating world of artificial intelligence (AI)! In this comprehensive course, you'll explore the basic concepts of AI, including machine learning, neural networks, and natural language processing. You'll start by understanding the basic principles of AI and how it is used to solve complex problems. Then, you'll explore popular AI techniques such as supervised learning, unsupervised learning, and reinforcement learning. Along the way, you'll get hands-on experience with Python and popular AI libraries like TensorFlow and PyTorch. Whether you're a beginner or an experienced developer, this course will provide you with a solid foundation in AI.",
    },
    {
      title: "E-commerce Essentials",
      status: "Other Courses",
      description: "With the rise of online shopping, e-commerce has become an essential part of modern business. In this comprehensive course, you'll learn about e-commerce platforms, payment gateways, and online marketing strategies for running successful online businesses. You'll start by understanding the basics of e-commerce and how it has revolutionized the way we buy and sell goods and services. Then, you'll explore popular e-commerce platforms like Shopify, WooCommerce, and Magento. Along the way, you'll learn how to set up an online store, process payments securely, and attract customers through effective digital marketing strategies. Whether you're new to e-commerce or looking to expand your skills, this course will provide you with everything you need to succeed in the world of online business.",
    },
    {
      title: "Advanced JavaScript Techniques",
      status: "Enrolled",
      description: "Ready to take your JavaScript skills to the next level? In this advanced course, you'll explore advanced JavaScript concepts and techniques for building complex web applications. You'll start by reviewing the basics of JavaScript, including variables, data types, and control structures. Then, you'll dive deep into advanced topics such as closures, prototypes, and asynchronous programming. Along the way, you'll get hands-on experience with modern JavaScript frameworks like React and Vue.js. Whether you're a front-end developer or a full-stack engineer, this course will help you become a master of JavaScript.",
    },
    {
      title: "Business Analytics Fundamentals",
      status: "Completed",
      description: "Welcome to the world of business analytics! In this foundational course, you'll gain insights into business analytics tools and techniques for data-driven decision making. You'll start by understanding the role of business analytics in modern organizations and how it can be used to gain a competitive advantage. Then, you'll explore various data analysis techniques, such as descriptive, diagnostic, predictive, and prescriptive analytics. Along the way, you'll get hands-on experience with popular business analytics tools like Microsoft Excel, Tableau, and Google Analytics. Whether you're a business professional or an aspiring data analyst, this course will provide you with the knowledge and skills to succeed in the world of business analytics.",
    },
    // Add more courses with lengthened descriptions as needed
  ];
  
  console.log(courses);
  

  //console.log(courses);

  return (
    <>
      <div id="learn" className="flex flex-col w-10/12 m-auto p-4 font-grotesk">
        <div className="flex flex-row items-start p-6 gap-5 flex-wrap">
          <div className="bg-lime-500 rounded-full">
            <img
              className="w-16 h-16 bg-gray-800 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <div className='text-2xl font-bold'>
              Hey, Muhammad
            </div>
            <div className="flex flex-row gap-3 flex-wrap items-center">
              <div className="w-2/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>

              </div>
              <div className="text-lg">
                Skill Mastery
              </div>
            </div>
          </div>
          <div className="right-0 border-2 border-gray-200 rounded-full">
            <div className="text-lg font-semibold p-2">
              Daily Xp <span className="bg-slate-800 text-white rounded-full px-2 text-sm py-1">0 Xp</span>
            </div>
          </div>

        </div>

        <div className="flex flex-row text-lg gap-4 font-medium">
          <div onClick={(e) => {
            e.preventDefault();
            setCategory("Enrolled");

          }}
            className={`${category === "Enrolled" ? "border-b-secondary border-b-2 " : ""} cursor-pointer`}>
            Enrolled
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            setCategory("Completed");

          }} className={`${category === "Completed" ? "border-b-secondary border-b-2" : ""} cursor-pointer`}>
            Completed
          </div>
          <div onClick={(e) => {
            e.preventDefault();
            setCategory("Other Courses");

          }} className={`${category === "Other Courses" ? "border-b-secondary border-b-2" : ""} cursor-pointer`}>
            Other Courses
          </div>
        </div>
        <div>
          <div className="flex flex-row font-grotesk gap-3 flex-wrap py-4 justify-center">
            {courses
              .filter(course => course.status === category)
              .map((course, index) => (

                <div key={index} className="course-wrapper" style={{ width: '325px',height: '350px' }}>
                <CourseCard course={course} />
              </div>
                
              ))}

          </div>
        </div>

      </div>
    </>
  )
}

export default Learn
