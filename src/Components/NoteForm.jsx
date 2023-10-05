import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/actions';
import {   Row, Col, Button } from 'react-bootstrap';
import './Stylishesst.css';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1 className='Th1'> Create A Notes Here</h1>
       <Row>
       <Col sm={4}>
    <div className="Container">
         <div className="form-container">    
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <Button style={{color:'black'}} variant="link" type="submit" className="btn btn-primary">Add Note</Button>
    </form> 
    </div>
    </div>
    </Col>
    </Row>
    </div>
  );
};

export default NoteForm;
