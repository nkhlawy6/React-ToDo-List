import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { v4 as uuidv4 } from 'uuid';

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
export default function ToDoList() {
  const todos = [
    {
      id:uuidv4(),
      title: "Buy groceries",
      description: "Milk, bread, eggs, and some fruits",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Finish React project",
      description:
        "Complete the to-do list UI and connect it with local storage",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      title: "Workout session",
      description: "30 minutes of cardio and light stretching",
      isCompleted: false,
    },
    {
      id:uuidv4(),
      title: "Read a book",
      description: "Read 20 pages of 'Atomic Habits'",
      isCompleted: false,
    },
  ];
  console.log(todos);
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ bgcolor: "secondary.main", padding: "20px" }}
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
              // onChange={handleAlignment}
              aria-label="text alignment"
              sx={{ mt: "25px" }}
            >
              <ToggleButton value="left" aria-label="left aligned" sx={{}}>
                All
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                Pending
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                done
              </ToggleButton>
            </ToggleButtonGroup>

            {/* all tasks */}
            {todos.map((todo) => {
              return<Task  key={todo.id}title={todo.title} description={todo.description} />
            })}
            {/*---------end all tasks */}

            {/* create new tsk button and input  */}
            <Grid container spacing={2}>
              <Grid size={8} sx={{}}>
                <TextField
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
                  sx={{ width: "100%", height: "100%" }}
                  variant="contained"
                  endIcon={<SendIcon />}
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
