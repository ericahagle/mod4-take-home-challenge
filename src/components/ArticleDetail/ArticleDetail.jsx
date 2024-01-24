import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
          <img className='preview-image' src={selectedArticle.urlToImage} alt={selectedArticle.title} />
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.publishedAt}</p>
          <Link className='link-out' to={selectedArticle.url} target="_blank" key={uuid()} >
            <p>{selectedArticle.source.name}</p>
          </Link>
          <p>{formattedContent}</p>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
