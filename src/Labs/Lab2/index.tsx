import ReactIconsSampler from "./ReactIconsSampler/index";
import ScreenSizeLabel from "./ScreenSizeLabel";
import "./index.css";



export default function Lab2() {
    return(
        //main lab2 div
        //font changed by adding container but not margins
        <div id = "container-fluid">
            
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

{/*--------------------------------------------------------------------------*/
/*-------------------------3.1.12 Styling Dimensions-------------------------*/
/*---------------------------------------------------------------------------*/}
<div id="wd-css-dimensions">
  <h2>Dimension</h2>
  
  <div>
    <div className="wd-dimension-portrait 
        wd-bg-color-yellow">
        Portrait
    </div>

    <div className="wd-dimension-landscape 
        wd-bg-color-blue
        wd-fg-color-white">
        Landscape
    </div>

    <div className="wd-dimension-square wd-bg-color-red">
        Square
    </div>
  </div>

</div>


{/*--------------------------------------------------------------------------*/
/*----------------------3.1.13 Styling Relative Position---------------------*/
/*---------------------------------------------------------------------------*/}
<div id="wd-css-position-relative">
  <h2>Relative</h2>
  
    <div className="wd-bg-color-gray">
        <div className="wd-bg-color-yellow 
            wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">
                Portrait
            </div>
        </div>
        
        <div className="wd-pos-relative-nudge-up-right 
            wd-bg-color-blue wd-fg-color-white 
            wd-dimension-landscape">
            Landscape
        </div>

        <div className="wd-bg-color-red wd-dimension-square">
            Square
        </div>
    </div>
</div>

{/*--------------------------------------------------------------------------*/
/*----------------------3.1.14 Styling Absolute Position---------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-position-absolute">
    <h2>Absolute position</h2>
    
    <div className="wd-pos-relative">
        <div className="wd-pos-absolute-10-10 
            wd-bg-color-yellow 
            wd-dimension-portrait">
            Portrait
        </div>
    
        <div className="wd-pos-absolute-50-50 
            wd-bg-color-blue 
            wd-fg-color-white 
            wd-dimension-landscape">
            Landscape
        </div>
    
        <div className="wd-pos-absolute-120-20 
            wd-bg-color-red 
             wd-dimension-square">
            Square
        </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

</div>


{/*--------------------------------------------------------------------------*/
/*------------------------3.1.15 Styling Fixed Position----------------------*/
/*---------------------------------------------------------------------------*/}
<div id="wd-css-position-fixed">
    <h2>Fixed position</h2>
    
    Checkout the blue square that says "Fixed position" stuck all the way on 
    the right and half way down the page. It doesn't scroll with the rest of 
    the page. Its position is "Fixed".
    
    <div className="wd-pos-fixed 
        wd-dimension-square 
        wd-bg-color-blue 
        wd-fg-color-white">
        Fixed position
    </div>
    <br />
    <br />

</div>


{/*--------------------------------------------------------------------------*/
/*----------------------------3.1.16 Styling Z Index-------------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-z-index">
    <h2>Z index</h2>

    <div className="wd-pos-relative">
        <div className="wd-pos-absolute-10-10 
            wd-bg-color-yellow 
            wd-dimension-portrait">
            Portrait
        </div>
    
        <div className="wd-zindex-bring-to-front 
            wd-pos-absolute-50-50 
            wd-dimension-landscape
            wd-bg-color-blue 
            wd-fg-color-white">
            Landscape
        </div>

        <div className="wd-pos-absolute-120-20 
            wd-bg-color-red 
            wd-dimension-square">
            Square
        </div>
    </div>
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
</div>

{/*--------------------------------------------------------------------------*/
/*----------------------3.1.17 Floating Images adn Content-------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-float-divs">
    <h2>Float</h2>
    
    <div>
        <div className="wd-float-left 
            wd-dimension-portrait 
            wd-bg-color-yellow">
            Yellow 
        </div>

        <div className="wd-float-left 
            wd-dimension-portrait
            wd-bg-color-blue 
            wd-fg-color-white">
            Blue 
        </div>

        <div className="wd-float-left 
            wd-dimension-portrait 
            wd-bg-color-red">
            Red 
        </div>

        <img className="wd-float-right"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        
        <div className="wd-float-done">
        </div>
    </div>
    <br/>
    <br/>

</div>


{/*--------------------------------------------------------------------------*/
/*--------------------------------3.1.18 Grids-------------------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-grid-layout">
    <div id="wd-css-left-right-layout">
        <h2>Grid layout</h2>

        <div className="wd-grid-row">
            <div className="wd-grid-col-half-page 
                wd-bg-color-yellow">
                <h3>Left half</h3>
            </div>
        
            <div className="wd-grid-col-half-page 
                wd-bg-color-blue 
                wd-fg-color-white">
                <h3>Right half</h3>
            </div>
        </div>
    </div>

    <div id="wd-css-left-third-right-two-thirds" 
        className="wd-grid-row">
        <div className="wd-grid-col-third-page 
            wd-bg-color-green
            wd-fg-color-white">
            <h3>Left third</h3>
        </div>

        <div className="wd-grid-col-two-thirds-page 
            wd-bg-color-red 
            wd-fg-color-white">
            <h3>Right two thirds</h3>
        </div>
    </div>

    <div id="wd-css-side-bars" 
        className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar 
            wd-bg-color-yellow">
            <h3>Side bar</h3>
        
            <p>This is the left sidebar</p>
        </div>
        
        <div className="wd-grid-col-main-content 
            wd-bg-color-blue 
            wd-fg-color-white">
            <h3>Main content</h3>
            
            <p>This is the main content. This is the main content. This is the
            main content.</p>
        </div>

        <div className="wd-grid-col-right-sidebar 
            wd-bg-color-green 
            wd-fg-color-white">
            <h3>Side bar</h3>
            
            <p>This is the right sidebar</p>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
<br/>
<br/>


{/*--------------------------------------------------------------------------*/
/*--------------------------------3.1.19 Flex--------------------------------*/
/*---------------------------------------------------------------------------*/}

<div id="wd-css-flex">
    <h2>Flex</h2>
    
    {/*Flex Elements without Growth*/}
    <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red">Column 3</div>
    </div>


    {/*Flex Elements with Growth/Expansion*/} 
    <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
                <div className="wd-bg-color-red
                    wd-flex-grow-1">
                    Column 3
                </div>
    </div>
    

    <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow 
            wd-width-75px">
            Column 1
        </div>
        
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red
            wd-flex-grow-1">
            Column 3
        </div>
    </div>
    <br/>
    <br/>
</div>

{/*--------------------------------------------------------------------------*/
/*------------------------------3.2 React Icons------------------------------*/
/*---------------------------------------------------------------------------*/}

<div>
    <ReactIconsSampler />
</div>



{/*--------------------------------------------------------------------------*/
/*------------------------3.3 Bootstrap CSS Library--------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Bootstrap is a CSS library containing a plethora of useful CSS rules 
        that implement various widgets, layouts, and responsive design. 
    -   This section presents exercises of how to use the Bootstrap CSS 
        library to style and layout Web pages.
    -   Bootstrap can be installed with npm from the root of you project as 
        follows -> "nmp install bootstrap"
    -   The bootstrap CSS library will be downloaded from npm and installed 
        in you node_modules directory located at the root of your project. 
    -   Once installed, import the library from src/index.tsx as shown below
        in src/index.tsx: import "bootstrap/dist/css/bootstrap.min.css";
    -   Bootstrap containers establish the root of your HTML document providing 
        a basis of default styles such as the overall margins, paddings, and 
        font of your document. There are two main classes that control 
        container elements: 
            (1).container
            (2).container-fluid. 
    -   The .container class centers the content with margins on either side 
        and defines several responsive design thresholds. The .container-fluid 
        class just defines a constant thin margin all around the document.
*/}

{/*--------------------3.3.3 Laying Out Content with Grids-------------------*/}

<div>
    <h2>Bootstrap</h2>
    <div id="wd-bs-grid-system">
        <br/>
        <h2>Grid system</h2>

        {/*a row containing two columns applying class col with default width 
            evenly spread over all columns*/}
        <div className="row">
            <div className="col bg-danger text-white">
                <h3>Left half</h3>
            </div>
            
            <div className="col bg-primary text-white">
                <h3>Right half</h3>
            </div>
        </div>
        
        {/*another row with two columns applying classes col-4 and col-8
        where 4 + 8 = 12, the total number of columns so 4/12 is ⅓ and 8/12 is ⅔ 
        of the screen*/}
        <div className="row">
            <div className="col-4 bg-warning">
                <h3>One thirds</h3>
            </div>
            
            <div className="col-8 bg-success text-white">
                <h3>Two thirds</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-2 bg-dark text-white">
                <h3>Sidebar</h3>
            </div>
            
            <div className="col-8 bg-secondary text-white">
                <h3>Main content</h3>
            </div>
            
            <div className="col-2 bg-info">
                <h3>Sidebar</h3>
            </div>
        </div>
    </div>
    <br/>
    <br/>
</div>

{/*--------------------------------------------------------------------------*/
/*--------------------------3.3.4 Responsive Grids---------------------------*/
/*---------------------------------------------------------------------------*/
/*
   -    Bootstrap grids can adapt to the size of the screen, that is, they 
        can be responsive. We can achieve this by applying more than one .col 
        class which only applies for a given window size. To practice with 
        Bootstrap responsive grids, copy the HTML code below to the end of 
        index.tsx, and save. 
*/}

<div id="wd-bs-responsive-grids">
  
    {/*smaller example*/}
    <h2>Responsive grid system</h2>
    
    <div className="row">
        <div className="col-12 
            col-md-6 
            col-xl-3 
            bg-warning">
            <h3>Column A</h3>
        </div>
        
        <div className="col-12 
            col-md-6 
            col-xl-3 
            bg-primary text-white">
            <h3>Column B</h3>
        </div>
        
        <div className="col-12 
            col-md-6 
            col-xl-3 
            bg-danger text-white">
            <h3>Column C</h3>
        </div>
        
        <div className="col-12 
            col-md-6 
            col-xl-3 
            bg-success text-white">
            <h3>Column D</h3>
        </div>
    </div>
    <br/>
</div>

{/*larger example*/}
<div id="wd-bs-responsive-dramatic">
  <h2>Responsive grid system</h2>
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning">
      <h4>1</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-primary text-white">
      <h4>2</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white">
      <h4>3</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white">
      <h4>4</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning">
      <h4>5</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-primary text-white">
      <h4>6</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white">
      <h4>7</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white">
      <h4>8</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning">
      <h4>9</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-primary text-white">
      <h4>10</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white">
      <h4>11</h4>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white">
      <h4>12</h4>
    </div>
  </div>
</div>


{/*--------------------------------------------------------------------------*/
/*-----------------3.3.5 Hiding and Showing Responsive Content---------------*/
/*---------------------------------------------------------------------------*/}

<ScreenSizeLabel />


{/*--------------------------------------------------------------------------*/
/*-----------------------------3.3.6 Styling Tables--------------------------*/
/*---------------------------------------------------------------------------*/
/*  
    -   Bootstrap provides several classes that enhance the look and feel of 
        common HTML widgets such as tables, lists, and form elements. 
    -   Let's start with tables. To practice with styling HTML tables, copy 
        the HTML code below to the end of index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown.
*/}

<div id="wd-css-styling-tables">
    <h2>Tables</h2>
  
    <table className="table">
        <thead>
            <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
        </thead>
        <tbody>
            <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
            <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
        </tbody>
    <tfoot>
      <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
    </tfoot>
  </table>
</div>


{/*--------------------------------------------------------------------------*/
/*-----------------------3.3.7 Making Tables Responsive----------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   In general it is a good practice to minimize the number of scrollbars 
        shown at any one time in a browser screen. In browsers large amounts 
        of content extends vertically beyond the height of the window, and 
        then scrollbars allow you to access that extra content. 
    -   Sometimes it is necessary to use additional scrollbars when 
        appropriate such as tables that might be too wide to fit horizontally. 
    -   Bootstrap provides tables that can show scrollbars when they don't 
        fit in their parent window. To practice with Bootstrap responsive 
        tables, copy the HTML code below to the end of index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown. 
    -   Resize the window and confirm that the table shows a horizontal scroll
        bar when the screen is too small to fit the table comfortably. 
*/}
<div id="wd-css-responsive-tables">
    <h2>Responsive tables</h2>
    
    <div className="table-responsive">
        <table className="table">
        <thead>
            <tr>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


{/*--------------------------------------------------------------------------*/
/*----------------------------3.3.8 Styling Lists----------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Another set of Bootstrap classes can make simple HTML lists look more 
        presentable. 
    -   The .list-group and .list-group-item classes can be applied to ul and 
        li tags correspondingly to make list stand out. 
    -   The .active class can be applied to an li tag to highlight it. 
    -   To practice with Bootstrap lists, copy the HTML code below to the 
        end of index.tsx, and save. Refresh the browser and confirm it looks 
        similar to image shown. 
*/}


<div id="wd-css-styling-lists">
    <h2>Favorite movies</h2>
    
    <ul className="list-group">
        <li className="list-group-item active">Aliens</li>
        <li className="list-group-item">Terminator</li>
        <li className="list-group-item">Blade Runner</li>
        <li className="list-group-item">Lord of the Ring</li>
        <li className="list-group-item disabled">Star Wars</li>
    </ul>
</div>


{/*--------------------------------------------------------------------------*/
/*--------------------3.3.9 Styling List of Hyperlinks-----------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   The same .list-group and .list-group-item Bootstrap classes can be 
        applied to div and a tags to implement a list of anchor links. 
    -   To practice with Bootstrap hyperlink lists, copy the HTML code below 
        to the end of index.tsx, and save. 
    -   Refresh the browser and confirm it looks similar to image shown and 
        that the links work. 
*/}

<div id="wd-css-hyperlink-list">
    <h3>Favorite books</h3>
    <div className="list-group">
        <a href="https://en.wikipedia.org/wiki/Dune_(novel)" 
            className="list-group-item list-group-item-action active">
            Dune
        </a>
        
        <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings" 
            className="list-group-item list-group-item-action">
            Lord of the Rings
        </a>
        
        <a href="https://en.wikipedia.org/wiki/The_Forever_War" 
            className="list-group-item list-group-item-action">
            The Forever War
        </a>
        
        <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" 
            className="list-group-item list-group-item-action">
            2001 A Space Odyssey
        </a>
        
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game" 
            className="list-group-item list-group-item-action disabled">
            Ender's Game
        </a>
    </div>
</div>





{/* main div ending----------------------------------------------------------*/}
    </div>
    );
}
