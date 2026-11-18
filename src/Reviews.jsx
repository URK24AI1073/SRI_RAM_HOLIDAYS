
import { useEffect, useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./App.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerRating, setCustomerRating] = useState(5);
  const [customerReview, setCustomerReview] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("customer_reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Unable to load reviews. Please try again later.");
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((total, item) => total + item.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (customerName.trim().length < 2) {
      setMessage("Please enter your name.");
      return;
    }

    if (customerReview.trim().length < 10) {
      setMessage("Please write at least 10 characters.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const { error } = await supabase
      .from("customer_reviews")
      .insert([
        {
          customer_name: customerName.trim(),
          rating: customerRating,
          review: customerReview.trim(),
        },
      ]);

    setSubmitting(false);

    if (error) {
      setMessage("Unable to submit your review. Please try again.");
      return;
    }

    setCustomerName("");
    setCustomerRating(5);
    setCustomerReview("");
    setMessage("Thank you! Your review has been submitted.");

    await fetchReviews();
  };

  return (
    <div className="website">
      <section className="reviews-section section">
        <div className="section-heading">
          <span>SRI RAM HOLIDAYS</span>
          <h2>Customer Reviews & Ratings</h2>
          <p>
            Share your travel experience and help other travellers.
          </p>
        </div>

        <div className="reviews-summary">
          <div className="rating-number">
            {averageRating}
            <Star size={25} fill="currentColor" />
          </div>
          <p>Customer Rating</p>
          <span>Based on {reviews.length} customer reviews</span>
        </div>

        <div className="reviews-grid">
          {loading ? (
            <p className="no-reviews">Loading reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map((item) => (
              <article className="review-card" key={item.id}>
                <div className="review-card-top">
                  <div className="review-avatar">
                    {item.customer_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3>{item.customer_name}</h3>
                    <small>
                      {new Date(item.created_at).toLocaleDateString()}
                    </small>
                  </div>
                </div>

                <div className="review-stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill={
                        index < item.rating ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>

                <p>{item.review}</p>
              </article>
            ))
          ) : (
            <p className="no-reviews">
              No reviews yet. Be the first to share your experience!
            </p>
          )}
        </div>

        <div className="review-form-wrapper">
          <div className="review-form-heading">
            <span>SHARE YOUR STORY</span>
            <h3>Write a Review</h3>
            <p>Your feedback matters to us.</p>
          </div>

          <form className="review-form" onSubmit={handleSubmit}>
            <div className="review-form-row">
              <label>
                Your Name
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  minLength="2"
                  maxLength="60"
                  required
                />
              </label>

              <label>
                Your Rating
                <select
                  value={customerRating}
                  onChange={(e) =>
                    setCustomerRating(Number(e.target.value))
                  }
                >
                  <option value={5}>★★★★★ - Excellent</option>
                  <option value={4}>★★★★ - Very Good</option>
                  <option value={3}>★★★ - Good</option>
                  <option value={2}>★★ - Fair</option>
                  <option value={1}>★ - Poor</option>
                </select>
              </label>
            </div>

            <label>
              Your Review
              <textarea
                value={customerReview}
                onChange={(e) => setCustomerReview(e.target.value)}
                placeholder="Tell us about your travel experience..."
                minLength="10"
                maxLength="1000"
                required
              />
            </label>

            <button
              type="submit"
              className="review-submit-btn"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Your Review"}
              {!submitting && <ArrowRight size={18} />}
            </button>

            {message && (
              <p className="review-message" role="status">
                {message}
              </p>
            )}
          </form>
        </div>

        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
