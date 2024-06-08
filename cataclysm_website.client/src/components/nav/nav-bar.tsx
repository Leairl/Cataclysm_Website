import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Card } from '@radix-ui/themes';

function NavBar() {
    return (
        <Card className='flex h-14'>
            <span className='w-1/2 mt-1'>Divinity Armory</span>
            <NavigationMenu.Root className='flex justify-end w-11/12'>
                <NavigationMenu.List className="center flex justify-evenly list-none rounded-[6px] ">
                    <NavigationMenu.Item >
                        <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                            Armory
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item >
                        <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                            Ranking
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item >
                        <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                            Login
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item >
                        <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                            Register
                        </NavigationMenu.Trigger>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </Card>
    )
}

export default NavBar;