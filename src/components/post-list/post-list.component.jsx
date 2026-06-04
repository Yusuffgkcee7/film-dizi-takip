import PostCard from "../post-card/post-card.component";

const PostList = ({ posts, onCardClick }) => {
    return (
        <div className="row g-4">
            {posts.map(post => {
                return (
                    <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                        <PostCard
                            post={post}
                            onCardClick={onCardClick}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default PostList;