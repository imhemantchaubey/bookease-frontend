import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money</h1>
      <span className="mailDesc">
        Subscribe and we'll send the best deals for you...!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button className="mailBtn">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
