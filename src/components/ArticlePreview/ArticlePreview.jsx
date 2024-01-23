import './ArticlePreview.css';

const ArticlePreview = ({ date, title, description, imageUrl, source }) => {
  return (
    <div className='ArticlePreview'>
      <img className='preview-image' src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{source.name}</p>
      <p>{description}</p>
    </div>
  )
}

export default ArticlePreview;
