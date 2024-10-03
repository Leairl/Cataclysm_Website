import React, { useEffect, useState } from 'react';
import {SegmentedControl, } from "@radix-ui/themes";
import "./class-leaderboard-analytic.css"
import { Dragonblight } from "../../clients/Dragonblight";
import { useParams } from "react-router-dom";




interface ClassAnalyticsProps {
}

const ClassAnalytics: React.FC<ClassAnalyticsProps> = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { URLregion, URLbracket } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [region, setRegion] = useState<string>(URLregion ?? "us");
    const [bracket, setBracket] = useState<string>(URLbracket ?? "3v3");
    const [classAnalyticsList, setClassAnalyticsList] = useState<Dragonblight.ClassAnalytics[]>([]);
    useEffect(() => {
        setLoading(true)
        // declare the data fetching function
        const fetchData = async () => {
            const client = new Dragonblight.LeaderboardAnalyticsClient();
            const res = await client.getLeaderboardAnalytics(region, bracket);
            setClassAnalyticsList(res);
            setLoading(false)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [region, bracket]);
      //changes bracket from segmented control
      
  function BracketClick(bracketName: string) {
    if (bracket != bracketName) {
      window.history.replaceState(null, "", `/class-stats/${region}/${bracketName}`);
      setBracket(bracketName);
    }
  }
  function RegionClick(regionName: string) {
    if (region != regionName) {
      window.history.replaceState(null, "", `/class-stats/${regionName}/${bracket}`);
      setRegion(regionName);
    }
  }
    return (
        <div>
            <div className="flex-col">
        <div className="flex-row justify-center flex px-0 py-3 flex-wrap">
          <div className={loading ? "div-disabled" : ""}>
            <SegmentedControl.Root
              className=" w-[250px] flex-grow-0"
              defaultValue={URLbracket ?? "3v3"}
            >
              <SegmentedControl.Item
                onClick={() => {
                  BracketClick("2v2");
                }}
                value="2v2"
              >
                2v2
              </SegmentedControl.Item>
              <SegmentedControl.Item
                onClick={() => {
                  BracketClick("3v3");
                }}
                value="3v3"
              >
                3v3
              </SegmentedControl.Item>
              <SegmentedControl.Item
                onClick={() => {
                  BracketClick("5v5");
                }}
                value="5v5"
              >
                5v5
              </SegmentedControl.Item>
              <SegmentedControl.Item
                onClick={() => {
                  BracketClick("rbg");
                }}
                value="rbg"
              >
                RBG
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <div className="grow"></div>
          <div className={loading ? "div-disabled" : ""}>
            <SegmentedControl.Root
              className="w-[100px] flex-grow-0"
              defaultValue={URLregion ?? "us"}
            >
              <SegmentedControl.Item
                onClick={() => {
                  RegionClick("us");
                }}
                value="us"
              >
                US
              </SegmentedControl.Item>
              <SegmentedControl.Item
                onClick={() => {
                  RegionClick("eu");
                }}
                value="eu"
              >
                EU
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
        </div>
{classAnalyticsList.map(c => 
  (<div>{c.className + c.PvpEntries.length} </div>) )}        <div >

        </div>
        </div>

</div>
    );

}
export default ClassAnalytics