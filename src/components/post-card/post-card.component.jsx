const PostCard = ({post, onCardClick}) => {
    const {title, notes, status} = post;
    return (
        <div className="card h-100 shadow-sm border-0" onClick={() => onCardClick(post)} role="button">
            <div className="card-header bg-dark text-white fw-bold">
                {status === "watched" ? "İzlendi" : "İzlenecek"}
            </div>
            <div className="card-body">
                <h3 className="card-title fs-5">{title}</h3>
                <p className="card-text text-muted">{notes ? notes.substring(0, 80) : ""}...</p>
                <span className="btn btn-outline-dark mt-3">Detayları gör</span>
            </div>
        </div>
    );
}

export default PostCard;