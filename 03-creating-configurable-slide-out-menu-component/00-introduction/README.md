# **Creating a Configurable Slide Out Menu Component**

## **Overview:**

- In this module will build a more complex component
- We'll see some additonal features of the Shadow DOM
- We'll build a slide-out navigation menu component
- We'll add some basic build-in color themes that the component user can easily apply and we'll do this by using CSS, so we don't have to observe attribute changes.
- We'll use a property to set the menu to open or closed, and we'll see another feature of the Shadow DOM called slotting, which allows users to project their own contento into the Shadow Root of your Web Component.

### **In this demo:**

- We'll see how it works.
- What configuration options it has.
- How it's constructed in terms of the DOM structure and important bits od CSS.

### **In this demo:**

- The slide-out menu component has a custom element of rw-slide-menu. It slides out from the left-hand side.
- The menu itself has a title and content section. It also has a backdrop which, when clicked, closes the menu.
- The backdrop can be disabled using the backdrop attribute, setting its value to false, which then allows for items behind the menu to be clicked.
- A theme can also be applied to the menu, using the theme attribute. There is a blue and red theme available.
- The component template consists of a frame element, which covers the entire browser viewport.
- The frame element contains nav element, which is positioned off the left-hand side of the screen, using the translateX transform.
- When the open property on the component is set to true, an open class is added to the frame element, which removes the translateX transform.
- The nav element has a will-change transform property, which promotes the nav element to separate layer. This prevents the browser from redrawing the rest of the page when the menu is slid in or out. This will increase the animation performance, especially in low-cost or older mobile devices.
- Because the frame element is an overlay to the entire browser viewport, we need to stop that element from being clickable, otherwise a user wouldn't be able to interact with the application behind the frame element when the slide-out menu is closed.
- We can do this, using the pointer-events CSS property and setting it to none. Then when the menu's opened, we can set this property back to aouto, which will then allow the user to interact with the menu and backdrop.
