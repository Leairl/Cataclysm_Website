import { Card, Container, Flex } from "@radix-ui/themes";
import Select, { Option } from "rc-select";
import React, { useCallback } from "react";
import { useState } from "react";
import "./search-box.less";
import debounce from "lodash/debounce";
import { ClassColor } from "../../helpers/classColorHelper";
import { Dragonblight } from "../../clients/Dragonblight";

function HomePage() {
  //finding data with setSearchResults, and referencing / storing with searchResults
  const [searchResults, setSearchResults] = useState<React.ReactElement[]>();
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
        src="https://i.imgur.com/LMjf4Lh.png"
      ></img>
      <Container height="100vh">
        <Flex direction="column" gap="5" className=" w-full">
          <Card className="m-20">
            <Select
              mode="combobox"
              notFoundContent={null}
              defaultActiveFirstOption={true}
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

  function GetRegionImage(characterSummary: Dragonblight.CharacterProfileSummary) {
    if (characterSummary._links?.self?.href?.includes('us.api')){
      return `../Regions/us.svg`
    }
    return `../Regions/eu.svg`
  }
  function GetRegion(characterSummary: Dragonblight.CharacterProfileSummary) {
    if (characterSummary._links?.self?.href?.includes('us.api')){
      return "us"
    }
    return "eu"
  }


  //sending in search string to backend
  async function SearchAsync(search: string) {
    setSearchResults([<Option disabled> Loading... </Option>])
    if (search == ""){
      setSearchResults([])
    }
    //returning data from character profile summary
    const client = new Dragonblight.SearchClient();
    client.searchChar(search).then((data) => {
      const mapData = data.map(
        (characterSummary: Dragonblight.CharacterProfileSummary) => {
          return <Option value={`${characterSummary.name}-${characterSummary.realm?.name}`} key={`${characterSummary.name}-${characterSummary.realm?.name}-${GetRegion(characterSummary)}`}>
            <div className="flex">
            <div className="pr-1">
            <img src={`../ClassIcons/${characterSummary.character_class?.name}.png`} height="25px" width="25px" style={{maxHeight: "25px", maxWidth: "25px" }}>
            </img>
            </div>
            <img src={`../Factions/${characterSummary.faction?.name}.png`} className="flex" height="25px" width="25px" style={{maxHeight: "25px", maxWidth: "25px" }}>
            </img>
            <span className="pl-2" style={{color: `${ClassColor.get(characterSummary.character_class?.name?? "")}`}}>{characterSummary.name}-{characterSummary.realm?.name}</span>
            <div className="grow"></div>
            <img src={GetRegionImage(characterSummary)} className="flex" height="25px" width="25px" style={{maxHeight: "25px", maxWidth: "25px" }}>
            </img>
            </div>
        </Option>
        }
      );
      setSearchResults(mapData);
    });
  }
}

export default HomePage;
