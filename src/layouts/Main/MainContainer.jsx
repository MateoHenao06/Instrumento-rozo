import { useEffect, useState } from "react";
import {ProductCard} from "../../components/ProductCard/ProductCard";
import {SearchInput} from "../../components/SearchInput/SearchInput";

export function MainContainer() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
      <SearchInput onSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}