import React from 'react';
import Card from 'react-bootstrap/Card';
const TaskPage = () => {
    return (
        <div c>
           <h1 className='Th1'>Task Page</h1> 
           
           <Card className='task-card'  style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title> all notes will desplayed  in card & Notes </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">explore basics in sidebare buttons</Card.Subtitle>
        <Card.Text>
         create note in HomePage, and card can editeble and deleteble  
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default TaskPage;