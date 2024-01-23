import { v4 as uuid } from "uuid";
import './Home.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const Home = ({ articles }) => {
  // const uniqueId = uuid();

  const articleCards = articles.map(article => (
    <ArticlePreview
      key={uuid()}
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
