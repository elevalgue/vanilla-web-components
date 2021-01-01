# **Web Component Specifications**

## **Custom Element Lyfecycle**

**The custom elements API** defines some **lifecycle callback methods**, which a developer can use to **execute code at certain times in the element's lifecycle**. 

### **These are the 3 most useful of these callbacks**

1. The first callback method is the **connected callback**, which is executed when the element is added to the DOM. 

2. Next is the **attribute change callback method**, which allows us to **subscribe to changes of certain attributes on the element instance**.
To configure what attributes we want to subscribe to, **we must specify the names of this attributes**, using the **static observed attributes get method**, 
by providing an array of these names. 

3. Last is the **disconnected callback**, which **is executed when the element is removed from the DOM**. You typically **use this method to do some clean up**, 
for example, canceling any JavaScript intervals you have running. 




<img src="https://media.giphy.com/media/TJm43e3ezO1uEwHSjA/giphy.gif">
