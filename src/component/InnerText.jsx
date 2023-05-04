import { Text } from "@chakra-ui/react"


const InnerText = ({text}) => {
  return (
    <Text 
        fontSize="14px" 
        fontWeight="400" 
        color="#fff" cursor="pointer">{text}</Text>
  )
}

export default InnerText