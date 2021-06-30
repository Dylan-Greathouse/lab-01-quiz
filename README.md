## Making a plan
1) Make a drawing of your app. Simple "wireframes"
* I made an idea in my head along side the template and the example used by juile through her tutorial.
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
* During this phase, I made the sections to seperate the different parts of my quiz.
3) For each HTML element ask: Why do I need this?
* I added ID's to the different sections to know which content will go in which section.
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
* With the why, I wanted to create a quiz that had the answers through the lab. The how, I used testing to see if the questions worked.
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
* I only wanted to add one button to start the quiz. I chose to put the button at the bottom. That was because I wanted the user to read the page and be able to do the pop quiz.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
* For my added content, I added pictures I had of myself and Latte. I then emailed those pictures to my email from my phone. I then put the downloaded pictures in the assets folder of the lab.
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.
* The ID's are used to change those elements in css and to make them interactable through javascript. I added a keylistener to my button to start the quiz!

