import "./App.css";
import CardComp from "./comps/card";
import CallButton from "./comps/callButton";
import productData from "./data";
function App() {
  return (
    <>
      <header data-bs-theme="dark">
        <div class="collapse text-bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p class="text-body-secondary">
                  We make all types of plastic products here.
                </p>
                <p class="text-body-secondary">
                  <span class="text-white">Address</span> - Mandir vali gali,
                  Hisar road, Rohtak
                </p>
                <p class="text-body-secondary">
                  <span class="text-white">Phone</span> - +91 9255595335
                </p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul class="list-unstyled">
                  <li>
                    <CallButton />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <strong>R R Plastic</strong>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
          <img
                    className="bd-placeholder-img card-img-top"
                    width="300px"
                    height="300px"
                    src="/logo.png"
                    alt="Image"
                    style={{borderRadius: "20px", width:"300px", height:"auto"}}
                  />
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">R R Plastic</h1>
              <p class="lead text-body-secondary">
                All types of plastic product Available here
              </p>
              <p>
                <CallButton phoneNumber={9255595335} />
              </p>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
          <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productData.map((data, idx) => (
                <CardComp id={data.id} img={data.img} name={data.productName} rate={data.rate} plasticMaterial={data.plasticMaterial}/>
            ))}
            </div>
          </div>
        </div>
      </main>

      <footer class="text-body-secondary py-5">
        <div class="container">
          <div class="col-sm-8 col-md-7 py-4">
            <h4>About</h4>
            <p class="text-body-secondary">
              We make all types of plastic products here.
            </p>
            <p class="text-black">
              <span>Address</span> : Mandir vali gali, Hisar road, Rohtak
            </p>
            <p class="text-black">
              <span>Phone</span> : +91 9255595335
            </p>
          </div>
          <div>
            <p class="mb-1 float-end">2024 Copyrights &copy; owned by Parteek</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
