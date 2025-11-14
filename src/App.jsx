import "./App.css";
import { Box } from "@mui/material";
import ToDoList from "./components/ToDolist";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TodosContext } from "./context/TodosContext";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
const todosDataBase = [
    {
      id: uuidv4(),
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
      id: uuidv4(),
      title: "Read a book",
      description: "Read 20 pages of 'Atomic Habits'",
      isCompleted: false,
    },
  ];


function App() {

  const [todos, setTodos] = useState(todosDataBase);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#113A5D",
      },
      secondary: {
        main: "#EFE9E3",
      },
      tertiary: {
        main: "#C9B59C",
      },
    },
    typography: {
      fontFamily: "Lato",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        className=""
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "primary.main",
          width: "100vw",
          height: "100vh",
          fontFamily: "lato",
        }}
      >
      <TodosContext.Provider value={{todos,setTodos}}>
          <ToDoList style={{}} />
      </TodosContext.Provider>

      </Box>
    </ThemeProvider>
  );
}

export default App;
