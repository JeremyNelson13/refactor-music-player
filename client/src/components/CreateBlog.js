import React, {useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const CreateBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        content: '' 
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventdefault();
        console.log(blog);
        const res = await fetch('http://localhost:5000/library/createblog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        const data = await res.json();
        console.log(data);
        navigate('/library/blogs');
    }
    const deleteBlog = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/library/blogs/${id}`, {
                method: 'DELETE'
            })
            if (response.status === 200) {
                console.log('success')
                navigate('/')
            }
            else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-center">Create Blog</h1>
            <hr />
            <div className="flex flex-col gap-3 w-96 p-5">
                <Form action="/library" method="POST" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={blog.title}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Content" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="danger" type="submit" onClick={deleteBlog}>
                        Delete
                    </Button>

                </Form>
                <Link to="/">Return to Landing</Link>
            </div>
        </div>
    );
}

export default CreateBlog;