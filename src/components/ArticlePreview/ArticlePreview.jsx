import PropTypes from 'prop-types';
import './ArticlePreview.css';

const ArticlePreview = ({ date, title, description, imageUrl, source }) => {
  return (
    <div className='ArticlePreview'>
      {imageUrl && <img className='preview-image' src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{source}</p>
      <p>{description}</p>
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
