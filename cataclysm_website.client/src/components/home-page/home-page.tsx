import { Card, Container, Flex } from "@radix-ui/themes";
import Select, { Option } from "rc-select";
import React, { useCallback } from "react";
import { useState } from "react";
import "./search-box.less";
import debounce from "lodash/debounce";
import { DragonblightClient } from "../../clients/dragonblightClient";
import { ClassColor } from "../../helpers/classColorHelper";

function HomePage() {
  //finding data with setSearchResults, and referencing / storing with searchResults
  const [searchResults, setSearchResults] = useState<JSX.Element[]>();
  const inputRef = React.createRef<HTMLInputElement>();
  const delayedSearch = useCallback(
    debounce(async (searchTerm) => {
      await SearchAsync(searchTerm);
    }, 250),
    []
  );
  return (
    <div>
      <img
        className="object-left-top w-full h-full inset-0 absolute object-cover opacity-100 top-14"
        src="https://i.imgur.com/LMjf4Lh.png"
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
              //value of element is changing (text field is changing per character, and is called)
              //called from imported library (onChange), and compares what was previously typed to what is currently typed (if false, then print out search box dropdown)
              onChange={delayedSearch}
              >
              {searchResults}
              </Select>
          </Card>
        </Flex>
      </Container>
    </div>
  );

  //sending in search string to backend
  async function SearchAsync(search: string) {
    setSearchResults([<Option disabled> Loading... </Option>])
    if (search == ""){
      setSearchResults([])
    }
    //returning data from character profile summary
    const client = new DragonblightClient.Client();
    client.searchChar(search).then((data) => {
      const mapData = data.map(
        (characterSummary: DragonblightClient.CharacterProfileSummary) => {
          return <Option key={characterSummary.name}>
            <div className="flex">
            <img src={`../ClassIcons/${characterSummary.character_class?.name}.png`} height="25px" width="25px" style={{maxHeight: "25px", maxWidth: "25px" }}>
            </img>
            <span className="pl-2" style={{color: `${ClassColor.get(characterSummary.character_class?.name?? "")}`}}>{characterSummary.name}-{characterSummary.realm?.name}</span>
            </div>
        </Option>
        }
      );
      setSearchResults(mapData);
    });
  }
}

export default HomePage;
