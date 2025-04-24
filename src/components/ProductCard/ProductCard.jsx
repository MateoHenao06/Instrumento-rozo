export function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-2 text-justify">{product.description}</p>
        <p className="text-gray-500 text-sm mt-2">{product.category}</p>
        <p className="text-green-600 font-bold mt-2">${product.price}</p>
      </div>
    );
  }