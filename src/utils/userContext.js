import { createContext } from "react";
// context in React is used to share data between components without passing props down manually at every level.
// It allows you to create a global state that can be accessed by any component in the component
const userContext = createContext(
    {
        // default value for the context
        loggedInUser: "Prashanth Angoth",
    }
);

export default userContext;