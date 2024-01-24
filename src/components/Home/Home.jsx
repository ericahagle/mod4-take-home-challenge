import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import './Home.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const Home = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const selectArticle = (selectedArticle) => {
    setSelectedArticle(selectedArticle);
  };

  const articleCards = articles.map((article, index) => (
    <Link className='article-link' to={`/${index}`} key={uuid()}>
      <ArticlePreview
      key={uuid()}
      date={article.publishedAt}
      title={article.title}
      description={article.description}
      imageUrl={article.urlToImage}
      source={article.source}
      onClick={() => selectArticle(selectedArticle)}
      />
    </Link>
  ));


  return (
    <div className='Home'>
      {articleCards}
    </div>
  );
};

export default Home;
