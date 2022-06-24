import React, { useState } from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from "@material-ui/core";
import "./todo.css";
import db from "../firebase";

import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import "bootstrap/dist/css/bootstrap.css";

const Todo = (props) => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const [status, setStatus] = useState("Doing");

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set(
            {
                todo: input
            },
            { merge: true }
        );
        setOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={(e) => setOpen(false)}>
                <div className="paper">
                    <h3>Update the Task</h3>
                    <input
                        placeholder={props.todo.todo}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="input"
                    />
                    <br></br>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={updateTodo}
                        className="button"
                    >
                        Update
                    </Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem className="item">
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText
                        primary={props.todo.todo}
                        secondary={props.initTime.initTime}
                    />
                </ListItem>

                <CheckIcon
                    // onClick={handleComplete}
                    className="checkBtn"
                />

                <EditIcon
                    onClick={handleOpen}
                    className="editBtn"
                />

                <DeleteIcon
                    onClick={(e) =>
                        db.collection("todos").doc(props.todo.id).delete()
                    }
                    className="deleteBtn"
                />
            </List>
        </>
    );
};

export default Todo;