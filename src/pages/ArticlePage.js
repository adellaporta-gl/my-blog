import { useParams } from "react-router-dom";
import NotFound from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
    const params = useParams();
    const article = articles.find(art => art.name === params.articleId);
    if (!article) { return <NotFound /> }
    return (
        <div>
            <h1>{article.title}</h1>
            {article.content.map(
                (paragraph, index) => <p key={article.name.concat(index)}>{paragraph}</p>
            )}
        </div>
    );
}
export default ArticlePage;