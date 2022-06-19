import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/41/28/7b/sol-azur-beach-hotel.jpg" alt="hotel" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200901081324274244-890aaca2791511eca6120a58a9feac02.jpg?&output-quality=75&downsize=583:388&crop=583:388;30,0&output-format=jpg" alt="hotel" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>513 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://exp.cdn-hotels.com/hotels/1000000/870000/862400/862383/800a4719_y.jpg?impolicy=fcrop&w=500&h=333&q=high" alt="hotel" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>473 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured