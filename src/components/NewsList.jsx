import { Typography, Grid, Pagination, Stack, CircularProgress } from "@mui/material"
import useNoticiasContext from "../context/NoticiasProvider"
import New from "./New";
const NewsList = () => {
    const { news, totalPages, handlePages, loading, pages } = useNoticiasContext();

  return (
    <>
        <Typography
            variant="h3"
            component={'h2'}
            my={5}
            textAlign={'center'}
        >
            Últimas noticias
        </Typography> 
        <Grid
        container
        
        justifyContent={!loading || news?.lenght === 0 ? 'auto' :  "center"}
        alignItems={!loading || news?.lenght === 0 ? 'auto' :  "center"}
        spacing={2}
        >
            { !loading ? news?.lenght === 0 ? news.map( info => (<New key={info.url} info={info}/>)) : <p>No hay noticias que mostrar</p> : <CircularProgress /> }
        </Grid>
        <Stack
            sx={{
                marginY: 5
            }}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            spacing={5}
        >
            <Pagination count={totalPages} color="primary" onChange={handlePages} page={pages}/>
        </Stack>
    </>
  )
}

export default NewsList
