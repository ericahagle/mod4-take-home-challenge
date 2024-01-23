import './Home.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const Home = ({ articles }) => {
  const articleCards = articles.map(article => (
    <ArticlePreview
      // key={article.id}
      date={article.publishedAt}
      title={article.title}
      description={article.description}
      imageUrl={article.urlToImage}
      source={article.source}
    />
  ));


  return (
    <div className='Home'>
      {articleCards}
    </div>
  );
};

export default Home;
