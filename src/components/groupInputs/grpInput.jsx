import React from 'react';
import { useForm } from 'react-hook-form';
import './grpInput.css';
import DeleteIcon from '@material-ui/icons/Delete';
import {Form, Button} from 'react-bootstrap';


const GrpInput = ({index, remove, onSubmit, detectChange, data}) => {
    const {register, handleSubmit}=useForm();

    function change(e){
        // console.log('changed', e.target.value);
        detectChange(e);
    }
    return (
        <div className="groupInput">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId={`${index}-title`}>
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control required onChange={change}  name="title" value={data.title} ref={register} type="text" placeholder="Project title" />
                    <Form.Text className="text-muted">
                        Enter the Project title.
                    </Form.Text>
                </Form.Group>

                
                <Form.Group controlId={`${index}-link`}>
                    <Form.Label>Project link</Form.Label>
                    <Form.Control onChange={change}  name="link" value={data.link} ref={register} type="url" placeholder="Project Link" />
                    <Form.Text className="text-muted">
                        Enter the Project link.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId={`${index}-description`}>
                    <Form.Label>Description textarea</Form.Label>
                    <Form.Control required name="description" value={data.description} ref={register} onChange={change} as="textarea" rows={3} colums={20} />
                </Form.Group>

                <Button type="submit" variant="outline-success">Save</Button>
            </Form>
            <button className="deleteIcon" onClick={()=>{remove(index)}}><DeleteIcon/></button>
        </div>
    )
}

export default GrpInput
