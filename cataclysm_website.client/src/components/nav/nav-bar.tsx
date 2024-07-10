import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Card } from "@radix-ui/themes";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Card className="flex h-16">
      <Link
        to="/"
        className="flex-none flex"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <img src="https://i.imgur.com/uqNOdTI.png"></img>
      </Link>
      <NavigationMenu.Root className="flex justify-end w-11/12">
        <NavigationMenu.List className="center flex justify-evenly list-none rounded-[6px] ">
          <NavigationMenu.Item>
            <Link to="/">
              <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                Home
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/rankings">
              <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-0 text-[15px] font-medium leading-none outline-none">
                <div className="flex flex-col"><img
                      src={`/Nav/armory.svg`}
                      height="30px"
                      width="30px"
                    ></img>
                <span>Rankings</span></div>
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/login">
              <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                Login
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/register">
              <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                Register
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Card>
  );
}

export default NavBar;
