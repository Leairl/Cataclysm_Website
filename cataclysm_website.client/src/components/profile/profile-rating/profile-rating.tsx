import React, { FC, ReactElement, useEffect, useState } from "react";
import { Dragonblight } from "../../../clients/Dragonblight";
import { useParams } from "react-router-dom";
import { Card, Skeleton } from "@radix-ui/themes";

interface ProfileRatingProps {
}

const ProfileRating: FC<ProfileRatingProps> = (/*props*/) => {
    
  // pulls dictionary of keys from pvp bracket
  const [characterRatings, setcharacterRatings] = useState<
    Dragonblight.CharacterPvpBracketStatistics[]>(); //calls schema from argentponywarcraft client
  const [loading, setLoading] = useState<boolean>();
  const { region, server, characterName } = useParams();

  //activates useEffect from change in region / server / charactername (when we load new character data)
  //pulls all pvpbracket data from blizzard (or redis) and placing inside of data
  useEffect(() => {
    setLoading(true);
    const CharacterRatingClient = new Dragonblight.PvpStatClient(); //talking to controller
    const slug = server?.replace(" ", "-");
    CharacterRatingClient.getPvPCurrentRating(slug, characterName, region).then( //saves data from get controller
      (data) => {
        setcharacterRatings(data); //updates characterRatings data
        setLoading(false);
      }
    );
  }, [region, server, characterName]);

  return (
    <div>
    <div>{loading && getSkeletons()}</div>
    <div>{!loading && getRatings()}</div>
    </div>
);
  function getSkeleton(i: number) {
    return (
      <Skeleton className="m-4 mt-5 w-64 h-20" key={"SkeletonRating" + i}>
        <Card></Card>
      </Skeleton>
    );
  }
  function getSkeletons() {
    const SkeletonCards = [];
    for (let i = 0; i < 4; i++) {
      SkeletonCards.push(getSkeleton(i));
    }
    return <div className="flex flex-row">{SkeletonCards}</div>;
  }
  
  function getRatingCard(BracketStatistics :Dragonblight.CharacterPvpBracketStatistics | null, index: number) : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div key={"GetRating" + index}>
        <Card>
            <div>
              {index == 0 ? "2v2 Rating" : ""}
              {index == 1 ? "3v3 Rating" : ""}
              {index == 2 ? "5v5 Rating" : ""}
              {index == 3 ? "RBG Rating" : ""}
              
              </div>
              <div className="flex justify-center">{BracketStatistics?.rating ? BracketStatistics?.rating : "0"}</div>

        </Card>
      </div>
    );
  }
  //loops through each character rating (remember: characterratings is updated every time the user looks up a character, and has character data from controller)
  function getRatings() {
    const RatingCards : ReactElement[] = [];
    if (characterRatings){ // [{2v2}, {3v3}, {5v5}, {rbg}] - characterratings is being updated by setcharacterratings, which is communicating with the controller to call a character's bracket ratings.
        characterRatings.forEach((BracketStatistics, index) => { //characterRatings[0] = {2v2}, characterRatings[1] = {3v3}, doing for each loop with each element inside of characterratings
            RatingCards.push(getRatingCard(BracketStatistics, index)); // RatingCards[0] = {div+card+div}, pushes element data we are looking for into ratingcards
            })
        }
    return <div className="flex flex-row">{RatingCards}</div>;
  }
};
export default ProfileRating;
