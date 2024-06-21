import { useEffect, useState } from 'react';
import './arena-ladder-2v2.css';
import * as Avatar from '@radix-ui/react-avatar';
import {Card, Table, Flex, Container, Button } from '@radix-ui/themes';
interface RealmReferenceWithoutName {
    slug: string;
}

interface Profile {
    name: string;
    realm: RealmReferenceWithoutName;
}

interface Player {
    rank: number;
    character: Profile;
    rating: number;
    season_match_statistics: SeasonMatchStatistics
    
}

interface SeasonMatchStatistics {
    won: number;
    lost: number;
    rating: number;
}

function arena2v2Ladder() {
    //const [count, setCount] = useState(0); //store dynamic data, focus on arena ladder component
    const [ladder, setLadder] = useState<Player[]>();

    useEffect(() => {
        Ladder2v2Data();
    }, []);

    return (
        <>
            <Container width="950px">
                <Flex direction="column" gap="5" maxWidth="950px">
                    <Card className='m-20'>
                        <Table.Root size="1" variant='ghost'>
                            <Table.Header>
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
                                {ladder?.map(pvpladder => <Table.Row className="hover:bg-blue-300/30 cursor-pointer">
                                    <Table.RowHeaderCell>{pvpladder.rank}</Table.RowHeaderCell>
                                    <Table.RowHeaderCell>
                                        <Flex>
                                            <Avatar.Root className="w-4 mt-0.5 mr-1">
                                                <Avatar.Image />
                                                <Avatar.Fallback />
                                            </Avatar.Root>
                                            <Avatar.Root className="w-4 mt-0.5 mr-1">
                                                <Avatar.Image
                                                    src="" />
                                                <Avatar.Fallback />
                                            </Avatar.Root>
                                            {pvpladder.character.name}
                                        </Flex>
                                    </Table.RowHeaderCell>
                                    <Table.Cell>{pvpladder.character.realm.slug.charAt(0).toUpperCase() + pvpladder.character.realm.slug.slice(1)}</Table.Cell>
                                    <Table.Cell>{pvpladder.rating}</Table.Cell>
                                    <Table.Cell className="text-green-300">{pvpladder.season_match_statistics.won}</Table.Cell>
                                    <Table.Cell className="text-red-300">{pvpladder.season_match_statistics.lost}</Table.Cell>
                                </Table.Row>
                                )}
                            </Table.Body>
                        </Table.Root>
                    </Card>
                </Flex>
            </Container></>
    );
    async function Ladder2v2Data() {
        const response = await fetch('PvPLeaderboard/Get2v2Ladder');
        const data = await response.json();
        setLadder(data);
        }
}

export default arena2v2Ladder;