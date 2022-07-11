import { Input , Box} from '@chakra-ui/react'
import { useEffect, useState} from 'react'
import Card from './Card'

export function SearchBox(){
    
    const [valor,setValor] = useState("")
    const [busqueda,setBusqueda] = useState([])
    const [timezones,setTimezones] = useState([])
    const [timezonesUnico,setTimezonesUnico] = useState([])

    const handleChange = (e) => {
        filtrar(e.target.value)
        setValor(e.target.value)
    }

    const peticionGet = async () => {
        let url = `https://worldtimeapi.org/api/timezone and`
        let data = await fetch(url),
         json = await data.json();

         setBusqueda(json)
         setTimezones(json)
    }       


    const filtrar = (terminoBusqueda) => {
        let resultadoBusqueda = busqueda.filter((elemento) => {
            if(elemento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento
            }
        }) 
        setTimezones(resultadoBusqueda)
    }


    const buscarTimezone = async (e) => {
        e.preventDefault()
        
        let url = `http://worldtimeapi.org/api/timezone/${e.target.innerHTML}`;
        let data = await fetch(url),
        json = await data.json();
    
       const nuevoTimezone = {
        timezone : json.timezone,
        time : json.utc_datetime,
        hora : json.datetime
       }
    
       setTimezonesUnico([...timezonesUnico,nuevoTimezone])
       setValor("")
    }


    const handleRemove = (timezone) => {
        const newUsers = timezonesUnico.filter((_timezone) =>_timezone.timezone !== timezone)
        setTimezonesUnico(newUsers)
    }


    useEffect(() => {
        peticionGet()
    },[])
    
    return(
        <>
        <Box display="center"
             justifyContent="center"
             as="section">

          <form onSubmit={(e) => peticionGet(e)}
          
           >
               <Input placeholder='Buscar timezone...'
                bgColor="gray.300"
                size="lg"
                margin="0px auto"
                variant="Outline"
                value={valor}
                onChange={handleChange}
                border="2px solid red"
                
                />
                <ul>
                    {valor.length === 0 ? "" 
                    : timezones.map((timezone) => (
                        <li>
                           <a href="#" onClick={(e) => buscarTimezone(e)}>{timezone}</a>
                        </li>
                    ))}
                </ul>
        </form>
    </Box> 
       
        <Box as="section"
             maxWidth="1280px" 
             display="flex" 
             justifyContent="center" 
             flexWrap="wrap" 
             width="70%" 
             margin="0px auto">
        { timezonesUnico === null ? "" : timezonesUnico.map((timezoneUnico) => (
                <Card timezoneUnico={timezoneUnico} handleRemove={handleRemove}/>
        ))} 
        </Box>
       
        </>
        
   
    )
}

