import { Box, Divider, Fade, Text, } from "@chakra-ui/react"
import { useState } from "react"
import Head from "./Head"
import Tabb from "./Tabs"
import TextHolder from "./TextHolder"
import { FaHome, FaStore } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';

const Main = () => {
  // const {  onOpen,  } = useDisclosure()
  const [open, setOpen] = useState(false)
  return (
<Box display="flex">
<Box width={open ? "20%" : "0%"} background="green.600" height="100vh" className="fadein">
    {
      open ? (
      <>
      <Text padding="1rem 3rem" fontSize="24px" fontWeight="500" color="#fff">terawork</Text>
        <Box padding="1rem 0 0 3rem" display="flex" flexDirection="column"  gap="1rem">
          <TextHolder textHolder="Home" icon={<FaHome size="20"/>}/>
          <TextHolder 
          textHolder="Message" 
          icon={<BsFillChatFill size="20"/>}
          flag="Flagged"
          user="User Conversation"
          support="Support Requests"
          missed="Missed"
          />
          <TextHolder textHolder="WorkStore" icon={<FaStore size="20"/>}/>
        </Box>
      </>
      ) : ""
    }
  </Box>
  <Box width="100%">
    <Head onClick={() => setOpen(true)} onClose={() => setOpen(false)} open={open}/>
    <Divider/>
    <Tabb/>
  </Box>
</Box>
  )
}

export default Main