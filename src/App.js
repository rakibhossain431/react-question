import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card
       question="Question 1: What is React"
       ans="Ans : React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. "
      />
      <Card
         question="Question 2: Why use React?"
         ans="Ans : React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
      />
      <Card
         question="Question 3: React Native?"
         ans="Ans :  
         React has native libraries that were announced by Facebook in 2015, which provides the react architecture to native applications like IOS, Android and UPD."
      />
      <Card
         question="Question 4: Single-Way data flow?"
         ans="Ans :In React, a set of immutable values are passed to the components renderer as properties in its HTML tags. The component cannot directly modify any properties but can pass a call back function with the help of which we can do modifications. This complete process is known as “properties flow down; actions flow up”."
      />
      <Card
         question="Question 5:Virtual Document Object Model?"
         ans="Ans : React creates an in-memory data structure cache which computes the changes made and then updates the browser. This allows a special feature that enables the programmer to code as if the whole page is rendered on each change whereas react library only renders components that actually change.
         "
      />
      <Card 
         question="Question6: Why React?"
         ans="Ans : Now, the main question arises in front of us is why one should use React. There are so many open-source platforms for making the front-end web application development easier, like Angular."
      />
      <Card
          question="Question 7: How to create a React app?"
          ans="Ans : There are two ways to create React apps. First, you use npm (Node Package Manager) installed on your machine. If you’re using VS Code, you need to make sure you’ve configured your machine to run React code in VS code using npm."
       />
      <Card 
        question="Question 8: Create a simple HTML file?"
        ans="Ans : Create a simple HTML file with the following HTML and save it as Index.html in any folder you have direct access to. We will open this html file direct in the browser."
      />
      <Card 
         question="Question9: Import React library?"
         ans="Ans :To make React work direct in an HTML document, we need to import the React library in HTML. React library is defined in two .js files. The files differ for development and production as you can see below."
      />
      <Card 
          question="Question 10:  Run React code?"
          ans="Ans : To run the above code, create a text file in any text editor such as Notepad or Visual Studio Code, save it as Index.html or other name and open html file in a Web browser."
      />
    </div>
  );
}

export default App;
