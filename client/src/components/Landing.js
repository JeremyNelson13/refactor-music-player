import React from 'react'


const Landing = () => {
  const [blogs, setBlogs, user, setUser] = useState([]);
  const getBlogs = async () => {
    const response = await fetch('http://localhost:5000/library/blogs')
    const data = await response.json();
    setBlogs(data);
  }
  useEffect(() => {
    getBlogs();
  } , [])



  return (
    <div>
      <h1 className='text-center'>Welcome to QuickBlog</h1>
      <hr />
      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <Link to={`/library/blogs/${blog._id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing
