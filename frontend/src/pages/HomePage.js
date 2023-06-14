import React from 'react';

function HomePage() {
    return (
        <> 
            <h2>Welcome to my MERN Stack Website</h2>
            <article>
            <p id="home">
                This website is a project that displays many learned objectives. This involves use of the MERN stack. I am 
                using <a href='https://www.mongodb.com/'>MongoDB</a> as my database management system. <a href='https://nodejs.org/en'>Node</a> and <a href='https://expressjs.com/'>Express</a> are used for the backend development. For the frontend I am using
                the <a href='https://react.dev/'>React</a> framework which also incorporates HTML and CSS to display text and make the website visually appealing. </p>
            <p id="home">
                Throughout each page there are examples of React icons and <a href='https://fonts.google.com/'>Google Fonts</a> being used. I have also optimized the images in my gallery page
                to reduce the amount of data needed to display the images. I am using <a href='https://mongoosejs.com/'>Mongoose</a> to manage the data between the database and the objects in my application.
                All of these technologies I am using also require the use of JavaScript language.
                
        
            </p>
            </article>
        </>
    )
}

export default HomePage;