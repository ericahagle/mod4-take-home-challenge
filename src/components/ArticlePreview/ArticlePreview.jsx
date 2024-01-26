import PropTypes from 'prop-types';
import './ArticlePreview.css';

const ArticlePreview = ({ date, title, description, imageUrl, source }) => {
  return (
    <div className='ArticlePreview'>
      {imageUrl ? (<img className='preview-image' src={imageUrl} alt={title} />) : (<img className='preview-image' src={`${process.env.PUBLIC_URL}/no-image-available.jpeg`} alt='No Image Available' />)}
      <div className='preview-short-deets'>
        <p className='preview-date'>Publish Date: {date}</p>
        <p className='preview-source'>Source: {source}</p>
      </div>
      <div className='preview-long-deets'>
        <h2 className='preview-title'>{title}</h2>
        <p className='preview-description'>{description}</p>
        <p className='preview-click-for-more'>Click to see more.</p>
      </div>
    </div>
  );
};

ArticlePreview.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  source: PropTypes.string,
  title: PropTypes.string
}

export default ArticlePreview;
