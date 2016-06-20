//Controllers for CSS Prototypes

//css_design_layout_1
app.controller('cssLayout1Controller', function() {
    this.title = ['CSS Design & Layout 1 <br> Box Model, Margin, Padding, Border and Dimensions', 'css_design_layout_1'];
    this.description = "<p>Expanding on your understanding of CSS layouts and how they pertain to web page design. This prototype will cover the box model, margins, padding, borders and dimensions. </p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'css_dl1';
    this.protoId = 6;

    this.links = {
        Reading: {
            'CSS Box Model': 'http://www.w3schools.com/css/css_boxmodel.asp',
            'CSS Margins': 'http://www.w3schools.com/css/css_margin.asp',
            'CSS Padding': 'http://www.w3schools.com/css/css_padding.asp',
            'CSS Dimensions': 'http://www.w3schools.com/css/css_dimension.asp'
        },
        Presentation: {
            'CSS Design & Layout 1': 'https://docs.google.com/presentation/d/1_NISU3X3ZkWUbbu6DcE3HPL3MZ8TNYsRyXnNRM2snuA/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'CSS Design & Layout 1': 'http://portal.learningfuze.com/node/700'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "CSS Design Layout 1",
            link: "",
            live: false
        }
    };

    this.features = {
        'Feature Set 1 - Layout 1': {
            html: "<ul class='left-border'><li>Make a file called <code>example.html</code><ul><li>Add an internal CSS stylesheet</li><li>In it, do the following</li><li>Make a div, give it a class of 'feature_set_1_1'<ul><li>Make a set of 3 divs inside the above div, sitting side by side, that together take up 75% of the width of the body</li><li>Add appropriate ids or classes to perform the following operations:<ul><li>Give your divs a set height</li><li>Put 5% of space between the 1st and 2nd div via any method you wish</li><li>Put 5% of space between the 2nd and 3rd div without further altering the 2nd div</li><li>The three divs should all be on the same line, side by side </li></ul></li></ul></li><li>Make another div, give it a class of 'feature_set_1_2'<ul><li>Make a set of 3 divs inside the feature_set_1_2, each with 25vw width</li><li>The three divs should all be on the same line, side by side </li><li>Add borders to all 3 divs with 1 css statement, without affected any other div in this example</li><li>Add padding top and bottom to the first div with 1 CSS statement</li><li>Add padding top and right to the second div with 1 CSS statement</li><li>Using the dev tools inspector, add padding to the 3rd div in any combination, as long as each side has different padding.<ul><li>Copy the padding to your internal style sheet</li></ul></li>    </ul></li><li>Make another div, give it a class of 'feature_set_1_3'<ul><li>Give the div a set height in pixels</li><li>Give it 3 divs, give each 100pixels of width</li><li>The three divs should all be on the same line, side by side </li><li>Give the first 25% height</li><li>Give the second 25 vh height</li>    <li>Give the third another form of height beside pixel, %, or viewport height.</li></ul></li></ul></li></ul>"
        },
        'Feature Set 2 - Layout 2': {
            html: "<ul class='left-border'><li>Create a file called <code>nav.html</code><ul><li>Create an internal style sheet inside nav.html</li><li>Add a <code>&lt;nav&gt;</code> element and closing tag, put the remaining code from this featureset inside the nav element</li><li>Make a UL / LI element construct<ul><li>With the following hyperlinks (none of these files exist, don't worry)<ul><li>home : links to home.html </li><li>about us : links to about_us.html</li><li>our menu : links to our_menu.html</li><li>contact us : links to contact_us.html</li></ul></li><li>Remove the bullet points</li><li>The nav should be displayed horizontal</li><li>Add a border with appropriate spacing around the menu items</li><li>Add padding to space the border from the words</li><li>Capitalize the text within the menu WITHOUT changing the text in your element directly. <i>Use CSS</i></li><li>Add margin sufficient to space the menu items out relatively evenly across the page</li><li>Resize your page.  What happens?  Tweak this untill it works correctly at most sizes.<ul><li>have you tried making the font size depend on the page size?  This might help.  <b>Explore!</b></li></ul></li></ul></li></ul></li></ul>"
        },
        'Feature Set 3 - Layout 3': {
            html: "<ul class='left-border'><li>Create a file called <code>gallery.html</code><ul><li>Add an internal style sheet</li><li>Add 5 photos that feature yourself in them.  If you are a complete recluse, use any photos.<br></li><li>Add CSS to your stylesheet that allows all 5 photos to exist on the same line, as well as margin/padding/border (as you wish) to space them out from one another<ul><li>If resizing the photos is required, make sure they maintain their previous aspect ratio <i>(The pictures should not appear distorted)</i></li></ul></li><li>Have each photo link to the full size photo directly.  Should open via a hyperlink.  Only clicking the photo should open this link.</li></ul></li></ul>"
        }
    }
});

//css_design_layout_2
app.controller('cssLayout2Controller', function() {
    this.title = ['CSS Design & Layout 2 <br> CSS Positioning and CSS Floating', 'css_design_layout_2'];
    this.description = "<p>Expanding on your understanding of CSS layouts and how they pertain to web page design. This prototype will cover CSS positioning and CSS floating</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'css_dl2';
    this.protoId = 7;

    this.links = {
        Reading: {
            'CSS Positioning': 'http://www.w3schools.com/css/css_positioning.asp',
            'CSS Floating': 'http://www.w3schools.com/css/css_float.asp'
        },
        Presentation: {
            'CSS Intro - Positioning & Floating': 'https://docs.google.com/presentation/d/1FtwdmaSl5icYHzBxY6uCZUHM7K_smRfS7eF0q-P46GY/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'CSS Intro - Positioning $ Flaoting': 'http://portal.learningfuze.com/node/733'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "CSS Design Layout 2",
            link: "",
            live: false
        }
    };

    this.features = {
        'Feature Set 1 - Header with a UL Nav': {
            html: "<h4>Make a file called <code>index.html</code></h4><ul class='left-border'><li>Add an internal CSS stylesheet<ol><li>In it, do the following</li><li>Using the <code>&lt;header&gt;</code> tag, create a container for your header<ol class='nested-1'><li>Set its width to be the full width of the page</li><li>Set its height to <code>15%-20%</code> of the view area's height</li><li>Add a background color of your choosing</li></ol></li><li>Go to google and find a logo that you like, try to find an image that is file type <code>.png</code><ol class='nested-1'><li>Create a new folder/directory inside your <code>css_design_layout_2</code> folder named <code>images</code></li><li>Save your logo that you found on google into your newly created images folder</li><li>Add an image tag inside your header container that points to your logo image</li><li>Using CSS<ol class='nested-2'><li>Move the image to the left side of your header (leave some space between the image and the left edge ofthe header)</li><li>Size the image so it fits in your header neatly</li> <li>Vertically center the image</li></ol></li></ol></li><li>Add a <code>&lt;h1&gt;</code> tag with the name of your company<ol class='nested-1'><li>Resize the text to help fill out the header </li><li>Position the text so that it aligns well with your logo and looks appealing</li><li>Change the color of the text to match your theme</li><li>As a bonus research a method to add a shadow to your text</li></ol></li><li>Based on the steps from CSS Design &amp; Layout 1 - Feature Set 2 - <a href='http://learning-fuze.github.io/prototypes_C9/#/CSS-Layout-1' target='_blank'>Reference Link</a><ol class='nested-1'><li>Build out a navigation</li><li><strong>DO NOT</strong> Create the nav in a new file</li> <li>Create the nav in your header container in your <code>index.html</code> file</li><li>The navigation should be displayed horizontally</li><li>It should be displayed in the lower right of the header and take up about <code>50%</code> of the headers width<br></li></ol></li></ol></li></ul>"
        },
        'Feature Set 2 - 2 Column Layout <i>(floats)</i>': {
            html: "<h4>Beneath your header</h4><ul class='left-border'><li>Use a <code>&lt;section&gt;</code> tag to create a container to hold your main content<ol><li>Give the section tag an ID of <code>fs-2</code></li><li>Make the width <code>100%</code> the width of the view area</li><li>Make the height about <code>30%</code> of the view area (depending on the size of your header)<ol class='nested-1'><li>Inside your section tag add two div tags</li> </ol></li><li>Both divs should be <code>100%</code> the height of their container<ol class='nested-1'><li>Make the first div about <code>25%</code> the width of its container</li><li>Make the second div about <code>75%</code> the width of its container</li><li>Add some content to both divs (anything you want)</li><li>Using floats, make the two divs sit side by side beneath your header</li></ol></li><li><strong>Hint:</strong> You may need to adjust the widths a little to get them to fit together</li><li><strong>Hint:</strong> Use borders so you can see how and where everything is fitting together</li> </ol></li></ul>"
        },
        'Feature Set 3 - 2 Column Layout <i>(display)</i>':{
            html: "<h4>Beneath your Section <code>fs-2</code></h4><ul class='left-border'><li>Create another <code>&lt;section&gt;</code><ol><li>Give the section an ID of <code>fs-3</code></li><li>Make the width <code>100%</code> the width of the view area</li><li>Make the height about <code>30%</code> of the view area (depending on the size of your header)<ol class='nested-1'><li>Inside your section tag add two div tags</li></ol></li><li>Both divs should be <code>100%</code> the height of their container<ol class='nested-1'><li>Make the first div about <code>25%</code> the width of its container</li><li>Make the second div about <code>75%</code> the width of its container</li><li>Add some content to both divs (anything you want)</li><li>Using the display property, make the two divs sit side by side beneath your <code>fs-2</code> section</li></ol></li><li><strong>Hint:</strong> You may need to adjust the widths a little to get them to fit together</li><li><strong>Hint:</strong> Use borders so you can see how and where everything is fitting together</li> </ol></li></ul>"
        },
        'Feature Set 4 - Footer': {
            html: "<h4>Create a basic footer at the bottom of your page</h4><ul class='left-border'><li>Use the <code>&lt;footer&gt;</code> tag to create a footer at the end of your page<ol><li>Its height should be about <code>20%</code> of the view area<ol class='nested-1'><li>All sections should combine to equal <code>100%</code> the height of the view area<ol class='nested-2'><li>Header - <code>20%</code></li><li>Section fs-2 - <code>30%</code></li> <li>Section fs-3 - <code>30%</code></li><li>Footer - <code>20%</code></li></ol></li><li>Yours can vary slightly just as long as they all equal <code>100%</code> combined</li></ol></li><li>Add some generic content to your footer</li><li>Add a background color to match your header</li></ol></li></ul>"
        },
        'Feature Set 5 - Gutters': {
            html: "<h4>Create gutters on each side of all your content</h4><ul class='left-border'><li>Wrap all your content from header to footer in a div tag<ol class='nested-1'><li>Give the div a class of container</li><li>Set its width to <code>70vw</code><ol class='nested-1'><li>Change the width of your header, sections and footer to <code>100%</code> (if that's not what you are using already)</li><li>Find a way to center your container on the page (horizontally)</li></ol></li><li>Once you center your container all your content should be centered on the page</li><li>This will create a <code>15vw</code> gutter on each side of your content</li></ol></li></ul>"
        }

    }
});

//css_selectors
app.controller('cssSelectorsController', function() {
    this.title = ['CSS Selectors, Group, Descendant, Content, State, <br> Link Selectors, Cascading and Specificity', 'css_selectors'];
    this.description = "<p>Expanding on your understanding of CSS selectors and how they can be used to target elements or groups of elements to apply style, aiding in the design of a webpage.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'css_selec';
    this.protoId = 8;

    this.links = {
        Reading: {
            'CSS Selectors': 'http://www.w3schools.com/css/css_syntax.asp',
            'Group, Descendant, Content, State and Link Selectors': 'http://www.w3schools.com/cssref/css_selectors.asp',
            'Cascading and Specificity': 'https://css-tricks.com/specifics-on-css-specificity/'
        },
        Presentation: {
            'CSS Selectors, Cascading and Specificity': 'https://docs.google.com/presentation/d/1fRgUZaRLOH-tTLGazsBfqWMwv90dcLZMTEl0FjZpWMk/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'CSS Selectors': 'http://portal.learningfuze.com/node/736'
        },
        'Related Project': {
            Portfolio: 'https://github.com/Learning-Fuze/portfolio#version-1-v1',
            mBoutique: 'https://github.com/Learning-Fuze/mboutique',
            'Memory Match (coming soon)': '#CSS-Selectors'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "CSS Selectors",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>Two HTML files have been included in the <code>css_selectors</code> folder<ol class='nested-1'><li><code>easy.html</code></li><li><code>hard.html</code></li></ol></li><li>You are <b>NOT</b> required to do both the easy and hard feature sets</li><li>Choose one or the other</li><li>If you choose to do both, only the <b>Hard</b> version will be reviewed<ul><li>Review of the easy version will require students spending accumulated additional instructor time, if any is available.</li></ul></li><li>Choose the one you feel the most comfortable tackling</li><li>Looks can be deceiving, although the harder one might not look much tougher ... It is!</li></ol>"
        },
        'Feature Set 1 - Easy CSS Positioning (Well at least easier)': {
            html: "<ol class='left-border'><li>Using the HTML provided in <code>easy.html</code> recreate the image below<ol class='nested-1'><li><strong>DO NOT</strong> change the HTML in <strong>ANY</strong> way. Don't touch even one letter!</li><li>This will require you to use element selectors, group selectors and pseudo CSS selectors</li></ol></li><li>Create a css style sheet named <code>style-easy.css</code><ol class='nested-1'><li>The link has already been added to the HTML so make sure to name it as shown</li></ol><a href='assets/images/prototypes/css_selectors/easy.png' target='_blank'><img src='assets/images/prototypes/css_selectors/easy.png' alt='Contact an Instructor if you see this (easy-1)'></a></li></ol><h4>Feature Set 1a - Body Size and Header</h4><ol class='left-border'><li>Give the body element a set (fixed) <em>height</em> and <em>width</em><ul><li>Height = <code>600px</code></li><li>Width = <code>1200px</code></li></ul></li><li>Center the content of the header</li><li>Give the header element:<ol class='nested-1'><li>A border just on the bottom <code>3px</code> thick</li><li>A background color <span class='label lightblue-bg'>light blue</span></li></ol></li><li>For the ul that represents the navigation:<ol class='nested-1'><li>Take away the bullet points</li><li>Make sure it is in the center properly ... (padding maybe?)</li><li>Make the list horizontal</li><li>Using pseudo selectors<ol class='nested-2'><li>Make the first and third list items <span class='lightgreen-txt'>light green</span></li><li>Make the second and fourth <span class='green-txt'>green</span></li></ol></li></ol></li></ol><h4>Feature Set 1b - Center Section</h4><ol class='left-border'><li>For The whole center section, center all the content</li><li>For the center section \"Main Content - Square Divs\"<ol class='nested-1'><li>give the three divs the following dimensions:<ul><li>Height = <code>80px</code></li><li>Width = <code>80px</code></li></ul></li><li>Give the divs the appropriate background color to match their text</li><li>Give the three divs a border with a radius and make it <code>3px</code> thick</li><li>Position the divs as shown in the image above</li></ol></li><li>For the center section \"Main Content - Paragraphs\"<ol class='nested-1'><li>Change the font color of the three paragraphs to <span class='lavender-txt purple-bg label'>lavender</span></li><li>Add a dark gray background color to the first and third paragraphs<ol class='nested-2'><li>Add some top and bottom padding to the same paragraphs (<code>4px</code>)</li></ol></li><li>For the middle paragraph:<ol class='nested-2'><li>Change the font color to <span class='label black-bg'>white</span></li><li>Change the background color to <span class='label blue-bg'>blue</span><ol><li>Make it so the background color only surrounds the text and doesn't reach across the page</li></ol></li><li>Add some padding to all sides (<code>4px</code>)</li><li>Increase the font size to about <code>22px</code></li></ol></li></ol></li></ol><h4>Feature Set 1c - Footer</h4><ol class='left-border'><li>Center the content of the Footer</li><li>Change the footer background color to the same as the header</li><li>Add some extra padding on all sides to the footer (about <code>10px</code>)</li><li>Make the h1 element <span class='dark-blue-txt'>dark blue</span></li><li>For the paragraph in the footer:<ol class='nested-1'><li>Change the font color <span class='text-danger'>Red</span></li><li>Make the font <strong>Bold</strong></li><li>Make the font size <span class='larger-txt'>Bigger</span>... let's say <code>18px</code></li><li><u>Uderline the whole paragraph</u></li></ol></li><li>That is it, your page should resemble the image above</li></ol>"
        },
        'Feature Set 2 - Hard CSS Positioning (Well at least harder)': {
            html: "<ol class='left-border'><li>Using the HTML provided in <code>hard.html</code> recreate the image below<ol class='nested-1'><li><strong>DO NOT</strong> change the HTML in <strong>ANY</strong> way. Don't touch even one letter!</li><li>This will require you to use element selectors, group selectors and pseudo CSS selectors</li></ol></li><li>Create a css style sheet named <code>style-hard.css</code><ol class='nested-1'><li>The link has already been added to the HTML so make sure to name it as shown</li></ol></li><li>There are no step by step instructions for this one, just some guidelines that will be checked for.<a href='assets/images/prototypes/css_selectors/hard-1.png' target='_blank'><img src='assets/images/prototypes/css_selectors/hard-1.png' alt='Contact an Instructor if you see this (hard-1)'></a></li></ol><h4>Notes For Hard</h4><ol class='left-border'><li><strong>Note</strong> in image two when you hover over \"Menu Item 1\" there is a drop down menu</li><li>The main menu and sub menu items also highlight with gray on hover<a href='assets/images/prototypes/css_selectors/hard-2.png' target='_blank'><img src='assets/images/prototypes/css_selectors/hard-2.png' alt='Contact an Instructor if you see this (hard-2)'></a></li><li>Guidelines that will be checked:<ol class='nested-1'><li>Body width set to 790px</li><li>Cat image 25% of the vw but not to exceed 150px</li><li>Article 50% width</li><li>Aside 50% width</li><li>Footer height 20% view height</li><li>ALL Colors used:<ul><li>Black</li><li>Blue</li><li>Dark Gray</li><li>Green</li><li>Red</li><li>White</li></ul></li><li class='clean-list'>The list above is just some of the key things that will be checked for. You will need to figure out padding, margins, borders, etc and how to target the individual and groups of elements using only css selectors. Do your best to match the images exactly.</li></ol></li></ol>"
        }
    }

});

//css_bootstrap_grid
app.controller('cssBsGridController', function() {
    this.title = ['CSS Bootstrap Grid System', 'css_bootstrap_grid'];
    this.description = "<p>Expanding on your understanding of CSS by introducing you to Bootstrap. Bootstrap gives you a wide range of styling options. For this prototype we will be experimenting with the Bootstrap grid system.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'css_bs_grid';
    this.protoId = 11;

    this.links = {
        Reading: {
            'CSS Bootstrap Grid (official)': 'http://getbootstrap.com/css/#grid',
            'CSS Bootstrap Grid (w3schools)': 'http://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp'
        },
        Presentation: {
            'CSS Bootstrap': 'https://docs.google.com/presentation/d/1AzAVKt40iIkd84kNQ3fCbpYJZsY3FC8dZuOPMOvbUbU/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'CSS Bootstrap': 'http://portal.learningfuze.com/node/861'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "CSS Bootstrap Grid",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included with this prototype and can be found in the <code>css_bootstrap_grid</code> folder</li><li>For each feature set <code>html</code> has already been started for you</li><li>Note the class names of each section, those corrispond directly to each feature set</li><li>A <code>style.css</code> file has also been included to help visualize the grid better.<ul><li>There should be no need to alter this file</li></ul></li></ol>"
        },
        'Feature Set 1 - Equal Grids': {
            html: "<ol class='left-border'><li>Add an appropriate Bootstrap CSS style file to the link in the head that is provided<ul><li><b>Hint:</b> Try to Google - \"Bootstrap CDN\"</li><li>For now you only need the CSS file</li></ul></li><li>Apply bootstrap classes to size things according to the description in the divs</li></ol>"
        },
        'Feature Set 2 - Unequal Grids': {
            html: "<ul class='left-border'><li>Apply bootstrap classes to size things according to the description in the divs</li></ul>"
        },
        'Feature Set 3 - Unequal Grids With Gutters': {
            html: "<ul class='left-border'><li>Apply bootstrap classes to size things according to the description in the divs</li></ul>"
        },
        'Feature Set 4 - Responsive Grid With Hidden / Shown Element': {
            html: "<ul class='left-border'><li>Apply bootstrap classes to size things according to the description in the divs</li></ul>"
        }
    }

});

//css_bootstrap_redux
app.controller('cssBsReduxController', function() {
    this.title = ['CSS Bootstrap Redux', 'css_bootstrap_redux'];
    this.description = "<p>This prototype will build from previous prototypes and introduce you to the use of Bootstrap. You will go over building a nav module, a carousal module, and a modal module using Bootstrap.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'css_bs_redux';
    this.protoId = 12;

    this.links = {
        Reading: {
            'Bootstrap JS Modules': 'http://getbootstrap.com/javascript/',
            'Bootstrap JS Navigation Bar (w3schools)': 'http://www.w3schools.com/bootstrap/bootstrap_navbar.asp',
            'Bootstrap JS Carousel (w3schools)': 'http://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp',
            'Bootstrap JS Modal (w3schools)': 'http://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp'
        },
        Presentation: {
            'CSS Bootstrap Redux - Bootstrap JS Modules': 'https://docs.google.com/presentation/d/1AwwKy3duuJyfh_nYIoJ8w743oL7U6n4mChHNsMBcZdU/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'CSS Bootstrap Redux - Bootstrap JS Modules': 'http://portal.learningfuze.com/node/956'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "CSS Bootstrap Redux",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included with this prototype and is located in the <code>css_bootstrap_redux</code> folder</li><li>Also included in the folder is an <code>images</code> folder</li><li>All the infornation you need to complete the feature sets can be found <a href='http://getbootstrap.com/' target='_blank'>HERE</a></li><li>You will need both the CSS and JavaScript Bootstrap CDNs <ul><li><b>NOTE:</b> The JS for Bootstrap requires jQuery, make sure to include jQuery before the Bootstrap JS CDN</li><li><b>jQuery CDN:</b> <code>&lt;script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\"&gt;&lt;/script&gt;</code></li></ul></li></ol>"
        },
        'Feature Set 1 - Bootstrap Nav Module': {
            html: "<ol class='left-border'><li>Create a Bootstrap Nav module</li><li>Add a website title on the left, with your name</li>    <li>Add the following menu items (Keep the order the same as listed below)<ol class='nested-1'><li>About Me</li><li>Skills</li><li>Projects (with sub menu)<ol class='nested-2'>     <li>mBoutique</li><li>Memory Match</li><li>Calculator</li><li>Tic-Tac-Toe</li><li>Facebook Clone</li></ol></li><li>Experience</li><li>Contact Me</li></ol></li></ol>"
        },
        'Feature Set 2 - Bootstrap Carousel': {
            html: "<ol class='left-border'><li>Add a Bootstrap Carousel module to your page</li><li>Add 5 images of yourseslf or something you enjoy, place the images into the <code>images</code> folder</li><li>Make sure it has a dot for each photo, appropriately linked</li>   </ol>"
        },
        'Feature Set 3 - Bootstrap Modal': {
            html: "<ol class='left-border'><li>Add a Bootstrap Modal module to your page</li><li>The modal should be opened by clicking ANY of the photos from the carousel in <i>Feature Set 2</i></li><li>The modal should be closed by clicking on a close button within the modal</li><li>The modal should show a full size version of the image that was clicked on</li><li>The image should have a caption below it</li></ol>"
        }
    }

});