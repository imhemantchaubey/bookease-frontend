import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

import "./hotel.css"

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/134635695.jpg?k=8aef33edb3d6ea1c9927ca794041f3d18b82ab103c72ed3ceb03241698d936e6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193963614.jpg?k=116749ac266b555c2644074e525c6ef011c93645cd7624716f0156bd86c57699&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/211786021.jpg?k=f2bb1dd3693bcbbeb195bfc067620d42c4aef70649a6395ff35943f52252b7f2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193964066.jpg?k=d532e2c108ad5e0ce72d65c84fc7975e5b8e3b5becabfaa3ee9a3c0961f55bce&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193999347.jpg?k=3cd0ba1bec6b17e9808d550324bb9bed7fff53729bfd9ce2325653f571a7d637&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/129449509.jpg?k=48a1f05b2a036188e7eaa05ad046e820a0e96faafab1439a3bcd334b71f58ccf&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/129617316.jpg?k=b1cafccac9f1051916283c5a46d8c6004446505be35f48c8115712b29786ce87&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/211786073.jpg?k=5ce5b1a0aa2acfe518104c84b1e92f7be08795c3655fc5ad3ef542b103797627&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209475466.jpg?k=bb9a2a2a28c8512f3825d0a89d48ce6107ee774c3a1d806be52805e6845484c5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/129449503.jpg?k=369e332ebb8d88bf871fb681c12967c3cbd419984a7d7637058eda5bd3624883&o=&hp=1",
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Shesha Kuteera</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Opp. KSS College Main Road, 574238 Subrahmanya, India</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from city center
          </span>
          <div className="hotelPriceHighlight">
            Book a stay over the next 28 days for ₹1230 per night and get a free
            airport taxi
          </div>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Lorem ipsum dolor sit amet.</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae qui itaque in optio accusantium quos magni error
                sequi delectus! Nisi laboriosam eaque veritatis, dolore nobis
                vel animi distinctio placeat suscipit veniam iure hic quae
                debitis minima voluptates fuga eveniet inventore assumenda? Quo
                nulla, nemo, quos quod recusandae commodi magni cum assumenda
                vel explicabo nobis aliquam fugiat aut omnis tenetur, asperiores
                consectetur at sint accusamus quis nisi. Rerum modi nemo minima
                accusantium, facere itaque dicta beatae doloremque, atque quas
                nesciunt sint, reprehenderit molestias at? Aliquid obcaecati
                eveniet repellendus laborum enim corporis neque necessitatibus,
                optio officia commodi harum ad. Molestias, fugit? Voluptate,
                temporibus?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a month stay</h1>
              <span>
                Located in between the city center, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹1230</b> per night
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
