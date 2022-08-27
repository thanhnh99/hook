import { useEffect, useState } from "react";

// 1.useEffect(callback)
//  - Gọi callback mỗi khi component rerender
//  - Gọi callback sau khi component thêm element vào dom
// 2.useEffect(callback, [])
//  - Callback Chỉ chạy một lần duy nhất sau khi component mounted
// 3.useEffect(callback, [deps])
//  - Callback được chạy khi deps thay đổi

// ------------------------------

// 1. Callback luôn được gọi sau khi component mounted
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGotoTop, setShowGotoTop] = useState(false);

  //** */ Call api liên tục do khi setPosts(), component được render lại, component rerender lại được thêm vào dom thì lại run useEffect
  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(posts => {
  //         setPosts(posts)
  //     })
  // })

  const tabs = ["posts", "albums"];
  //** */ Call api 1 lần khi component được mounted
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPosts(posts);
  //       });
  //   }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGotoTop(true);
      } else {
        setShowGotoTop(false);
      }

      //setShowGotoTop(window.scrollY >= 200)
    };

    window.addEventListener("scroll", handleScroll);

    //Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {showGotoTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
