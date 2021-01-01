# **Creating a Star Rating Component**

- The Star Rating Component is a simple that will present the user with five stars they can choose from.
- As you'd expect, when a user hovers over the element, the appropiate number of stars will be highlighted and will allow them to make a selection.
- The component will also have a value attribute, allowing for an initial value to be specified
- and a disabled state so that it can be used to display read-only data.
- Finally, it will have a single-value property to provide the ability to programmatically set and retrieve its value.

## **In this demo:**

- We'll briefly show how the compoment is going to look.
- How it behaves.
- And also its API, in terms of what properties are available.

### **Think native**

- When building Web Components, it is very important to realize that there are a large number of super-performance, well-tested elements already available in browsers.
- Years of development has gone into some of the native elements, with millions of people using them daily.
- Web users are familiar with these native elements. They'll have expectations of how certain types of elements should work.
- When you build the Web Component, you should look to native elements and take inspiration from how they work and strive to match this behaviour as much as possible.
- When building a Web Component, try and pair it with a native element, if there is one. Take it our star rating component, for example. It takes user input, so it's a type of input element. Evaluate stores as a number, so it's basically a simple number input with a fancy UI. That means that we don't have to spend lots of time trying to figure out how the star rating component should behave in subtle situations. We can learn from the native number input. Before we can do that, though we need to understand how input number works.

<img src="https://media.giphy.com/media/LZElUsjl1Bu6c/giphy.gif" width="250">
