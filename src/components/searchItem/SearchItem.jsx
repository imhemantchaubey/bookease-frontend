import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/129449503.webp?k=50b4f230a5349712e82e79d40664a2ad53ffdb4630163fe285b409bdb253b50d&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Shesha Kuteera</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio apartments with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <div className="siPrice">₹123</div>
          <div className="siTaxOp">Includes taxes and fees</div>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
