{/*--------------------------------------------------------------------------*/
/*-----------------3.3.5 Hiding and Showing Responsive Content---------------*/
/*---------------------------------------------------------------------------*/
/*
    -   As users shrink or widen the browser window, there may be more or 
        less space to show some content. Bootstrap can configure content to 
        show or hide depending on the width of the screen. 
    -   As described earlier in Responsive grids, Bootstrap breaks up the 
        screen into 6 sizes: 
            (1) extra small
            (2) small
            (3) medium
            (4) large
            (5) extra large
            (6) extra extra large. 
    -   Create a new component called ScreenSizeLabel as shown below which 
        displays and hides different labels at different screen sizes. 
    -   Add the styling to index.css to position the label at the top left 
        corner. 
    -   Import the component at the end of index.tsx and confirm that the 
        label displays the current screen size when you resize the window. 
*/}

export default function ScreenSizeLabel() {
    return (
      <div id="wd-screen-size-label" className="position-fixed top-0 left-0 bg-black text-white">
        <div className="d-block d-sm-none">
          XS - Extra Small (&lt;576px)
        </div>
        <div className="d-none d-sm-block d-md-none">
          S - Small (≥576px)
        </div>
        <div className="d-none d-md-block d-lg-none">
          M - Medium (≥768px)
        </div>
        <div className="d-none d-lg-block d-xl-none">
          L - Large (≥992px)
        </div>
        <div className="d-none d-xl-block d-xxl-none">
          XL - Extra Large (≥1200px)
        </div>
        <div className="d-none d-xxl-block">
          XXL - Extra Extra Large (≥1400px)
        </div>
      </div>
    );
  }
  