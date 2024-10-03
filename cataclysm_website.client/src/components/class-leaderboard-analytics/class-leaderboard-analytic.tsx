import React, { useEffect, useState } from 'react';
import { SegmentedControl } from "@radix-ui/themes";
import "./class-leaderboard-analytic.css"
import { Dragonblight } from "../../clients/Dragonblight";
import { useParams } from "react-router-dom";
import { ClassColor } from '../../helpers/classColorHelper';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

interface ClassAnalyticsProps {
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClassAnalytics: React.FC<ClassAnalyticsProps> = () => {
  const { URLregion, URLbracket } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [region, setRegion] = useState<string>(URLregion ?? "us");
  const [bracket, setBracket] = useState<string>(URLbracket ?? "3v3");
  const [rating, setRating] = useState<number>(1500);
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

  function RatingChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setRating(parseInt(event.target.value));
  }

  const filteredClassAnalyticsList = classAnalyticsList.map(c => ({
    ...c,
    PvpEntries: c.PvpEntries.filter(entry => entry.rating >= rating)
  }));

  const colors = filteredClassAnalyticsList.map(c => ClassColor.get(c.className));

  const sortedClassAnalyticsList = filteredClassAnalyticsList.sort((a, b) => a.className.localeCompare(b.className));

  const data = {
    labels: sortedClassAnalyticsList.map(c => c.className),
    datasets: [
      {
        data: sortedClassAnalyticsList.map(c => c.PvpEntries.length),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right' as const,
      },
      title: {
        text: 'Class Analytics',
        display: true
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Number of players',
          rotation: 0, // Rotate the title to be horizontal
        },
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
          <div className="grow"></div>
          <div className={loading ? "div-disabled" : ""}>
            <select onChange={RatingChange} value={rating} className="w-[100px]">
              <option value={2000}>2000</option>
              <option value={2400}>2400</option>
              <option value={2700}>2700</option>
            </select>
          </div>
        </div>
        <div className="w-[500px]">
          <Bar className="w-[500px]" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ClassAnalytics;