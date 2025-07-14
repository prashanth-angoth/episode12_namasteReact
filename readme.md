here in this episode we have learnt regarding the tailwind css framework.
to install the tailwindcss we need two packages.
    1. tailwindCss, 2.post css 

postcss is a tool for transforming css with javascript
tainwind uses postCss in the background to apply the styling.
 once you install the packages and do the npm tailwind init, tailwind.config.js file gets creates in the application.
  after that, we have to create the .postcssrc file in your root project.

for the parcel bundler we have to follow the tailwind css installation from documentation. (for me v4.1 was not working for me so I used the older version and it worked for me i.e version3)

parcell will use postcssrc to understand the tailwind, and also it is a way to understand what is written in tailwind.

follow all the installation steps suggested by doc.

tailwind css gives you classnames automaticallyfor every css that you would want to write into your app.

there is one extension tool in vs code which help us to easy to find the class names with auto suf=ggestions, so install it and download it.

in tailwind css if we don't have paricular value suggestion for "px", we can proide those values with the help of sqaure brackets[]. ex : m-[250px];

it is a very light framework .