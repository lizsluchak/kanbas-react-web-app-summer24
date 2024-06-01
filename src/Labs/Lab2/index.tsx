import "./index.css";


export default function Lab2() {
    return(
        //main lab2 div
        <div id = "wd-lab2">
            
            <div id = "wd-lab2-learningObjectives">
                <h2>Lab 2 - Cascading Style Sheets</h2>
                <h4><b>Learning Objectives:</b></h4>
                <ol id="wd-lab2-objectives">
                    <li>Style web content with Cascading Style Sheets</li>
                    <li>Layout and responsive design with Bootstrap</li>
                    <li>Use react icons</li>
                </ol>
            </div>


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

    <div id = "wd-lab2-css-sytleAttribute">
        <h3>Styling with the STYLE attribute</h3>

        <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute.
        </p>
    </div>


{/*--------------------------------------------------------------------------*/
/*-----------------3.1.3 Selecting content with ID selectors-----------------*/
/*---------------------------------------------------------------------------*/}
    
    <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        
            <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the 
            elements of the same name, e.g., P, we can refer to a specific 
            element by its ID
            </p>
            
            <p id="wd-id-selector-2">
            Here's another paragraph using a different ID and a different 
            look and feel
            </p>
    </div>


{/*--------------------------------------------------------------------------*/
/*----------------3.1.4 Selecting Content with Class Selectors---------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-class-selectors">
    <h3>Class selectors</h3>
        
        <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an 
        element's CLASS attribute
        </p>
    
    <h4 className="wd-class-selector">
    This heading has same style as paragraph above.</h4>
</div>


{/*--------------------------------------------------------------------------*/
/*----------3.1.5 Selecting Content based on the Document Structure----------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-document-structure">
    
    {/*wd-selector-1 is a parent element*/}
    <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        
        {/*wd-selector-2 is a direct child of wd-selector-1*/}
        <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document.

            {/*wd-selector-3 is a direct child of wd-selector-2 and a
            descendent of wd-selector-1*/}
            <p className="wd-selector-3">
            This paragraph's red background is referenced as
            <br />
            .selector-2 .selector3
            <br />
            meaning the descendant of some ancestor.
            <br />
            
            {/*wd-selector-4 is a direct child of wd-selector-3 and a
            descendent of wd-selector-1 and wd-selector-2*/}
            <span className="wd-selector-4">
            Whereas this span is a direct child of its parent</span>
            <br />
            You can combine these relationships to create specific 
            styles depending on the document structure
            </p>
        </div>
    </div>
</div>


{/*--------------------------------------------------------------------------*/
/*--------------------3.1.7 Styling the Foreground Color---------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-colors">
    <h2>Colors</h2>

    <h3 className="wd-fg-color-blue">Foreground color</h3>

    <p className="wd-fg-color-red">
    The text in this paragraph is red but 
    <span className="wd-fg-color-green"> this text is green</span>
    </p>
</div>


{/*--------------------------------------------------------------------------*/
/*--------------------3.1.8 Styling the Background Color---------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-background-colors">
    <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>

    <p className="wd-bg-color-red wd-fg-color-black">
    This background of this paragraph is red but
    <span className="wd-bg-color-green wd-fg-color-white">
    the background of this text is green and the foreground white</span>
    </p>
</div>
    
{/*--------------------------------------------------------------------------*/
/*--------------------------3.1.9 Styling Borders----------------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-borders">
  <h2>Borders</h2>
  <p className="wd-border-fat wd-border-red wd-border-solid">
    Solid fat red border</p>
  <p className="wd-border-thin wd-border-blue wd-border-dashed">
    Dashed thin blue border</p>
</div>


{/*--------------------------------------------------------------------------*/
/*----------------------3.1.10 Styling Margins/Padding-----------------------*/
/*---------------------------------------------------------------------------*/}

{/*Paddings*/}
<div id="wd-css-paddings">
    <h2>Padding</h2>
    <div className="wd-padded-top-left 
        wd-border-fat 
        wd-border-red 
        wd-border-solid 
        wd-bg-color-yellow">
        Padded top left
    </div>

    <div className="wd-padded-bottom-right 
        wd-border-fat 
        wd-border-blue 
        wd-border-solid 
        wd-bg-color-yellow">
        Padded bottom right
    </div>

    <div className="wd-padding-fat 
        wd-border-fat 
        wd-border-yellow 
        wd-border-solid 
        wd-bg-color-blue 
        wd-fg-color-white">
        Padded all around
    </div>
</div>

{/*Margins*/}
<div id="wd-css-margins">
  <h2>Margins</h2>
  <div className="wd-margin-bottom 
        wd-padded-top-left 
        wd-border-fat wd-border-red 
        wd-border-solid 
        wd-bg-color-yellow">
        Margin bottom
  </div>

  <div className="wd-margin-right-left 
        wd-padded-bottom-right 
        wd-border-fat wd-border-blue 
        wd-border-solid 
        wd-bg-color-yellow">
        Margin left right
  </div>

  <div className="wd-margin-all-around 
        wd-padding-fat wd-border-fat 
        wd-border-yellow 
        wd-border-solid 
        wd-bg-color-blue 
        wd-fg-color-white">
        Margin all around
  </div>
</div>


{/*--------------------------------------------------------------------------*/
/*--------------------------3.1.11 Styling Corners---------------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-borders">
  <h3>Rounded corners</h3>

  <p className="wd-rounded-corners-top 
        wd-border-thin 
        wd-border-blue 
        wd-border-solid 
        wd-padding-fat">
        Rounded corners on the top
  </p>

  <p className="wd-rounded-corners-bottom 
        wd-border-thin 
        wd-border-blue 
        wd-border-solid 
        wd-padding-fat">
        Rounded corners at the bottom
  </p>

  <p className="wd-rounded-corners-all-around 
        wd-border-thin 
        wd-border-blue 
        wd-border-solid 
        wd-padding-fat">
        Rounded corners all around
  </p>

  <p className="wd-rounded-corners-inline 
        wd-border-thin 
        wd-border-blue 
        wd-border-solid 
        wd-padding-fat">
        Different rounded corners
  </p>
</div>








{/* main div ending----------------------------------------------------------*/}
    </div>
    );
}
