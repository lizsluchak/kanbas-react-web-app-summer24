{/*--------------------------------------------------------------------------*/
/*-------------------------3.3.18 Card Navigation----------------------------*/
/*---------------------------------------------------------------------------*/
/*
    -   Cards combine images, titles, paragraphs and buttons into a reusable 
        component that can quickly summarize a topic. 
    -   To practice with Bootstrap cards, copy the HTML code into index.tsx, 
        and save. Refresh the browser and confirm it looks similar to image 
        shown. Use an image of your own, or download one from my Flickr 
        account and save it to public/images/stacked.jpg.

*/}

export default function CardNavigation() {
    return(
        <div id="wd-css-navigating-with-cards">
            <h2>Cards</h2>

            <div className="card"
                style={{ width: "18rem" }}>
                <img src="images/stacked.jpg"
                    className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Stacking Starship</h5>
                    <p className="card-text">
                        Stacking the most powerful rocket in history. Mars or bust!
                    </p>
                    <a href="#" className="btn btn-primary">
                        Boldly Go
                    </a>
                </div>
            </div>
        </div>

    );
}