import {  } from 'react';
import './arena-ladder.css';
import * as Avatar from '@radix-ui/react-avatar';
import {Card, Table, Flex, Container } from '@radix-ui/themes';


function arenaLadder() {
    //const [count, setCount] = useState(0); //store dynamic data, focus on arena ladder component



    return (
        <Container width="950px">
            <Flex direction="column" gap="5" maxWidth="950px">
                <Card className='m-20'>
                    <Table.Root size="1" variant='ghost'>
                        <Table.Header >
                            <Table.Row align="start">
                                <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Character</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Server</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Rating</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Win</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Loss</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row className="hover:bg-blue-300/30 cursor-pointer">
                                <Table.RowHeaderCell>1</Table.RowHeaderCell>
                                <Table.RowHeaderCell>  
                                    <Flex>
                                    <Avatar.Root className="w-4 mt-0.5 mr-1">
                                        <Avatar.Image
                                            src="https://wow.zamimg.com/images/wow/icons/medium/classicon_rogue.jpg"
                                        />
                                        <Avatar.Fallback />
                                    </Avatar.Root>
                                    <Avatar.Root className="w-4 mt-0.5 mr-1">
                                        <Avatar.Image
                                            src="https://wow.zamimg.com/images/wow/icons/medium/race_human_female.jpg"
                                        />
                                        <Avatar.Fallback />
                                    </Avatar.Root>
                                Jax
                                </Flex>
                                </Table.RowHeaderCell>
                                <Table.Cell>Benediction</Table.Cell>
                                <Table.Cell>2583</Table.Cell>
                                <Table.Cell>100</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Card>                   
            </Flex>
        </Container>
    );

}

export default arenaLadder;