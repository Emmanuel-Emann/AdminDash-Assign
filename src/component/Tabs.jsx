import { Tab, TabList, TabPanel, TabPanels, Tabs, } from '@chakra-ui/react'
import ThreadList from './ThreadList'

const Tabb = () => {
  return (
<Tabs>
  <TabList gap="2rem">
    <Tab fontSize="18px">Flagged</Tab>
    <Tab fontSize="18px">User Conversation</Tab>
    <Tab fontSize="18px">Support Requests</Tab>
    <Tab fontSize="18px">Missed</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <ThreadList/>
    </TabPanel>
    <TabPanel>
      <p>Four!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default Tabb