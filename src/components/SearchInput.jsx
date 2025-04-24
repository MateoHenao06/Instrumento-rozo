export function SearchInput({ onSearch }) {
    return (
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Buscar producto..."
        className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }