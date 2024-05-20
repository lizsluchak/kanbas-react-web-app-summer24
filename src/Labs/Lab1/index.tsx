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
  </div>

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
    );
}


//i had to add this export line.. why?
export {}