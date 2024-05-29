import "./index.css";


export default function Lab2() {
    return(
        <div id = "wd-lab2">

            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h4><b>Learning Objectives:</b></h4>
            <ol id="wd-lab2-objectives">
                <li>Style web content with Cascading Style Sheets</li>
                <li>Layout and responsive design with Bootstrap</li>
                <li>Use react icons</li>
            </ol>


            <h3>Styling with the STYLE attribute</h3>
            {/* An HTML element's style attribute can configure the look and feel of the element by changing the values of its style 
            properties as shown below. The value of the style attribute is an object in JSON format (JavaScript Object Notation).
            Note, it should generally not be used... 
                
                <element style={{property1: "value1", property2: "value2"}}>
                    element body
                </element>

                Examples of Property 1 & 2 = foreground color, background color, font size, etc. The value of the properties are strings
                or numbers. 
                
                In the exercise above we styled the paragraph element with its style attribute. We changed the color of its background by 
                setting the backgroundColor property to blue and also changing the foreground color to white by setting the color property 
                to white. There are 100s of style attributes of which we'll cover the most relevant.In the exercise above we styled the 
                paragraph element with its style attribute. We changed the color of its background by setting the backgroundColor property 
                to blue and also changing the foreground color to white by setting the color property to white. There are 100s of style 
                attributes of which we'll cover the most relevant. */}

                {/* <p style={{ backgroundColor: "blue",
                            color: "white" }}> */}
            <p>
            Style attribute allows configuring look and feel
            right on the element. Although it's very convenient
            it is considered bad practice and you should avoid
            using the style attribute.
            </p>
            {/* TODO: paragraph does not show up blue and white ! */}

        
        
        <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        
            <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the 
            elements of the same name, e.g., P, we can refer to a specific element by its ID
            </p>
            
            <p id="wd-id-selector-2">
            Here's another paragraph using a different ID and a different look and feel
            </p>
        </div>

        <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
            <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an element's CLASS attribute
            </p>
            <h4 className="wd-class-selector">
            This heading has same style as paragraph above. </h4>
        </div>



        </div>
    );
}
