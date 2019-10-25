1. What problem does the context API help solve?
   It removes the over cumbersome "prop drilling" and allows us to store data on a context object and retrieve that data in the necessary components from the context object.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   A reducer takes in two arguments and returns a new updated state object based on both arguments. An action allows us to use the reducer to perform conditional state transformations. The store contains our state for the application. The store is known as the single source of truth because we never actually change the actual content inside it, we make copies of the store with updates from our reducer.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is the state for our whole application while component state is created within that component and cannot be passed up only down. A good use of component state is when you have a component that doesn't need to do anything else but provide information specific to that area of the application. A good use of application state is when you have a component that would update the state and that change would be reflected somewhere else inside of our app that isn't a child of that component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   By default redux is synchronus so we need to use middleware to allow us to make asynchronous functions.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I really enjoy redux. It is very overkill for smaller applications but diving into this module I can easily see how powerful and scalable it is for larger real world applications.
