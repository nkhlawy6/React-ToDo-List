import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
 
import CardContent from "@mui/material/CardContent";
 
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Task from './Task';
export default function ToDoList() {
 
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

            <Task/>
          </CardContent>

        </Card>
        {/* ---------- End main heading ------------*/}
      </Container>
    </>
  );
}
