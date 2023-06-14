import React from 'react';

function TopicsPage() {
    return (
        <>
            
            <h2>Web Dev Concepts</h2>
    <nav className="concepts">
        <a className="localNav" href="#webServers">Web Servers</a>
        <a className="localNav" href="#frontendDesign">Frontend</a>
        <a className="localNav" href="#optimizingImages">Images</a>
        <a className="localNav" href="#cascadingStylesheets">CSS</a>
        <a className="localNav" href="#forms">Forms</a>
        <a className="localNav" href="#express">Express</a>
        <a className="localNav" href="#javaScript">JavaScript</a>
        <a className="localNav" href="#documentObjectModel">DOM </a>
    </nav>
    
            
            <article className="learnedHeaders" id="webServers" >
                <h3>Web Servers</h3>
                <p className="learnedParagraphs">
    An <strong>index</strong> is what most web servers are configured to as the designated "homepage".
    The web application is configured to return this file whenever a GET request is received from the URL.
    This is the page that is shown if the user doesn't specify which page they want to see when requesting a site.
                </p>
                <p className="learnedParagraphs">
    The difference between the file's details on the <strong>web server</strong> versus the <strong>local computer</strong> is that the requested URL 
    is different. When it is on the web, it has to use the <strong>HTTPS</strong> protocol and has to find the host name through the <strong>DNS</strong>.
    If the file is on the local computer, the URL is a few sub folders that links to the file with the initial scheme of file.
    When the file is viewed on the web server, the <strong>Response and Request Headers</strong> have more name:value pairs.
    The only information in the local file response headers is: content-type and last-modified.        
                </p>
                <p className="learnedParagraphs">
    The status is 200 for the favicon.ico because the <strong>request</strong> succeeded, and the <strong>response</strong> body has the required information. The      
    My Inspector tool is not showing any main.css and main.js files because I have not created those files, so there is no reason that they would appear.
                </p>
                <p className="learnedParagraphs">
    The parts of the URL to my file are the <strong>scheme</strong> which is the protocol: "HTTPS", then the <strong>subdomains</strong> "web" and "engr". Next, the <strong>host domain</strong> is "oregonstate.edu".
    Lastly, we have the <strong>path to the resource</strong> "/~gilgerj/a1-gilgerj/". 
                </p>
            </article>
            <article className="learnedHeaders" id="frontendDesign">
                <h3>Frontend Design</h3>
                <p className="learnedParagraphs">
    <strong>Frontend Design</strong> is about making an experience for a user that suites their needs. It involves all aspects of a user interface to the style and way information is presented to the user.
    The most important thing that a user is looking for when it comes to design is <strong>Usability</strong>, which is the measure of the quality of their experience using the platform.
                </p>
                <dl className="learnedParagraphs">
                    <dt><strong>Effective</strong></dt>
                    <dd>The website works correctly and accurately at helping the user meet their goals.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>The website performs tasks for the user with the least number of steps and allows the user to get the results they want quickly.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>The website is user-friendly and allows the user to locate their goal by clicking and searching the website easily.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>The website does not have any accessibility and availability issues. Learn how a user could make errors and implement tools and ways to help them avoid errors and escape roadblocks easily.</dd>
                    <dt><strong>Enjoyable or Engaging</strong></dt>
                    <dd>The website fits the needs of the user, and its design makes the user want to keep using the product.</dd>
                </dl>
                <p className="learnedParagraphs">
    The purpose of <strong>page layout tags</strong> is to organize the contents of the page into <strong>block-level</strong> elements. These elements section the contents of the webpage into more readable chunks for the user 
    and machines. <strong>Page layout blocks</strong> help machines (such as search engine robots and screen readers) to understand which area of the page includes which components. A typical page
    includes header, nav, main, section, article, and footer tags.
                </p>
                <p className="learnedParagraphs">
    <strong>Anchors</strong> link one content page to another. The <strong>href</strong> attribute is used to specify the URL where the anchor link will take the user. An anchor can also link to specific locations
    within a document and can be used to locate a certain element within a page.
    The difference between a navigation tag is that navigation tags don't contain links themselves but contain links within them and are used to navigate different pages. 
                </p>
            </article>
            <article className="learnedHeaders" id="optimizingImages">
                <h3>Optimizing images</h3>
                <p className="learnedParagraphs">
     The 6 major specifications of images for the web are a <strong>Descriptive file name</strong> because it improves search engine optimization and help search engine bots to categorize images for users. Secondly, we want to
     have a <strong>Small file size</strong> to help reduce the load time of images for the user to see. A low resolution device does not need a high resolution image. Third, we want <strong>Exact Dimensions</strong> to fit the images inside the web page.
     Fourth, we require the <strong>Correct file format</strong> because we don't want to produce the wrong type of image because that could cause scalability and loading time issues. Each file is intended for specific uses, such as .gif being used for line-art graphics and .jpgs for photographs.
     Fifth, we want <strong>reduced resolution</strong> because this helps with load time, since most monitors only render between 72 and 300 pixels per inch. Lastly, <strong>color mode</strong> is used to optimize images. We use RGB for most file formats and indexed for .gif format.       
                </p>
                <p className="learnedParagraphs">
     The file formats that are most appropriate for photos are .jpg and .webp, as they can compress down to small file sizes and remain rectangular. The formats we use for line-art are .gif and .png files, as they have transparent backgrounds. PNG has an alpha channel, which allows for smooth edges and more detail in the image.                 
                </p>
            </article>
            <article className="learnedHeaders" id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p className="learnedParagraphs">
     The main reason to incorporate stylesheets in websites and apps is to improve usability, readability, legibility, and adhere to brand requirements. It does this by allowing you to adjust color, text, size, style, and layout of every element that we describe in HTML.                
                </p>
                <p className="learnedParagraphs">
     The 5 ways to incorporate styles are: <strong>Externally</strong> by linking an external reference sheet. Second, we can have it <strong>embedded</strong> within the HTML tag "style". 
     Third, we can put it <strong>Inline</strong> within an element. Fourth, we can use <strong>JavaScript template literals</strong> within a JavaScript function. Fifth, we can add style through <strong>regular JavaScript</strong> by manipulating the Document Object Model. The main reason we would use anything other than an
     external file would be for one-off style changes.          
                </p>
            </article>
            <article className="learnedHeaders" id="forms">
                <h3>Forms</h3>
                <p className="learnedParagraphs">
    In order for forms to be considered accessible, we want them to <strong>provide clear instructions</strong> above and in the form so that people know what they are supposed to do. We also need to <strong>let users know why</strong> we are gathering the data. For instance, if 
    someone was trying to subscribe to a newsletter, we would want them to know we want their email in order to reach out to them. Next, we need to <strong>set the first field to autofocus</strong>. This is to help users start typing out the form without having to click on it.
    Next, we want to <strong>ensure each form control can be filled in using the keyboard</strong> so that people can fill out the form without use of a mouse or trackpad. We also want to <strong>add tab indexing to complex forms</strong>,
    This helps to ensure that the user fills out each piece of data we want. Lastly, we want to <strong>ensure validation messages are screen readable</strong>. This is to make it easy for the user to identify any errors in their input and easily resolve the problem.
                </p>
                <p className="learnedParagraphs">
    The first major tag for forms is <strong>form</strong>, as it has two important attributes. The first one is <strong>action</strong>, which specifies the location to which the form should be sent when it is packaged up. The second being <strong>method</strong>,
    which is used to specify the HTTP method in which the form is sent. The typical values are <strong>GET</strong> and <strong>POST</strong>. The next major tag is <strong>label</strong>, which is used to help the user understand the purpose of their data entry. The
     <strong>for=""</strong> attribute is added, so it matches up with the input type's ID attribute. The next essential form tag is <strong>input</strong>. This allows the user to input data. The attribute 
     <strong>type=""</strong> changes how the input is displayed and used. It is also critical when using inputs to have a <strong>name=""</strong> attribute. When data is submitted, this is used on the server to know which part of the form each data entry is correlated with.  
                </p>
                <p className="learnedParagraphs">
    The major things to improve usability when adjusting form style is to notify and guide the user easily through the form. We want to accommodate for arthritic hands and big fingers by increasing font size and adding padding. We also want to keep each group of labels and inputs separated to reduce clutter.
    Furthermore, we can do this by adding margins and padding on the <strong>fieldset</strong> tags, and we can make prompts easier to read by adjusting the <strong>legend</strong> tag.
    We also want to create outlines of required information so that the user can see which data they need to fill out. It is also useful to notify the user when the data they enter is correct by adjusting the border color. 
                </p>
            </article>
            <article className="learnedHeaders" id="express">
                <h3>Express</h3>
                <p className="learnedParagraphs">
    The three technologies are Node, npm, and Express. <strong>Node.js</strong> is a runtime environment for developing server-side and networking applications. It also provides a large library of JavaScript modules, which eases the development of web applications.
    <strong>NPM</strong> stands for node package manager. It is an <strong>online repository</strong> for publishing Node.js packages, and it is a <strong>command-line utility</strong> that can install packages from the repository and manage the dependencies
    we want in our projects. <strong>Express</strong> is a framework which provides <strong>application programming interface's</strong> (API's) that web applications need to do. Express allows us to control data and define the ports and routes that data will take.
    We can also add static files and create templates that build responses of data the user has entered through express. All of these technologies are used to improve the development process, making it faster and easier to do.           
                </p>
            </article>
            <article className="learnedHeaders" id="javaScript">
                <h3>JavaScript</h3>
                <p className="learnedParagraphs">
The main data types in JavaScript are <strong>number, Boolean value, string, symbol, special values (undefined and null), and an object.</strong>
The only non-primitive type of values in JavaScript are objects. An <strong>object</strong> is a set of <strong>name-value</strong> pairs. These pairs are also called <strong>properties</strong> of the object.
We can create, read, update, and delete properties of the object. An <strong>array</strong> in JavaScript is an object whose properties names are the string, "0", "1", "2", etc.
JSON stands for <strong>JavaScript Object Notation</strong> and is used for exchanging data between applications. Using JSON we can map an object in a program to a string in the JSON format, and we can create an object in a program from a string
in the JSON format. Conditionals in JavaScript are converted to Boolean values, which means we should explicitly produce either true or false, instead of relying on the automatic conversion. Two sets of equality operators are used to check whether operands are either strict or loosely equal.
Loops in JavaScript are used for many purposes. <strong>For</strong> statements are used to execute a block of code a certain number of times. The <strong>for of</strong> loop is used to iterate over the elements of an iterable value. The <strong>for in</strong> loop is used to iterate over the properties of
an object. <strong>Object-oriented programming</strong> is based on objects being the main way to store data. The key features of an object are <strong>identity, state</strong>, and <strong>behavior</strong>.
Functional programming uses <strong>functions</strong> in order to create software. Functions in JavaScript are <strong>first-className</strong> values. This means that we can assign functions to variables, define functions that receive other functions as arguments, and 
defined functions that return functions.
                </p>
            </article>
            <article className="learnedHeaders" id="documentObjectModel">
                <h3>Document Object Model</h3>
                <p className="learnedParagraphs">
The <strong>Document Object Model</strong> (DOM) is a visual and interactive representation of a web page's structure. 
The way it is displayed is in a <strong>tree data structure</strong>.
The reason that we would update the DOM is so that when users interact with your web page, 
they get customized information and layouts according to what they want altered. This is done without having to refresh the page by using JavaScript and Express. 
It allows the user to interact with your webpage dynamically. For example, the <strong><a href="/staff">"Staff"</a></strong> page on this website allows the user to
 import randomly generated user information into a table. The reason we would want to test DOM changes using random data is to get a visual on how the information 
 will be displayed which allows the developer to make alterations depending on who would be using the webpage.
                </p>
            </article>
         </>
    );
}

export default TopicsPage;