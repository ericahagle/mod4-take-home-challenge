import PropTypes from 'prop-types';
import './ArticlePreview.css';

const ArticlePreview = ({ date, title, description, imageUrl, source }) => {
  return (
    <div className='ArticlePreview'>
      {imageUrl && <img className='preview-image' src={imageUrl} alt={title} />}
      <h2 className='preview-title'>{title}</h2>
      <p className='preview-date'>{date}</p>
      <p className='preview-source'>{source}</p>
      <p className='preview-description'>{description}</p>
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
