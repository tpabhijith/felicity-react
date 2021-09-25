
import './App.css';

function App() {
  return (
    <>
    <section className="main">
        <header>
          <section className="wrapper">
            <div className="left">
              <h1>
                <a>
                  <img src={require("./assets/images/logo.png").default} />
                </a>
              </h1>
            </div>
            <div className="right">
              <ul>
                <li><a>ABOUT</a></li>
                <li><a>CONTACT US</a></li>
              </ul>
              <a className="button">SIGN IN</a>
            </div>
          </section>  
        </header>
        <section className="spotlight">
          <section className="wrapper">
            <h1>WELCOME TO HOTEL FELICITY</h1>
            <h3>LANDING PAGE 2019</h3>
            <p> publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
            <a className="button">Read More</a>
          </section>
        </section>
        <section className="booking">
          <section className="wrapper">
            <form>
              <div>
                <label>
                  ARRIVAL DATE
                </label>
                <input type="date" placeholder="dd/MM/yyyy" />
              </div>
              <div>
                <label>
                  DEPARTURE DATE
                </label>
                <input type="date" placeholder="dd/MM/yyyy"  />
              </div>
              <div>
                <label>
                  PERSON
                </label>
                <input type="number" placeholder=""  />
              </div>
              <div className="button">
                <a className="button">Book Now</a>
              </div>
            </form>
          </section>
        </section>
    </section>
    <section className="home">
      <section className="wrapper">
        <div className="top">
          <div className="left">
            <h3>Choose The Perfect <span>Accomadation</span></h3>
            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a className="button">See More</a>
          </div>
          <div className="right">
            <div className="image-container1">
              <img src={require("./assets/images/img1.jpg").default} />
            </div>
            <div className="image-container2">
              <img src={require("./assets/images/img2.jpg").default} />
            </div>
            <div className="image-container3">
              <img src={require("./assets/images/img3.jpg").default} />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="image-container">
              <img src={require("./assets/images/img4.jpg").default} />
            </div>
          </div>
          <div className="right">
            <h3>Our Best <span>Breakfast</span></h3>
            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a className="button">Read More</a>
          </div>
        </div>
      </section>
    </section>
    <section className="about">
      <section className="wrapper">
        <div className="left">
          <h3>About Our Hotel</h3>
          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="right">
          <div className="image-container">
          <img src={require("./assets/images/about_img.jpg").default} />
          </div>
        </div>
      </section>
    </section>
    <section className="testimonial">
      <section className="overlay">
        <section className="wrapper">
          <div className="top">
            <h3>Testimonial</h3>
          </div>
          <div className="bottom">
            <div className="left">
              <h3>Mark jonson</h3>
              <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            </div>
            <div className="right">
              <h3>Mark jonson</h3>
              <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            </div>
          </div>
        </section>
      </section>
    </section>
    <section className="contact-us">
      <section className="wrapper">
        <div className="left">
          <h3>Contact Us</h3>
          <h5>Free download Landing page Felicity Hotel</h5>
          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <div className="right">
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Message" ></textarea>
            <a className="button">Send</a>
          </form>
        </div>
      </section>
    </section>
    <footer>
      <section className="wrapper">
        <p>Copyright 2019 All Right Reserved By Free Html templates</p>
      </section>
    </footer>
    </>
  );
}

export default App;
