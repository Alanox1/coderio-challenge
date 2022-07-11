import { Stack,Text,Button,Box } from "@chakra-ui/react"

export default function Card({timezoneUnico,handleRemove}){
  const hora  = new Date(`${timezoneUnico.hora.slice(0,19)}`)
 
    return(
      <Box>
         <Stack direction="column" 
                padding="10px 10px"
                bgColor="blue.400" 
                textAlign="center"
                margin="5px"
                position="relative">
        <Button  variant="link"
                h="15px" 
                textAlign="center"
                position="absolute" 
                top="0px"
                left="0px"
                colorScheme="black"
                onClick={(e) => handleRemove(timezoneUnico.timezone)}>
                x</Button>
        <Text as="p">{timezoneUnico.timezone}</Text>
        <Text>{hora.toLocaleDateString()}</Text>
        <Text>{hora.toLocaleTimeString()}</Text>
      </Stack>
      </Box>
     
    )
}