1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
Difference Between getElementById, getElementsByClassName and querySelector/querySelectorAll

(i)getElementById
Its find out just one element and return one element otherwise return null.When we need just one element then we use getElementById.
e.g:- const FindValue = document.getElementById('Value');

(ii)getElementsByClassName
Its find out Multiple element using specific class name and return.When we need multiple element then we use getElementsByClassName.
e.g:- const digitElements = document.getElementsByClassName('digit');

(iii)querySelector/querySelectorll
Its find out large element using specified css selector and return.When we need more flexibility from other class or id then we use querySelector.
e.g:- const listItems= document.querySelector('#list');
const listItems = document.querySelectorAll('.item');

2.How do you create and insert a new element into the DOM?

Ans:
(i) Creating the Element Document Object Model (DOM) in JavaScript: Creating an element this attribute document.createElement().This method takes a string representing the tag name of the element and creat(div, p etc).
e.g:- const TextP = document.createElement("p");

newTextP.id = "myTextP ";

newTextP.textContent = "This is a new element.";

newTextP.classList.add("my-class");

(ii) Inserting the Element Document Object Model (DOM) in JavaScript : Several methods can be used to insert the newly created element into DOM.

e.g:- const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was added dynamically!";

newParagraph.style.color = "blue";

const bodyElement = document.body;

bodyElement.appendChild(newParagraph);

3.What is Event Bubbling and how does it work?

Ans:
Event bubbling is a concept in JavaScript that describe how to events propagate or "bubble up" through the Document Object Model (DOM) hierarchy. when an event triggered ona DOM element,that event doesn't just stay on that element.It can "bubble up" through its parent elements and all the way to the root of the document.

Its works, if we click a button within a id, the click event will first be handled by the button.Due to event bubbling,that event doesn't stop at the button.Its bubble up to the parent div wirh the id and then uo to the body element,and so on,untill it reaches the root element of the documnt.

e.g:- <div id="parent">
<button id="child">Click me</button>

</div>

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event delegation is a design pattern which a single event listener is attached to a common ancestor,rather than attaching listener to multiple individual element. Event delegation allows a parent element to listen for events that happen on its child elements, even if those child elements are added dynamically after the initial event listener is attached.

It is useful Because
(i)Efficiency
Managing event listeners becomes much easier just we need to handle events at the parent level, making our code more maintainable and less error-prone.
(ii)Dynamism
Event delegation is particularly useful when dealing with dynamically added elements, as the parent's event listener will automatically handle events from any new child elements without needing additional code.

5.What is the difference between preventDefault and stopPropagation?

Ans:
(i)preventDefault()
preventDefault is use for stop the browser's built-in brhavior for a specific event.Its can be used to prevent a form from being submitted.

e.g:-document.querySelector('form').addEventListener('submit', function (event) {
event.preventDefault(); });

(ii)stopPropagation()
stopPropagation is use for stop the event from"bubbling" through the DOM hierarchy.Its useful when you want to handle an event at a specific level and do not want it to trigger handlers on parent elements.

e.g:- document.querySelector('.child').addEventListener('click', function (event) {
event.stopPropagation(); });
