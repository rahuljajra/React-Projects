function Navtiles() {
    return(
        <>
        <section id="bh-navtiles">
            <div className="container flex gap-4 justify-center m-4">
                <div className="p-4 bg-white rounded-lg">
                    <h2 className="text-4xl uppercase">Food Delivery</h2>
                    <h4 className="text-2xl uppercase">From Restaurants</h4>
                    <span>UPTP 60% Off</span>
                    <div className="btn-wrapper flex justify-between">
                        <button className="btn" role="button">p</button>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                    <h2 className="text-4xl uppercase">Instamart</h2>
                    <h4 className="text-2xl uppercase">Instant Grocery</h4>
                    <span>UPTP 60% Off</span>
                    <div className="btn-wrapper flex justify-between">
                        <button className="btn" role="button">p</button>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                    <h2 className="text-4xl uppercase">DineOut</h2>
                    <h4 className="text-2xl uppercase">Eat out & save more</h4>
                    <span>UPTP 50% Off</span>
                    <div className="btn-wrapper flex justify-between">
                        <button className="btn" role="button">p</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Navtiles;