import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";
export default function Task({todo}) {
  const {todos,setTodos}=useContext(TodosContext)
console.log(todos);
  function handleTaskDone() {
      const doneTask = todos.map((t) => {
        if (t.id == todo.id) {
          t.isCompleted = !t.isCompleted
    
        }
        return t;
      });
      setTodos(doneTask);
    
  }






  
  return (
    <div>
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
              <IconButton className="icon">
                <ModeEditIcon fontSize="large" />
              </IconButton>
              <IconButton className="icon">
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
