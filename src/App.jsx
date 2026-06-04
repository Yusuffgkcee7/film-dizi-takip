import { useEffect, useState } from "react";
import DropdownFilter from "./components/dropdown-filter/dropdown-filter.component";
import PostList from "./components/post-list/post-list.component";
import Modal from "./components/modal/modal.component";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("all");

    // Form state'leri
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("towatch");

    const fetchMovies = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "movies"));
            const moviesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(moviesData);
        } catch (error) {
            console.error("Veri çekme hatası:", error);
        }
    };


    useEffect(() => {
        fetchMovies();
    }, []);

    // Firebase'e yeni veri ekleyen fonksiyon
    const handleAddMovie = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            await addDoc(collection(db, "movies"), {
                title: title,
                notes: notes,
                status: status
            });

            setTitle("");
            setNotes("");
            setStatus("towatch");
            fetchMovies();
        } catch (error) {
            console.error("Veri ekleme hatası:", error);
        }
    };

    const filteredPosts = (selectedFilter === "all")
        ? posts
        : posts.filter((post) => post.status === selectedFilter);

    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* Navbar ve Logo */}
            <nav className="navbar navbar-dark bg-dark mb-5 py-3 shadow-sm">
                <div className="container d-flex justify-content-center">
                    <div className="d-flex align-items-center">
                        <h1 className="text-white m-0 fs-3">Film ve Dizi Takip</h1>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="card shadow-sm border-0 mb-5">
                    <div className="card-body p-4">
                        <h4 className="card-title mb-4">Yeni Ekle</h4>
                        <form onSubmit={handleAddMovie} className="row g-3">
                            <div className="col-md-4">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Film/Dizi Adı" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Kısa notlar" 
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>
                            <div className="col-md-2">
                                <select 
                                    className="form-select" 
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="towatch">İzlenecek</option>
                                    <option value="watched">İzlendi</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-dark w-100 fw-bold">Ekle</button>
                            </div>
                        </form>
                    </div>
                </div>

                <DropdownFilter onFilterChange={setSelectedFilter}/>
                <PostList posts={filteredPosts} onCardClick={setSelectedPost}/>
                <Modal post={selectedPost} onClose={() => setSelectedPost(null)} />
            </div>
        </div>
    );
}

export default App;