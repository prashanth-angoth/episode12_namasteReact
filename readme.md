here in this episode we've worked on singe responsibility principle
if you have function/class/identity that should have single reponsibility
modularity : 
means that you breakdown your code into different small modules so that your code becomes more maintainable, testable and readable.

=Custom hooks:
--Hooks are utility functions/special Js functions which are given by react
--creating a custom hook is not a mandatory thing  but it is a good thing because that will make your code more modular and reusable and testable.
--Always initiate a custom hook name with "use". EX: useRestauranntMenu
--it is not mandatory to use the "use" keyword  or not necessary to use the capital letter for component name, if we don't follow it also the code works but, it is the induxtry standard that evevry developer is following to make the code more readable.

=chunking / lazy loading / dynamic building:
--for an industry level app, we'll have multiple features. if ewe build the application into one file then the app takes time to load and the size of the application become big and hence performance declines
-- to avoid this situation we use lazy loading concept here as we load the features on demand to achive this we use "Lazy()"
when you click on the feature module react will takes time to load that, so react renderer cancels it, to avoid this we use suspence component.
to see the impact of suspense at developer mode we can change the network to no throttling to slow networs.