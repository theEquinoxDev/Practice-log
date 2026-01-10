import { useState } from "react";

const fruits = ['Apple', 'Banana', 'Orange', 'Apple', 'Orange', 'Mango'];

export const FilterList = () => {
  const [filter, setFilter] = useState('');
  const filteredList = fruits.filter(f =>
    f.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>FilterList</div>
      <input onChange={e => setFilter(e.target.value)} type="text" placeholder="search" />
      <ul>
        {filteredList.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};
