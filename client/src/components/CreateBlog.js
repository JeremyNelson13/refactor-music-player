import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const CreateBlog = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-center">Create Blog</h1>
            <hr />
            <div className="flex flex-col gap-3 w-96 p-5">
                <Form action="/library" method="POST">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Content" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default CreateBlog;