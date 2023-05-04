import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react"


const ThreadList = () => {
return (
<TableContainer boxShadow=".1rem .1rem 1rem .3rem rgba(128, 128, 128, 0.372)" padding="1.5rem" borderRadius=".5rem">
<Table size='sm'>
    <Thead>
        <Tr>
            <Th fontSize="16px">Title</Th>
            <Th fontSize="16px">Requester</Th>
            <Th fontSize="16px">Seller</Th>
            <Th fontSize="16px">Requested Time</Th>
        </Tr>
    </Thead>
</Table>
</TableContainer>
)}

export default ThreadList