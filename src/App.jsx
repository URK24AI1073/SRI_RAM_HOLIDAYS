
import { useEffect, useState } from "react";
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
  CheckCircle2,
} from "lucide-react";
import "./App.css";

// Sightseeing images use PNG format
const makePlaces = (prefix, names) =>
  names.map((name, index) => ({
    name,
    image: `/images/${prefix}-${String(index + 1).padStart(2, "0")}.png`,
  }));

// Destination cover images use JPEG format
const destinations = [
  {
    name: "The Nilgiris",
    subtitle: "Explore Ooty & Coonoor",
    image: "/images/nilgiris.jpeg",
    locations: [
      {
        name: "Ooty",
        subtitle: "The Queen of Hills",
        image: "/images/ooty.jpeg",
        places: makePlaces("ooty", [
          "Government Botanical Garden",
          "Tea Factory & Tea Museum",
          "Karnataka Siri Horticulture Garden",
          "Government Rose Garden",
          "Doddabetta Peak",
          "Pykara Lake",
          "Pykara Waterfalls",
          "Nilgiri Mountain Railway",
          "Pine Forest",
          "6th Mile Shooting Spot",
          "Emerald Lake",
          "Wax World",
        ]),
      },
      {
        name: "Coonoor",
        subtitle: "Beautiful Hill Town",
        image: "/images/coonoor.jpeg",
        places: makePlaces("coonoor", [
          "Sim's Park",
          "Dolphin's Nose",
          "Lamb's Rock",
          "Catherine Falls",
          "Highfield Tea Factory",
          "Hidden Valley",
          "Law's Falls",
        ]),
      },
    ],
  },
  {
    name: "Kodaikanal",
    subtitle: "Princess of Hill Stations",
    image: "/images/kodaikanal.jpeg",
    places: makePlaces("kodaikanal", [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
      "Silver Cascade Falls",
      "Guna Caves",
      "Pine Forest",
      "Moir Point",
      "Green Valley View",
    ]),
  },
  {
    name: "Munnar",
    subtitle: "Paradise of Tea Gardens",
    image: "/images/munnar.jpeg",
    places: makePlaces("munnar", [
      "Tea Plantations",
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Echo Point",
      "Top Station",
      "Kundala Lake",
      "Tea Museum",
      "Attukad Waterfalls",
    ]),
  },
  {
    name: "Kerala",
    subtitle: "God's Own Country",
    image: "/images/kerala.jpeg",
    places: makePlaces("kerala", [
      "Alleppey Backwaters",
      "Munnar",
      "Athirappilly Waterfalls",
      "Varkala Beach",
      "Fort Kochi",
      "Thekkady",
      "Kumarakom",
      "Wayanad",
    ]),
  },
  {
    name: "Coorg",
    subtitle: "Scotland of India",
    image: "/images/coorg.jpeg",
    places: makePlaces("coorg", [
      "Abbey Falls",
      "Raja's Seat",
      "Dubare Elephant Camp",
      "Talakaveri",
      "Golden Temple",
      "Mandalpatti Viewpoint",
      "Nisargadhama",
      "Coffee Plantations",
    ]),
  },
  {
    name: "Mysore",
    subtitle: "City of Palaces",
    image: "/images/mysore.jpeg",
    places: makePlaces("mysore", [
      "Mysore Palace",
      "Chamundi Hills",
      "Brindavan Gardens",
      "St. Philomena's Church",
      "Mysore Zoo",
      "Karanji Lake",
      "Mysore Rail Museum",
      "Jaganmohan Palace",
    ]),
  },
];

// Existing vehicle images
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [days, setDays] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [specialRequests, setSpecialRequests] = useState("");

  const phoneNumber = "918610731075";

  useEffect(() => {
    if (selectedRegion) {
      document.getElementById("region-options")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedDestination) {
      document.getElementById("destination-gallery")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedDestination]);

  const closeMenu = () => setMenuOpen(false);

  const openRegion = (region) => {
    setSelectedDestination(null);
    setSelectedPlaces([]);
    setSelectedRegion(region);
  };

  const openDestination = (place) => {
    setSelectedRegion(null);
    setSelectedDestination(place);
    setSelectedPlaces([]);
    setDestination(place.name);
  };

  const togglePlace = (placeName) => {
    setSelectedPlaces((current) =>
      current.includes(placeName)
        ? current.filter((item) => item !== placeName)
        : [...current, placeName]
    );
  };

  const handleBooking = () => {
    if (!pickup.trim() || !destination.trim()) {
      alert("Please enter your pickup location and destination.");
      return;
    }

    const message = `Hello SRI RAM HOLIDAYS!

I would like to enquire about a trip.

Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${travelDate || "Not selected"}
Number of Days: ${days || "Customer will decide"}
Passengers: ${passengers}

Selected Sightseeing Places:
${selectedPlaces.length ? selectedPlaces.join(", ") : "Not selected"}

Special Requests:
${specialRequests || "None"}

Please share the booking details and price.

Thank you!`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const services = [
    {
      icon: <Car />,
      title: "Taxi Services",
      description: "Comfortable local and outstation taxi services.",
    },
    {
      icon: <Mountain />,
      title: "Hill Station Tours",
      description: "Explore beautiful hill stations and scenic places.",
    },
    {
      icon: <Plane />,
      title: "Airport Transfers",
      description: "Convenient airport pickup and drop services.",
    },
    {
      icon: <Users />,
      title: "Family Holidays",
      description: "Memorable journeys for families and groups.",
    },
    {
      icon: <Heart />,
      title: "Honeymoon Trips",
      description: "Personalized holiday experiences for couples.",
    },
    {
      icon: <Briefcase />,
      title: "Corporate Travel",
      description: "Travel arrangements for business journeys.",
    },
  ];

  return (
    <div className="website">

      {/* TOP BAR */}
      <div className="topbar">
        <span>Premium Travel & Taxi Services</span>
        <span><Phone size={14} /> Contact SRI RAM HOLIDAYS</span>
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

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">YOUR JOURNEY, OUR PRIORITY</span>

            <h1>
              Explore The World.
              <br />
              <span>Travel With Comfort.</span>
            </h1>

            <p>
              Discover beautiful destinations with SRI RAM HOLIDAYS.
              Enjoy comfortable journeys, trusted taxi services and
              memorable holidays.
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
              <span><Clock /> Reliable Service</span>
              <span><Star /> Comfortable Journeys</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Travel Services For Every Journey</h2>
            <p>From local rides to memorable holidays.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
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
            <p>Choose a destination and explore its sightseeing attractions.</p>
          </div>

          <div className="destination-grid">
            {destinations.map((place) => (
              <article className="destination-card" key={place.name}>
                <img src={place.image} alt={place.name} />
                <div className="destination-content">
                  <span className="destination-tag">EXPLORE INDIA</span>
                  <h3>{place.name}</h3>
                  <p>{place.subtitle}</p>

                  <button
                    className="destination-btn"
                    onClick={() =>
                      place.locations
                        ? openRegion(place)
                        : openDestination(place)
                    }
                  >
                    Explore Places <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NILGIRIS: OOTY AND COONOOR */}
        {selectedRegion && (
          <section className="region-section section" id="region-options">
            <div className="section-heading">
              <span>DISCOVER THE HILLS</span>
              <h2>{selectedRegion.name}</h2>
              <p>Select the hill station you want to explore.</p>
            </div>

            <div className="destination-grid">
              {selectedRegion.locations.map((place) => (
                <article className="destination-card" key={place.name}>
                  <img src={place.image} alt={place.name} />
                  <div className="destination-content">
                    <span className="destination-tag">THE NILGIRIS</span>
                    <h3>{place.name}</h3>
                    <p>{place.subtitle}</p>

                    <button
                      className="destination-btn"
                      onClick={() => openDestination(place)}
                    >
                      View Sightseeing <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <button
              className="gallery-back-btn"
              onClick={() => setSelectedRegion(null)}
            >
              Back to Destinations
            </button>
          </section>
        )}

        {/* SIGHTSEEING GALLERY */}
        {selectedDestination && (
          <section className="destination-gallery section" id="destination-gallery">
            <div className="section-heading">
              <span>EXPLORE THE BEAUTY</span>
              <h2>{selectedDestination.name} Sightseeing</h2>
              <p>Select the places you would like to visit.</p>
            </div>

            <div className="sightseeing-grid">
              {selectedDestination.places.map((place) => (
                <article className="sightseeing-card" key={place.name}>
                  <div className="sightseeing-image">
                    <img src={place.image} alt={place.name} />
                  </div>

                  <div className="sightseeing-content">
                    <h3>{place.name}</h3>

                    <label className="place-select">
                      <input
                        type="checkbox"
                        checked={selectedPlaces.includes(place.name)}
                        onChange={() => togglePlace(place.name)}
                      />
                      <span>
                        {selectedPlaces.includes(place.name)
                          ? "Selected"
                          : "Add to my trip"}
                      </span>
                      <CheckCircle2 size={18} />
                    </label>
                  </div>
                </article>
              ))}
            </div>

            <div className="gallery-actions">
              <p>
                <strong>{selectedPlaces.length}</strong> sightseeing places
                selected
              </p>

              <button
                className="gallery-back-btn"
                onClick={() => setSelectedPlaces([])}
              >
                Clear Selection
              </button>

              <button
                className="destination-btn"
                onClick={() => {
                  setDestination(selectedDestination.name);
                  document.getElementById("booking")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book Your Trip <ArrowRight size={16} />
              </button>
            </div>

            <button
              className="gallery-back-btn"
              onClick={() => {
                setSelectedDestination(null);
                setSelectedPlaces([]);
                document.getElementById("destinations")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Back to Destinations
            </button>
          </section>
        )}

        {/* BOOKING FORM */}
        <section className="booking-section" id="booking">
          <div className="booking-heading">
            <span>PLAN YOUR JOURNEY</span>
            <h2>Customize Your Trip</h2>
            <p>Choose your travel details. You decide how many days you need.</p>
          </div>

          <div className="booking-fields">
            <label>
              <MapPin />
              <span>
                <small>Pickup Location *</small>
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
                <small>Destination *</small>
                <input
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
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

            <label>
              <Mountain />
              <span>
                <small>Number of Days</small>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter preferred days"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
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
                  <option value="6">6 Passengers</option>
                  <option value="7+">7 or more Passengers</option>
                </select>
              </span>
            </label>

            <label className="special-request">
              <Mail />
              <span>
                <small>Special Requests</small>
                <textarea
                  placeholder="Any additional requirements?"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </span>
            </label>

            <div className="booking-selected">
              <strong>Selected Sightseeing Places</strong>
              <p>
                {selectedPlaces.length
                  ? selectedPlaces.join(", ")
                  : "No sightseeing places selected yet."}
              </p>
            </div>

            <button className="search-btn" onClick={handleBooking}>
              Send WhatsApp Enquiry <ArrowRight />
            </button>
          </div>
        </section>

        {/* FLEET */}
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

                  <button
                    onClick={() => {
                      setDestination(vehicle.name);
                      document.getElementById("booking")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
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
            <div>
              <ShieldCheck />
              <h3>Trusted Service</h3>
              <p>Customer-focused travel assistance.</p>
            </div>

            <div>
              <Car />
              <h3>Comfortable Vehicles</h3>
              <p>Vehicle options for different group sizes.</p>
            </div>

            <div>
              <Clock />
              <h3>Flexible Planning</h3>
              <p>Trips planned around your requirements.</p>
            </div>

            <div>
              <Users />
              <h3>Personal Support</h3>
              <p>Assistance throughout your booking enquiry.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <span>WE ARE HERE TO HELP</span>
          <h2>Let's Plan Your Next Trip!</h2>
          <p>
            Contact SRI RAM HOLIDAYS for comfortable journeys
            and memorable holidays.
          </p>

          <div className="contact-details">
            <a href="tel:+918610731075">
              <Phone /> Call Us
            </a>

            <a
              href="https://wa.me/918610731075"
              target="_blank"
              rel="noreferrer"
            >
              <Phone /> WhatsApp Us
            </a>

            <a href="mailto:sriramholidays02@gmail.com">
              <Mail /> Email Us
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