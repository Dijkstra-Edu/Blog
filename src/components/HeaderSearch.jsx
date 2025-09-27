import { useEffect, useState } from "react";

export default function InPageSearch() {
  const [pagefind, setPagefind] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Dynamically inject the Pagefind script
    const script = document.createElement("script");
    script.src = "/pagefind/pagefind.js";
    script.async = true;
    script.onload = () => {
      // Pagefind attaches itself to window
      if (window.pagefind) {
        setPagefind(window.pagefind);
      }
    };
    document.body.appendChild(script);
  }, []);

  async function handleSearch(e) {
    const query = e.target.value;
    if (pagefind && query.length > 2) {
      const search = await pagefind.search(query);
      const data = await Promise.all(search.results.map(r => r.data()));
      setResults(data);
    } else {
      setResults([]);
    }
  }

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        className="border px-2 py-1 rounded"
      />
      {results.length > 0 && (
        <div className="absolute bg-white shadow rounded mt-1 w-full max-h-60 overflow-y-auto z-50">
          {results.map((r, i) => (
            <a key={i} href={r.url} className="block px-3 py-2 hover:bg-gray-100">
              {r.meta.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
