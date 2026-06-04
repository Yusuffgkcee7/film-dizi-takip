const Modal = ({post, onClose}) => {
    if (!post) return null;

    return (
        <div className="fixed-top vw-100 vh-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
            <div className="card w-100" style={{maxWidth: "500px"}}>
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold">{post.title}</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="card-body p-4">
                    <span className="badge bg-secondary mb-3">
                        {post.status === "watched" ? "İzlendi" : "İzlenecek"}
                    </span>
                    <p className="card-text">{post.notes}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;