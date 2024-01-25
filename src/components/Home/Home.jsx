import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import './Home.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import Filter from '../Filter/Filter';

const Home = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedSourceFilter, setSelectedSourceFilter] = useState('');

  const selectArticle = (selectedArticle) => {
    setSelectedArticle(selectedArticle);
  };

  const handleSourceFilterChange = (sourceFilter) => {
    setSelectedSourceFilter(sourceFilter);
  }

  const articleCards = articles.map((article, index) => {
    return (
      <Link className='article-link' to={`/${index}`} key={uuid()}>
        <ArticlePreview
          key={uuid()}
          date={article.publishedAt}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          source={article.source.name}
          onClick={() => selectArticle(selectedArticle)}
        />
      </Link>
    )
  });

  const filteredCards = articleCards.filter((articleCard) => {
    const cardSource = articleCard.props.children.props.source;
    if (selectedSourceFilter !== '' && cardSource) {
      return cardSource === selectedSourceFilter;
    } else {
      return true;
    }
  })


  return (
    <div className='Home'>
      <Filter
        onSourceFilterChange={handleSourceFilterChange}
      />
      {filteredCards}
    </div>
  );
};

export default Home;
