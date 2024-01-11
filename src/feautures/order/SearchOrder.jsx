import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order#"
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm outline-none ring-offset-2 focus:ring focus:ring-yellow-300 sm:w-80"
      />
    </form>
  );
}

export default SearchOrder;
