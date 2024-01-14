import React from "react";
import "./Global.css";

function Footer() {
  return (
    <div>
      <footer>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Have questions or ready to book your Hajj tour? Reach out to us:
          </p>
          <address>
            Email:  alshabahajjtours2009@gmail.com
            <br />
            Iqbalbhai Makkawale - 9723459686
            <br />
            Moinbhai (Patanwale) - 8469667869
            <br />
            Address : 439, 4th Floor Sheetal Varsha Mahavir Business Park,opp BAHRAM PURA POLICE CHOKY AHMEDABAD-380022
          </address>
        </section>
        <p>
          &copy; {new Date().getFullYear()} Al-Shaba. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
