import { ArrowBackIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Box, Heading, Menu, MenuButton, MenuItem, MenuList, Text, WrapItem } from '@chakra-ui/react'

const Head = ({onClick, onClose, open}) => {
  return (
<>
<Heading width="100%" padding="1rem"  height="5rem">
    <Box display="flex" alignItems="center" justifyContent="space-between" >
        <WrapItem display="flex" alignItems="center" gap="1rem">
        <Box display="flex" alignItems="center" gap=".5rem">
        <ArrowBackIcon cursor="pointer"/>
        {
          open ? <HamburgerIcon cursor="pointer"onClick={onClose}/> 
          : <HamburgerIcon cursor="pointer" onClick={onClick}/>
        }
        </Box>
        <Text fontSize="20px">Message</Text>
        </WrapItem>
        <Menu>
          <MenuButton>
            <WrapItem>
              <Avatar name='Dan Abrahmov' background="steelblue" cursor="pointer"/>
            </WrapItem>
        </MenuButton>
        <MenuList gap="1rem" display="flex" flexDirection="column">
            <MenuItem fontSize="14px" fontWeight="400">Profile</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Create a Copy</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Mark as Draft</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Delete</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Account Setting</MenuItem>
        </MenuList>
        </Menu>
    </Box>
</Heading>
</>
    
  )
}

export default Head