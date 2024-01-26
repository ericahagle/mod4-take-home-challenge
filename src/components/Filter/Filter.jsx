import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { getSourcesUS } from '../../apiCalls';

const Filter = ({ onSourceFilterChange }) => {
  const [sourceFilter, setSourceFilter] = useState('');
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getSourcesUS()
      .then(data => {
        setSources(data.sources);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

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
          {sources.map((source) => (
            <option key={source.name} value={source.name}>
              {source.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

Filter.propTypes = {
  onSourceFilterChange: PropTypes.func.isRequired
}

export default Filter;
