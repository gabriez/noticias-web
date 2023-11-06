import { Container, Grid, Typography } from "@mui/material"
import Form from "./components/Form"
import NewsList from "./components/NewsList"
function App() {

  return (
    <Container>
     <header>
      <Typography align="center" variant="h3" component="h1" my={5}>
        Buscador de noticias
      </Typography>
     </header>

    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6} lg={4}>
        <Form/>
      </Grid>
    </Grid>

    <NewsList/>
    </Container>
      )
}

export default App
