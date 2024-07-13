import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Card } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import "./nav-bar.css";
function NavBar() {
  return (
    <Card className="flex h-20">
      <Link
        to="/"
        className="flex-none flex"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <div className="flex pt-1 max-h-12 pl-16">
          <img src={`/Nav/db_io.webp`}></img>
        </div>
      </Link>
      <NavigationMenu.Root className="flex justify-end w-11/12">
        <NavigationMenu.List className="center flex justify-evenly list-none rounded-[6px] ">
          <NavigationMenu.Item>
            <Link to="/">
              <NavigationMenu.Trigger className="group flex select-none items-center gap-[2px] rounded-[4px]  text-[15px] font-medium leading-none outline-none">
                <div className="flex flex-col blue-bottom-border w-20 items-center cls-1">
                  <img 
                  src={`/Nav/armory.svg`} 
                  height="35px" 
                  width="35px"
                  ></img>
                  <span className="mb-1 mt-1 text-xs font-segoeFont">Armory</span>
                </div>
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/rankings">
              <NavigationMenu.Trigger className=" pr-10 group flex select-none items-center gap-[2px] rounded-[4px] text-[15px] font-medium leading-none outline-none">
                <div className="flex flex-col blue-bottom-border w-20 items-center cls-1">
                  <img
                    src={`/Nav/ranks icon.svg`}
                    height="35px"
                    width="35px"
                  ></img>
                  <span className="mb-1 mt-1 text-xs font-segoeFont">Rankings</span>
                </div>
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <div className="pr-10 mx-4 h-10 border-l border-gray-300"></div>
          <NavigationMenu.Item>
            <Link to="/login">
              <NavigationMenu.Trigger className="group flex grey-login-border select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                <button className="bg-transparent font-semibold py-2 px-8 border border-gray-500 rounded">
                <span className="mt-1 text-xs font-segoeFont"> Login </span>
                </button>
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/register">
              <NavigationMenu.Trigger className=" pr-40 group flex select-none items-center gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none">
                <button className="btn btn-blue">
                  <span className="mt-1 text-xs font-segoeFont"> Register </span>
                </button>
              </NavigationMenu.Trigger>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Card>
  );
}

export default NavBar;
