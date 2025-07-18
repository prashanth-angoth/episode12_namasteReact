Higher Order Component (HOC): 
  Higher Order Component (HOC) is a design pattern in React that allows you to reuse component logic.
  It takes a component as an argument and returns a new component with additional functionality.
  here in our applications we have used HOC to show the promoted restaurant on restaurant card.

controlled and uncontrolled components 

  Controlled components are those where form data is handled by the React component state.
  Uncontrolled components, on the other hand, store their own state internally.
  They rely on the DOM to manage their state, and you can access their values using refs.
  Controlled components provide better control and validation over form data, while uncontrolled components are simpler to implement for quick forms.
  Controlled components are typically used when you need to manage form data dynamically, while uncontrolled components are useful for simpler forms where you don't need to manage the state explicitly.

Lifting state up: 

  Lifting state up is a technique used in React to share state between components.
  When multiple components need to access the same state, it's often beneficial to lift that state up to their closest common ancestor.
  This allows the ancestor component to manage the state and pass it down to its children via props.
  By lifting state up, you can avoid prop drilling and make your components more reusable.
  here in our application , we have implemented the auto closing of accordions when the other accordion is opened.

props drilling :
  Props drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components.
  This can make the code harder to maintain and understand, as each intermediate component must explicitly pass the props down.
  To avoid props drilling, you can use React Context or state management libraries like Redux to manage global state.
  These solutions allow you to share data across components without having to pass props through every level of the component tree.
