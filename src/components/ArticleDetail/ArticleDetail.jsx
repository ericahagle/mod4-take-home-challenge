import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";
import './ArticleDetail.css';

const ArticleDetail = ({ articles, defaultIndex }) => {
  const { index } = useParams();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [formattedContent, setFormattedContent] = useState('');

  useEffect(() => {
    const articleIndex = parseInt(index, 10);

    if (!isNaN(articleIndex) && articleIndex >= 0 && articleIndex < articles.length) {
      const initialContent = articles[articleIndex].content;

      const pattern = /Comment on this story[\r\n\s]+Comment[\r\n\s]+Add to your saved stories[\r\n\s]+Save/g

      const formattedContent = initialContent ? initialContent.replace(pattern, '') : '';

      setSelectedArticle(articles[articleIndex]);
      setFormattedContent(formattedContent);
    }
  }, [index, articles]);

  return (
    <div className='ArticleDetail'>
      {selectedArticle && (
        <>
          <img className='detail-image' src={selectedArticle.urlToImage} alt={selectedArticle.title} />
          <h2 className='detail-title'>{selectedArticle.title}</h2>
          <p className='detail-date'>{selectedArticle.publishedAt}</p>
          <Link className='link-out' to={selectedArticle.url} target="_blank" key={uuid()} >
            <p className='detail-source'>{selectedArticle.source.name}</p>
          </Link>
          <p className='detail-content'>{formattedContent}</p>
        </>
      )}
    </div>
  );
};

ArticleDetail.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string
  }))
}

export default ArticleDetail;
