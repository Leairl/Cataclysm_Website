import React, { useEffect, useState } from 'react';
import {SegmentedControl, } from "@radix-ui/themes";
import "./class-leaderboard-analytic.css"
import { Dragonblight } from "../../clients/Dragonblight";
import { useParams } from "react-router-dom";




interface ClassAnalyticsProps {
}

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClassAnalytics: React.FC<ClassAnalyticsProps> = () => {
  const { URLregion, URLbracket } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [region, setRegion] = useState<string>(URLregion ?? "us");
  const [bracket, setBracket] = useState<string>(URLbracket ?? "3v3");
  const [classAnalyticsList, setClassAnalyticsList] = useState<Dragonblight.ClassAnalytics[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const client = new Dragonblight.LeaderboardAnalyticsClient();
      const res = await client.getLeaderboardAnalytics(region, bracket);
      setClassAnalyticsList(res);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, [region, bracket]);

  function BracketClick(bracketName: string) {
    if (bracket !== bracketName) {
      window.history.replaceState(null, "", `/class-stats/${region}/${bracketName}`);
      setBracket(bracketName);
    }
  }

  function RegionClick(regionName: string) {
    if (region !== regionName) {
      window.history.replaceState(null, "", `/class-stats/${regionName}/${bracket}`);
      setRegion(regionName);
    }
  }

  const data = {
    labels: classAnalyticsList.map(c => c.className),
    datasets: [
      {
        label: 'Pvp Entries',
        data: classAnalyticsList.map(c => c.PvpEntries.length),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Class Analytics',
      },
    },
  };

  return (
    <div>
      <div className="flex-col">
        <div className="flex-row justify-center flex px-0 py-3 flex-wrap">
          <div className={loading ? "div-disabled" : ""}>
            <SegmentedControl.Root
              className="w-[250px] flex-grow-0"
              defaultValue={URLbracket ?? "3v3"}
            >
              <SegmentedControl.Item onClick={() => BracketClick("2v2")} value="2v2">
                2v2
              </SegmentedControl.Item>
              <SegmentedControl.Item onClick={() => BracketClick("3v3")} value="3v3">
                3v3
              </SegmentedControl.Item>
              <SegmentedControl.Item onClick={() => BracketClick("5v5")} value="5v5">
                5v5
              </SegmentedControl.Item>
              <SegmentedControl.Item onClick={() => BracketClick("rbg")} value="rbg">
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
              <SegmentedControl.Item onClick={() => RegionClick("us")} value="us">
                US
              </SegmentedControl.Item>
              <SegmentedControl.Item onClick={() => RegionClick("eu")} value="eu">
                EU
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
        </div>
        <div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default ClassAnalytics