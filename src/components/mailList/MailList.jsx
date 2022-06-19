import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals for you</span>
        <div className="mailContainer">
            <input type="text" name="mail" placeholder="Enter you Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList