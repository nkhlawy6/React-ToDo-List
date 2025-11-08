import "./App.css";
import { Box } from "@mui/material";
import ToDoList from "./components/ToDolist";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
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
        <ToDoList style={{}} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
