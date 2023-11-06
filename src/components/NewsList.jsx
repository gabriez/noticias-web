import { Typography, Grid, Pagination, Stack, CircularProgress } from "@mui/material"
import useNoticiasContext from "../context/NoticiasProvider"
import New from "./New";
const NewsList = () => {
    const { news, totalPages, handlePages, loading } = useNoticiasContext();

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
        
        justifyContent={!loading ? 'auto' :  "center"}
        alignItems={!loading ? 'auto' :  "center"}
        spacing={2}
        >
            { !loading ? news.map( info => (<New key={info.url} info={info}/>)) : <CircularProgress /> }
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
            <Pagination count={totalPages} color="primary" onChange={handlePages}/>
        </Stack>
    </>
  )
}

export default NewsList
