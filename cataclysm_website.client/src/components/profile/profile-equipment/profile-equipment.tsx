import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./profile-equipment.css";
import { Card, Flex, Skeleton } from "@radix-ui/themes";
import { Dragonblight } from "../../../clients/Dragonblight";
import { RandEnchant } from "../../../helpers/randomEnchantHelper";
declare const $WowheadPower: { refreshLinks: () => void; };
import { generateModels } from '../../../helpers/wow-model-viewer';
import { WowModelViewer } from '../../../helpers/wow-model-viewer/types/wow_model_viewer';
import { modelingType } from "../../../helpers/wow-model-viewer";

interface profileEquipmentProps {
  characterProfileSummary: Dragonblight.CharacterProfileSummary | undefined
}


const slots: number[] = [
  1,
  2,
  3,
  15,
  5,
  4,
  19,
  9,
  16,
  17,
  10,
  6,
  7,
  8,
  11,
  12,
  13,
  14,
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
const zooms = [5, 5, 5, 5, 6, 5, 6, 5, 6, 
  5, 5, 6, 5, 6, 5, 6, 5, 6, 
  5, 5, 5, 5, 6, 5, 6, 5, 6, 
  5, 5, 5, 5, 6, 5, 6, 5, 6, 
]
function setAnimationAfterLoad(m: WowModelViewer, zoom: number) {
  setTimeout(() => {
    if (m.isLoaded())
    {
      m.setAnimation('DressingRoom')
      m.setDistance(zoom)
    }
    else {
      setAnimationAfterLoad(m, zoom);
    }
  }, 100)
}
// pulls from the current URL by using useParams
const ProfileEquipment: FC<profileEquipmentProps> = (props) => {
  //set new useState for each data api the user is fetching
    const [itemIconList, setitemIconList] = useState<
    Map<number, string>
  >();
  const [characterEquipmentSummary, setcharacterEquipmentSummary] = useState<
    Dragonblight.CharacterEquipmentSummary
  >();
  const [loading, setLoading] = useState<boolean>();
  const { region, server, characterName } = useParams();

  //activates useEffect from change in region / server / charactername (when we load new character data), and
  useEffect(() => {
    if (!props.characterProfileSummary){
      return;
    }
    setLoading(true);
    const CharacterClient = new Dragonblight.ProfileClient();
    const slug = server?.replace(" ", "-")
    //uses then to return the correct character data, in this example will return equipment and profile

      CharacterClient.getEquipment(slug, characterName, region).then(
        async (dataEquip) => {
          const DisplayIdClient = new Dragonblight.DisplayIdClient();
          setcharacterEquipmentSummary(dataEquip);
          const equipments: number[][] = [];
          const itemIcons: Map<number, string> = new Map<number, string>;
          for (const slot of slots) {
            const transmogItemId = getTransmog(dataEquip, slot) ?? 0;
            if (transmogItemId > 0) {
              //checking item id in frontend to item id in item.csv
              const displayInfo = (await DisplayIdClient.getDisplayInfo(transmogItemId));
              const newSlot = (slot == 16 || slot == 17) ? slot + 5 : displayInfo.inventoryType;
              if (displayInfo.displayId > 0 && slot != 18) {
                  equipments.push([newSlot, displayInfo.displayId]);
                }
            }
          }
          setitemIconList(itemIcons)
          const character = {
            "race": props.characterProfileSummary?.race?.id,
            "gender": props.characterProfileSummary?.gender?.type == "FEMALE" ? 1 : 0,
            "skin": 4,
            "face": 0,
            "hairStyle": 5,
            "hairColor": 5,
            "facialStyle": 5,
            "items": equipments,
            "type": modelingType.CHARACTER
        };

          generateModels(2, `#model3d`, character, "classic").then(m => {
            setAnimationAfterLoad(m, zooms[character.race ?? 1])
        });
          setLoading(false);
        }
        
      );
  }, [region, server, characterName, props]);
  useEffect(() => {
    $WowheadPower.refreshLinks();
  });
  return (
    <div className="page-container">
      <div className="center-column">
        <Card className="paperdoll-card overflow-visible">
          {loading && (
            <div>
              <Flex className="flex-col items-center">
                <Skeleton width="0px"></Skeleton>             
                <Skeleton width="0px"></Skeleton>
                <Skeleton className="w-48 h-5"></Skeleton>
                <Skeleton width="0px"></Skeleton>
                <Skeleton className="w-48 h-5"></Skeleton>
              </Flex>
              <div className="paperdoll pt-2">
                <div className="paperdoll-column paperdoll-left">{getSlotSkeleton(0,10)}</div>
                <Skeleton width="0px"></Skeleton>
                <Skeleton
                  className="model3dx mx-auto mt-1"
                  width="350px"
                  height="550px"
                ></Skeleton>
                <div className="paperdoll-column paperdoll-right"> {getSlotSkeleton(10,19)}</div>
              </div>
            </div>
          )}
          {!loading && (
            <div>
              <div className="paperdoll-text pt-5">
                {characterName + "-" + server}{" "}
              </div>
              <div className="paperdoll-text pt-2">
                {props.characterProfileSummary?.guild?.name
                  ? "<" + props.characterProfileSummary?.guild?.name + ">"
                  : ""}{" "}
              </div>
              <div id="model3d" className="model3d"></div>

              <div className="paperdoll pt-2">
                <div className="paperdoll-column"> {getSlotIcons(0, 10)} </div>
                <div id="model3d" className="model3dx"></div>
                <div className="paperdoll-column"> {getSlotIcons(10, 19)} </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
  function getSlotSkeleton(skip: number, end: number) {
    //for loop (map) with slots in parameter s to pull correct gear ids, and place them in the correct spots for our profile page.
    //pulls from slots array, and checks with each function for that piece of gear.
    return slots.slice(skip, end).map((s, i) => (
      //for example, slots.slice seperates into categories (left, right, and bottom), for left, if we pull cloak (slot_id = 15), looks into the SlotName array
      //and pulls element 15 out, allowing the user to see the unique gear id of slot_id 15.
      <div className={i + skip > 9 ? "right-itemslot-row itemSlotRow": "itemSlotRow"} key={s}>
        <a
          className={i + skip > 9 ? "aligned-right slot-icon-background": "slot-icon-background"}
          style={{ backgroundImage: `url(${getBackgroundIcon(s)})` }}
        >
          <Skeleton>
          <div className="slot-icon-box">
            <img
              className="slot-icon"
              src={
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              }
            />
          </div>
          </Skeleton>
        </a>
        <div className="item-details ">
          
          <a
            className={i + skip > 9 ? "align-right-name item-name": "item-name"}>
              <Skeleton width={"200px"} height={"15px"}>
            
            </Skeleton>
            </a>
            
            
            <a
            className={i + skip > 9 ? "align-right-name item-enchant float-end": "item-enchant"}>
              <Skeleton width={"100px"} height={"15px"}>
              
              </Skeleton>
          </a>
          
        </div>
      </div>
    ));
  }
  function getSlotIcons(skip: number, end: number) {
    //for loop (map) with slots in parameter s to pull correct gear ids, and place them in the correct spots for our profile page.
    //pulls from slots array, and checks with each function for that piece of gear.
    return slots.slice(skip, end).map( (s, i) => (
      //for example, slots.slice seperates into categories (left, right, and bottom), for left, if we pull cloak (slot_id = 15), looks into the SlotName array
      //and pulls element 15 out, allowing the user to see the unique gear id of slot_id 15.
      <div className={i + skip > 9 ? "right-itemslot-row itemSlotRow": "itemSlotRow"} key={s}>
        <a
          className={i + skip > 9 ? "aligned-right slot-icon-background": "slot-icon-background"}
          style={{ backgroundImage: `url(${getBackgroundIcon(s)})` }}
          href={`https://www.wowhead.com/cata/item=${getItem(characterEquipmentSummary, s)}`}
          rel={`item=${getItem(characterEquipmentSummary, s)}&ench=${getEnchant(s)?.enchantment_id}&gems=${getGems(
            s
          )}&rand=${getRandomEnchantments(s)}&pcs=${getPcs(s)}&transmog=${getTransmog(characterEquipmentSummary, s)}`}
        >
        </a>
        <div className="item-details ">
          <a
            className={i + skip > 9 ? "align-right-name item-name": "item-name"}
            href={`https://www.wowhead.com/cata/item=${getItem(characterEquipmentSummary, s)}`}
          data-wowhead={`item=${getItem(characterEquipmentSummary, s)}&ench=${getEnchant(s)?.enchantment_id}&gems=${getGems(s)}&rand=${getRandomEnchantments(s)}&pcs=${getPcs(s)}&transmog=${getTransmog(characterEquipmentSummary, s)}`}>
            {getItemName(s)}
            </a>
            <a
            className={i + skip > 9 ? "align-right-name item-enchant": "item-enchant"}
            href={`https://www.wowhead.com/cata/item=${getEnchant(s)?.source_item?.id}`}>
              <div className="green_text"> {getEnchant(s)?.display_string?.replace("Enchanted: ", "")} </div>
              
              
          </a>
        </div>
      </div>
    ));
  }
  //check to make sure the correct item is located in the correct position when featuring profile
  function getItem(charSummary: Dragonblight.CharacterEquipmentSummary | undefined, s: number) {
    if (charSummary?.equipped_items != null) {
      const equipmentItem = charSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //checking to see if a player does or does not have gear equipped.
      if (equipmentItem != undefined) {
        return equipmentItem.item?.id;
      }
    }
    return 0;
  }
  function getItemName(s: number) {
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //checking to see if a player does or does not have gear equipped.
      if (equipmentItem != undefined) {
        return equipmentItem.name;
      }
    }
    return 0;
  }

  function getEnchant(s: number) : Dragonblight.Enchantment | undefined{
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //equipmentItem.enchantments.length > 0 in case there is an empty list (no for loop)
      if (equipmentItem != undefined && equipmentItem.enchantments != null && equipmentItem.enchantments.length > 0) {
        const enchant = equipmentItem.enchantments.find(e => e.enchantment_slot?.id == 0);
        //checks to see if a player has an enchantment or not.
        if (enchant != undefined){
          return enchant;
        }
      }
    }
  }

  function getRandomEnchantments(s: number) {
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //checking to see if a player does or does not have gear with random enchants.
      if (equipmentItem != undefined) {
        let randomEnchantment = "";
        RandEnchant.forEach((value, key) => {
          if(equipmentItem.name?.endsWith(value)){
            randomEnchantment += key + ":"
          }
        })
        return randomEnchantment;
        }
      }
    return 0;
  }

  function getGems(s: number) : string | undefined{
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //equipmentItem.enchantments.length > 0 in case there is an empty list
      if (equipmentItem != undefined && equipmentItem.enchantments != null && equipmentItem.enchantments.length > 0) {
        const gems = equipmentItem.enchantments.filter(e => e.enchantment_slot?.id == 2 || e.enchantment_slot?.id == 3 || e.enchantment_slot?.id == 4);
        //checks to see if a player has gems in their gear or not.
        if (gems != undefined){
          //returns gems placed in gear from player tab, join combines array into string for wowhead tooltip to read
          return gems.map((g) => (
            g.source_item?.id
          )).join(":");
        }
      }
    }
  }


  function getPcs(s: number): string | undefined{
    if (characterEquipmentSummary?.equipped_items != null) {
      const equipmentItem = characterEquipmentSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //equipmentItem.enchantments.length > 0 in case there is an empty list, filter returns a subset of a set where condition is true
      if (equipmentItem != undefined) {
        const pcs = equipmentItem.set?.items?.filter(i => i.is_equipped);
        //checks to see if a player has gems in their gear or not.
        if (pcs != undefined){
          //returns tiersets placed in gear from player tab, join combines array into string for wowhead tooltip to read
          return pcs.map((t) => (
            t.item?.id
          )).join(":");
        }
      }
    }
  }

  //check to make sure the correct transmog is shown when featuring profile
  function getTransmog(charSummary: Dragonblight.CharacterEquipmentSummary | undefined, s: number) {
    if (charSummary?.equipped_items != null) {
      const equipmentItem = charSummary.equipped_items.find(
        (item) => item.slot?.type?.toLowerCase() == slotName[s]
      );
      //checking to see if a player does or does not have gear equipped.
      if (equipmentItem != undefined) {
        return equipmentItem.transmog?.item?.id ?? equipmentItem?.item?.id;
      }
    }
    return 0;
  }

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   function getIcon(s: number) {
    const icon = itemIconList?.get(s)
    if (icon){
      return icon
    }
    return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  }

};
export default ProfileEquipment;

function getBackgroundIcon(s: number) {
  return defaultIcons[s];
}
