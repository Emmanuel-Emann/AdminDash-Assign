import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'

const TextHolder = ({textHolder, icon, flag, user, support, missed}) => {
    const [open, setOpen] = useState(false)
  return (

    <>
    <Box 
    display="flex" 
    alignItems="center" 
    gap=".5rem" 
    cursor="pointer" 
    background={open ? "rgba(255, 255, 255, 0.202)" : ""}
    width="100%"
    borderRadius="2rem 0 0 2rem"
    padding=".8rem"
    color="#fff" 
    >
        <div onClick={() => setOpen(false)}>
            {icon}
        </div>
        <Text fontSize="16px" fontWeight="400" onClick={() => setOpen(true)}>{textHolder}</Text>
    </Box>
    {open ? (
    <Box display="grid" marginLeft="2.2rem" gap="1rem">
        <Text fontSize="14px" fontWeight="400" color="#fff" cursor="pointer">{flag}</Text>
        <Text fontSize="14px" fontWeight="400" color="#fff" cursor="pointer">{user}</Text>
        <Text fontSize="14px" fontWeight="400" color="#fff" cursor="pointer">{support}</Text>
        <Text fontSize="14px" fontWeight="400" color="#fff" cursor="pointer">{missed}</Text>
    </Box>
    ) : ""}
</>
)}

export default TextHolder