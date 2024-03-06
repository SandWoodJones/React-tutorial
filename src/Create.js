import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsLoading(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(res => {
                if (!res.ok) throw Error('Failed to create blog post');
                return res.json();
            }).then(data => {
                console.log("New post added");
                setIsLoading(false);

                history.push('/blogs/' + data.id);
            }).catch(e => {
                console.error("Error creating blog post:", e);
            })
        }, 1000);
    }

    return (
        <div className="create">
            <h2>Add a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <div className="create-input">
                    <label>Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="create-input">
                    <label>Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                        <option value="luigi">Luigi</option>
                    </select>
                </div>
                <div className="create-input">
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                { !isLoading && <button>Add blog</button> }
                { isLoading && <div class="lds-dual-ring" />}
            </form>
        </div>
    )
}

export default Create;