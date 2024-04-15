import '../../index.css';

const Banner = () => {
    return(
        <>
          <div className='banner-about'>
            <h2 style={{ fontSize: "80px", padding: "30px 0" }}> Hi! <br></br>I'm A.Arthi</h2>
            <p>WEB DEVELOPER</p>
            <button class="button-48" role="button"><span className="text">Download CV</span></button>
            {/* <button className='btn-banner'>Download CV</button> */}
          </div>
          <div className='bammer-img' style={{ height: "90vh" }}>
            <img src="/assets/myImg/ammu-4.png" alt="My-Img" />
          </div>
        </>
    )
}

export default Banner;