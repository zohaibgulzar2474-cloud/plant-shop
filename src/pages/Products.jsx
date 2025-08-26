import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";


const groupByCategory = (list) =>
list.reduce((acc, p) => {
acc[p.category] = acc[p.category] || [];
acc[p.category].push(p);
return acc;
}, {});


export default function Products() {
const groups = groupByCategory(products);


return (
<main className="container">
{Object.keys(groups).map((cat) => (
<section key={cat} className="category">
<h2>{cat}</h2>
<div className="grid">
{groups[cat].map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>
</section>
))}
</main>
);
}