import { useEffect, useState, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Task from "./Task";
import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { yellow } from "@mui/material/colors";
//dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ToDoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [todoTitle, setTodoTitle] = useState("");
  const [todosType, setTodosType] = useState("all");
  const [todosToPresent, setTodosToPresent] = useState([]);
  console.log(todosToPresent);
  function handleSendClick() {
    let newTodo = {
      id: uuidv4(),
      title: todoTitle,
      description: "to Eslammmm",
      isCompleted: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodoTitle("");
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storageTodos);
  }, []);

  const completedTodos = useMemo(() => {
    return todos.filter((t) => t.isCompleted);
  }, [todos]);

  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => !t.isCompleted);
  }, [todos]);
  /*
Meaning:
  React, filter this huge list only when todos changes.
  If the component re-renders for other reasons, don’t filter again
*/
  useEffect(() => {
    if (todosType === "all") {
      setTodosToPresent(todos);
    } else if (todosType === "pending") {
      setTodosToPresent(notCompletedTodos);
    } else if (todosType === "done") {
      setTodosToPresent(completedTodos);
    }
  }, [todosType, todos]);
  function todosTypeState(e) {
    setTodosType(e.target.value);
  }

  //dialog handlers
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [todoTask, setTodoTask] = useState(null);
  function showDeleteDialog(todoTask) {
    setTodoTask(todoTask);
    setOpenDeleteDialog(true);
  }
  function handleCloseDeleteDialog() {
    setOpenDeleteDialog(false);
  }

  function handleDeleteTask() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todoTask.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setOpenDeleteDialog(false);
  }
  return (
    <>
      {/* delete dialog  */}
      <Dialog
        onClose={handleCloseDeleteDialog}
        open={openDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "red" }}>
          {"🗑️ Are you sure you want to delete this task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            🗑️ This action is irreversible. You cannot restore this task after
            deletion.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDeleteDialog}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteTask}
            autoFocus
            sx={{ backgroundColor: "red", color: "white" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "secondary.main",
          padding: "20px",
          maxHeight: "80vh",
          overflow: "scroll",
        }}
      >
        {/* main heading */}

        <Card sx={{}}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              sx={{ color: "tertiary.main" }}
              variant={"h1"}
            >
              ToDo List
            </Typography>
            <Divider />
            <ToggleButtonGroup
              // value={alignment}
              exclusive
              onChange={todosTypeState}
              aria-label="text alignment"
              sx={{ mt: "25px" }}
            >
              <ToggleButton value="all" aria-label="left aligned" sx={{}}>
                All
              </ToggleButton>
              <ToggleButton value="pending" aria-label="centered">
                Pending
              </ToggleButton>
              <ToggleButton value="done" aria-label="right aligned">
                done
              </ToggleButton>
            </ToggleButtonGroup>

            {/* all tasks */}
            {todosToPresent.map((todo) => {
              return (
                <Task
                  key={todo.id}
                  todo={todo}
                  showDeleteDialog={showDeleteDialog}
                />
              );
            })}
            {/*---------end all tasks */}

            {/* create new tsk button and input  */}
            <Grid container spacing={2}>
              <Grid size={8} sx={{}}>
                <TextField
                  value={todoTitle}
                  onChange={(e) => {
                    setTodoTitle(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                  }}
                  id="outlined-suffix-shrink"
                  label="Your Task"
                  variant="outlined"
                />
              </Grid>
              <Grid size={4} sx={{}}>
                <Button
                  onClick={() => {
                    handleSendClick();
                  }}
                  sx={{ width: "100%", height: "100%" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={todoTitle.length == 0}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
            {/* --------- end create new tsk button and input  */}
          </CardContent>
        </Card>
        {/* ---------- End main heading ------------*/}
      </Container>
    </>
  );
}
