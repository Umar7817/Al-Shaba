import React from 'react'
import './Global.css'

function Main() {
  return (
    <div  className='main--div'>
        {/* <div className='img-div'>
            <img className='image' src="https://media.islamicity.org/wp-content/uploads/2021/04/iStock-840887390.jpg" alt="image" />
            <img className='image2' src="https://i.pinimg.com/736x/fc/09/4f/fc094fee94ad934bb321b4f2ea1b42e0.jpg" alt="image" />

        </div>
        <div className='title'>
            <h1 className='header-h1'>Al-Murtuza</h1>
            <h1>Tours & Travels</h1>
            <h1 className='header-h1 header-h12'>Hajj & Umarah</h1>
        </div> */}
        <div className="landing-page">
      <header>
        <h1>Welcome to Al-Shaba</h1>
        <p>Your Trusted Partner for an Unforgettable Hajj & Umarah Experience</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Al-Shaba is dedicated to providing a seamless and spiritually enriching Hajj & Umarah experience.
          With years of expertise, we ensure that your pilgrimage is filled with comfort, guidance, and memorable moments.
        </p>
      </section>

      

      <section className="why-choose-us">
        <h2>Why Choose Al-Shaba?</h2>
        <ul>
          <li>Experienced and Knowledgeable Guides</li>
          <li>Luxurious Accommodations</li>
          <li>24/7 Customer Support</li>
          <li>Customizable Packages</li>
          {/* Add more points as needed */}
        </ul>
      </section>

      
    </div>
    </div>
  )
}

export default Main