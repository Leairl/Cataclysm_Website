import { Card, Container, Flex, TextField } from '@radix-ui/themes';

function HomePage() {
  return (
    < div>
      <img className="object-left-top w-full h-full inset-0 absolute object-cover opacity-50 top-14"src="https://i.imgur.com/nSYB78I.jpeg"></img> 
    <Container height="100vh">
      <Flex direction="column" gap="5" className= " w-full">
        <Card className='m-20'>
          <TextField.Root className="text-white font-thin text-base" placeholder='Search WoW Character'>
            <TextField.Slot>
            </TextField.Slot>
          </TextField.Root>
        </Card>
      </Flex>
    </Container>
    </div>
        );
}

export default HomePage;