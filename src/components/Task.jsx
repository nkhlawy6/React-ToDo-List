import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TodosContext } from "../context/TodosContext";
import { useContext, useState } from "react";
export default function Task({ todo }) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const { todos, setTodos } = useContext(TodosContext);
  const [updatedTodo, setUpdatedTodo] = useState({ title:'', description:'' });
  console.log(todos);
  function handleTaskDone() {
    const doneTask = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(doneTask);
    localStorage.setItem('todos',JSON.stringify(doneTask))
  }

  function handleOpenDeleteDialog() {
    setOpenDeleteDialog(true);
  }

  function handleCloseDeleteDialog() {
    setOpenDeleteDialog(false);
  }

  function handleDeleteTask() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos',JSON.stringify(updatedTodos))
  }

  function handleOpenUpdateDialog() {
    setOpenUpdateDialog(true);
  }

  function handleCloseUpdateDialog() {
    setOpenUpdateDialog(false);
  }

  function handleUpdateTask() {
    const updatedTodos=todos.map((t) => { 
      if(t.id==todo.id){
        return {...t,title:updatedTodo.title,description:updatedTodo.description}
      }else{
        return t
      }

     })

     setTodos(updatedTodos)
     localStorage.setItem('todos',JSON.stringify(updatedTodos))
    handleCloseUpdateDialog()
  }

  return (
    <div>
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

      {/* update dialog  */}
      <Dialog
        onClose={handleCloseUpdateDialog}
        open={openUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: "green" }}>
          {"Update your task."}
        </DialogTitle>
        <DialogContent>
          <TextField id="standard-basic" label="Title" variant="standard" value={updatedTodo.title} onChange={(e)=>{setUpdatedTodo({...updatedTodo,title:e.target.value})}} />
          <Divider />
          <TextField id="standard-basic" label="Details" variant="standard" value={updatedTodo.description} onChange={(e)=>{setUpdatedTodo({...updatedTodo,description:e.target.value})}} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseUpdateDialog}
            sx={{ backgroundColor: "red", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateTask}
            autoFocus
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          // color: "white",
          margin: "20px",
          bgcolor: "secondary.main",
          color: "primary.main",
        }}
      >
        <CardContent
          sx={{ textAlign: "center" }}
          className={`${todo.isCompleted ? "taskDone" : ""}`}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center", padding: "5px" }}
          >
            <Grid
              size={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                gutterBottom
                sx={{ margin: "0", color: "black" }}
                variant={"h5"}
              >
                {todo.title}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  margin: "0 0 0 0",
                  fontFamily: "Lato-Bold",
                  lineHeight: "1.1",
                  padding: "5px",
                  textAlign: "start",
                }}
                variant={"h6"}
              >
                {todo.description}
              </Typography>
            </Grid>
            <Grid
              size={4}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontFamily: "Loto",
              }}
            >
              <IconButton
                className={`icon `}
                onClick={() => {
                  handleTaskDone();
                }}
              >
                <CheckCircleIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={handleOpenUpdateDialog} className="icon">
                <ModeEditIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={handleOpenDeleteDialog} className="icon">
                <DeleteIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </CardContent>
      </Card>
    </div>
  );
}
