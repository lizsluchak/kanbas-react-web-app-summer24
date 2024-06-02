{/*--------------------------------------------------------------------------*/
/*-----------------3.1.3 Selecting content with ID selectors-----------------*/
/*---------------------------------------------------------------------------*/
/*
    -   An HTML element's style attribute can configure the look and feel of 
        the element by changing the values of its style properties as shown 
        below. 
    -   The value of the style attribute is an object in JSON format 
        (JavaScript Object Notation). Note, it should generally not be 
        used... 
        (ie - basic structure)
            <element style={{property1: "value1", property2: "value2"}}>
                element body
            </element>
        (ie - actual example)
            <p style={{ backgroundColor: "blue", color: "white" }}> 

    -   Examples of Property 1 & 2 = foreground color, background color, 
        font size, etc. The value of the properties are strings or numbers. 
    -   In the exercise above we styled the paragraph element with its style 
        attribute. We changed the color of its background by setting the 
        backgroundColor property to blue and also changing the foreground 
        color to white by setting the color property to white. There are 
        100s of style attributes of which we'll cover the most relevant.
*/}


export default function StyleAttribute() {
    return(
        <div id = "wd-lab2-css-sytleAttribute">
            <h3>Styling with the STYLE attribute</h3>

            <p>
            Style attribute allows configuring look and feel
            right on the element. Although it's very convenient
            it is considered bad practice and you should avoid
            using the style attribute.
            </p>
        </div>
    );
}