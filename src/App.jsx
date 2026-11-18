import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Car,
  Mail,
  Plane,
  Compass,
  ArrowRight,
  Star,
  Users,
  ShieldCheck,
  Clock,
  Heart,
  Briefcase,
  Mountain,
  Bus,
} from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [travelDate, setTravelDate] = useState("");

  // Replace with your official WhatsApp number.
  const phoneNumber = "918610731075";

  const handleBooking = () => {
    if (!pickup.trim() || !destination.trim()) {
      alert("Please enter pickup and destination.");
      return;
    }

    if (phoneNumber.includes("X")) {
      alert("Please add your official WhatsApp number in App.jsx first.");
      return;
    }

    const message = `Hello SRI RAM HOLIDAYS!

I would like to enquire about a trip.

Pickup: ${pickup}
Destination: ${destination}
Travel Date: ${travelDate || "Not selected"}
Passengers: ${passengers}

Please share the booking details and price.

Thank you!`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  const services = [
    {
      icon: <Car />,
      title: "Taxi Services",
      description: "Comfortable local and outstation taxi services.",
    },
    {
      icon: <Mountain />,
      title: "Ooty Sightseeing",
      description: "Explore Ooty, Coonoor, Pykara and more.",
    },
    {
      icon: <Plane />,
      title: "Airport Transfers",
      description: "Reliable airport pickup and drop services.",
    },
    {
      icon: <Users />,
      title: "Family Holidays",
      description: "Memorable trips for families and groups.",
    },
    {
      icon: <Heart />,
      title: "Honeymoon Trips",
      description: "Beautiful holiday experiences for couples.",
    },
    {
      icon: <Briefcase />,
      title: "Corporate Travel",
      description: "Professional transport for business travel.",
    },
  ];

  const destinations = [
    {
      name: "Ooty",
      subtitle: "The Queen of Hills",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    },
    {
      name: "Kerala",
      subtitle: "God's Own Country",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900",
    },
    {
      name: "Kodaikanal",
      subtitle: "Princess of Hill Stations",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900",
    },
    {
      name: "Mysore",
      subtitle: "City of Palaces",
      image:
        "https://images.unsplash.com/photo-1600100397608-f0100a5b8c8a?w=900",
    },
  ];

const vehicles = [
  {
    name: "Toyota Glanza",
    type: "Premium Hatchback",
    image: "/images/toyota-glanza.jpeg",
  },
  {
    name: "Innova Crysta",
    type: "Premium Family Travel",
    image: "/images/innova-cryst-white.jpeg",
  },
  {
    name: "Tempo Traveller",
    type: "Group Travel",
    image: "/images/tempo-traveller.jpeg",
  },
  {
    name: "Force Urbania",
    type: "Luxury Group Travel",
    image: "/images/force-urbania.jpeg",
  },
];

  return (
    <div className="website">
      {/* TOP BAR */}
      <div className="topbar">
        <span>Premium Travel & Taxi Services</span>
        <span>
          <Phone size={14} /> Contact SRI RAM HOLIDAYS
        </span>
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">SR</span>
          <span>
            <strong>SRI RAM</strong>
            <small>HOLIDAYS</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#destinations" onClick={closeMenu}>Destinations</a>
          <a href="#fleet" onClick={closeMenu}>Our Fleet</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#booking" className="nav-button" onClick={closeMenu}>
            Book Your Trip
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR JOURNEY, OUR PRIORITY
            </span>

            <h1>
              Explore The World.
              <br />
              <span>Travel With Comfort.</span>
            </h1>

            <p>
              Discover beautiful destinations with SRI RAM HOLIDAYS.
              Enjoy comfortable journeys, trusted taxi services and
              unforgettable holidays across India.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="primary-btn">
                Book Your Journey <ArrowRight size={18} />
              </a>

              <a href="#destinations" className="secondary-btn">
                Explore Destinations
              </a>
            </div>

            <div className="hero-features">
              <span><ShieldCheck /> Safe Travel</span>
              <span><Clock /> On-Time Service</span>
              <span><Star /> Premium Comfort</span>
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section className="booking-section" id="booking">
          <div className="booking-heading">
            <span>PLAN YOUR JOURNEY</span>
            <h2>Where Would You Like To Go?</h2>
          </div>

          <div className="booking-fields">
            <label>
              <MapPin />
              <span>
                <small>Pickup Location</small>
                <input
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </span>
            </label>

            <label>
              <Compass />
              <span>
                <small>Destination</small>
                <input
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </span>
            </label>

            <label>
              <Users />
              <span>
                <small>Passengers</small>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6+ Passengers</option>
                </select>
              </span>
            </label>

            <label>
              <Clock />
              <span>
                <small>Travel Date</small>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                />
              </span>
            </label>

            <button className="search-btn" onClick={handleBooking}>
              Enquire Now <ArrowRight />
            </button>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Travel Services For Every Journey</h2>
            <p>From local rides to unforgettable holidays.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="destinations section" id="destinations">
          <div className="section-heading">
            <span>EXPLORE INDIA</span>
            <h2>Popular Destinations</h2>
            <p>Discover beautiful places with us.</p>
          </div>

          <div className="destination-grid">
            {destinations.map((place) => (
              <article
                className="destination-card"
                key={place.name}
                style={{ backgroundImage: `url("${place.image}")` }}
              >
                <div>
                  <h3>{place.name}</h3>
                  <p>{place.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VEHICLES */}
        <section className="fleet section" id="fleet">
          <div className="section-heading">
            <span>TRAVEL IN COMFORT</span>
            <h2>Our Premium Fleet</h2>
            <p>The right vehicle for every journey.</p>
          </div>

          <div className="fleet-grid">
            {vehicles.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="fleet-card-content">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.type}</p>
                  <button onClick={() => {
                    setDestination(vehicle.name);
                    document.getElementById("booking").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                    Enquire Now <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us section">
          <div className="section-heading">
            <span>WHY TRAVEL WITH US</span>
            <h2>Your Journey Matters To Us</h2>
          </div>

          <div className="why-grid">
            <div><ShieldCheck /><h3>Trusted Service</h3><p>Customer-focused travel assistance.</p></div>
            <div><Car /><h3>Comfortable Vehicles</h3><p>Vehicle options for different group sizes.</p></div>
            <div><Clock /><h3>Reliable Planning</h3><p>Travel plans arranged around your needs.</p></div>
            <div><Users /><h3>Personal Support</h3><p>Assistance throughout your booking journey.</p></div>
          </div>
        </section>

{/* CONTACT */}
<section className="contact section" id="contact">
  <span>WE ARE HERE TO HELP</span>
  <h2>Let's Plan Your Next Trip!</h2>
  <p>
    Contact SRI RAM HOLIDAYS for comfortable
    journeys and unforgettable holidays.
  </p>

  <div className="contact-details">
    <a href="tel:+918610731075">
      <Phone />
      Call Us
    </a>

    <a
      href="https://wa.me/918610731075?text=Hello%20SRI%20RAM%20HOLIDAYS%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip."
      target="_blank"
      rel="noreferrer"
    >
      <Phone />
      WhatsApp Us
    </a>

    <a href="mailto:sriramholidays02@gmail.com">
      <Mail />
      Email Us
    </a>
  </div>
</section>

      </main>

{/* FOOTER */}
<footer>
  <h3>SRI RAM HOLIDAYS</h3>
  <p>Dream It. Pack It. Live It.</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#destinations">Destinations</a>
    <a href="#fleet">Our Fleet</a>
    <a href="#contact">Contact</a>
  </div>

  <p>
    <a href="mailto:sriramholidays02@gmail.com">
      sriramholidays02@gmail.com
    </a>
  </p>

  <small>© 2026 SRI RAM HOLIDAYS. All Rights Reserved.</small>
</footer>

    </div>
  );
}

export default App;
