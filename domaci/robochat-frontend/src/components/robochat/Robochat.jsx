import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import './Robochat.css';
import { ThemeProvider } from 'styled-components';

const Robochat = () => {


    const theme = {
        background: "url('https://i.pinimg.com/originals/ef/2e/de/ef2edebfb28142326be2ffece8e870e4.gif')center/cover no-repeat",
        fontFamily: 'Source Code Pro',
        headerBgColor: 'linear-gradient(109.1deg, rgb(181, 73, 91) 7.1%, rgb(225, 107, 140) 86.4%)',
        headerFontColor: '#fff',
        headerFontSize: '20px',
        botBubbleColor: 'linear-gradient(109.1deg, rgb(181, 73, 91) 7.1%, rgb(225, 107, 140) 86.4%)',
        botFontColor: '#fff',
        userBubbleColor: 'linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)',
        userFontColor: '#fff',
      };

    const steps = [
        {
          id: 'Hello',
          message: 'Greetings human, i am an AI powered chatbot web application: RoboChat.',
          trigger: 'Ask the name'
        },
        {
          id: 'Ask the name',
          message: 'What is your name?',
          trigger: 'Loading1'
        },
        {
          id: 'Loading1',
          user: true,
          trigger: 'Name'
        },
        {
          id: 'Name',
          message: 'Greetings {previousValue}. Ask me anything.',
          trigger: 'Loading2'
        },
        {
          id: 'Loading2',
          user: true,
          trigger: 'Loading3'
        },
        {
          id: 'Loading3',
          message: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses a wide range of technologies and techniques that allow computers to perform tasks that typically require human intelligence. These tasks include problem-solving, speech recognition, decision-making, language translation, visual perception, and more.',
          trigger: 'Loading4'
        },
        {
          id: 'Loading4',
          message: 'Do you maybe want to implement it in your project?',
          trigger: 'Loading5'
        },
        {
            id: 'Loading5',
            user: true,
            trigger: 'Loading6'
          },
          {
            id: 'Loading6',
            message: 'Okay i will help you with that. What programming language did you use to build your project?',
            trigger: 'Option'
          },
        {
          id: 'Option',
          options: [
            {
              value: 'C#',
              label: 'C#',
              trigger: 'C#'
            },
            {
              value: 'Java',
              label: 'Java',
              trigger: 'Java'
            },
            {
                value: 'PHP',
                label: 'PHP',
                trigger: 'PHP'
              },
              {
                value: 'Laravel',
                label: 'Laravel',
                trigger: 'Laravel'
              },
              {
                value: 'React',
                label: 'React',
                trigger: 'React'
              },
              {
                value: 'Node.js',
                label: 'Node.js',
                trigger: 'Node.js'
              },
              {
                value: 'Python',
                label: 'Python',
                trigger: 'Python'
              },
          ]
        },
        {
          id: 'C#',
          message: 'To implement Artificial Intelligence (AI) in C#, start by choosing a suitable framework such as ML.NET, Accord.NET, or TensorFlow.NET. Gain a foundational understanding of machine learning concepts, and integrate AI models into your C# applications. Leverage the chosen framework to handle tasks like data preparation, model training, and evaluation. Incorporate AI features, such as natural language processing or image recognition, into your application based on your specific requirements. Regularly optimize and fine-tune your models for improved performance, staying informed about the latest developments in AI to ensure youre utilizing the most effective tools and techniques. The versatility of C# within the .NET ecosystem makes it a robust choice for developing intelligent applications.',
          end: true
        },
        {
          id: 'Java',
          message: 'To implement Artificial Intelligence (AI) in Java, select an appropriate AI library or framework like Deeplearning4j, Weka, or Apache OpenNLP. Familiarize yourself with fundamental machine learning concepts and integrate AI models into your Java applications using the chosen framework. Prepare and preprocess data as needed for model training or inference. Train and evaluate your models, incorporating AI functionalities such as natural language processing, image recognition, or recommendation systems based on your projects requirements. Continuously optimize and fine-tune your AI models for enhanced performance. Stay updated on advancements in AI to leverage the latest tools and methodologies. Javas robust ecosystem and extensive community support make it well-suited for integrating AI capabilities seamlessly into applications.',
          end: true
        },
        {
            id: 'PHP',
            message: 'To implement Artificial Intelligence (AI) in PHP, start by selecting a suitable AI library or framework, such as PHP-ML or Rubix ML. Gain a foundational understanding of machine learning principles and integrate AI models into your PHP applications using the chosen framework. Prepare and preprocess data for model training or inference, and incorporate AI features like natural language processing, image recognition, or predictive analytics based on your projects needs. Train and evaluate your models, optimizing them for better performance. Keep abreast of the latest advancements in AI to stay informed about new tools and techniques. PHPs versatility and wide usage in web development make it a viable option for seamlessly integrating AI capabilities into web-based applications.',
            end: true
          },
          {
            id: 'Laravel',
            message: 'To integrate Artificial Intelligence (AI) capabilities into a Laravel application, leverage PHPs versatility within the Laravel framework. Begin by choosing a suitable AI library or framework compatible with PHP, such as PHP-ML or Rubix ML. Gain a foundational understanding of machine learning principles, then seamlessly integrate AI models into your Laravel project. Utilize Laravels powerful features for data processing, routing, and views to facilitate the incorporation of AI functionalities like natural language processing, image recognition, or recommendation systems. Train and evaluate your models within the Laravel application, optimizing them for performance. Stay informed about the latest AI developments to ensure youre using the most effective tools and methodologies. Laravels robust ecosystem and elegant syntax make it well-suited for building modern web applications with integrated AI capabilities.',
            end: true
          },
          {
            id: 'React',
            message: 'To integrate Artificial Intelligence (AI) into a React application, begin by selecting a suitable AI library or framework compatible with JavaScript, such as TensorFlow.js, Brain.js, or the Microsoft Cognitive Services API. Familiarize yourself with basic machine learning concepts and seamlessly incorporate AI models into your React project. Leverage Reacts component-based architecture to encapsulate AI functionalities, making them modular and easy to manage. Integrate AI features such as natural language processing, image recognition, or sentiment analysis based on your projects requirements. Utilize Reacts state management and lifecycle methods to handle the interaction between your UI components and AI functionalities. Regularly update and optimize your AI models for improved performance. Stay informed about advancements in AI and JavaScript libraries to incorporate the latest tools and techniques seamlessly into your React application. Reacts flexibility and component-based structure make it well-suited for building modern and interactive applications with integrated AI capabilities.',
            end: true
          },
          {
            id: 'Node.js',
            message: 'To integrate Artificial Intelligence (AI) into a Node.js application, start by selecting a suitable AI library or framework compatible with JavaScript, such as TensorFlow.js, Brain.js, or Natural. Gain a foundational understanding of machine learning concepts and seamlessly incorporate AI models into your Node.js project. Leverage Node.js non-blocking, event-driven architecture to efficiently handle asynchronous operations, making it well-suited for AI tasks. Integrate AI features like natural language processing, image recognition, or predictive analytics into your application based on project requirements. Utilize Node.js package management system (npm) for easy integration of AI libraries. Regularly update and optimize your AI models for enhanced performance. Stay informed about the latest developments in AI and JavaScript to ensure you are leveraging the most effective tools and methodologies. Node.js scalability and flexibility make it a powerful platform for building applications with integrated AI capabilities.',
            end: true
          },
          {
            id: 'Python',
            message: 'To implement Artificial Intelligence (AI) in a Python application, start by selecting a suitable AI library or framework, such as TensorFlow, PyTorch, or scikit-learn. Pythons extensive ecosystem and rich support for AI make it a popular choice. Gain a foundational understanding of machine learning concepts and seamlessly incorporate AI models into your Python project. Leverage Pythons simplicity and readability, ensuring smooth integration with various AI functionalities like natural language processing, image recognition, or data analysis. Utilize popular frameworks for specific AI tasks, such as NLTK for natural language processing or OpenCV for computer vision. Regularly update and optimize your AI models for improved performance. Stay informed about the latest advancements in AI and Python libraries to ensure you are using the most effective tools and methodologies. Pythons versatility and large community support make it an ideal language for developing applications with integrated AI capabilities.',
            end: true
          },
      ];
      

  return (
    <>
      <div className='robochat-stranica'>
        <div className="robochat-tekst">
            <Segment>
                <ThemeProvider className="chatbot" theme={theme}>
                    <ChatBot  steps = {steps} 
                    botAvatar ='https://i.ibb.co/z2z43JF/logo-roze.png' 
                    userAvatar='https://i.ibb.co/bzwWLDV/pngtree-personal-center-free-phone-ui-icon-pink-png-image-4237086-removebg-preview.png'
                    headerTitle='RoboChat💬'
                    width="1000px"/>
                </ThemeProvider>
            </Segment>
        </div>
      </div>
    </>
  );
};

export default Robochat;