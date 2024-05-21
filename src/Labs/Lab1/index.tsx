// Webdev A1.2.3 Creating The Labs Component: Lab1 React.js Component

// Notes: 
// (1)  React.js function components can implement algorithms that compute
//      an HTML code snippet and return the result of the computation.
//      Other functions can aggregate various snippets from different
//      components into a larger, single HTML content that browsers
//      can then render on the screen. Here the component is just returning
//      a hard coded, static HTML code snippet. Later assignments will
//      introduce far more interesting algorithms to compute complex HTML



export default function Lab1() {
    return(
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3> 

            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. 
                Each section is usually prefaced with a short title or heading that attempts 
                to summarize the topic of the section it precedes. For instance this paragraph 
                is preceded by the heading Heading Tags. The font of the section headings are 
                usually larger and bolder than their subsection headings. This document uses 
                headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, 
                etc. HTML heading tags can be used to format plain text so that it renders in 
                a browser as large headings. There are 6 heading tags for different sizes: h1, 
                h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest 
                heading.
            </div>

            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1"> ... </p>
                <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
        </p>
        <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
        </p>
            </div>

            <div id="wd-lists">
            <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients.</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet.</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Serve and enjoy!</li>
  </ol>
      
        My Favorite Recipe: Banana Bread: https://sallysbakingaddiction.com/best-banana-bread-recipe/
      <ol id="wd-my-favorite-recipe">
    <li>Adjust the oven rack to the lower third position and preheat the oven to 350°F (177°C). Lowering the oven rack prevents the top of your bread from browning too much, too soon. Grease a metal 9×5-inch loaf pan with nonstick spray. Set aside.</li>
    <li>Whisk the flour, baking soda, salt, and cinnamon together in a medium bowl. Set aside.</li>
    <li>Using a handheld or stand mixer fitted with a paddle or whisk attachment, beat the butter and brown sugar together on high speed until smooth and creamy, about 2 minutes. With the mixer running on medium speed, add the eggs one at a time, beating well after each addition. Then beat in the yogurt, mashed bananas, and vanilla extract until combined.</li>
    <li>With the mixer running on low speed, slowly beat the dry ingredients into the wet ingredients until no flour pockets remain. Do not over-mix. Fold in the nuts, if using.</li>
    <li>Pour and spread the batter into the prepared baking pan. Bake for 60–65 minutes, making sure to loosely cover the bread with aluminum foil halfway through to prevent the top from getting too brown. The bread is done when a toothpick inserted in the center comes out clean with only a few small moist crumbs. This may be after 60–65 minutes depending on your oven, so begin checking every 5 minutes around the 60-minute mark.</li>
    <li>Remove bread from the oven and allow the bread to cool in the pan set on a wire rack for 1 hour. Remove bread from the pan and cool bread directly on the wire rack until ready to slice and serve.</li>
  </ol>
            

  <h5>Unordered List Tag</h5>
My favorite books (in no particular order)
<ul id="wd-my-books">
  <li>Dune</li>
  <li>Lord of the Rings</li>
  <li>Ender's Game</li>
  <li>Red Mars</li>
  <li>The Forever War</li>
</ul>
Your favorite books (in no particular order)
<ul id="wd-your-books">
<li>Pedagogy of the Oppressed</li>
  <li>Come as you are</li>
  <li>Biography of Malcolm X</li>
</ul>
            </div>

            <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
            <thead>
                <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
                </tr>

                <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
                </tr>

                <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
                </tr>

                <tr>
                <td>Q4</td>
                <td>Routing</td>
                <td>6/19/24</td>
                <td>100</td>
                </tr>

                <tr>
                <td>Q5</td>
                <td>State & Redux</td>
                <td>7/3/24</td>
                <td>99</td>
                </tr>

                <tr>
                <td>Q6</td>
                <td>Nodes</td>
                <td>7/17/24</td>
                <td>98</td>
                </tr>

                <tr>
                <td>Q7</td>
                <td>MongoDB</td>
                <td>7/19/24</td>
                <td>97</td>
                </tr>

                <tr>
                <td>Q8</td>
                <td>Mongoose</td>
                <td>7/31/24</td>
                <td>96</td>
                </tr>

                <tr>
                <td>Q9</td>
                <td>Bootstrap</td>
                <td>8/13/24</td>
                <td>92</td>
                </tr>

                <tr>
                <td>Q10</td>
                <td>Sessions</td>
                <td>8/17/24</td>
                <td>91</td>
                </tr>


            </tbody>
            <tfoot>
                <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
                </tr>
            </tfoot>
            </table>
            </div>

            <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            
            <br />
            <img id="wd-starship"
            width="400px"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
             <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
</div>


<div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
    
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
      value="Wonderland" title="The last name" />
    {/* copy rest of form elements here  */}
    <h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
 

<h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
  Hello World!
</button>

 
 
 
 
  </form>
</div>



        </div>
    );
}


//i had to add this export line.. why?
export {}