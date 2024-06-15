/**
 * Generating dynamic HTML consists of writing code that manipulates and 
 * concatenates strings to generate new HTML strings based on some program 
 * logic. Basically consists of one language writing code in another language, 
 * symilar to what a compiler does. 
 * 
 * Working with strings can be error prone especially if you have to use lots 
 * of extra operations and variables to concatenate the resulting string. 
 * JavaScript template strings provide a better approach by allowing embedding 
 * expressions and algorithms right within strings themselves. 
 * 
 * In your return statement, wrap the HTML output in a DIV whose ID is 
 * wd-template-literals. Do not hard code the results 5, Welcome home alice, 
 * etc. Instead use the values of variables result1, result2, etc., to render 
 * the the output shown above.

 */
export default function TemplateLiterals() {
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    const result2 = `2 + 3 = ${2 + 3}`;
    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    return (
      <div id="wd-template-literals">
        <h4>Template Literals</h4>
        result1 = {result1}     <br />
        result2 = {result2}     <br />
        greeting1 = {greeting1} <br />
        greeting2 = {greeting2} <hr />
      </div>
    );
  }
  