//Controllers for HTML Prototypes

//Example
app.controller('exampleController', function($scope){

    this.title = ['Example Prototype', 'example_prototype'];
    this.description = "In this example we are going to walk through the process of working on a new prototype and the set of instructions that go with it.The instructions below are used for video recording reasons and are not used within the curriculum or being graded by the instructors."
    this.branch = "html_ex";
    this.protoId = 0;

    this.links = {
        Reading: {
            'Example Reading 1': 'http://www.w3schools.com/html/default.asp',
            'Example Reading 2': 'http://www.w3schools.com/html/default.asp'
        },
        Presentation: {
            'Example Slides 1': '#Example'
        },
        Video: {
            'Example Prototype Video': 'http://youtu.be/sTv5FArrVxU'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 1",
            link: "https://www.youtube.com/watch?v=FEktv4o7VGg",
            live: true
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ul class='left-border'><li><h4><a href='http://youtu.be/sTv5FArrVxU' target='_blank'>Watch This Video First</a></h4></li><li>This prototype is for example purposes only</li><li><b>DO NOT</b> actually complete this prototype</li><li>Only watch the video</li></ul>"
        },
        'Feature Set 1 - HTML Basics': {
            html: "<ol class='left-border'><li>Create a html file inside the example folder<ol class='nested-1'><li>Insert the basic HTML structure tags (html, head, body)<ul><li><i>Also know as a HTML skeleton</i></li></ul></li></ol></li><li>Add a header and <code>h1</code> tag with the text: <code>This is a test header</code></li><li>Add 5 content sections inside the appropriate tag to make a paragraph<ol class='nested-1'><li>inside the content sections add <i>Lorem Ipsum</i> text from here - <a href='http://www.lipsum.com/feed/html' target='_blank'>http://www.lipsum.com/feed/html</a><ul><li><a href='http://www.lipsum.com/' target='_blank'>What is Lorem Ipsum</a></li></ul></li></ol></li></ol>"
        },
        'Feature Set 2 - Basic Styling': {
            html: "<ol class='left-border'><li>Make the font size of the h1 tag equal to 28 pixels</li><li>Add a class: <code>test-class</code> to the content sections</li><li>Italicize the font of the first paragraph tag</li></ol>"
        }
    };
});

//html_fundamentals_1
app.controller('htmlFund1Controller', function(){

    this.title = ['HTML - Elements, Attributes and Comments', 'html_fundamentals_1'];
    this.description = 'This is the first prototype and will be covering some basic HTML skills including elements, attributes and comments.';
    this.branch = 'html_f1';
    this.protoId = 1;

    this.links = {
        Presentation: {
            'HTML Elements & Attributes': 'https://docs.google.com/presentation/d/1jHnfRkBVqiBw6GEa2mUR13fO468keu99NP_Befr8nmc/pub?start=false&loop=false&delayms=15000'
        },
        Video: {
            'HTML Fundamentals - Elements, Attributes and Comments': 'http://portal.learningfuze.com/node/1736#overlay-context=class/1691/week'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 2",
            link: "https://www.youtube.com/watch?v=FEktv4o7VGg",
            live: false
        }
    };

    this.features = {
        'Feature Set 1 - It begins': {
            html: "<ol class='left-border'><li>In PHP Storm:<ol class='nested-1'><li>Expand the lfz folder, if you haven't already<br><img src='assets/images/prototypes/html-fundamentals-1/1.png' alt=''></li><li>Go into your prototypes directory, then into your html_fundamentals_1 folder</li><li>Right click on the html_fundamentals_1 folder, click on \"new\", then on \"file\"<br> <img src='assets/images/prototypes/html-fundamentals-1/2.png' alt=''></li><li>Enter the name of the file: <b>index.html</b><br><img src='assets/images/prototypes/html-fundamentals-1/3.png' alt=''></li><li>Click <span class='label label-info'>OK</span></li></ol></li><li>Create a basic HTML skeleton, including:<ul><li>DOCTYPE</li><li>html</li><li>head</li><li>body</li></ul></li> <li>Test your output:<ol class='nested-1'><li>Open a browser (preferably Chrome)</li><li>In the URL (not the search bar) type <code>localhost:8888/lfz</code>. If your MAMP port is not 8888, enter the port appropriate for your system</li><li>Navigate through the displayed links to get to your prototypes/html_fundamentals_1 folder</li><li>Your index page will now display</li> <li><b>It will be blank</b></li></ol></li><li>Add content<ol class='nested-1'><li>In PHP Storm:<ol class='nested-2'><li>Between the <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code> tags add: <code>Hello, I am [your name]</code><ul><li>Don't put the quotes</li><li>Replace the <b>[your name]</b> with your name, without the brackets</li></ul></li></ol></li></ol></li>  <li>Check your code<ul><li>In Chrome<ol class='nested-1'><li>Refresh the page</li>  <li>See if your message appears <br><img src='assets/images/prototypes/html-fundamentals-1/4.png' alt=''> </li></ol></li></ul></li></ol>"
        },
        'Feature Set 2 - About Me': {
            html: "<ol class='left-border'><li>Create an opening and a closing <code>h1</code> tag like: <code>&lt;h1&gt; &lt;/h1&gt;</code><ol class='nested-1'><li>In between your <code>h1</code> tags add the following text: <code>Hello World</code></li></ol></li><li>Add a paragraph tag, and fill it with a short description about your past career. Don't forget the closing <code>p</code> tag!</li> <li>Add a second paragraph tag, fill it with a short description of what you want to do with your LearningFuze education.</li></ol>"
        },
        'Feature Set 3 - Got Skills?': {
            html: "<ol class='left-border'><li>Create a new <code>h3</code> tag, below your existing code. Give it the text of: <code>Skills</code><ol class='nested-1'><li>Add a style attribute to your <code>h3</code> tag</li><li>Give it a value of <code>color: blue</code></li><li><b>Ex:</b> <code>&lt;h3 style=\"color: blue;\"&gt;</code></li></ol></li><li>Add 5 skills that you have, each inside its own <code>p</code> tags</li></ol>"
        },
        'Feature Set 4 - Any comments?': {
            html: "<ol class='left-border'><li>Create comments before each of your elements, describing the purpose of that paragraph that immediately follows</li></ol>"
        },
        'Hints': {
            html: "<ol class='left-border'><li>Test your code frequently, don't wait till you're done to test your code</li><li>Always have your console open while testing your code</li><li>Save and push to gitHub often: <ol class='nested-1'><li>Save as often as you can it's simple, quick and will save you a lot of headache</li><li>Push to Github after each feature set is successfully completed (at least)</li><li>Remember to push to your <code>" + this.branch + "</code> branch</li></ol></li><li>Don't forget to ask for help if you get stuck</li></ol>"
        }
    }
});

//html_fundamentals_2
app.controller('htmlFund2Controller', function() {

    this.title = ['HTML - Text Formatting & Styling', 'html_fundamentals_2'];
    this.description = "<p>Expand your HTML knowledge with basic formatting elements and adding basic inline CSS styling. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon).</p> <p><b>This prototype is based on the information that you obtained through the following resources (If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html_f2';
    this.protoId = 2;

    this.links = {
        Reading: {
            'HTML Headings': "http://www.w3schools.com/html/html_headings.asp",
            'HTML Paragraphs': "http://www.w3schools.com/html/html_paragraphs.asp"
        },
        Presentation: {
            'HTML Formatting & HTML Styling': 'https://docs.google.com/presentation/d/1_FMjUbUgJjMOroOlVG4wkkNO9tvgRDVQ7YS2dirDPEI/pub?start=false&loop=false&delayms=15000'
        },
        Video: {
            'Text Formatting and Basic Styles': 'http://portal.learningfuze.com/node/636'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 2",
            link: "https://www.youtube.com/watch?v=hfAS9RlCspE",
            live: false
        }
    };

    this.features = {
        'Getting Started Info': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included with this prototype it can be found in the <code>html_fundamentals_2</code> folder.</li></ol>"
        },
        'Feature Set 1 - Creating Structure and Content': {
            html: "<ol class='left-border'><li>Open the included <code>index.html</code></li><li>Create a basic HTML skeleton, including:<ul><li>DOCTYPE</li><li>html</li><li>head</li><li>body</li></ul></li><li>Make a heading and paragraph for each of the following sections<ol class='nested-1'></ol><li>About Me<ol class='nested-2'><li>Heading - About Me</li><li>Paragraph - Description about yourself</li></ol></li><li>Skills<ol class='nested-2'><li>Heading - Skills</li><li>Subheading (&lt;h3&gt;) - List out 3 skills that you want to learn</li><li>Paragraphs - Under each subheading give a brief description of why you want to acquire that skill</li></ol></li><li>Experience<ol class='nested-2'><li>Heading - Experience</li><li>Paragraph - Write a paragraph that describes any of your past job experience</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Adding Style': {
            html: "<ol class='left-border'><li>Add inline styling to the <b>About Me</b> header text to be your favorite color (other than black)</li><li>Make the <b>About Me</b> paragraph font size equal to 12px</li><li>Italicize the <b>Skills</b> header either by inline style or the use of formatting elements</li><li>Change all the subheadings in <b>Skills</b> to a color other than black</li><li>Add the font family of <b>Arial</b> to the <b>Experience</b> paragraph</li><li>Add a background color of <b>lightgray</b> to the <b>Experience</b> paragraph</li></ol>"
        },
        'Feature Set 3 - Research': {
            html: "<ol class='left-border'><li>Using google, try to figure out how to do the following:</li><li>Add an inline style to the <b>Description</b> paragraph that will increase the spacing between each line of the paragraph (make sure your description takes up multiple lines so you can see the effect)</li><li>Add a border around the <b>Experience</b> Heading without a bottom border that is the color red</li><li>Add a border around the <b>Experience</b> paragraph without a top border that is black<ul><li>Make this border not solid</li></ul></li></ol>"
        }
    };
});

//html_fundamentals_3
app.controller('htmlFund3Controller', function(){
    this.title = ["HTML Head - internal/external styles & links", "html_fundamentals_3"];
    this.description = "<p>Expand your HTML knowledge with better understanding of the head element and adding basic internal and external CSS styling. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon).</p> <p><b>This prototype is based on the information that you obtained through the following resources (If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html_f3';
    this.protoId = 3;

    this.links = {
        Reading: {
            'HTML Head': 'http://www.w3schools.com/html/html_head.asp',
            'HTML CSS': 'http://www.w3schools.com/html/html_css.asp'
        },
        Presentation: {
            'HTML Formatting & HTML Styling': 'https://docs.google.com/presentation/d/1VwhN-Kv3m-BXPIHFWIvVBH_8yGxDrMuDNGDki_NCpug/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Head and Style Tags & CSS Intro': 'http://portal.learningfuze.com/node/639'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 3",
            link: "https://www.youtube.com/watch?v=ifTfN_ZTsUk",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>In the terminal enter the following command:<ul><li><code>git checkout html_f2 html_fundamentals_2/index.html</code></li><li>The above command will pull the <code>index.html</code> file from your previous prototype</li></ul></li><li>An <code>index.html</code> file has been included with this prototype and can be found in the <code>html_fundamentals_3</code> folder</li><li>Copy and paste your code from <code>html_fundamentals_2</code> into the index file for this prototype<ol class='nested-1'><li>Remove all of the inline styles from the elements (in the new file only, <b>Do Not</b> alter the file from the previous prototype)</li></ol></li><li>Also included in the <code>html_fundamentals_3</code> folder is a <code>style.css</code> file that will be utilized in <i>Feature Set 3</i></li></ol>"
        },
        'Feature Set 1 - Head Elements': {
            html: "<ol class='left-border'><li>Within the head tags<ol class='nested-1'><li>Add 3 meta tags:<ol class='nested-2'><li>description</li><li>keywords</li><li>author</li></ol></li><li>Add a title tag with the text: <code>My Portfolio</code><ol class='nested-2'><li>Bookmark your <code>index.html</code> page (In Chrome: click on the star located on the left side of the address bar</li><li>Note when you bookmark your page the title content will show up in the actual bookmark</li></ol><li>Add an external Google font<ol class='nested-2'><li><code>&lt;link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'&gt;</code></li><li>Here is example CSS on using the added Google font:<ul><li><code>font-family: 'Montserrat', sans-serif;</code></li></ul></li></ol></li><li>Add a link tag for the included style sheet<ul><li><code>style.css</code></li></ul></li><li>Add style tags</li></ol></li></ol>"
        },
        'Feature Set 2 - Adding Style': {
            html: "<ol class='left-border'><li>Within the style tags<ol class='nested-1'><li>Make the <b>About Me</b> paragraph font size 12px</li><li>Italicize the skills header (with css)</li><li>Bold each skill title header but not the descriptions</li><li>Add the Google font family to the <b>Experience</b> header</li><li>Add a background color of green to the <b>Experience</b> paragraph</li><li>Change the <b>About Me</b> header text to your favorite color (other than black)</li></ol></li></ol>"
        },
        'Feature Set 3 - External Style Sheet': {
            html: "<ol class='left-border'><li>Add a <code>h1</code> element to the top of your page, give it the text: <code>Welcome to [your name]'s Portfolio Page</code><ol class='nested-1'><li>Replace [your name] with YOUR name and without the brackets</li><li>Change all the section headers to <code>h2</code> tags</li></ol></li><li>In the external stylesheet - <code>style.css</code><ol class='nested-1'><li>Make all <code>h3</code> tags blue</li>    <li>Set all heading elements font to the included Google font</li></ol></li></ol>"
        }
    };
});

//html_fundamentals_4
app.controller('htmlFund4Controller', function(){
    this.title = ['HTML - Links, Images & Lists', 'html_fundamentals_4'];
    this.description = "<p>Expand your HTML knowledge with better understanding of using links, adding images and creating lists. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon).</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html_f4';
    this.protoId = 4;

    this.links = {
        Reading: {
            'HTML Links': 'http://www.w3schools.com/html/html_links.asp',
            'HTML Images': 'http://www.w3schools.com/html/html_images.asp',
            'HTML Lists': 'http://www.w3schools.com/html/html_lists.asp'
        },
        Presentation: {
            'HTML Links, Images & Lists': 'https://docs.google.com/presentation/d/1BrpssbsEhd7NeIjQAMEXKq-HSGtmDXlN3-TS2bc4J0w/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'HTML Links, Images & Lists': 'http://portal.learningfuze.com/node/633'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 4",
            link: "https://www.youtube.com/watch?v=MimG2I4M3gY",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>The following files have been included with this prototype and can be found in the <code>html_fundamentals_4</code> folder<ol class='nested-1'><li><code>index.html</code></li><li><code>skills.html</code></li><li><code>style.css</code></li><li>And an <code>images</code> folder that contains<ul><li><code>example.jpg</code></li></ul></li></ol></li><li>In the terminal enter the following command:<ul><li><code>git checkout html_f3 html_fundamentals_3/index.html</code></li><li>The above command will pull the <code>index.html</code> file from your previous prototype</li>   </ul></li><li>Copy your code from the <code>html_fundamentals_3</code> and paste into the new <code>index.html</code> included with this prototype</li><li>Clear all the css between the <code>style</code> tags and delete the <code>style</code> tags</li><li>Make sure you have a link to the external style sheet <code>style.css</code></li><li>Update the title element to say: <code>My Portfolio - Home</code></li>   </ol>"
        },
        'Feature Set 1 - Additional Pages': {
            html: "<ol class='left-border'><li>In the <code>skills.html</code> file included in this prototype<ol class='nested-1'><li>Create a basic HTML skeleton</li><li>Copy the <code>head</code> section from the <code>index.html</code> file<ol class='nested-2'><li>Change the title element to say: <code>My Portfolio - Skills</code></li><li>Change any other relative data in the head section to fit your skills page</li></ol></li><li>Add a <code>h1</code> element to the top of your page that displays a title that fits your skills page</li></ol></li><li>Create a new file in the html_fundamentals_4 folder<ol class='nested-1'><li>Name the file <code>experience.html</code></li><li>Create a basic HTML skeleton</li><li>Copy the <code>head</code> section from the <code>index.html</code> file<ol class='nested-2'>        <li>Change the title to: <code>My Portfolio - Experience</code></li><li>Change any other relative data in the <code>head</code> section to fit the experience page</li></ol></li><li>Add a <code>h1</code> header at the top of your page that fits your experience page</li></ol></li></ol>"
        },
        'Feature Set 2 - Adding Navigation':  {
            html: "<h4>Do the following on all three pages</h4><ol class='left-border'><li>Add an unsorted list under the main heading on each page<ol class='nested-1'><li>Give the list a class of <code>nav</code></li><li>Add the following items to the list<ul><li>Home</li><li>Skills</li><li>Experience</li></ul></li><li>Each list item will be wrapped in an <code>&lt;a&gt;</code> tag to create a link to its corresponding page</li><ul><li><b>Example:</b> <code>&lt;li&gt;&lt;a href=\"index.html\"&gt;Home&lt;/a&gt;&lt;/li&gt;</code></li></ul></ol></li></ol>"
        },
        'Feature Set 3 - Adding an Image': {
            html: "<ol class='left-border'><li>Find or take a picture of yourself</li><li>Add the picture into the <code>images</code> folder</li><li>On your <code>index.html</code> page<ol class='nested-1'> <li>Add an <code>&lt;img&gt;</code> tag to the page between your <b>About Me</b> header and the description paragraph</li><li>Have the <code>&lt;img&gt;</code> tag link to your image in the <code>images</code> folder</li></ol></li></ol>"
        },
        'Feature Set 4 - Updating Your Content': {
            html: "<ol class='left-border'><li>On the <code>skills.html</code> page<ol class='nested-1'><li>Create a nested list with these three sections<ol class='nested-2'><li>Technical Skills    <ul><li><b>Example:</b> HTML, CSS, JavaScript, etc ...</li></ul></li><li>Technical Tools<ul><li><b>Example:</b> phpStorm, git, GitHub, etc ...</li></ul></li><li>Soft Skills<ul><li><b>Example:</b> Speak 5 languages, Management experience, Sales Experience, etc</li></ul></li><li>Give the list an ID of <code>skills-list</code></li><li>There will be a total of at least 9 skills (3 per section)</li></ol></li>    <li>On the <code>index.html</code> page delete the old skills section</li></ol></li><li>On the <code>experience.html</code> page<ol class='nested-1'><li>Create another nested list with at least three past jobs</li><li><b>Example:</b><ul><li>Name of place worked<ul><li>Job title</li><li>How long or dates you worked there</li><li>Job duties / responsibilities</li></ul></li></ul></li><li>Give the list an ID of <code>experience-list</code></li><li>On the <code>index.html</code> page delete the old experience section</li></ol></li><li>Example of a nested list<ul class='code'><li>&lt;ol id=\"skills-list\"&gt;<ul>    <li>&lt;li&gt;Technical Skills<ul><li>&lt;ul&gt;<ul><li>&lt;li&gt;HTML&lt;/li&gt;</li><li>&lt;li&gt;CSS&lt;/li&gt;</li></ul></li><li>&lt;/ul&gt;</li></ul></li><li>&lt;/li&gt;</li><li>&lt;li&gt;Technical Tools <ul><li>&lt;ul&gt;<ul><li>&lt;li&gt;phpStormL&lt;/li&gt;</li></ul></li><li>&lt;/ul&gt;</li></ul></li><li>&lt;/li&gt;</li></ul></li><li>&lt;/ol&gt;</li></ul></li><li><b>NOTE:</b> The list is not complete, it is just an example, it is up to you to finish it and add your own information</li></ol>"
        },
        'Feature Set 5 - Adding Styling': {
            html: "<h4>Do all the following in the included <code>style.css</code> file</h4><ol class='left-border'><li>For the home page (index.html)<ol class='nested-1'><li>Make the About Me paragraph font size equal to 12px</li><li>Change the About Me header text to be your favorite color (not black)</li><li>Center all content on the page</li><li>Give your image a set height</li><li>Using float, float your image to the left<ol class='nested-2'><li><b>Example:</b> <code>float: left;</code></li></ol></li></ol></li><li>For the experience page<ol class='nested-1'><li>Add the Google font family to the Experience header</li><li>Add a background color of your choosing to the experience section (not white)</li><li>Change the bullets or numbers on your Experience list to something other than the default</li></ol></li> <li>For the skills page<ol class='nested-1'><li>Add the Google font family to the Skills header</li><li>Change the text color of your <b>nested</b> list items<ul><li><i>Only change the inner list items - Your actual skills</i></li></ul></li></ol></li><li>For the <code>nav</code> list on all pages<ol class='nested-1'><li>Remove the bullets</li><li>Make the items listed horizontally as opposed to vertically<ul> <li><i>Try using the display property</i></li></ul></li><li>Add some margin to space the list items out</li><li>Increase the font size of the list items</li></ol></li><li><b>All of the above will be done from your <code>style.css</code> file</b><ol class='nested-1'><li><b>DO NOT</b> use inline styles</li><li><b>DO NOT</b> use multiple style sheets, you only need one</li><li><b>DO</b> use classes and IDs to help target certain elements</li></ol></li></ol>"
        }
    }

});

//html_fundamentals_5
app.controller('htmlFund5Controller', function() {
    this.title = ['HTML - Layout Structure, Blocks & Design', 'html_fundamentals_5'];
    this.description = "<p>Expand your HTML knowledge with better understanding of HTML layout structure, blocks and design. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon).</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html_f5';
    this.protoId = 5;

    this.links = {
        Reading: {
            'HTML Blocks': 'http://www.w3schools.com/html/html_blocks.asp',
            'HTML Layout': 'http://www.w3schools.com/html/html_layout.asp',
            'HTML Lists': 'http://www.w3schools.com/html/html_lists.asp'
        },
        Presentation: {
            'HTML Structure Intent and Layout': 'https://docs.google.com/presentation/d/1wJU3BPRs8Bdr-frGc61ijv2Hf8QHF_CrMNCtNl8PFV0/pub?start=false&loop=false&delayms=15000',
            'HTML Horizontal Layout & Semantic Elements': 'https://docs.google.com/presentation/d/1AUaknmBg8MEVCxnakMf6jPnjVJxxHLfo0o5MifvilsQ/pub?start=false&loop=false&delayms=15000'
        },
        Video: {
            'Layout Structure and Design': 'http://portal.learningfuze.com/node/656'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Fundamentals 5",
            link: "https://www.youtube.com/watch?v=y4N9L0h3VvI",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><img src='assets/images/prototypes/html-fundamentals-5/layout-1.jpg' alt='' width='30%'><img src='assets/images/prototypes/html-fundamentals-5/layout-2.jpg' alt='' width='30%'><img src='assets/images/prototypes/html-fundamentals-5/layout-3.jpg' alt='' width='30%'><ul class='clean-list'><li>Make a folder for each layout, inside the <code>html_fundamentals_5</code> folder, and inside each folder make an <code>index.html</code> file. You will have a folder structure as follows:</li><ul><li><code>html_fundamentals_5</code><ul><li><code>layout1</code>   <ul><li><code>index.html</code></li><li><code>?</code></li></ul></li><li><code>layout2</code><ul><li><code>index.html</code></li><li><code>?</code></li></ul></li><li><code>layout3</code><ul><li><code>index.html</code></li><li><code>?</code></li></ul></li></ul></li></ul><li>The <b>?</b> represents any additional files that may be required</li></ul></ol>"
        },
        'Feature Set 1 - Layout 1': {
            html: "<ul class='left-border clean-list'><li>Using divs, create the <b>layout 1</b> example from above, <a href='https://drive.google.com/open?id=0BwjF2I7CBLDVZS1Say1wN2wwMHc' target='_blank'>Click Here</a> for pdf version<ol><li>Give each section an ID for that section<ul><li><code>header</code></li><li><code>main-content</code></li><li><code>footer</code></li></ul></li><li>In the <b>Header</b> section:<ol class='nested-1'><li>Make a menu utilizing an unordered list<ol class='nested-2'><li>li elements css: no bullet points</li><li>li elements css: display type of: <code>inline-block</code></li>    <li>Menu items will include:<ul><li>About Me</li><li>Skills</li><li>Experience</li><li>Contact Me</li></ul></li></ol></li></ol></li><li>In the <b>Main Content</b> section:<ol class='nested-1'><li>Put 3 paragraphs of <b>lorem ipsum</b></li></ol></li><li>In the <b>Footer</b> section:<ol class='nested-1'><li>Create a standard unordered list<ol class='nested-2'><li>Add a li that contains a phone number (it doesn't have to be your own)</li><li>Add a li that contains your email, the one you use for LearningFuze</li><li>Using CSS remove the bullet points</li></ol></li><li>Add (link) the following style sheet to your document<ul><li><code>https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css</code></li></ul></li><li>In the footer's ul element, inside the li with the phone number, add the following:<ul><li><code>&lt;i class=\"fa fa-mobile\"&gt;&lt;/i&gt;</code></li></ul></li><li>Put an appropriate icon into the email's li to designate its role<ul><li>Refer to the <a href='https://fortawesome.github.io/Font-Awesome/icons/' target='_blank'>Font Awesome Website</a> to find an appropriate icon</li></ul></li></ol></li></ol></li></ul>"
        },
        'Feature Set 2 - Layout 2': {
            html: "<ul class='left-border clean-list'><li>Using divs, create the <b>layout 2</b> example from above, <a href='https://drive.google.com/open?id=0BwjF2I7CBLDVNEpGU21pcUg0c3c' target='_blank'>Click Here</a> for pdf version<ol><li>Give each section an ID for that section<ul><li>header</li><li>main-content</li></ul></li><li>In the <b>Main Content</b> section:<ol class='nested-1'><li>Put 4 paragraphs of <b>lorem ipsum</b></li><li>Each of the four paragraphs will have a title relating to your header menu below<ul><li>About Me, Skills, etc</li><li>Inside each title, add an ID corrisponding to that section    <ul><li><b>Example:</b> <code>&lt;h3 id=\"skills\"&gt;Skills&lt;/h3&gt;</code></li></ul></li></ul></li></ol></li><li>In the <b>Header</b> section:<ol class='nested-1'><li>Make a menu utilizing an unordered list<ol class='nested-2'><li>li elements css: no bullet points</li><li>li elements css: display type of: <code>inline-block</code></li><li>Menu items will include:<ul><li>About Me</li> <li>Skills</li><li>Experience</li><li>Contact Me</li></ul></li><li>Each menu item will have an anchor tag<ul><li>The <code>href</code> will be set to the corrisponding section titile id from the <b>Main Content</b> section</li><li><b>Example:</b><code>&lt;li&gt;&lt;a href=\"#skills\"&gt;Skills&lt;/a&gt;&lt;/li&gt;</code></li><li>Make sure to include the <b>#</b>, this will tell the browser to look for a specific ID on the page</li></ul></li></ol></li></ol></li></ol></li></ul>"
        },
        'Feature Set 3 - Layout 3': {
            html: "<ul class='left-border clean-list'><li>Using divs, create the <b>layout 3</b> example from above, <a href='https://drive.google.com/open?id=0BwjF2I7CBLDVaDJ5T013R2ozeDg' target='_blank'>Click Here</a> for pdf version<ol><li>Give each section an ID for that section<ol class='nested-1'><li>Title</li><li>left-nav</li><li>main-content</li></ol></li><li>In the <b>Title</b> section:<ol class='nested-1'><li>Add a h1 header with a title of your choice</li></ol></li><li>In the <b>Left Nav</b> section:<ol class='nested-1'><li>Add a h3 tag that says: <code>Left Nav</code></li></ol></li><li>In  the <b>Main Content</b> section:<ol class='nested-1'><li>Add 4 paragraphs of <b>lorem ipsum</b></li><li>Add a form element after the <b>lorem ipsum</b></li><li>Add the following h4 tags (we'll get into inputs next week):<ul><li>Name</li><li>Message</li><li>Email</li><li>Submit</li></ul></li></ol></li></ol></li></ul>"
        }
    };
});

//html_forms
app.controller('htmlFormsController', function() {
    this.title = ['HTML Forms', 'html_forms'];
    this.description = "<p>This prototype will build from previous prototypes and introduce you to HTML Forms, how to create them and some of their functionality.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html-forms';
    this.protoId = 9;

    this.links = {
        Reading: {
            'HTML Forms': 'http://www.w3schools.com/html/html_forms.asp',
            'HTML Input Types': 'http://www.w3schools.com/html/html_form_input_types.asp'
        },
        Presentation: {
            'HTML Forms and Form Elements': 'https://docs.google.com/presentation/d/1zS60ycWEpxfgzc3NLDUnTw6zTUgHRjYpk4DaNdcmLn4/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'HTML Forms and Form Elements': 'http://portal.learningfuze.com/node/758'
        },
        'Related Project': {
            Portfolio: 'https://github.com/Learning-Fuze/portfolio#version-1-v1',
            mBoutique: 'https://github.com/Learning-Fuze/mboutique'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Forms",
            link: "https://www.youtube.com/watch?v=KGATmFo4UqQ",
            live: false
        }
    };

    this.features = {
        'Feature Set 1': {
            html: "<b>The following feature set is intentionally vague to encourage subject exploration</b><ol class='left-border'><li>Create a file named <code>form_1.html</code><ul><li>All code for Feature Set 1 will go here</li></ul></li><li>Create a <code>form</code> element<ol><li>Set the <code>action</code> attribute to:<ul><li><code>http://danielpaschal.com/learningfuze/reflect.php</code></li></ul></li><li>Set the <code>method</code> attribute to:<ul><li><code>get</code> -or- <code>post</code></li></ul></li><li>Add all the following inputs in between the opening and closing form tags</li></ol></li><li>Create 2 text inputs<ol><li>Give them a <code>background color</code></li><li>Change their <code>font family</code></li><li>Give them a <code>border color</code> (other than the default)</li><li>Give them a <code>drop shadow</code></li></ol></li><li>Create 1 text area</li><li>Create a group of 3 radio inputs<ol class='nested-1'><li>All three radio inputs will belong to the same group<ul><li>Only one will be able to be selected at once</li><li><input type='radio' name='fun' checked style='margin-right: 6px'><input type='radio' name='fun' style='margin-right: 6px'><input type='radio' name='fun'></li></ul></li><li>Make each radio input represent a favorite food</li><li>Your overall favorite food will be selected by default<ul><li><i>Hint:</i> You may need to Google this</li></ul></li><li>When the text next to each radio button is clicked, it will select the associated radio input</li></ol></li><li>Create a group of 4 checkboxes<ol class='nested-1'><li>The first three checkboxes will represent one of your favorite games. (use board games if you don't play any type of games)</li><li>The fourth checkbox will say: <code>I don't play games</code></li><li>The fourth checkbox will be <b>DISABLED</b><ul><li><i>Hint:</i> You may need to Google this</li><li><input type='checkbox' style='margin-right: 6px'><input type='checkbox' style='margin-right: 6px'><input type='checkbox' style='margin-right: 6px'><input type='checkbox' disabled></li></ul></li></ol></li><li>Create a select menu<ol class='nested-1'><li>The menu will have at least 4 options</li><li>Each option will be the title of a movie</li><li>You will be able to select multiple options at the same time<ul><li><i>Hint:</i> You may need to Google this</li></ul></li></ol></li><li>Create a button<ol class='nested-1'><li>The button will say <code>Submit Form</code></li></ol></li><li>Test your form<ol class='nested-1'><li>Fill out your form then click the <span class='label label-default'>Submit Form</span> button</li><li>You will be redirected to a new page that displays the data from your form</li><li>If you don't see your data verify the form attributes are set properly. Refer to step 2</li></ol></li></ol>"
        },
        'Feature Set 2': {
            html: "<b>The following feture set is intentionally vague to encourage subject exploration</b><ol class='left-border'><li>Create a new html file named <code>form_2.html</code><ul><li>Duplicate the following form in the <code>form_2.html</code> file</li></ul><a href='assets/images/prototypes/html-forms/form3.png' target='_blank'><img src='assets/images/prototypes/html-forms/form3.png' alt='If you see this contact an instructor (Form 3)'></a></li></ol>"
        }
    }
});

//html_responsive_design
app.controller('htmlResponsiveDesignController', function() {
    this.title = ['HTML Responsive Design', 'html_responsive_design'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to responsive design. You will be modifying a form to scale properly onto a mobile device.</p><p>This prototype is based on the information that you obtained through th  e following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'html_responsive';
    this.protoId = 10;

    this.links = {
        Reading: {
            'HTML Reponsive Web Design': 'http://www.w3schools.com/html/html_responsive.asp'
        },
        Presentation: {
            'HTML & CSS: Responsive & Mobile First': 'https://docs.google.com/presentation/d/1FmWNwcic1srHhDNya4nJfwXZMZ6xPPskex21Bdu3gVM/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'HTML & CSS: Responsive & Mobile First': 'http://portal.learningfuze.com/node/787'
        },
        'Related Project': {
            Portfolio: 'https://github.com/Learning-Fuze/portfolio#version-1-v1',
            'mBoutique Contact Page': 'https://github.com/Learning-Fuze/mboutique/tree/assignment_4'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML Responsive Design",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><b>Dev Tool Instruction - This is Important</b></li><li>Use dev tools to see mobile views in the browser<ul><li><a href='#Tutorials-Dev-Tools-Mobile-View' target='_blank'>View Tutorial Here</a></li></ul></li></ol>"
        },
        'Feature Set 1 - Basic Responsive Layout': {
            html: "<ol class='left-border'><li>Create an <code>index.html</code> file</li><li>Add the following to your file:<ol class='nested-1'><li>A graphic that is <code>50%</code> the width of the page</li><li>Float the graphic right</li><li>Add two paragraphs of <a href='http://www.lipsum.com/' target='_blank'>lorem ipsum</a><ol class='nested-2'><li>Ensure that the paragraphs are sitting to the left of the image</li><li>The font size will be responsive to the page and will scale as necessary</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Responsive Form': {
            html: "<ol class='left-border'><li>Create a file named <code>form_2.html</code><ol class='nested-1'><li>Copy your code from the <b>html_forms</b> prototype - <code>form_2.html</code> file<ol class='nested-2'><li><b>Option 1:</b> Open GitHub in your browser and navigate to <b>YOUR</b> prototypes repo and switch to the <code>html-forms</code> branch. Locate the <code>form_2.html</code> file, click on it to view the code. Select all the code and copy it then paste it into the <code>form_2.html</code> file for <b>this</b> prototype</li><li><b>Option 2:</b> In your console do the following command<ul><li><code>git checkout html-forms html_forms/form_2.html</code> then press <kbd>Enter</kbd></li><li>The file will now be in the <code>html_forms</code> folder</li><li>Move the file into the <code>html_responsive_design</code> folder</li></ul></li></ol></li></ol></li><li>In the head section add the following meta tag:<ul><li><code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code></li></ul></li><li>In your <code>CSS</code> create a <b>Media Query</b><ul><li>Set the Media Query to the iPhone6 width of <code>375px</code></li><li><b>Example:</b> <code>@media sceen and (max-width: 375px)</code></li></ul></li><li>Within your media query add the necessary CSS to make your form do the following:<ol class='nested-1'><li>All inputs will be in a single column</li><li>All inputs will be nearly the full width of the view port, with some side gutters (including the button)</li><li>The form will still be viewable in its original state if the screen is over <code>375px</code> wide</li></ol></li></ol><h4>Example Images</h4><ol class='left-border clean-list'><li><b>Original view:</b><a href='assets/images/prototypes/html_css_responsive/form3.png'><img src='assets/images/prototypes/html_css_responsive/form3.png' alt='Contact an instructor if you see this (Form-3 original)'></a></li><li><b>iPhone6 Dev Tool view:</b><a href='assets/images/prototypes/html_css_responsive/form3-browser-mobile.png'><img src='assets/images/prototypes/html_css_responsive/form3-browser-mobile.png' alt='Contact an instructor if you see this (Form-3 dev tools view)'></a></li><li><b>Close up mobile view:</b><a href='assets/images/prototypes/html_css_responsive/form3-mobile.png'><img src='assets/images/prototypes/html_css_responsive/form3-mobile.png' alt='Contact an instructor if you see this (Form-3 mobile close up)'></a></li></ol>"
        }
    }

});

//html_one_card_proto
app.controller('htmlOneCardController', function() {
    this.title = ['HTML <br> One Card Proto', 'HTML One Card Proto'];
    this.description = "<p>This prototype demonstrates a possible way to set up the cards for the Memory Match project.</p>";
    this.branch = 'html_one_card';
    this.protoId = 31;

    this.links = {
        Presentation: {},
        Video: {}
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "HTML One Card Proto",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>For our examples, we will use the following urls for images. You can change them if you wish.</li><li>back image:<ul><li>cardback-rankedladder.png</li></ul></li><li>front image:<ul><li>afp-cute-puppy.jpg</li></ul></li></ol>"
        },
        'Feature Set 1 - Layout 1 - Create a single card with simple animation': {
            html: "<ol class='left-border'><li>Create a file, fs1.html, put the items for Feature Set 1 within it.</li><li>Create a container div that will hold all cards. Give it an id of 'game_area'<ul><li>Will fill all available space, vertically and horizontally</li></ul></li><li>Create a single card container that will hold the front and back faces of a card.<br><ul><li>Will fill enough space horizontally so that, with maximum available space, 6 cards fit on a single line.Please note that the card container only holds one of those cards</li></ul></li><li>Create a card front face and card back face within that container.<br><ol class='nested-1'><li>There are many ways you can do this.Find a way that works best for you.</li><li>The front card face will display the \"front image\" from above.</li><li>The back card face will display the \"back image\" from above.</li><li>Both the back and front will be one on top of the other</li><li>The \"back image\" face will be visible, hiding the \"front image\" face.</li><li>The \"back image\" face will completely overlap the \"front image\" face.</li></ol></li><li>Add hover functionality via CSS:<ol class='nested-1'><li>On hover of the card container</li><li>cause the back face to disappear.Don't worry about animation, this will be for the next feature set.</li></ol></li><li class='clean-list'><a href='assets/images/prototypes/html-1-card-proto/side_by_side.png' target='_blank'><img src='assets/images/prototypes/html-1-card-proto/side_by_side.png' style='max-width:100%;'></a></li></ol>"
        },
        'Feature Set 2 - Layout 2 - Create a single card with rotate animation': {
            html: "<ol class='left-border'><li>Create a file, fs2.html, and put the requisite code in it to satisfy Feature Set 2</li><li>Use the layout / structure you created for Feature Set 1 and duplicate it in fs2.html</li><li>Alter the CSS hover effect so that, on hover, the card appears to rotate, revealing the \"front image\" face, hiding the \"back image\" face</li><li>hints:<ol class='nested-1'><li>you probably will need to preemptively flip one of the faces, like you would expect to arrange two sides of a piece of paper</li><li>perspective can be helpful</li><li>don't forget about duration</li><li>For added fidelity, make sure each face is rotating in a way that looks realistic</li><li>If you don't specific, the back side, or \"backface\" of an image will be visible unless you hide it.</li></ol></li></ol>"
        },
        'Feature Set 3 - Layout 3': {
            html: "<ol class='left-border'><li>Create a file, fs3.html, to contain the version for this prototype</li><li>Copy your code from fs2.html</li><li>Duplicate your card container such that your cards are side by side, with an appropriate spacing between them if desired.<ol class='nested-1'><li>At max, will be 6 cards wide by 3 cards high.</li><li>Will be responsive to resizing.</li><li>All cards will be hover functional still, without animations spilling over to other cards inadvertently </li></ol></li><li class='clean-list'><a href='assets/images/prototypes/html-1-card-proto/all_cards.png' target='_blank'><img src='assets/images/prototypes/html-1-card-proto/all_cards.png' style='max-width:100%;'></a></li></ol>"
        }
    }

});