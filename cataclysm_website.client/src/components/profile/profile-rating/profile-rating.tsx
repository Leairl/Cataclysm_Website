import React, { FC, ReactElement, useEffect, useState } from "react";
import { Dragonblight } from "../../../clients/Dragonblight";
import { useParams } from "react-router-dom";
import { Card, Heading, Skeleton } from "@radix-ui/themes";
import "./profile-rating.css";

interface ProfileRatingProps {}

const ProfileRating: FC<ProfileRatingProps> = (/*props*/) => {
  // pulls dictionary of keys from pvp bracket
  const [characterRatings, setcharacterRatings] = useState<
    Dragonblight.CharacterPvpBracketStatistics[]
  >(); //calls schema from argentponywarcraft client
  const [loading, setLoading] = useState<boolean>();
  const [rewards, setRewards] = useState<
    Dragonblight.PvpSeasonRewardWithRank[]
  >();
  const { region, server, characterName } = useParams();

  async function CutoffData() {
    const DragonblightClient = new Dragonblight.PvpLeaderboardClient();
    setRewards(await DragonblightClient.getPvPRewards(region));
    setLoading(false);
  }

  //activates useEffect from change in region / server / charactername (when we load new character data)
  //pulls all pvpbracket data from blizzard (or redis) and placing inside of data
  useEffect(() => {
    setLoading(true);
    const CharacterRatingClient = new Dragonblight.PvpStatClient(); //talking to controller
    const slug = server?.replace(" ", "-");
    CharacterRatingClient.getPvPCurrentRating(slug, characterName, region).then(
      //saves data from get controller
      (data) => {
        setcharacterRatings(data); //updates characterRatings data
        CutoffData();
      }
    );
  }, [region, server, characterName]);

  function getBracketColor(
    bracket: string,
    current_rating: number
  ): string | undefined {
    const title = getTitle(bracket, current_rating);
    if (title == "Vicious Gladiator") {
      return "text-yellow-600";
    }
    if (title == "Gladiator" || title == "Hero of the Faction") {
      return "text-purple-500	";
    }
    if (title == "Duelist") {
      return "text-blue-500";
    }
    if (title == "Rival") {
      return "text-green-500";
    }
    if (title == "Challenger") {
      return "text-neutral-500";
    }
    if (title == "") {
      return "text-stone-100";
    }
  }

  function getTitle(
    bracket: string,
    current_rating: number
  ): string | undefined {
    const bracketRewards = rewards
      ?.filter((r) => {
        return (
          r.bracket?.type?.includes(bracket) ||
          (r.bracket?.type?.includes("BATTLEGROUNDS") && bracket == "rbg")
        );
      })
      .sort((c, p) => {
        return c.rating_cutoff - p.rating_cutoff;
      });

    let title = "";
    for (const bracketReward of bracketRewards ?? []) {
      if (current_rating >= bracketReward.rating_cutoff)
        title =
          bracketReward.achievement?.name
            ?.replace(" - Season 9", "")
            .replace(": Season 9", "")
            .replace("[DNT] ", "") ?? "";
    }
    return title;
  }

  function getCardBorder(
    bracket: string,
    current_rating: number
  ): string | undefined {
    const title = getTitle(bracket, current_rating);

    if (title == "Vicious Gladiator") {
      return "border-yellow-600 border-2";
    }
    if (title == "Gladiator" || title == "Hero of the Faction") {
      return "border-purple-500 border-2";
    }
    if (title == "Duelist") {
      return "border-blue-500 border-2";
    }
    if (title == "Rival") {
      return "border-green-500 border-2";
    }
    if (title == "Challenger") {
      return "border-neutral-500 border-2";
    }
    if (title == "") {
      return "border-stone-100 border-2";
    }
  }

  return (
    <div>
      <div>{loading && getSkeletons()}</div>
      <div>{!loading && getRatings()}</div>
    </div>
  );

  function getSkeleton(i: number) {
    return (
      <div className="rating-card" key={"GetRating" + i}>
        <Skeleton
          className={
            i == 0 || i == 2
              ? "mt-5 mb-3 h-20 mobile-padding rating-padding"
              : "mt-5 mb-3 h-20 rating-padding"
          }
          key={"SkeletonRating" + i}
        >
          <Card></Card>
        </Skeleton>
      </div>
    );
  }
  function getSkeletons() {
    const SkeletonCards = [];
    for (let i = 0; i < 4; i++) {
      SkeletonCards.push(getSkeleton(i));
    }
    return (
      <div className="flex-wrap flex flex-row width-60vw">{SkeletonCards}</div>
    );
  }

  function getRatingCard(
    BracketStatistics: Dragonblight.CharacterPvpBracketStatistics | null,
    index: number
  ): ReactElement {
    //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="pb-10 rating-card" key={"GetRating" + index}>
        <Card
          className={
            getCardBorder(
              BracketStatistics?.bracket?.type ?? "",
              BracketStatistics?.rating ?? 0
            ) +
            " " +
            (index == 0 || index == 2
              ? "mt-5 mb-3 h-26 mobile-padding rating-padding"
              : "mt-5 mb-3 h-26 rating-padding")
          }
        >
          <div>
            <div
              className={
                getBracketColor(
                  BracketStatistics?.bracket?.type ?? "",
                  BracketStatistics?.rating ?? 0
                ) +
                " " +
                "font-bold text-3xl flex justify-center"
              }
            >
              {BracketStatistics?.rating ? BracketStatistics?.rating : "0"}
            </div>
          </div>
          <Heading size="3" className="text-center">
            {" "}
            {index == 0 ? "2v2" : ""}
            {index == 1 ? "3v3" : ""}
            {index == 2 ? "5v5" : ""}
            {index == 3 ? "RBG" : ""}
          </Heading>
        </Card>
        <div className="flex justify-center text-sm">
          <span className="text-green-300">
            {BracketStatistics?.season_match_statistics?.won}
          </span>{" "}
          &nbsp;{BracketStatistics?.season_match_statistics?.played != null ? "-" : " "}&nbsp;{" "}
          <span className="text-red-300">
            {BracketStatistics?.season_match_statistics?.lost}
          </span>
        </div>
        <span className="text-xs italic justify-center">
          {getTitle(
            BracketStatistics?.bracket?.type ?? "",
            BracketStatistics?.rating ?? 0
          ) != ""
            ? "Predicted Title:"
            : ""}{" "}
          {getTitle(
            BracketStatistics?.bracket?.type ?? "",
            BracketStatistics?.rating ?? 0
          )}
        </span>
      </div>
    );
  }
  //loops through each character rating (remember: characterratings is updated every time the user looks up a character, and has character data from controller)
  function getRatings() {
    const RatingCards: ReactElement[] = [];
    if (characterRatings) {
      // [{2v2}, {3v3}, {5v5}, {rbg}] - characterratings is being updated by setcharacterratings, which is communicating with the controller to call a character's bracket ratings.
      characterRatings.forEach((BracketStatistics, index) => {
        //characterRatings[0] = {2v2}, characterRatings[1] = {3v3}, doing for each loop with each element inside of characterratings
        RatingCards.push(getRatingCard(BracketStatistics, index)); // RatingCards[0] = {div+card+div}, pushes element data we are looking for into ratingcards
      });
    }
    return (
      <div className="flex-wrap flex flex-row width-60vw">{RatingCards}</div>
    );
  }
};
export default ProfileRating;
