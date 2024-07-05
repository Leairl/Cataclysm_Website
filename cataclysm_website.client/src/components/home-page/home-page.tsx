import { Card, Container, Flex } from "@radix-ui/themes";
import Select from "rc-select";
import { DefaultOptionType } from "rc-select/lib/Select";
import React, { useCallback } from "react";
import { useState } from "react";
import "./search-box.less";
import debounce from "lodash/debounce";
interface Dictionary<T> {
  [Key: string]: T;
}
function HomePage() {
  //finding data with setSearchResults, and referencing / storing with searchResults
  const [searchResults, setSearchResults] = useState<DefaultOptionType[]>();
  const inputRef = React.createRef<HTMLInputElement>();
  const delayedSearch = useCallback(
    debounce(async (searchTerm) => {
      await SearchAsync(searchTerm);
    }, 500),
    []
  );
  return (
    <div>
      <img
        className="object-left-top w-full h-full inset-0 absolute object-cover opacity-100 top-14"
        src="https://i.imgur.com/CkQpTii.png"
      ></img>
      <Container height="100vh">
        <Flex direction="column" gap="5" className=" w-full">
          <Card className="m-20">
            <Select
              mode="combobox"
              notFoundContent={null}
              className="text-white font-thin text-base w-full"
              getInputElement={() => (
                <input
                  style={{
                    outline: "none",
                    background: "transparent",
                    width: "100%",
                  }}
                  placeholder="Search WoW Character"
                  ref={inputRef}
                />
              )}
              options={searchResults}
              //value of element is changing (text field is changing per character, and is called)
              //called from imported library (onChange), and compares what was previously typed to what is currently typed (if false, then print out search box dropdown)
              onChange={delayedSearch}
            />
          </Card>
        </Flex>
      </Container>
    </div>
  );
  //sending in search string to backend
  async function SearchAsync(search: string) {
    const response = await fetch("Search/SearchChar?search=" + search);
    const data = await response.json();
    //name is accessed as a dictionary (although not in a dictionary)
    // eslint-disable-next-line no-unused-labels
    const mapData = data.map((element: Dictionary<string>) => {
        return {
          //if element has a value, return name, else nothing (turnery operator)
          value: element ? element["name"] : "",
        };
    });
    setSearchResults(mapData);
  }
}

export default HomePage;
