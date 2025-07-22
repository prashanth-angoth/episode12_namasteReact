redux setup :

-install @reduxjs/toolkit and react-redux
--npm i @reduxjs/toolkit
--npm i react-redux
-build our store
-connect our store to our app
-create slice(cart slice)
-dispatch (action)
-selector

-->in case of large scale application to manage the data we use redux tool kit.
--> redux store is nothing but a big whole object and it is kept in a global central place so that that any component in our application can access it, and can read and write the data from  it .
-->in a redux store we'll be having slices which are the logical stores to separate the data.
ex: cartSlice, userSlice
-->redux won't allow us to modify the cartslice directly.
when you try to add an item in cart by clicking a button it dispatches an action and then calls a reducer function that will modify the cart slice.and hence the data gets modified in the cart slice.
--> to read the data from that slice we need to subscribe to it using selector.
--> and once the redux store is created we need to provide this store to our application with the help of Provider, which wraps the entire application in it so that it can access the cartSlice in any of the component.whenever we are using the selector, make sure we are subscribing to the right portion of the store, this helps us in the optimizing the applications performance.
