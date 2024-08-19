import React, { FC, ReactElement, useEffect, useState } from "react";
import { Dragonblight } from "../../../clients/Dragonblight";
import { useParams } from "react-router-dom";
import { Card, Heading, Skeleton } from "@radix-ui/themes";
import "./profile-rating.css"

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
      <div className="rating-card" key={"GetRating" + i}>
      <Skeleton className={i == 0 || i == 2 ? "mt-5 mb-3 h-20 mobile-padding rating-padding" : "mt-5 mb-3 h-20 rating-padding"} key={"SkeletonRating" + i}>
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
    return <div className="flex-wrap flex flex-row width-60vw">{SkeletonCards}</div>;
  }
  
  function getRatingCard(BracketStatistics :Dragonblight.CharacterPvpBracketStatistics | null, index: number) : ReactElement { //connects specific bracket data into card, set to type ReactElement with tsx code inside return
    return (
      <div className="rating-card" key={"GetRating" + index}>
        <Card className={index == 0 || index == 2 ? "mt-5 mb-3 h-20 mobile-padding rating-padding" : "mt-5 mb-3 h-20 rating-padding"}>
            <div>
            <Heading size="3" className="text-center pb-2"> {index == 0 ? "2v2" : ""} 
              {index == 1 ? "3v3" : ""}
              {index == 2 ? "5v5" : ""}
              {index == 3 ? "RBG" : ""}
              </Heading>
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
    return <div className="flex-wrap flex flex-row width-60vw">{RatingCards}</div>;
  }
};
export default ProfileRating;
