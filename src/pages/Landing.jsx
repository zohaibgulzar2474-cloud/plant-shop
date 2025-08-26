import { Link } from "react-router-dom";


export default function Landing() {
return (
<section className="landing">
<div className="overlay">
<h1 className="company">GreenLeaf Plants</h1>
<p className="tagline">
We bring nature indoors. Explore our curated collection of
houseplants—easy care, air‑purifying, and beautiful in every home.
</p>
<Link to="/products" className="btn primary">Get Started</Link>
</div>
</section>
);
}