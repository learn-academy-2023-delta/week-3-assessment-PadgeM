# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the language used to mash HTML, JavaScript, and React all in one. Or at least that's what I think it is. HTML is more just the bones of the building while JSX is the whole building.

Researched answer: JSX is kinda like a special way to write HTML in JavaScript. It's often used with libraries like React for making websites and user interfaces. One thing that's different between HTML and JSX is how we write attributes. In HTML, we use double quotes for attributes, like class="container". But in JSX, we use curly braces and write attributes in camelCase, like className="container". It's because JSX looks a lot like JavaScript, and class is a reserved word in JavaScript.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager for JS. I think the node modules and the .json file. I can't remember exactly. But I am pretty sure it's a package manager.

Researched answer:
Yarn is like this cool tool that helps with JavaScript projects. It's a package manager that deals with stuff like dependencies and installs packages for us. When you run yarn in the terminal, it looks for this file called package.json in the current folder, and that file has information about our project, like what packages we need. Yarn checks if those packages are already installed, and if not, it downloads and installs them in a folder called node_modules. It also creates or updates this file called yarn.lock, which keeps track of the specific versions of the packages we have installed. So when we work on the project later or on different computers, we can make sure we're using the same versions.

3. What is a React component?

Your answer: A React component acts as a hook for a function usually in a new file that you can call upon and use as many times as you like to perform that function instead of writing it over and over again.

Researched answer:
A React component is really important in React that you use to build your app. There are two types: class components and functional components. Class components are made by extending the React.Component class and have a render() method to describe what they look like. Functional components are just regular JavaScript functions that return JSX. Components can have their own state and receive props from their parent components to be dynamic. Props are cool because they let you pass data to components and change what they show. Using components in React is awesome because it helps you break down your interface into smaller parts that you can reuse, which makes your code easier to manage and build really complex apps.

4. What is the difference between state values and props in React?

Your answer: state is unchanged and props are a way to call functions in using a react hook. 

Researched answer: 
In React, the difference between state values and props is like this: State values are personal things that a component keeps track of internally. They are managed and controlled within the component itself. State values can be changed using setState() and when they change, React automatically re-renders the component to reflect the updated state. On the other hand, props are like messages or inputs that are passed to a component from its parent component. They are external and cannot be modified by the component itself. Props are set by the parent component and remain fixed during the component's lifecycle. When props change, the component receives the new props and re-renders to display the updated values. So, state values are like private data for the component, while props are like information passed down from the parent component to the child component.

5. What is the DOM?

Your answer: I honestly can't remember. I think it's like document object model maybe. Has something to do with the look of a website. 

Researched answer:

The DOM, which stands for Document Object Model, is this thing that web browsers create when they load a web page. It's like a tree-like structure that represents all the elements and content of the page. Each element, like headings, paragraphs, and buttons, becomes a node in the DOM tree. With JavaScript, we can do fun things with the DOM, like changing elements, adding or removing them, and updating the content. It's like a way to make the web page interactive and dynamic.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: Div separates certain blocks of code and makes it appear in different chunks on the website. Span applies styling to code withing div tagged code. 

Researched answer:
The difference between a <div> tag and a <span> tag is like this: the <div> tag is used for bigger sections of content and creates a new line before and after the element, while the <span> tag is used for smaller parts within a block of content and doesn't create line breaks. <div> is like a block-level element, and <span> is an inline-level element. So, <div> is for grouping things together, and <span> is for targeting specific parts or applying styles.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
  Object-oriented programming (OOP) is a cool way of organizing code using objects and classes. It's all about grouping together data and behavior into these objects, which makes our code more modular and reusable. With OOP, we can do cool things like inheritance, polymorphism, and encapsulation.

2. Ruby:
  Ruby is a programming language that's super friendly and fun to use. It has a really nice syntax that's easy to understand and write. Ruby supports different ways of programming, like object-oriented and functional programming. It also has lots of useful stuff built-in, and there's a big community that creates extra stuff called gems to help us do even more cool things.

3. Implicit return:
  So, in Ruby, when we write a method, it automatically returns the value of the last thing that was evaluated inside the method. We don't have to use the word "return" explicitly like in some other languages. It's like Ruby just knows what we want to return, and it does it for us. It's pretty handy and saves us some typing!

4. Ruby blocks:
  Ruby blocks are these little chunks of code that we can use in our programs. We can put them inside curly braces or use the "do...end" keywords to define them. They're like mini-functions that we can pass around to other methods. Blocks are awesome for doing things like looping over collections or running code in a specific context. They make our code look nice and clean.

5. Ruby hashes:
  In Ruby, we have this thing called a hash, which is like a collection of key-value pairs. We use it when we want to store related pieces of data together. Each key in a hash has to be unique, and we can use any type of data as keys. Hashes are super useful for looking up values quickly based on their keys. The order of the key-value pairs in a hash doesn't matter, so we don't have to worry about that.
