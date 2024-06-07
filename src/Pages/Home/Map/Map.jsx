import './Map.css'


const Map = () => {
  return (
    <>
      <address id="address">
        Hotel LoneStar
      </address>
      <div className="responsive-map responsive-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29520.19351221531!2d91.79878728139111!3d22.352715488777488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a6285ad427%3A0x23751941b365ed3a!2sGolden%20Inn%20Chattogram%20Limited!5e0!3m2!1sen!2sbd!4v1717737262145!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
export default Map