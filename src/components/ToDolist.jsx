import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function ToDoList() {
  let bull = "mahmoud";
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ bgcolor: "secondary.main",padding:'20px' }}>
        {/* main heading */}
           {/* "Remove the background from the main title here after picking its color, and use that color as the background for each added task." */}
        <Card sx={{ minWidth: 275, }}>
          <CardContent sx={{textAlign: "center"}}>
            <Typography
              gutterBottom
              sx={{ color: "tertiary.main" }}
              variant={'h1'}
            >
              ToDo List
            </Typography>
            <Divider />
            <ToggleButtonGroup
              // value={alignment}
              exclusive
              // onChange={handleAlignment}
              aria-label="text alignment"
              sx={{mt:'25px'}}
            >
              <ToggleButton value="left" aria-label="left aligned"      sx={{}}>
                All
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                Pending
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                done
              </ToggleButton>
            </ToggleButtonGroup>
          </CardContent>
          <CardActions sx={{}}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* ---------- End main heading ------------*/}
      </Container>
    </>
  );
}
