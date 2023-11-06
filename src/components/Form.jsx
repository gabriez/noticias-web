import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"
import useNoticiasContext from "../context/NoticiasProvider"

const Form = () => {
    const {category, handleChanges} = useNoticiasContext()

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select label="Categoría"
            value={category}
            onChange={handleChanges}
            >
                {CATEGORIAS.map( categoria => (
                    <MenuItem
                        key={categoria.value} 
                        value={categoria.value} 
                    >
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </form>
  )
}

export default Form
