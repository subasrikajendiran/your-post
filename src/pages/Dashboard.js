import { useState } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([
    {
      text: "Welcome to YOUR POST 🚀",
      image: "https://picsum.photos/300"
    },
    {
      text: "Beautiful Nature 🌿",
      image: "https://picsum.photos/301"
    }
  ]);

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const addPost = () => {
    if (text.trim() === "") {
      alert("Enter something ❗");
      return;
    }

    setPosts([...posts, { text, image }]);
    setText("");
    setImage("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dashboard</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post..."
      />
      <br /><br />

      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter image URL"
      />
      <br /><br />

      <button onClick={addPost}>Add Post</button>

      <h3>Posts:</h3>

      <div>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              margin: "20px",
              border: "1px solid gray",
              padding: "10px"
            }}
          >
            <p>{post.text}</p>

            {post.image && (
              <img src={post.image} alt="post" width="200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;