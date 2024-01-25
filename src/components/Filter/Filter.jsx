import { useEffect, useState } from 'react';
import './Filter.css';

const Filter = ({ onSourceFilterChange }) => {
  const [sourceFilter, setSourceFilter] = useState('');

  useEffect(() => {
    onSourceFilterChange(sourceFilter);
  }, [sourceFilter, onSourceFilterChange]);

  return (
    <div className='Filter'>
      <label htmlFor='select-source'>Filter By Source
        <select
          value={sourceFilter}
          id='select-source'
          className='select'
          onChange={(event) => {
            setSourceFilter(event.currentTarget.value);
          }}
        >
          <option value=''>All Sources</option>
          <option value='Associated Press'>Associated Press</option>
          <option value='CBS News'>CBS News</option>
          <option value='BBC News'>BBC News</option>
          <option value='CNN'>CNN</option>
          <option value='The Athletic'>The Athletic</option>
          <option value='Deadline'>Deadline</option>
          <option value='ESPN'>ESPN</option>
          <option value='Texas.gov'>Texas.gov</option>
          <option value='Yahoo Entertainment'>Yahoo Entertainment</option>
          <option value='Financial Times'>Financial Times</option>
          <option value='Fox News'>Fox News</option>
          <option value='9to5google.com'>9to5google.com</option>
          <option value='Sports Illustrated'>Sports Illustrated</option>
          <option value='The Wall Street Journal'>The Wall Street Journal</option>
          <option value='Axios'>Axios</option>
          <option value='Business Insider'>Business Insider</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
