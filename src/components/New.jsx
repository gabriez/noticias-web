import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid, Box} from "@mui/material"
import Placeholder from '../assets/placeholder.jpg'

const New = ({info}) => {

    const { urlToImage, url, title, description, source} = info
  return (
    <Grid item xs={12} md={6} lg={4}>
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }} >
            <Box>

                <CardMedia 
                    component={'img'} 
                    alt={`Imagen de la noticia ${title}`}
                    src={urlToImage ?? Placeholder}
                    height={250}
                    />
                       
            <CardContent>
                <Typography variant='body1' color='error'>
                    {source.name}
                </Typography>
                <Typography variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {description}
                </Typography>    
            </CardContent> 
            </Box>

            <CardActions sx={{
                alignSelf: 'end'
            }}>
                <Link
                    href={url}
                    target='_blank'
                    variant="button"
                    width={'100%'}
                    textAlign={'center'}
                >
                    Leer noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default New
