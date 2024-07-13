import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./profile.css";
import { Card, Skeleton, Text } from "@radix-ui/themes";
import { Dragonblight } from "../../clients/Dragonblight";

interface profileProps {}

const slots: number[] = [
  1,
  2,
  3,
  15,
  5,
  4,
  19,
  9,
  10,
  6,
  7,
  8,
  11,
  12,
  13,
  14,
  16,
  17,
  18,
];

const default_icon_path: string = "/slot-icons/Ui-paperdoll-slot-";
const defaultIcons: string[] = [
  default_icon_path + "", // ammo
  default_icon_path + "head.webp",
  default_icon_path + "neck.webp",
  default_icon_path + "shoulder.webp",
  default_icon_path + "shirt.webp",
  default_icon_path + "chest.webp",
  default_icon_path + "waist.webp",
  default_icon_path + "legs.webp",
  default_icon_path + "feet.webp",
  default_icon_path + "wrists.webp",
  default_icon_path + "hands.webp",
  default_icon_path + "finger.webp",
  default_icon_path + "finger.webp",
  default_icon_path + "trinket.webp",
  default_icon_path + "trinket.webp",
  default_icon_path + "chest.webp", // this is for cloak...
  default_icon_path + "mainhand.webp",
  default_icon_path + "secondaryhand.webp",
  default_icon_path + "ranged.webp",
  default_icon_path + "tabard.webp",
];

const slotName: string[] = [
  "ammo",
  "head",
  "neck",
  "shoulder",
  "shirt",
  "chest",
  "waist",
  "legs",
  "feet",
  "wrist",
  "hands",
  "finger_1",
  "finger_2",
  "trinket_1",
  "trinket_2",
  "back",
  "main_hand",
  "off_hand",
  "ranged",
  "tabard",
];

// pulls from the current URL by using useParams
const Profile: FC<profileProps> = () => {
  //set new useState for each data api the user is fetching
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [characterSummary, setcharacterSummary] = useState<
    Dragonblight.CharacterProfileSummary
  >();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [characterEquipmentSummary, setcharacterEquipmentSummary] = useState<
    Dragonblight.CharacterEquipmentSummary
  >();
  const [loading, setLoading] = useState<boolean>();
  const { region, server, characterName } = useParams();
  //activates useEffect from change in region / server / charactername (when we load new character data), and
  useEffect(() => {
    setLoading(true);
    const CharacterClient = new Dragonblight.ProfileClient();
    //uses then to return the correct character data, in this example will return equipment and profile
    CharacterClient.getProfile(server, characterName, region).then((data) => {
      setcharacterSummary(data);
      CharacterClient.getEquipment(server, characterName, region).then(
        (dataEquip) => {
          setcharacterEquipmentSummary(dataEquip);
          //setLoading(false);
        }
      );
    });
  }, [region, server, characterName]);

  return (
    <div className="page-container">
      <div className="center-column">
        <Card className="paperdoll-card overflow-visible">
          {loading && (
            <div>
              <Skeleton><Text className="paperdoll-text pt-5" align={"center"}>
                {characterName + "-" + server}{" "}
              </Text><div></div>
              <Text className="paperdoll-text pt-2" align={"center"}>
                {"<" + characterSummary?.guild?.name + ">"}{" "}
              </Text></Skeleton>
              <div className="paperdoll pt-2">
                <Skeleton className="paperdoll-column paperdoll-left">
                  {" "}{getSlotIcons(0, 8)}{" "}
                </Skeleton>
                <Skeleton className="model3d"></Skeleton>
                <Skeleton className="paperdoll-column paperdoll-right">
                  {" "}{getSlotIcons(8, 16)}{" "}
                </Skeleton>
              </div>
              <Skeleton className="paperdoll-bottom"> {getSlotIcons(16, 19)} </Skeleton>
            </div>
          )}
          {!loading && (
            <div>
              <div className="paperdoll-text pt-5">
                {characterName + "-" + server}{" "}
              </div>
              <div className="paperdoll-text pt-2">
                {"<" + characterSummary?.guild?.name + ">"}{" "}
              </div>
              <div className="paperdoll pt-2">
                <div className="paperdoll-column paperdoll-left">
                  {" "}
                  {getSlotIcons(0, 8)}{" "}
                </div>
                <div className="model3d"></div>
                <div className="paperdoll-column paperdoll-right">
                  {" "}
                  {getSlotIcons(8, 16)}{" "}
                </div>
              </div>
              <div className="paperdoll-bottom"> {getSlotIcons(16, 19)} </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
  function getSlotIcons(skip: number, end: number) {
    //for loop (map) with slots in parameter s to pull correct gear ids, and place them in the correct spots for our profile page.
    //pulls from slots array, and checks with each function for that piece of gear.
    return slots.slice(skip, end).map((s) => (
      //for example, slots.slice seperates into categories (left, right, and bottom), for left, if we pull cloak (slot_id = 15), looks into the SlotName array
      //and pulls element 15 out, allowing the user to see the unique gear id of slot_id 15.
      <a
        key={s}
        href={`https://www.wowhead.com/cata/item=${getItem(s)}`}
        rel={`item=${getItem(s)}&ench=${getEnchantId(s)}&gems=${getGems(
          s
        )}&pcs=${getPcs(s)}&transmog=${getTransmog(s)}`}
      >
        <div
          className="slot-icon-background"
          style={{ backgroundImage: `url(${getBackgroundIcon(s)})` }}
        >
          <div className="slot-icon-box">
            <img
              className="slot-icon"
              src={
                getIcon(s)
                  ? getIcon(s)
                  : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              }
            />
          </div>
        </div>
      </a>
    ));
  }
  //check to make sure the correct item is located in the correct position when featuring profile
  function getItem(s: number) {
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      if (equipmentItem != undefined) {
        return equipmentItem.item?.id;
      }
    }
    return 0;
  }

  function getEnchantId(s: number) {
    return s * 0;
  }

  function getGems(s: number) {
    return s * 0;
  }

  function getPcs(s: number) {
    return s * 0;
  }

  function getTransmog(s: number) {
    return s * 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getIcon(s: number) {
    return "";
  }
};
export default Profile;

function getBackgroundIcon(s: number) {
  return defaultIcons[s];
}
