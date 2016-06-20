//js_primitive_data_types
app.controller('jsPrimDataTypesController', function() {
    this.title = ['JavaScript Intro<br> Primitive Data Types &amp; Assignments', 'js_primitive_data_types'];
    this.description = "<p>This prototype is designed to introduce you to primitive data types in JavaScript, to demonstrate how they are used and show how they can be manipulated.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_primData_types';
    this.protoId = 13;

    this.links = {
        Reading: {
            'JavaScript Assignment': 'http://www.w3schools.com/js/js_assignment.asp',
            'JavaScript Data Types (up to JS Numbers section)': 'http://www.w3schools.com/js/js_datatypes.asp'
        },
        Presentation: {
            'JavaScript Primitive Data Types & Assignments': 'https://docs.google.com/presentation/d/1tPMX-if5tYg9rfb_elm53dqlILVGqJ3qQOxX3KPQkhA/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to JS: Primitive Data Types & Assignments': 'http://portal.learningfuze.com/node/985'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Primitive Data Types",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make an <code>index.html</code> file inside the <code>js_primitive_data_types</code> folder</li><li>Create a basic <code>HTML</code> DOM structure        <ul><li><code>DOCTYPE</code> tag</li><li><code>HTML</code> tag</li><li><code>head</code> tag</li><li><code>body</code> tag</li></ul></li><li>Add <code>script</code> tags between your <code>head</code> tags</li></ol>"
        },
        'Feature Set 1 - Creating Variables': {
            html: "<ul class='left-border'><li class='clean-list'><b>Create three variables inside your <code>script</code> tags</b><ol><li>Create a variable <code>firstName</code>, set it equal to your first name</li><li>Create a variable <code>lastName</code>, set it equal to your last name</li><li>Create a variable <code>age</code>, set it equal to your age</li></ol></li></ul>"
        },
        'Feature Set 2 - Concatenation & console.log()': {
            html: "<ul  class='left-border'><li class='clean-list'><b>Concatenation</b><ul><li>Create a variable <code>output1</code><ul><li>Using your variables from <i>Feature Set 1</i> and concatenation, create a string that resembles the example string below and store it in <code>output1</code></li><li><b>String Example:</b> \"First name: Marry, Last Name: Smith, Age: 57.\"</li>    </ul></li></ul></li><li class='clean-list'><b>console.log()</b><ul><li>Use <code>console.log()</code> in your script tag to log out your <code>output1</code> variable to the console</li></ul></li>   </ul>"
        },
        'Feature Set 3 - Adding Variables Together': {
            html: "<ul class='left-border'><li class='clean-list'><b>Two more variables:</b><ul><li>Create two more variables<ol><li>Create a variable <code>x</code>, set it equal to any whole number between 1-100</li><li>Create a variable <code>y</code>, set it equal to any <i>DIFFERENT</i> whole number between 1-100</li></ol></li></ul></li><li class='clean-list'><b>Log out some more info</b>   <ul><li>Create three more output variables:<ol><li><code>output2</code></li><li><code>output3</code></li><li><code>output4</code></li></ol></li><li>Set your output variables as follows:</li>    <li>As an example I'll choose <code>x=12</code> and <code>y=55</code><ul><li><b>output2</b> = the total of <code>x</code> and <code>y</code><ul><li><i>Example output:</i> <code>67</code></li></ul>   </li><li><b>output3</b> = <code>x</code> and <code>y</code> concatenated<ul><li><i>Example output:</i> <code>\"1255\"</code></li></ul></li><li><b>output4</b> = Text concatenated with the total of <code>x</code> and <code>y</code><ul><li><i>Example output:</i> <code>\"The total of 12 and 55 is 67\"</code></li></ul></li></ul></li><li>Using three seperate <code>console.log()</code>s, log out the three output variables</li></ul></li></ul>"
        }
    }

});

//js_special_data_types
app.controller('jsSpecDataTypesController', function() {
    this.title = ['JavaScript Intro<br> Special Data Types', 'js special data types'];
    this.description = "<p>This prototype is designed to build on the knowledge gained from primitive data types and introduce you to special data types.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_specData_types';
    this.protoId = 14;

    this.links = {
        Presentation: {
            'JavaScript Special Data Types': 'https://docs.google.com/presentation/d/1qWUl42RIF4SmbK5COt5Q6bcQD7WpNQBHpPUcU7rBqGI/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to JS: Special Data Types': 'http://portal.learningfuze.com/node/991'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Special Data Types",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make an <code>index.html</code> file inside the <code>js_special_data_types</code> folder</li><li>Create a basic <code>HTML</code> DOM structure        <ul><li><code>DOCTYPE</code> tag</li><li><code>HTML</code> tag</li><li><code>head</code> tag</li><li><code>body</code> tag</li></ul></li><li>Add <code>script</code> tags between your <code>head</code> tags</li></ol>"
        },
        'Feature Set 1 - Create Some Variables': {
            html: "<ul class='left-border'><li class='clean-list'><b>Inside your script tags create the following variables</b><ol><li>Declare a variable <code>x</code>, set the value to <code>null</code></li><li>Declare a variable <code>y</code>, don't set the value to anything<ul><li><i>Example:</i> <code>var y;</code></li></ul></li><li>Declare a variable <code>z</code>, set the value to any string</li></ol></li></ul>"
        },
        'Feature Set 2 - True or False': {
            html: "<ol class='left-border'><li>Create three variables<ol class='nested-1'><li><code>output1</code></li><li><code>output2</code></li><li><code>output3</code></li></ol></li>           <li>Compare the values of <code>x</code> and <code>y</code> and store the result in <code>output1</code><ul><li><i>Example:</i> <code>var output1 = x == y</code></li></ul></li><li>Compare the values of <code>x</code> and <code>z</code> and store the result in <code>output2</code><ul><li><i>Example:</i> <code>var output2 = x == z</code></li></ul></li><li>Compare the values of <code>y</code> and <code>z</code> and store the result in <code>output3</code><ul><li><i>Example:</i> <code>var output3 = y == z</code></li></ul></li><li>Log out your three variables, make sure to identify each output<ul><li><i>Example:</i> console.log(\"My output1\", output1)</li><li>\"My output1\" is a string that will be displayed with your variable so you can identify each output in the console</li></ul></li></ol>"
        },
        'Feature Set 3 - <code>typeof</code>': {
            html: "<ol class='left-border'><li>Declare three more variables<ol class='nested-1'><li><code>output4</code></li><li><code>output5</code></li><li><code>output6</code></li></ol></li>       <li>Using <code>typeof</code> set your output variables to the following strings:<br><b>NOTE: </b>Don't just type the strings out, use <code>typeof</code><ol class='nested-1'><li>output4 = <code>x is an object</code></li>    <li>output5 = <code>y is undefined</code></li><li>output6 = <code>z is a string</code></li></ol><b>Example:</b> <code>var output9 = \"m is an \" + typeof m</code></li>   <li>Log out your three variables, make sure to identify each output</li></ol>"
        },
        'Console Exercise': {
            html: "<ul class='left-border'><li class='clean-list'>After you have successfully created the above feature sets try the following lines in your console on your page:<ol><li>Type: <code>x</code> press <kbd>Enter</kbd></li><li>Type: <code>y</code> press <kbd>Enter</kbd></li><li>Type: <code>z</code> press <kbd>Enter</kbd></li><li>Type: <code>x == y</code> press <kbd>Enter</kbd></li><li>Type: <code>x === y</code> press <kbd>Enter</kbd></li><li>Type: <code>x == w</code> press <kbd>Enter</kbd></li></ol></li><li class='clean-list'>Notice the difference between <code>undefined</code> and it throwing an <code>uncaught reference error</code> when trying to use a variable that hasn't been declared at all.</li></ul>"
        }
    }
});

//js_comparisons_and_conditionals
app.controller('jsCompCondController', function() {
    this.title = ['JavaScript Intro<br> Comparisons and Conditionals', 'js comparisons and conditionals'];
    this.description = "<p>This prototype is designed to build on the knowledge gained from primitive data types and speecial data type prototypes, and introduce you to making comarprisons and conditional statements in JavaScript.</p><p>This prototype will start building simple concepts toward a number guessing game where the computer will generate a random number and the user will try to guess the number. Ultimately the game will give you feedback on how close you are to the randomized number with each guess. For the sake of this prototype all of the numbers will be hard coded and we will just start building some of the beginning concepts for the game.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_comp_cond';
    this.protoId = 15;

    this.links = {
        Reading: {
            'JavaScript Comparison and Logical Operators (w3schools)': 'http://www.w3schools.com/js/js_comparisons.asp'
        },
        Presentation: {
            'JavaScript Intro - Comparisons and Conditionals': 'https://docs.google.com/presentation/d/1Ol8VhVU-0UghSGwpJCz8VkQeAQUg_s8vCR91z2xcpZg/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'JS Compparisons & Conditionals': 'http://portal.learningfuze.com/node/999'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Comarisons and Conditionals",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make an <code>index.html</code> file inside the <code>js_comparisons_conditionals</code> folder</li><li>Create a basic <code>HTML</code> DOM structure  <ul><li><code>DOCTYPE</code> tag</li><li><code>HTML</code> tag</li><li><code>head</code> tag</li><li><code>body</code> tag</li></ul></li><li>Add <code>script</code> tags between your <code>head</code> tags</li><li>This prototype will be building out concepts towards a number guessing game. For more details read the description at the top of this page</li></ol>"
        },
        'Feature Set 1 - Declare Some Variables': {
            html: "<ul class='left-border'><li class='clean-list'>Between your script tags create the following variabless<ol><li>Declare a variable named <code>mySmallNumber</code> set its value to <code>5</code></li><li>Declare a variable named <code>myString</code> set its value to <code>\"5\"</code></li><li>Declare a variable named <code>myBigNumber</code> set its value to <code>255</code></li></ol></li></ul>"
        },
        'Feature Set 2 - Make Some Comparisons': {
            html: "<ol class='left-border'><li>Create four output variables:<ol class='nested-1'><li><code>output1</code></li><li><code>output2</code></li><li><code>output3</code></li>        <li><code>output4</code></li></ol></li><li>Make the following comparisons:<ol class='nested-1'><li>Using <code>==</code> compare <code>mySmallNumber</code> to <code>myString</code>, set the result to <code>output1</code></li><li>Using <code>===</code> compare <code>mySmallNumber</code> to <code>myString</code>, set the result to <code>output2</code></li><li>Check to see if <code>mySmallNumber</code> is less than <code>myBigNumber</code>, set the result to <code>output3</code></li><li>Check to see if <code>mySmallNumber</code> is greater than <code>myBigNumber</code>, set the result to <code>output4</code></li></ol></li><li>Log out your four variables<ul class='nested-1'><li>Before viewing the results make a guess to what each value will be</li><li>Make sure to add descriptive text to each <code>console.log</code> so you can tell them apart in the console<ul><li><i>Example:</i> <code>console.log(\"My output =\", output1)</code></li></ul></li></ul>    </li></ol>"
        },
        'Feature Set 3 - Declare More Variables': {
            html: "<ol class='left-border'><li>Declare a variable named <code>gameNumber</code> set it to <code>64</code></li><li>Declare a variable named <code>userInput1</code> set it to a <b>different</b> number between <code>1-100</code></li><li>Declare a variable named <code>userInput2</code> set it to the same number as <code>gameNumber</code></li></ol>"
        },
        'Feature Set 4 - Conditionals': {
            html: "<ol class='left-border'><li>Write an <code>if</code> statement to check if <code>userInput1</code> is greater than <code>gameNumber</code><ul><li>If the statement evaluates to <code>true</code> use <code>console.log</code> to output a sentence that says the number is too <b>high</b></li></ul></li><li>Write an <code>if</code> statement to check if <code>userInput1</code> is less than <code>gameNumber</code><ul><li>If the statement evaluates to <code>true</code> use <code>console.log</code> to output a sentence that says the number is too <b>low</b></li></ul>    </li><li>Write an <code>if</code> statement to check if <code>userInput1</code> is less than <code>1</code> or greater than <code>100</code><ul><li>If <code>true</code>: log out a message saying the number is out of range</li><li>If <code>false</code>: log out a message saying the number is in range</li></ul></li><li>Write an <code>if</code> statement to check if <code>userInput2</code> is equal to <code>gameNumber</code><ul><li>If <code>true</code>: log out a message saying that the correct number has been guessed</li><li>If <code>false</code>: log out a message saying to try again</li></ul></li><li>Run your code and view the output in the console.<ul><li>Did you get the results you expected?</li><li>Try changing the numbers an re-run the code, play with it!</li>    </ul></li></ol>"
        },
        'Feature Set 5 - Switch Statement': {
            html: "<ol class='left-border'><li>Use the variables from <i>Feature Set 4</i></li><li>Create a <code>switch</code> statement based on the <code>userInput1</code> variabble with 5 <code>case</code> statements plus a <code>default</code><ol class='nested-1'><li>One <code>case</code> statement should be equal to <code>gameNumber</code><ul><li><b>Output:</b> You found the correct number!</li></ul></li><li>One <code>case</code> statement should be equal to 10 less than <code>gameNumber</code><ul><li><b>Output:</b> To low but warm</li></ul></li><li>One <code>case</code> statement should be equal to 10 more than <code>gameNumber</code><ul><li><b>Output:</b> To high but warm</li></ul></li><li>One <code>case</code> statement should be equal to 25 less than <code>gameNumber</code><ul><li><b>Output:</b> To low and cold</li></ul></li><li>One <code>case</code> statement should be equal to 25 more than <code>gameNumber</code>    <ul><li><b>Output:</b> To high and cold</li></ul></li><li>A <code>default</code> statement<ul><li><b>Output:</b> You are way off</li></ul></li></ol></li><li>Run your code and view the output in the console.<ul><li>Did you get the results you expected?</li><li>Try changing the numbers an re-run the code, play with it!</li><li>The above option is very limited and still requires the user guess specific numbers to get feedback. Try thinking of better ways of checking if the guessed number is hot or cold, to give better feedback to the user. (This is only to get you thinking, don't actually change this prototype)</li></ul></li></ol>"
        }
    }
});

//js_dom_events
app.controller('jsDomEventsController', function() {
    this.title = ['JavaScript Intro<br> DOM Event Handling', 'js dom events'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to basic event handlers in JavaScript</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_dom_events';
    this.protoId = 16;

    this.links = {
        Presentation: {
            'JavaScript Intro - Events': 'https://docs.google.com/presentation/d/1FhpJTYGzq6vlHaRcTbOGirVJH6GQSYbaav77uzUOgw4/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'JS Event Handling' : 'http://portal.learningfuze.com/node/1008'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS DOM Events",
            link: "https://www.youtube.com/watch?v=Jt2rYYsVA1M",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<h4>Getting Started</h4><ol class='left-border'>    <li>Make an <code>index.html</code> inside the <code>js_dom_events</code> folder</li>    <li>Create a basic HTML DOM structure        <ul>            <li>DOCTYPE tag</li>            <li>HTML tag</li>            <li>head tag</li>            <li>body tag</li>        </ul>    </li></ol>"
        },
        'Feature Set 1 - Using the <code>onclick</code> Attribute': {
            html: "<ol class='left-border'>    <li>Inside your body tags create a <code>button</code> it can say whatever you like        <ul>            <li>Inside your opening <code>button</code> tag add an <code>onclick</code> attribute</li>            <li>Set the value of <code>onclick</code> to a <code>console.log()</code> add a message to be logged out            </li>            <li>Example Message: <code>\"My button has been clicked\"</code></li>        </ul>    </li>    <li>Now add a <code>h1</code> tag, it can also say whatever you would like        <ul>            <li>Inside your opening <code>h1</code> tag add an <code>onclick</code> attribute</li>            <li>Set the value of <code>onclick</code> to a <code>console.log()</code> add a message to be logged out            </li>            <li>Example Message: <code>\"My header has been clicked\"</code></li>        </ul>    </li>    <li>Make sure to create a unique message for each <code>onclick</code> event</li>    <li>Open your page in your browser (open your console)        <ul>            <li>Try clicking your button. What happens in the console?</li>            <li>Try clicking your header. What happens in the console?</li>            <li>Try clicking anywhere on the page. What happens in your console?</li>        </ul>    </li></ol>"
        },
        'Feature Set 2 - Using the <code>onmouseover</code> Attribute': {
            html: "<ol class='left-border'>        <li>Add an <code>h2</code> tag with any text you want</li>        <li>In your opening <code>h2</code> tag add an <code>onmouseover</code> attribute            <ul>                <li>Set the value of <code>onmouseover</code> to <code>console.log()</code> add a message to be logged                    out                </li>                <li>Example message: <code>'You hovered over my h2 element'</code></li>            </ul>        </li>        <li>Save your changes,<br> Refresh your page in the browser</li>        <li>Hover over your <code>h2</code> element. What happened in the console?</li>    </ol>"
        },
        'Feature Set 3 - Using the <code>onload</code> Attribute': {
            html: "<ol class='left-border'>        <li>In your opening <code>body</code> tag add an <code>onload</code> attribute            <ul>                <li>Set the value of <code>onload</code> to a <code>console.log()</code> add a message to be logged out                </li>                <li>Example Message: <code>\"Body loaded\"</code></li>            </ul>        </li>        <li><strong>Reminder</strong> - Use a unique and identifiable messages for your <code>console.log()</code>s</li>        <li>Save your changes, <br> Refresh your page in the browser</li>        <li>Did you see your load message in the console?</li>    </ol>"
        },
        'Feature Set 4 - More <code>onclick</code> Fun': {
            html: "<ol class='left-border'>        <li>Create a <code>p</code> tag, write a short sentence</li>        <li>Choose a word from your sentence and surround it with <code>&lt;em&gt;&lt;/em&gt;</code> tags            <ul>                <li>Example Message: <code>&lt;p&gt;This is my &lt;em&gt;sentence&lt;/em&gt;&lt;/p&gt;</code></li>            </ul>        </li>        <li>Inside your opening <code>em</code> tag add an <code>onclick</code> attribute</li>        <li>Set the value of <code>onclick</code> to a <code>console.log()</code> add a message to be logged out            <ul>                <li>Example Message: <code>'You have clicked on the word sentence'</code></li>            </ul>        </li>        <li>Add an <code>onclick</code> attribute to your opening <code>body</code> tag            <ul>                <li>Set the value of <code>onclick</code> to <code>console.log()</code> with a message of your choosing                </li>                <li>Example Message: <code>'Body has been clicked'</code></li>            </ul>        </li>        <li>Save your changes, Refresh your page in the browser</li>        <li>Try clicking on your <em>emphasized</em> word. What happens in your console? Try clicking anywhere on the page. What happens in your console?</li>        <li>Notice the differences between where and how <code>onclick</code> works verses how <code>onload</code> works</li>        <li><strong>Note</strong> <code>onclick</code> can be used in most html tags where as <code>onload</code> is more limited and can only be used in certain tags like <code>body, iframe, img, script, style, etc ...</code> for a full list visit <a href='http://www.w3schools.com/tags/ev_onload.asp'target='_blank'>HERE</a></li>    </ol>"
        },
        'Advanced Topic': {
            html: "<ul class='left-border'>        <li><a href='http://javascript.info/tutorial/bubbling-and-capturing' target='_blank'>Click Here</a> For some advanced information on event bubbling and capturing</li>    </ul>"
        }
    }
});

//js_functions
app.controller('jsFunctionsController', function() {
    this.title = ['JavaScript Intro<br> Functions', 'js functions'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to the use of functions in JavaScript</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_functions';
    this.protoId = 17;

    this.links = {
        Presentation: {
            'JavaScript - Functions': "https://docs.google.com/presentation/d/1atgIJJezgiOkgSVF4O4s4yvll_izUJ4Hg0s9Rvf0eI4/pub?start=false&loop=false&delayms=3000&slide=id.p"
        },
        Video: {
            'JS Functions': 'http://portal.learningfuze.com/node/1014'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Functions",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'>    <li>The following files have been included with this prototype        <ul>            <li>index.html</li>            <li>style.css</li>            <li>main.js</li>            <li>imgs folder</li>        </ul>    </li></ol>"
        },
        'Feature Set 1 - No Return': {
            html: "<h4>Feature Set 1.1 - Build your first function</h4><ol class='left-border'>    <li>In the script.js file declare a function called <code>myMessage</code> that takes no parameters</li>    <li>Inside your function add a <code>console.log()</code> with a message of your choice        <ul>            <li>Example:</li>        </ul>    </li>    <li class='clean-list'><div class='highlight highlight-source-js'>    <pre><span class='pl-k'>function</span> <span class='pl-en'>myMessage</span>(){\n    <span            class='pl-en'>console</span>.<span class='pl-c1'>log</span>(<span class='pl-s'><span class='pl-pds'>\"</span>This is my first function!<span            class='pl-pds'>\"</span></span>);\n}</pre>    </div></li></ol><h4>Feature Set 1.2 - Use your function</h4><ol class='left-border'>    <li>Between your <code>body</code> tags at the bottom create a <code>button</code>, it can say whatever you would        like    </li>    <li>Add an <code>onclick</code> attribute to your opening <code>button</code> tag</li>    <li>Set the value of <code>onclick</code> to your function from above        <ul>            <li>Example: <code>onclick=\"myMessage()\"</code></li>        </ul>    </li>    <li>Open your index.html in a browser (open your console)</li>    <li>Try clicking your button. What do you see in the console?</li></ol><h4>Feature Set 1.3 - Building a function with parameters</h4><ol class='left-border'>    <li>In the script.js file declare a function called <code>add</code> that takes in two <code>number</code>        parameters        <ul>            <li><em>hint</em> - <code>function add(x, y){...}</code></li>        </ul>    </li>    <li>Inside your function add the two variables together and <code>console.log()</code> the result</li></ol><h4>Feature Set 1.4 - Using your add function</h4><ol class='left-border'>    <li>Create another <code>button</code> between your <code>body</code> tags at the bottom, have it say        <code>ADD</code></li>    <li>Add an <code>onclick</code> attribute to your opening <code>button</code> tag</li>    <li>Set the value of <code>onclick</code> to your <code>add</code> function from above        <ul>            <li>Example: <code>onclick=\"add(5, 8)\"</code></li>        </ul>    </li>    <li>Save your work and refresh your page in the browser</li>    <li>Click your <span class='label label-default'>ADD</span> button. What do you see in the console?</li></ol>"
        },
        'Feature Set 2 - Time To Return': {
            html: "<h4>Feature Set 2.1 - return to add</h4><ol class='left-border'>    <li>In the script.js file declare a function called <code>add2</code> that takes in two <code>number</code>        parameters    </li>    <li>Have the function <strong>return</strong> the result of adding the two parameters together        <ul>            <li><em>HINT</em></li>        </ul>        <div class='highlight highlight-source-js'>            <pre><span class='pl-k'>function</span> <span class='pl-en'>add2</span>(<span class='pl-smi'>x</span>, <span                    class='pl-smi'>y</span>){\n    <span class='pl-k'>var</span> total <span class='pl-k'>=</span> x <span                    class='pl-k'>+</span> y;\n    <span class='pl-k'>return</span> total;\n}</pre>        </div>    </li>    <li>Declare a variable (outside of your function) called <code>add2result</code>:        <ul>            <li>set <code>add2result</code> to the result of calling your <code>add2</code> function</li>            <li><em>HINT</em></li>        </ul>        <div class='highlight highlight-source-js'>            <pre><span class='pl-k'>var</span> add2result <span class='pl-k'>=</span> <span                    class='pl-en'>add2</span>(<span class='pl-c1'>10</span>, <span class='pl-c1'>36</span>);</pre>        </div>    </li>    <li>Create a <code>button</code> between your <code>body</code> tags at the bottom, have it say <code>ADD #2</code>        <ul>            <li>give your button an <code>onclick</code> attribute</li>            <li>set <code>onclick</code> equal to: <code>console.log(add2result)</code></li>            <li><em>HINT</em> - <code>onclick=\"console.log(add2result)\"</code></li>        </ul>    </li>    <li>Because <code>add2</code> <code>returns</code> a number you can set it to a variable or even use it in another function call. Your original <code>add</code> function doesn't <code>return</code> anything so you can't set the result to a variable.</li></ol>"
        },
        'Feature Set 3 - Card Reveal': {
            html: "<h4>Feature Set 3.1 - cardFlip Function</h4><ol class='left-border'>    <li>In the script.js file create a function called <code>cardFlip</code> that takes in one parameter        <ul>            <li>Parameter received will be the element that was clicked</li>        </ul>    </li>    <li>Inside the function find a way to make the clicked element no longer be visible        <ul>            <li><em>HINT</em></li>        </ul>        <div class='highlight highlight-source-js'>            <pre><span class='pl-k'>function</span> <span class='pl-en'>cardFlip</span>(<span                    class='pl-smi'>element</span>){\n    <span class='pl-en'>$</span>(element).<span                    class='pl-en'>hide</span>();\n}</pre>        </div>    </li></ol><h4>Feature Set 3.2 - Add onclick to HTML</h4><ol class='left-border'>    <li>Inside the index.html page add an <code>onlick</code> attribute to all the divs with a class of 'back'</li>    <li>Set the value of onclick to: <code>cardFlip(this)</code>        <ul>            <li><em>HINT</em></li>        </ul>        <div class='highlight highlight-text-html-basic'>            <pre>&lt;<span class='pl-ent'>div</span> <span class='pl-e'>class</span>=<span class='pl-s'><span                    class='pl-pds'>\"</span>back<span class='pl-pds'>\"</span></span> <span                    class='pl-e'>onclick</span>=<span class='pl-s'><span class='pl-pds'>\"</span>flipCard(this)<span                    class='pl-pds'>\"</span></span>&gt;&lt;<span class='pl-ent'>img</span> <span class='pl-e'>src</span>=<span                    class='pl-s'><span class='pl-pds'>\"</span>imgs/card_design.png<span                    class='pl-pds'>\"</span></span> <span class='pl-e'>alt</span>=<span class='pl-s'><span                    class='pl-pds'>\"</span>Card Back<span class='pl-pds'>\"</span></span>&gt;&lt;/<span class='pl-ent'>div</span>&gt;</pre>        </div>    </li>    <li>Make sure to add <code>onclick</code> to all four divs with the class of back</li>    <li>Save your work and refresh your page in the browser</li>    <li>Click on your cards, does the front get revealed?</li></ol>"
        },
        'Function Inception (Advanced Topic)': {
            html: "<ul class='left-border'>    <li><p>Here is an example of functions being used as parameters in another function call. This only works because the <code>add2</code> function <code>returns</code> a number</p>        <div class='highlight highlight-source-js'>    <pre><span class='pl-k'>var</span> result <span class='pl-k'>=</span> <span class='pl-en'>add2</span>(<span            class='pl-en'>add2</span>(<span class='pl-c1'>5</span>, <span class='pl-c1'>10</span>), <span class='pl-en'>add2</span>(<span            class='pl-c1'>20</span>, <span class='pl-c1'>30</span>));</pre>        </div>    <p>In the example above the inner functions will be called first then there results will be passed into the            outside function producing a final result.</p></li>    <li>first 5 will be added to 10 equaling 15</li>    <li>second 20 will be added to 30 equaling 50</li>    <li>third and finally 15 and 50 will be added together equaling 65 which will then be stored in the variable <code>result</code>        Don't worry if this is confusing now, it's just an example to get you thinking    </li></ul>"
        }
    }
});

//js_jQuery
app.controller('jsJqueryController', function() {
    this.title = ['JavaScript Intro<br> jQuery', 'js jquery'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to the jQuery library with some basic jQuery functionality.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_jquery';
    this.protoId = 18;

    this.links = {
        Presentation: {
            'JavaScript - jQuery Library': "https://docs.google.com/presentation/d/1rKUd6-ihEJ_qUU49s-KL24mkolV35O-KTdVSofZg7KQ/pub?start=false&loop=false&delayms=3000&slide=id.p"
        },
        Video: {
            'JS jQuery': "http://portal.learningfuze.com/node/1011"
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS jQuery",
            link: "https://www.youtube.com/watch?v=RAK_QyjwvZA",
            live: false
        }
    };

    this.features = {
        "Getting Started": {
            html: "<ol class='left-border'>        <li><code>index.html</code> and <code>style.css</code> have already been created for you to use</li>        <li>In the head tag you will see a <code>script</code> tag that looks like:            <ul>                <li><code>&lt;script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"&gt;&lt;/script&gt;</code></li>                <li>This is where the jQuery library comes from</li>            </ul>        </li>        <li>To use jQuery in your JavaScript it must be called before any of your JavaScript</li>        <li>Open the <code>index.html</code> file in your browser (open your console)</li>    </ol>"
        },
        "Feature Set 1 - From Red to Pink": {
            html: "<ol class='left-border'>        <li>In your browser try clicking on the different divs            <ul>                <li>Don't forget to watch what happens in the console also</li>                <li>For now only <code>div1</code> and <code>div2</code> do anything</li>            </ul></li>        <li>Review the code that is already included in your <code>index.html</code> file</li>        <li>On line 17 we are adding the \"red\" class that is predefined in the <code>style.css</code> file            <ul>                <li>Change the word \"red\" to \"pink\"</li>                <li>Save and Refresh your page</li>                <li>Notice the different background for <code>div1</code></li>                <li>Update the <code>console.log()</code> on line 22 to reflect the new color of <code>div1</code></li>            </ul></li>        <li>Click on <code>div2</code> a few times            <ul>                <li>Notice the color change and what is output to the console</li>            </ul></li>    </ol>"
        },
        "Feature Set 2 - Time to try it on your own": {
            html: "<ol class='left-border'>        <li>Using jQuery add the class \"card-back\" to <code>div3</code> and <code>div4</code>            <ul>                <li><a href=\"https://api.jquery.com/addclass/\" target=\"_blank\">Click Here</a> For an explanation and examples of the <code>.addClass()</code> method</li>            </ul></li>        <li>Now using jQuery create a click handler for <code>div3</code>            <ul>                <li>Refer to <code>index.html</code> for an example (line 19)</li>                <li>Inside your click handler use the <code>.toggleClass()</code> method to change the class to \"flag\"</li>                <li><a href=\"https://api.jquery.com/toggleclass/\" target=\"_blank\">Click Here</a> For an explanation and examples of the <code>.toggleClass()</code> method</li>            </ul></li>        <li>Using jQuery create a click handler for <code>div4</code>            <ul>                <li>Refer to <code>index.html</code> for an example (line 19)</li>                <li>Inside your click handler use the <code>.toggleClass()</code> method to change the class to \"path\"</li>                <li><a href=\"https://api.jquery.com/toggleclass/\" target=\"_blank\">Click Here</a> For an explanation and examples of the <code>.toggleClass()</code> method</li>            </ul></li>        <li>Now when you click on <code>div3</code> it should switch between the picture of the card back and a picture of the British flag. Also clicking on <code>div4</code> should change the picture between the card back and a picture of a nice path</li>    </ol>"
        },
        "Feature Set 3 - Change The Text": {
            html: "<ol class='left-border'><li>In the <code>#div1</code> click handler (line 21)<ol class='nested-1'><li>Utilize the counter variable from line 11 to display the amount of times <code>div1</code> has been clicked</li><li>Change the divs text to display: <code>Click Count: 1</code></li><li>With each click the count should increment</li><li><button id='hint1btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>Show Hint</button></li><li id='hint1' class='clean-list collapse'><i>Hint:</i><div class=\"highlight highlight-source-js\"><pre><span class=\"pl-en\">$</span>(<span class=\"pl-v\">this</span>).<span class=\"pl-en\">html</span>(<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>Click Counts<span class=\"pl-pds\">\"</span></span> <span class=\"pl-k\">+</span> count<span class=\"pl-k\">++</span>);</pre></div></li></ol></li><li>In the <code>#div2</code> click handler (line 27)<ol class='nested-1'><li>Inside the <code>if</code> statement replace the <code>console.log()</code>s</li><li>Use the Knowledge gained from step 1 to have the div display in text what color it is</li><li><i>Example Text:</i> I'm Green</li><li>Every time div2 is clicked it should change its displayed text to match its color</li></ol></li></ol>"
        }
    };
});

//js_dom_creation
app.controller('jsDomCreationController', function() {
    this.title = ['JavaScript Intro<br> DOM Creation', 'js dom creation'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to DOM creation using jQuery.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_dom_creation';
    this.protoId = 19;

    this.links = {
        Presentation: {
            'jQuery - Element Creation (DOM Creation)': "https://docs.google.com/presentation/d/1NXMAUu-_aL-qjsIaLLTsEY9uTLdgbSkZjIK_6wiyR0o/pub?start=false&loop=false&delayms=15000"
        },
        Video: {
            'DOM Creation': "https://www.youtube.com/watch?v=jzQNurWMZr8#t=16"
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS DOM Creation",
            link: "https://www.youtube.com/watch?v=buE0GBtLwFQ",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'>        <li>An <code>index.html</code> file is included in this prototype</li>        <li>You will be entering your code directly into the <code>index.html</code> file starting on line 44</li>        <li><strong>DO NOT</strong> edit this README</li>    </ol>"
        },
        'Feature Set 1 - Review the existing code in <code>index.html</code>': {
            html: "<ul class='left-border'>        <li>You will notice there are three main sections            <ul>                <li>playground 1</li>                <li>playground 2</li>                <li>playground 3</li>            </ul></li>        <li>Each section contains a <code>playground_source</code> div with other elements nested inside            <ul>                <li>This is what you will be recreating using jQuery</li>            </ul></li>        <li>Each section also contains a <code>playground_destination</code>            <ul>                <li>This is what you will be appending all of your created elements to for that playground</li>            </ul></li>    </ul>"
        },
        'Feature Set 2 - Building Out Your Playgrounds': {
            html: "<ul class='left-border'>        <li>Using jQuery recreate the <code>playground_source</code> div with all of it's nested elements</li>        <li>Append your newly created <code>playground_source</code> div to its corresponding playground destination div</li>    </ul>"
        },
        '<em>Hints</em>': {
            html: "<ul class='left-border'>        <li>Test your code frequently, don't wait until you're done to test your code</li>        <li>Always have your console open while testing your code</li>        <li>Save and push to gitHub often            <ul>                <li>Save as often as you can it's simple, quick and will save you a lot of headache</li>                <li>Push to gitHub after each playground is successfully created (at least)</li>                <li>Remember to push to your <code>js_dom_creation</code> branch</li>            </ul></li>        <li>Don't forget to ask for help if you get stuck</li>    </ul>"
        }
    };
});

//js_ref_data_types
app.controller('jsRefDataTypesController', function() {
    this.title = ['JavaScript Intro<br> Reference Data Types', 'js ref data types'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to reference data types, including arrays and objects</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_ref_data_types';
    this.protoId = 20;

    this.links = {
        Presentation: {
            'JS Arrays and Objects': "https://docs.google.com/presentation/d/1g-b4ykbk5OqqhPLdOGgAPwJTK_nqujDMuBbcNNPORt8/pub?start=false&loop=false&delayms=3000&slide=id.p",
            'JS Reference Data Types': "https://docs.google.com/presentation/d/1nVTs0_PxN46U9heTQNS1BYCRvviIYMZvrbknu7iasp8/pub?start=false&loop=false&delayms=3000&slide=id.p"
        },
        Video: {
            'JS Arrays and Objects':  "http://portal.learningfuze.com/node/1952",
            'JS Reference Data Types': "http://portal.learningfuze.com/node/1944"
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Reference Data Types",
            link: "https://www.youtube.com/watch?v=Thl8bnbVqgs",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make an <code>index.html</code> inside the <code>js-ref-data-types</code> folder</li><li>Create a basic HTML DOM structure<ul><li><code>DOCTYPE</code> tag</li><li><code>HTML</code> tag</li><li><code>head</code> tag</li><li><code>body</code> tag</li></ul></li><li>Add <code>script</code> tags between your <code>head</code> tags</li></ol>"
        },
        'Feature Set 1.0 - Student Array': {
            html: "<ol class='left-border'><li>Declare an array that has at least 5 student names in it, as strings, name it: <code>student_array</code></li><li>Use <code>console.log()</code> to print out the third student in your array</li><li class='clean-list'><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button><ul id='hint1' class='collapse'><li>Use your array in your <code>console.log()</code></li><li><strong>Hint:</strong> (Replace the question mark with the number you think will get the third student)</li><li class='clean-list'><div class='highlight highlight-source-js'><pre><span class='pl-en'>console</span>.<span class='pl-c1'>log</span>(student_array[<span class='pl-k'>?</span>]);</pre></div></li></ul></li></ul></li><li value='3'>Open your page in your browser, open your console</li><li>Do you see the correct student?</li></ol><h4>Feature Set 1.1 - Array Methods</h4><ol class='left-border'><li>Using another <code>console.log</code> log out your full student array</li><li class='clean-list'><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button><ul id='hint2' class='collapse'><li><strong>Hint:</strong></li><li class='clean-list'><div class='highlight highlight-source-js'><pre><span class='pl-en'>console</span>.<span class='pl-c1'>log</span>(student_array);</pre></div></li></ul></li></ul></li><li value='2'>Using the <strong>length</strong> property, log out the length of your array</li><li>Using the <strong>push()</strong> method, add two more students to your array</li><li>Log out the length of your array again</li><li>Finally log out the full array again like you did in step 1.</li></ol>"
        },
        'Feature Set 2.0 - Build an object (You down with O.O.P.)': {
            html: "<ol class='left-border'><li>Declare an empty object variable named, <code>student</code></li><ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>View Hint</button><ul id='hint3' class='collapse'><li><strong>Hint:</strong></li><li class='clean-list'><div class='highlight highlight-source-js'><pre><span class='pl-k'>var</span> student <span class='pl-k'>=</span> {};</pre></div></li></ul></li></ul></li><li>Using <b>dot</b> notation add the following 'key: value` pairs to your student object<ul><li><code>firstName</code> as a string</li><li><code>lastName</code> as a string</li><li><code>age</code>- as a number</li><li><code>school</code> as a string</li><li><code>questionList</code> as an array (set to an empty array: <code>[]</code>)</li><li><code>hasQuestion</code> as a boolean (set to <strong>false</strong>)</li><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Hint</button><ul id='hint4' class='collapse'><li><strong>Hint:</strong></li><li class='clean-list'><div class='highlight highlight-source-js'><pre><span class='pl-smi'>student</span>.<span class='pl-smi'>firstName</span> <span class='pl-k'>=</span> <span class='pl-s'><span class='pl-pds'>\"</span>John<span class='pl-pds'>\"</span></span>;</pre></div></li></ul></li></ul></li></ol><h4>Feature Set 2.1 - Add methods to the madness</h4><ol class='left-border'><li>Add the following four methods to your <code>student</code> object<ul><li><code>greeting()</code><ul><li>This method should take 0 parameters</li><li>This method should <strong>return</strong>: <code>\"Hello, my name is [First Name]\"</code></li><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint5' aria-expanded='false' aria-controls='hint5'>View Hint</button><ul id='hint5' class='collapse'><li><strong>Hint:</strong></li><li class='clean-list'><div class='highlight highlight-source-js'><pre><span class='pl-c1'>student</span>.<span class='pl-en'>greeting</span> <span class='pl-k'>=</span> <span class='pl-k'>function</span>(){\n<span class='pl-k'>    return</span> <span class='pl-s'><span class='pl-pds'>\"</span>Hello, my name is <span class='pl-pds'>\"</span></span> <span class='pl-k'>+</span> <span class='pl-v'>this</span>.<span class='pl-smi'>firstName</span>;\n}</pre></div></li></ul></li></ul></li><li><code>aboutMe()</code><ul><li>This method should take 0 parameters</li><li>This method should <strong>return</strong>: <code>\"My full name is [your first and last name], I am [age] years old and I am a student at [school name].\"</code></li></ul></li><li><code>askQuestion()</code><ul><li>This method should take 1 parameter - <code>question</code></li><li>The question should be added to the students <code>questionList</code> property</li><li>The students <code>hasQuestion</code> property should be changed to <strong>true</strong></li><li>The method should <strong>return</strong>: <code>\"A question has been added to your list\"</code></li></ul></li><li><code>answerQuestion()</code><ul><li>This method should take 0 parameters</li><li>Inside the method check if the student has a question or not by using the <code>hasQuestion</code> property<ul><li>If the student has a question<ul><li>reset the <code>hasQuestion</code> property to <strong>false</strong></li><li><strong>return</strong> the <strong>LAST</strong> question in the <code>questionList</code> property</li></ul></li><li>If the student doesn't have a pending question<ul><li><strong>return</strong>: <code>\"You have no pending questions\"</code></li></ul></li></ul></li></ul></li></ul></li></ol><h4>Feature Set 2.2 - Test Your student</h4><ul class='left-border'><li>Using <code>console.log()</code> create output in your console from your methods in the following order:</li><li>Use a separate <code>console.log()</code> for each method</li><li>Make sure to \"<i>label</i>\" each <code>console.log()</code> so you can tell them apart</li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint6' aria-expanded='false' aria-controls='hint6'>View Example</button><ul id='hint6' class='collapse'><li><strong>Example:</strong></li><li><div class='highlight highlight-source-js'><pre><span class='pl-en'>console</span>.<span class='pl-c1'>log</span>(<span class='pl-s'><span class='pl-pds'>\"</span>Greeting function: <span class='pl-pds'>\"</span></span>, <span class='pl-smi'>student</span>.<span class='pl-en'>greeting</span>());</pre></div></li></ul></li></li><ol><li>greeting()</li><li>aboutMe()</li><li>answerQuestion()</li><li>askQuestion()</li><li>askQuestion()</li><li>askQuestion()</li><li>answerQuestion()</li></li><li><i>Reminder</i>: Some of your methods take parameters, don't forget to pass them in when testing them</li><li>Make sure to create a seperate <code>console.log</code> for each item on the list above and to follow that order.<ol class='nested-1'><li>Did you get the last question asked from <code>answerQuestion</code></li><li>Log out your <code>questionList</code> to verify all three questions got added to the list</li></ol></li></ol></li><li>Save your work, refresh the page</li><li>Use the console to make sure everything works as expected.</li></ul>"
        },
        'Quick <code>console.log()</code> Exercise': {
            html: "<ol class='left-border'><li>In your console, type: <code>console.log(\"Here is my student object \" + student);</code></li><li>Now try typing: <code>console.log(\"Here is my student object\", student);</code></li><li>Notice the difference, this is why using commas in your <code>console.log()</code> can be very useful.</li></ol>"
        }
    }
});

//js_loops
app.controller('jsLoopsController', function() {
    this.title = ['JavaScript Intro<br> Repeat Blocks (Loops)', 'js repeat blocks'];
    this.description = "<p>Building from previous prototypes this prototype will introduce you to JavaScript repeat blocks, giving you the ability to loop through data structures such as arrays and objects.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_loops';
    this.protoId = 21;

    this.links = {
        Presentation: {
            'JavaScript - Repeat Blocks': "https://docs.google.com/presentation/d/1OusZv58RjYwn0MAX0xEpRab0sX5Gqk_Q2riAi5ipWFM/pub?start=false&loop=false&delayms=3000&slide=id.p"
        },
        Video: {
            'JavaScript - Repeat Blocks': "http://portal.learningfuze.com/node/1961"
        }
    };

    this.demo = {
        'Video Prototype Demo - Part 1': {
            title: "JS Repeat Blocks (Loops) - Part 1",
            link: "https://www.youtube.com/watch?v=cU1CH3GF32s",
            live: false
        },
        'Video Prototype Demo - Part 2': {
            title: "JS Repeat Blocks (Loops) - Part 2",
            link: "https://www.youtube.com/watch?v=Fa7Tib_HJ4Q",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'>        <li>Make an <code>index.html</code> inside the <code>js_repeat_blocks</code> folder</li>        <li>Create a basic HTML DOM structure            <ul>                <li><code>DOCTYPE</code> tag</li>                <li><code>HTML</code> tag</li>                <li><code>head</code> tag</li>                <li><code>body</code> tag</li>            </ul></li>        <li>Add <code>script</code> tags between your <code>head</code> tags</li>    </ol>"
        },
        'Feature Set 1 - More array looping fun!': {
            html: "<ol class='left-border'>        <li>Create the <strong>exact</strong> following array            <ul>                <li><code>var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];</code></li>            </ul></li>        <li>Using a <code>for</code> loop, output <strong>all</strong> the numbers in <strong>ascending</strong> order, <code>1-10</code>            <ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button>            <ul id='hint1' class='collapse'>                <li><em>Hint</em> - <code>for(var i=0; i &lt; numbers.length; i++){...}</code></li>                <li><em>Hint</em> - Place the <code>console.log()</code> between the <code>{}</code> of your <code>for</code> loop</li>                <li><em>Reminder</em> - To access values in an array: <code>numbers[0]</code> <strong>Try</strong> replacing the <code>0</code> with <code>i</code></li>            </ul></li></ul></li>        <li>Save your work and test your code</li>        <li>Using the same array from above write a different <code>for</code> loop that outputs <strong>all</strong> the numbers in <strong>descending</strong> order, <code>10-1</code></li>        <li>Save your work and test your code</li>        <li>Using the same array again write yet another <code>for</code> loop that only outputs <strong>odd</strong> numbers, <code>1, 3, 5, 7, 9</code> </li>        <li>Copy your <code>for</code> loop from the previous step (#6), <strong>DO NOT</strong> change anything except the array you are looping through. (use the <code>mixedArray</code> array below)            <ul>                <li><code>var mixedArray = [4, 56, 11, 13, 97, 22, 7, 36, 19, 5, 8, 10];</code></li>                <li>Does it still only output <em>odd</em> numbers?</li>                <li>If not can you fix it?</li>            </ul></li>    </ol>"
        },
        'Feature Set 2 - For in loop': {
            html: "<ol class='left-border'>        <li>Given the following object            <ul>                <li><code>var classRoom = {desk1: 'Stu', desk2: 'Peggy', desk3: 'LoneStar', desk4: 'George', desk5: 'Sheldon'}</code></li>                <li>Use a <code>for in</code> loop to loop through each key value pair</li>                <li>Create the following output <code>Stu is at desk1</code> <code>Peggy is at desk2</code> and so on ...</li>            </ul></li>    </ol>"
        },
        'Feature Set 3 - While loop': {
            html: "<ol class='left-border'>        <li>Given the following array:            <ul>                <li>`var studentArray = [{name: \"Bob\", grade: 87}, {name: \"Fred\", grade: 82}, {name: \"George\", grade: 93}, {name: \"Robert\". grade: 85}]</li>            </ul></li>        <li>Write a function called <code>findStudent</code> that takes in <strong>1</strong> parameter (a student's name)            <ul>                <li>The function should find a given student in the above array structure and give output based on the result of the search                    <ul>                        <li>If the student is found the output should be: <code>\"Found [student name] their grade is: [grade].\"</code></li>                        <li>If student is not found the output should be: <code>\"Student [student name] not found.\"</code></li>                    </ul></li>            </ul></li>        <li class='clean-list'><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button> <b>Try on your own before viewing the hints</b>            <ul id='hint2' class='collapse'>                <li class='clean-list'><h4>Start the function by declaring 3 variables</h4>                    <div class=\"highlight highlight-source-js\"><pre><span class=\"pl-k\">function</span> <span class=\"pl-en\">findStudent</span>(<span class=\"pl-smi\">name</span>) {\n    <span class=\"pl-k\">var</span> output <span class=\"pl-k\">=</span> <span class=\"pl-s\"><span class=\"pl-pds\">'</span><span class=\"pl-pds\">'</span></span>;\n    <span class=\"pl-k\">var</span> i <span class=\"pl-k\">=</span> <span class=\"pl-c1\">0</span>;\n    <span class=\"pl-k\">var</span> found <span class=\"pl-k\">=</span> <span class=\"pl-c1\">false</span>;</pre></div>                    <button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>Next Hint</button>                </li>                <li id='hint3' class='collapse clean-list'><h4>Create a while loop that searches the array for a student that has a name that matches the name parameter</h4>                    <div class=\"highlight highlight-source-js\"><pre>    <span class=\"pl-k\">while</span> (<span class=\"pl-k\">!</span>found <span class=\"pl-k\">&amp;&amp;</span> i <span class=\"pl-k\">&lt;</span> <span class=\"pl-smi\">studentArray</span>.<span class=\"pl-c1\">length</span>) {\n        <span class=\"pl-k\">var</span> student <span class=\"pl-k\">=</span> studentArray[i];\n        <span class=\"pl-k\">if</span> (<span class=\"pl-smi\">student</span>.<span class=\"pl-c1\">name</span> <span class=\"pl-k\">==</span> name) {\n            output <span class=\"pl-k\">=</span> <span class=\"pl-s\"><span class=\"pl-pds\">\"</span>Found <span class=\"pl-pds\">\"</span></span> <span class=\"pl-k\">+</span> name <span class=\"pl-k\">+</span> <span class=\"pl-s\"><span class=\"pl-pds\">\"</span> Grade: <span class=\"pl-pds\">\"</span></span> <span class=\"pl-k\">+</span> <span class=\"pl-smi\">student</span>.<span class=\"pl-smi\">grade</span>;\n            found <span class=\"pl-k\">=</span> <span class=\"pl-c1\">true</span>;\n        }\n        i<span class=\"pl-k\">++</span>;\n    }</pre></div>                    <button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>Next Hint</button>                </li>                <li id='hint4' class='collapse clean-list'><h4>Check if there was a match, if not give appropriate output</h4>                    <div class=\"highlight highlight-source-js\"><pre>    <span class=\"pl-k\">if</span> (<span class=\"pl-k\">!</span>found) {\n       output <span class=\"pl-k\">=</span> <span class=\"pl-s\"><span class=\"pl-pds\">\"</span>Student <span class=\"pl-pds\">\"</span></span> <span class=\"pl-k\">+</span> name <span class=\"pl-k\">+</span> <span class=\"pl-s\"><span class=\"pl-pds\">\"</span> not found.<span class=\"pl-pds\">\"</span></span>;\n    }</pre></div>                    <button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint5' aria-expanded='false' aria-controls='hint5'>Next Hint</button>                </li>                <li id='hint5' class='collapse clean-list'><h4>Return the output variable</h4>                    <div class=\"highlight highlight-source-js\"><pre>    <span class=\"pl-k\">return</span> output;\n}</pre></div>                </li>            </ul>        </li>        <li value='3'>Using 3 <code>console.log</code>s test your function            <ol>                <li>Make sure you copied the <code>studentArray</code> into your file</li>                <li>log the result of: <code>findStudent(\"George\")</code>                    <ul>                        <li><em>Example</em>: <code>console.log(\"Test 1:\", findStudent(\"George\"));</code></li>                    </ul></li>                <li>log the result of: <code>findStudent(\"Fred\")</code></li>                <li>log the result of: <code>findStudent(\"Hank\")</code></li>            </ol></li>        <li>Verify you got the expected output from your function</li>    </ol>"
        },
        "Don't forget to test all of your work": {
            html: "<ul class='left-border'><li>Use the console to verify all of your work</li><li>If you are having trouble with any of the feature sets, ask for help</li></ul>"
        }
    }
});

//js_event_delegation
app.controller('jsEventDelegationController', function() {
    this.title = ['JavaScript Intro<br> Event Delegation with jQuery', 'js event delegation'];
    this.description = "<p>Building from previous prototypes, this prototype will introduce you to JavaScript/jQuery Event Delegation. This prototype will increase your knowledge of how, when, where, and why events are or are not handled.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_event_delegation';
    this.protoId = 22;

    this.links = {
        Presentation: {
            'JavaScript Events - Event Delegation': "https://docs.google.com/presentation/d/17krmcVPZmMMJcSxv0E1P7HSYiOMDVzUfib-JQBZVke0/pub?start=false&loop=false&delayms=3000&slide=id.p"
        },
        Video: {
            'JavaScript Events - Event Delegation': "http://portal.learningfuze.com/node/1206"
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Event Delegation",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> has been included inside the <code>js_event_delegation</code> folder - Do not modify the included <code>index.html</code> file!</li><li>In the provided <code>script.js </code> file, create the following:</li></ol>"
        },
        'Feature Set 1 - The lonely event listener': {
            html: "<ol class='left-border'><li>Target the #list and button with jQuery and add an .on() handler to:</li><li>Console.log() the buttons text node:<ul><li>example - $( \"#list button\" ) </li><li>console should read:<ul><li>if the first button is clicked: \"Button #1\" </li><li>if the second button is clicked: \"Button #2\" etc.</li></ul></li></ul></li></ol>"
        },
        'Feature Set 2 - Bring a friend': {
            html: "<ol class='left-border'><li>Create another button using jQuery DOM Creation:<ul><li>example - <code>\"&lt;li&gt;&lt;button style='margin-top: 10px'&gt;Delegated Button#5 Handler&lt;/button&gt;&lt;/li&gt;\"</code></li><li>Add the button to the #list with .append</li></ul></li><li>Now click on the the last button - Add comments to the top of your script.js file and answer the following questions:<ul><li>What do you think is going to happen? </li><li>What happened? </li><li>Why? </li></ul></li></ol>"
        },
        "Feature Set 3 - Now it's a party!": {
            html: "<ol class='left-border'><li>Create the following:<ul><li>Create a delegated event handler that will successfully console.log every new button added to the #list element </li></ul></li></ol>"
        },
        'Additional Challenge': {
            html: "<ul class='left-border'><li>Create a new button that has a unique attribute and when clicked, opens a new tab and navigates to google.com.</li><li>Create a jQuery .on() handler that contains a conditional and only fires if the element contains a certain HTML attribute. </li></ul>"
        },
        "Don't forget to test all of your work": {
            html: "<ul class='left-border'><li>Use the console to verify all of your work</li><li>If you are having trouble with any of the feature sets, ask for help</li></ul>"
        }

    }

});

//js_ajax
app.controller('jsAjaxController', function() {
    this.title = ['JavaScript<br> jQuery AJAX &amp; APIs', 'js ajax'];
    this.description = "<p>Building from previous prototypes, this prototype will introduce you to JavaScript/jQuery AJAX calls. AJAX is a built in method of the jQuery object from the jQuery library. This prototype will demonstrate how an AJAX call can be used to retrieve information from an outside source using an API. This prototype will be using the Apple iTunes API to retrieve the current top 10 movies on iTunes.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_ajax';
    this.protoId = 23;

    this.links = {
        Presentation: {
            'JS & jQuery AJAX': 'https://docs.google.com/presentation/d/1G4HZSYS8zTMe7GLB5UqJZBKTeh79Vset96nj1SmBM_4/pub?start=false&loop=false&delayms=30000&slide=id.p'
        },
        Video: {
            'JS & jQuery AJAX': 'https://www.youtube.com/watch?v=9IIvQu4xF80&feature=youtu.be'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS AJAX",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file and a <code>script.js</code> file are included in the <code>js_ajax</code> folder</li><li>You will be entering your code directly into the <code>script.js</code> file</li></ol>"
        },
        'Feature Set 1 - Road to success': {
            html: "<ul class='left-border'><li>Run the <code>index.html</code> file with your console open, click the button</li><li>Note when the console logs happen.Page load?After button click?<ul><li>Also note the order in which the three console.logs happen</li></ul></li><li>In <code>script.js</code>:<ul><li>Create A <strong>GLOBAL</strong> variable - Name it <code>global_result</code></li><li>Within the AJAX success method, on line 12, set your global variable equal to <code>result</code></li></ul></li></ul>"
        },
        'Feature Set 2 - Exploring for images': {
            html: "<ul class='left-border'><li>Explore your global result variable in the console<ul><li>After saving the result to your global variable, refresh your page in the browser</li><li>Click the <span class='label label-default'>Load it</span> button</li><li>In your console type <code>global_result</code> then press <kbd>Enter</kbd>. </li></ul></li><li>Find where the movie images are stored in the object.<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button></li><li id='hint1' class='collapse'><em>HINT</em> - Start by looking under <code>feed</code> then under <code>entry</code></li></ul></li><li>Use what you learned to create a variable to hold all of the <b>first movie's info</b><ul><li>Create the variable in script.js, within the AJAX success call</li><li>Make it one step at a time.</li><li>Every time you figure out the next step, add it to your variable until you get the next piece you need</li></ul></li><li>Find the images in the first movie</li><li>Alter your variable to hold the <b>3rd image</b> of the <b>first movie</b></li></ul>"
        },
        'Feature Set 3 - Adding the Images': {
            html: "<ul class='left-border'><li>In your <code>script.js</code>, in the AJAX success call:<ol><li>Make a repeat block to go through each movie</li><li>get the 3rd image from each movie and store it in a variable</li><li>Create an <code>img</code> tag with a <code>src</code> equal to your image variable</li><li>Append the img tag to <code>#main</code></li></ol></li></ul>"
        },
        'Feature Set 4 -Title the Images': {
            html: "<ul class='left-border'><li>In your <code>script.js</code>, in the AJAX success call:<ol><li>Find the movie title and director for each image</li><li>Create the appropriate HTML to add the movie title and director to each movie image created in #3</li></ol></li></ul>"
        },
        "Don't forget to test all of your work": {
            html: "<ul class='left-border'><li>Use the console to verify all of your work</li><li>If you are having trouble with any of the feature sets, ask for help</li></ul>"
        }
    }
});

//js_oop
app.controller('jsOopController', function() {
    this.title = ['JavaScript<br> <b class="lf-text">O</b>bject <b class="lf-text">O</b>riented <b class="lf-text">P</b>rogramming', 'js oop'];
    this.description = "<p>Building from previous prototypes, we will be taking a closer look at objects and how we can create multiple <i>instances</i> of one object using a constructor function. We will also look at adding a method using <i>prototype</i>. This prototype will be using the Apple iTunes API to retrieve the current top 10 movies on iTunes.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_oop';
    this.protoId = 44;

    this.links = {
        Presentation: {
            'JS OOP': 'https://docs.google.com/presentation/d/1DYHm7b1CtDg6jnJi-fScD0qsaupBw-ClzM9sTzx0iH8/pub?start=false&loop=false&delayms=3000&slide=id.g916468413_0_62'
        },
        Video: {
            'JS OOP': 'https://www.youtube.com/watch?feature=player_embedded&v=uLPwXkfPiNQ'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS OOP",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Make an <code>index.html</code> file inside the <code>js_oop</code> folder</li><li>Create a basic <code>HTML</code> DOM structure<ul><li><code>DOCTYPE</code> tag</li><li><code>HTML</code> tag</li><li><code>head</code> tag</li><li><code>body</code> tag</li></ul></li><li>Add an <code>h1</code> tag in the body that says: <code>Javascript OOP Prototype</code></li><li>Add <code>script</code> tags between your <code>head</code> tags</li></ol>"
        },
        'Feature Set 1 - Coin Stack': {
            html: "<h4>Between your script tags</h4><ol class='left-border'><li>Create a constructor function named <code>coin_stack</code><ol class='nested-1'><li>The constructor should take in one parameter that will be used to set the initial amount of coins<ul class='clean-list'><li><button id='hint1btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>Show Hint</button></li><li id='hint1' class='clean-list collapse'><i>Hint:</i><div class='highlight highlight-source-js'><pre><span class='pl-k'>function</span> <span class='pl-en'>coin_stack</span>(<span class='pl-smi'>starting_amount</span>){<br><br>}</pre></div></li></ul></li></ol></li><li>Add a property <code>value</code> to your constructor<ol class='nested-1'><li><code>value</code> should be set to the initial coin amount</li><li>Remember when setting a property you use the <code>this</code> keyword<ul class='clean-list'><li><button id='hint2btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>Show Hint</button></li><li id='hint2' class='clean-list collapse'><i>Hint:</i><div class='highlight highlight-source-js'><pre><span class='pl-k'>function</span> <span class='pl-en'>coin_stack</span>(<span class='pl-smi'>starting_amount</span>){<br><br>&nbsp;&nbsp;<span class='pl-v'>this</span>.<span class='pl-c1'>value</span> <span class='pl-k'>=</span> starting_amount;<br>}</pre></div></li></ul></li></ol></li><li>Test your constructor:<ol class='nested-1'><li>Using the <code>new</code> keyword, make an instance of your object named: <code>my_coin_stack</code> that starts with <b>50</b> coins<ul class='clean-list'><li><button id='hint3btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>Show Hint</button></li><li id='hint3' class='clean-list collapse'><i>Hint:</i><div class='highlight highlight-source-js'><pre><span class='pl-k'>var</span> my_coin_stack <span class='pl-k'>=</span> <span class='pl-k'>new</span> <span class='pl-en'>coin_stack</span>(<span class='pl-c1'>50</span>);</pre></div></li></ul></li><li>Use a <code>console.log</code> to log out the amount of coins your new <code>coin_stack</code> object contains<ul><li><b>Example Output: </b><code>my_coin_stack contains 50 coins</code><ul class='clean-list'><li><button id='hint4btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>Show Hint</button></li><li id='hint4' class='clean-list collapse'><i>Hint:</i><div class='highlight highlight-source-js'><pre><span class='pl-en'>console</span>.<span class='pl-c1'>log</span>(<span class='pl-s'><span class='pl-pds'>'</span>my_coin_stack contains <span class='pl-pds'>'</span></span>, <span class='pl-smi'>my_coin_stack</span>.<span class='pl-c1'>value</span>, <span class='pl-s'><span class='pl-pds'>'</span> coins<span class='pl-pds'>'</span></span>);</pre></div></li></ul></li></ul></li></ol></li></ol>"
        },
        'Feature Set 2 - Add Remove Coins': {
            html: "<h4>Between your script tags</h4><ol class='left-border'><li>Within your constructor function, create a method that will add coins to the coin stack<ol class='nested-1'><li>Name the method: <code>add_coins</code></li><li>The method should take <b>1</b> parameter that will represent the amount of coins to be added</li><li>The coins should be added to the <code>value</code> property of <code>coin_stack</code></li><li>The method does not need to return anything</li></ol></li><li>Within your constructor function, create a method that will remove coins from the coin stack<ol class='nested-1'><li>Name the method: <code>remove_coins</code></li><li>The method should take <b>1</b> parameter that will represent the amount of coins to be removed</li><li>If <code>value</code> is <b>>=</b> the amount being removed:<ol class='nested-2'><li>Remove the given amount of coins from <code>value</code></li><li>Return the amount of coins removed</li></ol></li><li>If <code>value</code> is <b><</b> the amount being removed:<ol class='nested-2'><li>Remove all the coins available from <code>value</code> (<code>value</code> should be 0)</li><li>Return the amount of coins removed</li></ol></li></ol></li><li>Test the 2 new methods:<ol class='nested-1'><li>Use the <code>my_coin_stack</code> variable from above to preform the following actions:<ol class='nested-2'><li>Add 15 coins to your stack, using your new <code>add_coins</code> method</li><li>Log out your new total coin stack in the following format: <code>I have 65 coins in my coin stack</code> <b>(DO NOT hard code the number, use your object)</b></li><li>Subtract 37 coins from your stack, using your new <code>remove_coins</code> method</li><li>Log out your new total in the same format as above</li><li>Subtract 55 coins from your stack, using your new <code>remove_coins</code> method</li><li>Log out your new total in the same format as above</li></ol></li></ol></li></ol>"
        },
        'Feature Set 3 - Prototype in the prototype': {
            html: "<h4>Between your script tags</h4><ol class='left-border'><li>Outside of your constructor function, <code>prototype</code> a new method to your <code>coin_stack</code> object that will remove coins from one <code>coin_stack</code> instance and then add them to a different one<ol class='nested-1'><li>Name the method: <code>transfer_coins</code></li><li>The method should take <b>2</b> parameters<ol class='nested-2'><li>One to hold the object that the coins are being transferred from</li><li>One to hold the amount of coins that are being transferred</li><li class='clean-list'><button id='hint5btn' class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint5' aria-expanded='false' aria-controls='hint5'>Show Hint</button></li><li id='hint5' class='clean-list collapse'><i>Hint:</i><div class='highlight highlight-source-js'><pre><span class='pl-smi'>coin_stack</span>.<span class='pl-c1'>prototype</span>.<span class='pl-en'>transfer_coins</span> <span class='pl-k'>=</span> <span class='pl-k'>function</span>(<span class='pl-smi'>from_obj</span>, <span class='pl-smi'>amount</span>){<span class='pl-k'>...</span>}</pre></div></li></ol></li><li>The method should take the given amount of coins and <i>remove</i> them from the passed in object then <i>add</i> them to the current object</li><li>The function should return the total amount that was transferred<ul><li><b>Hint:</b> utilize the add and remove functions that you have already made from <i>feature set 2</i></li></ul></li></ol></li><li>Test your new prototyped method:<ol class='nested-1'><li>Create 2 new <code>coin_stack</code> instances with <b>50</b> coins each, use the following names:<ol class='nested-2'><li><code>erics_coins</code></li><li><code>dans_coins</code></li></ol></li><li>Use <code>console.log</code> to log out the values of both coin stacks</li><li>Using your new method transfer <b>30</b> coins from <code>dans_coins</code> to <code>erics_coins</code></li><li>Use <code>console.log</code> to log out the values of both coin stacks<ol class='nested-2'><li>Does Dan now have <b>20</b> coins?</li><li>Does Eric now have <b>80</b> coins?</li><li>If you answered <b>NO</b> to either of those revisit your code</li></ol></li><li>Use your method again to transfer <code>120</code> coins from <code>erics_coins</code> to <code>dans_coins</code></li><li>Use <code>console.log</code> to log out the values of both coin stacks<ol class='nested-2'><li>Does Dan now have <b>100</b> coins?</li><li>Does Eric now have <b>0</b> coins?</li><li>If you answered <b>NO</b> to either of those revisit your code</li></ol></li></ol></li></ol>"
        }
    }
});

//js_regex
app.controller('jsRegexController', function() {
    this.title = ['JavaScript<br> <b class="lf-text">Reg</b>ular <b class="lf-text">Ex</b>pressions', 'js_ajax'];
    this.description = "<p>Building from previous prototypes, this prototype will introduce you to <i>Regular Expressions</i></p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_regex';
    this.protoId = 45;

    this.links = {
        Presentation: {
            'JS AJAX': 'https://docs.google.com/presentation/d/1xtn4cLXmWXx3caxrXgl418jLOQc8MC5-pY-r0TcjRVs/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        'W3 School': {
            'JS Regex': 'http://www.w3schools.com/jsref/jsref_obj_regexp.asp',
            'JS String Regex Search': 'http://www.w3schools.com/jsref/jsref_match.asp'
        },
        'Other Resources': {
            'Regex Cheat Sheet': 'https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/',
            'Regex Tester': 'https://regex101.com/'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS AJAX",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Stared': {
            html: '<ol class="left-border"><li>In your <code>js_regex</code> folder create an <code>index.html</code> file</li><li>Within your <code>index.html</code>:<ol class="nested-1"><li>Create a basic html skeleton</li><li>Add a title tag in your head section with the vale of: <b>js_regex</b></li><li>Add <code>script</code> tags within your head section</li><li>All code for this prototype will be completed in the script tags</li><li>Within your body add a <code>h1</code> tag with the text: <b>JavaScript - Regular Expressions</b></li></ol></li></ol>'
        },
        'Feature Set 1 - Easing In': {
            html: '<ol class="left-border"><li>Write a regular expression (regex) to find the letter <b>"e"</b> in the string <b>hello</b><ol class="nested-1"><li>Save the regex to a variable named: <code>fs1a</code></li></ol></li><li>Write a regex to find <b>ALL</b> the "e"s in the string <b>HE entEred</b>, regardless if it is capitalized or not<ol class="nested-1"><li>Save the regex to a variable named: <code>fs1b</code></li></ol></li><li>Write a single regex to find both "star" and "stir" in "stir the star", but not, for example "stat" or "stim"<ol class="nested-1"><li>Save the regex to a variable named: <code>fs1c</code></li></ol></li><li>Use the following strings to test your regex:<ol class="nested-1"><li>stir the star</li><li>stim the stat</li><li>stir the stat</li><li>stim the star</li></ol></li><li>The tests should only find the word "stir" and/or "star" in each string</li></ol>'
        },
        'Feature Set 2 - Phone Home': {
            html: '<ol class="left-border"><li>Write a regex for checking for a valid US phone number<ol class="nested-1"><li>Save the regex to a variable named: <code>phoneNumber</code></li></ol></li><li>Here is a list of valid US phone numbers that should pass your regex check<ol class="nested-1"><li>818 555 1212</li><li>818-555-1212</li><li>1818 555 1212</li><li>1818-555-1212</li><li>1 818 555 1212</li><li>1-818-555-1212</li><li>(818) 555-1212</li><li>8185551212</li><li>818 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;555 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1212</li><li>818 555-1212</li><li>18185551212</li></ol></li><li>Here is a list of bad or not valid phone numbers that should not pass your regex check<ol class="nested-1"><li>818555121</li><li>818?5551212</li><li>8185-55-1212</li><li>555-1212</li><li>eight one eight, five five five, one two one two</li></ol></li><li>Your regex should be able to verify all the example valid numbers and regect all the example bad numbers</li></ol>'
        },
        'Feature Set 3 - Valid Password': {
            html: '<ol class="left-border"><li>Create a regex for checking if a password is valid. The password must have the following criteria:<ol class="nested-1"><li>Must be between <b>6</b> and <b>32</b> characters long</li><li>Must have at least one capital letter</li><li>Must have at least one lower-case letter</li><li>Must have at least one number</li><li>Must start with a letter (lower-case or upper-case)</li></ol></li><li>Save the regex to a variable named: <code>passwordRegex</code></li><li>Use the below examples to test your password regex against</li><li>Example valid passwords:<ol class="nested-1"><li>helloDude3</li><li>Pa5sWoRd</li><li>thisIsaReallyL0NGpassword</li></ol></li><li>Example invalid passwords:<ol class="nested-1"><li>short</li><li>nocapsbutanumber1</li><li>5tartsWithANumber</li><li>ALLCAPSBUT4NUMBER</li><li>toDamnManyLettersForThisToBeAValidP4sswordYouKnowIt</li><li>ill#g@l_characters</li></ol></li></ol>'
        }
    };
});

//js_form_validation
app.controller('jsFormValController', function() {
    this.title = ['JavaScript <br> Form Validation', 'js_form_validation'];
    this.description = "<p>Building from previous prototypes, this prototype will introduce you to <i>Form Validation</i>. We will start with HTML validation then move onto more complex and powerful validation using JavaScript.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'js_form_validation';
    this.protoId = 46;

    this.links = {
        'W3 School': {
            'JS Form Validation': 'http://www.w3schools.com/js/js_validation.asp'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "JS Form Validation",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: '<ol class="left-border"><li>Two folders have been included in the <code>js_form_validation</code> folder:<ol class="nested-1"><li><code>html_validate</code><ul><li>index.html</li></ul></li><li><code>js_validate</code><ul><li>index.html</li><li>script.js</li></ul></li></ol></li></ol>'
        },
        'Feature Set 1 - Validation with HTML': {
            html: '<ol class="left-border"><li>Open the <code>index.html</code> file within the <code>html_validate</code> folder in your browser and familiarize yourself with the form</li><li>All coding for this feature set will be done in the <i>index</i> file within the <b>html_validate</b> folder</li><li>Using only <b>HTML</b>, validate the form</li><li>Things we want to validate:<ol class="nested-1"><li><b>Full Name</b>:<ul><li>Make it <span class="text-danger">required</span></li></ul></li><li><b>D.O.B.</b>:<ul><li>Verify that it is a valid date</li><li>Make it <span class="text-danger">required</span></li></ul></li><li><b>Email</b>:<ul><li>Verify that it is a valid email address</li><li><i>This is easier than you may think, don\'t over think this one</i></li><li>Make it <span class="text-danger">required</span></li></ul></li><li><b>Password</b>:<ul><li>Verify that it starts with a letter</li><li>Verify that it contains a number</li><li>Verify that it has no special characters (<i>letters and numbers only</i>)</li><li>Make it <span class="text-danger">required</span></li></ul></li></ol></li><li>Add any necessary <b>attributes</b> to help with the validation</li><li>If you are unsure what attributes to use, research the following:<ol class="nested-2"><li><b>required</b></li><li><b>type</b></li><li><b>pattern</b></li><li>Anything else related to HTML form validation</li></ol></li><li>The form should not submit unless all inputs are valid</li></ol>'
        },
        'Feature Set 2 - Validation with JavaScript': {
            html: '<ol class="left-border"><li>Anything that says: <b>Extra</b> is not required but recommended to at least try if time permits</li><li>Open the <code>index.html</code> file within the <code>js_validate</code> folder in your browser and familiarize yourself with the form</li><li>All coding for this feature set will be done in the <i>script</i> file within the <b>js_validate</b> folder</li><li>Using JavaScript validate the form</li><li>Things we want to validate:<ol class="nested-1"><li><b>Full Name</b>:<ol class="nested-2"><li>Check for two separate names (<i>first and last</i>)</li><li>Each name should be at least 2 characters</li><li>Allow no special characters except \' (<i>apostrophe</i>)</li><li>Make it <span class="text-danger">required</span></li></ol></li><li><b>D.O.B.</b>:<ol class="nested-2"><li>Verify that it is a valid date using one of the following formats:<ul><li><b>MM/DD/YY</b></li><li><b>MM/DD/YYYY</b></li><li><b>YYYY/MM/DD</b></li></ul></li><li><b>Extra:</b> Check if it is a valid D.O.B. by checking what their age is based off the date given</li><li>Make it <span class="text-danger">required</span></li></ol></li><li><b>Email</b>:<ul><li>Verify that it is a valid email address</li><li>Make it <span class="text-danger">required</span></li></ul></li><li><b>Password</b>:<ul><li>Verify that it contain 6 to 32 characters</li><li>Verify that it starts with a letter</li><li>Verify that it contains at least 1 capital letter</li><li>Verify that it contains at least 1 lower case letter</li><li>Verify that it contains at least 1 number</li><li>Verify that both password fields match</li><li>Make it <span class="text-danger">required</span></li></ul></li></ol></li><li>The <span class="label label-info">Submit Form</span> button should remain disabled until all fields are valid</li><li><b>Extra:</b> For password, as each criteria is met change the font color to green (class="text-success") and unhide the check mark icon</li><li><b>Extra:</b> Give feedback on current input as user types</li></ol>'
        }
    }
});