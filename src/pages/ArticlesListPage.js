import articles from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticlesListPage = () => {
    return (
        <div>
            <h1>Articles</h1>
            <ArticleList articles={articles} />
        </div>
    );
}
export default ArticlesListPage;