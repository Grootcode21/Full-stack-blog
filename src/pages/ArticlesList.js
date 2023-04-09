import Articles from '../components/Articles'
import articles from './Article-Content'

const ArticlesList = () => {
    return (
        <>
        <h1> My Articles</h1>
        <Articles articles={articles} />
    </>
    )
}

export default ArticlesList