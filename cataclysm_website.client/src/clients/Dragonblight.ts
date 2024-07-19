//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.8.0 (NJsonSchema v11.0.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export module Dragonblight {

export class ProfileClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    getProfile(server: string | undefined, characterName: string | undefined, region: string | undefined): Promise<CharacterProfileSummary> {
        let url_ = this.baseUrl + "/api/Profile/GetProfile?";
        if (server === null)
            throw new Error("The parameter 'server' cannot be null.");
        else if (server !== undefined)
            url_ += "server=" + encodeURIComponent("" + server) + "&";
        if (characterName === null)
            throw new Error("The parameter 'characterName' cannot be null.");
        else if (characterName !== undefined)
            url_ += "characterName=" + encodeURIComponent("" + characterName) + "&";
        if (region === null)
            throw new Error("The parameter 'region' cannot be null.");
        else if (region !== undefined)
            url_ += "region=" + encodeURIComponent("" + region) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetProfile(_response);
        });
    }

    protected processGetProfile(response: Response): Promise<CharacterProfileSummary> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CharacterProfileSummary;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CharacterProfileSummary>(null as any);
    }

    getAppearance(server: string | undefined, characterName: string | undefined, region: string | undefined): Promise<CharacterAppearanceSummary> {
        let url_ = this.baseUrl + "/api/Profile/GetAppearance?";
        if (server === null)
            throw new Error("The parameter 'server' cannot be null.");
        else if (server !== undefined)
            url_ += "server=" + encodeURIComponent("" + server) + "&";
        if (characterName === null)
            throw new Error("The parameter 'characterName' cannot be null.");
        else if (characterName !== undefined)
            url_ += "characterName=" + encodeURIComponent("" + characterName) + "&";
        if (region === null)
            throw new Error("The parameter 'region' cannot be null.");
        else if (region !== undefined)
            url_ += "region=" + encodeURIComponent("" + region) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAppearance(_response);
        });
    }

    protected processGetAppearance(response: Response): Promise<CharacterAppearanceSummary> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CharacterAppearanceSummary;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CharacterAppearanceSummary>(null as any);
    }

    getEquipment(server: string | undefined, characterName: string | undefined, region: string | undefined): Promise<CharacterEquipmentSummary> {
        let url_ = this.baseUrl + "/api/Profile/GetEquipment?";
        if (server === null)
            throw new Error("The parameter 'server' cannot be null.");
        else if (server !== undefined)
            url_ += "server=" + encodeURIComponent("" + server) + "&";
        if (characterName === null)
            throw new Error("The parameter 'characterName' cannot be null.");
        else if (characterName !== undefined)
            url_ += "characterName=" + encodeURIComponent("" + characterName) + "&";
        if (region === null)
            throw new Error("The parameter 'region' cannot be null.");
        else if (region !== undefined)
            url_ += "region=" + encodeURIComponent("" + region) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetEquipment(_response);
        });
    }

    protected processGetEquipment(response: Response): Promise<CharacterEquipmentSummary> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CharacterEquipmentSummary;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CharacterEquipmentSummary>(null as any);
    }
}

export class PvpLeaderboardClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    get3v3Ladder(): Promise<PvpLeaderboardEntry[]> {
        let url_ = this.baseUrl + "/api/PvpLeaderboard/Get3v3Ladder";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet3v3Ladder(_response);
        });
    }

    protected processGet3v3Ladder(response: Response): Promise<PvpLeaderboardEntry[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PvpLeaderboardEntry[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PvpLeaderboardEntry[]>(null as any);
    }

    get2v2Ladder(): Promise<PvpLeaderboardEntry[]> {
        let url_ = this.baseUrl + "/api/PvpLeaderboard/Get2v2Ladder";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet2v2Ladder(_response);
        });
    }

    protected processGet2v2Ladder(response: Response): Promise<PvpLeaderboardEntry[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PvpLeaderboardEntry[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PvpLeaderboardEntry[]>(null as any);
    }

    get5v5Ladder(): Promise<PvpLeaderboardEntry[]> {
        let url_ = this.baseUrl + "/api/PvpLeaderboard/Get5v5Ladder";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet5v5Ladder(_response);
        });
    }

    protected processGet5v5Ladder(response: Response): Promise<PvpLeaderboardEntry[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PvpLeaderboardEntry[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PvpLeaderboardEntry[]>(null as any);
    }

    getRBGLadder(): Promise<PvpLeaderboardEntry[]> {
        let url_ = this.baseUrl + "/api/PvpLeaderboard/GetRBGLadder";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetRBGLadder(_response);
        });
    }

    protected processGetRBGLadder(response: Response): Promise<PvpLeaderboardEntry[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PvpLeaderboardEntry[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PvpLeaderboardEntry[]>(null as any);
    }
}

export class SearchClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    searchChar(search: string | undefined): Promise<CharacterProfileSummary[]> {
        let url_ = this.baseUrl + "/api/Search/SearchChar?";
        if (search === null)
            throw new Error("The parameter 'search' cannot be null.");
        else if (search !== undefined)
            url_ += "search=" + encodeURIComponent("" + search) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSearchChar(_response);
        });
    }

    protected processSearchChar(response: Response): Promise<CharacterProfileSummary[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CharacterProfileSummary[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CharacterProfileSummary[]>(null as any);
    }
}

export class DisplayIdClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    getDisplayInfo(item_id: number | undefined): Promise<ItemDisplayInfo> {
        let url_ = this.baseUrl + "/api/DisplayId/GetDisplayInfo?";
        if (item_id === null)
            throw new Error("The parameter 'item_id' cannot be null.");
        else if (item_id !== undefined)
            url_ += "item_id=" + encodeURIComponent("" + item_id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetDisplayInfo(_response);
        });
    }

    protected processGetDisplayInfo(response: Response): Promise<ItemDisplayInfo> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as ItemDisplayInfo;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ItemDisplayInfo>(null as any);
    }
}

export interface CharacterProfileSummary {
    _links?: Links | undefined;
    id: number;
    name?: string | undefined;
    gender?: EnumType | undefined;
    faction?: EnumType | undefined;
    race?: PlayableRaceReference | undefined;
    character_class?: PlayableClassReference | undefined;
    active_spec?: PlayableSpecializationReference | undefined;
    realm?: RealmReference | undefined;
    guild?: GuildReference | undefined;
    level: number;
    experience: number;
    achievement_points: number;
    achievements?: Self | undefined;
    titles?: Self | undefined;
    pvp_summary?: Self | undefined;
    encounters?: Self | undefined;
    media?: Self | undefined;
    last_login_timestamp: Date;
    average_item_level: number;
    equipped_item_level: number;
    specializations?: Self | undefined;
    statistics?: Self | undefined;
    mythic_keystone_profile?: Self | undefined;
    equipment?: Self | undefined;
    appearance?: Self | undefined;
    collections?: Self | undefined;
    active_title?: TitleReferenceWithDisplayString | undefined;
    reputations?: Self | undefined;
    quests?: Self | undefined;
    achievements_statistics?: Self | undefined;
    professions?: Self | undefined;
    covenant_progress?: CovenantProgress | undefined;
}

export interface Links {
    self?: Self | undefined;
}

export interface Self {
    href?: string | undefined;
}

export interface EnumType {
    type?: string | undefined;
    name?: string | undefined;
}

export interface PlayableRaceReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface PlayableClassReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface PlayableSpecializationReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface RealmReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
    slug?: string | undefined;
}

export interface GuildReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
    realm?: RealmReference | undefined;
    faction?: EnumType | undefined;
}

export interface TitleReferenceWithDisplayString {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
    display_string?: string | undefined;
}

export interface CovenantProgress {
    chosen_covenant?: CovenantReference | undefined;
    renown_level: number;
    soulbinds?: Self | undefined;
}

export interface CovenantReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface CharacterAppearanceSummary {
    _links?: Links | undefined;
    character?: CharacterReference | undefined;
    playable_race?: PlayableRaceReference | undefined;
    playable_class?: PlayableClassReference | undefined;
    active_spec?: PlayableSpecializationReference | undefined;
    gender?: EnumType | undefined;
    faction?: EnumType | undefined;
    guild_crest?: GuildCrest | undefined;
    appearance?: Appearance | undefined;
    items?: EquippedItemAppearance[] | undefined;
}

export interface CharacterReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
    realm?: RealmReference | undefined;
}

export interface GuildCrest {
    emblem?: GuildCrestEmblemWithColor | undefined;
    border?: GuildCrestBorderWithColor | undefined;
    background?: Background | undefined;
}

export interface GuildCrestEmblemWithColor {
    id: number;
    media?: Media | undefined;
    color?: Color | undefined;
}

export interface Media {
    key?: Self | undefined;
    id: number;
}

export interface Color {
    id: number;
    rgba?: ColorDetails | undefined;
}

export interface ColorDetails {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface GuildCrestBorderWithColor {
    id: number;
    media?: Media | undefined;
    color?: Color | undefined;
}

export interface Background {
    color?: Color | undefined;
}

export interface Appearance {
    face_variation: number;
    skin_color: number;
    hair_variation: number;
    hair_color: number;
    feature_variation: number;
    custom_display_options?: number[] | undefined;
}

export interface EquippedItemAppearance {
    id: number;
    slot?: EnumType | undefined;
    enchant: number;
    item_appearance_modifier_id: number;
    internal_slot_id: number;
    subclass: number;
}

export interface CharacterEquipmentSummary {
    _links?: Links | undefined;
    character?: CharacterReference | undefined;
    equipped_items?: EquippedItem[] | undefined;
}

export interface EquippedItem {
    set?: EquippedItemSet | undefined;
    item?: ItemReferenceWithoutName | undefined;
    slot?: EnumType | undefined;
    quantity: number;
    context?: number | undefined;
    bonus_list?: number[] | undefined;
    quality?: EnumType | undefined;
    name?: string | undefined;
    azerite_details?: AzeriteDetails | undefined;
    media?: ItemMediaReference | undefined;
    item_class?: ItemClassReference | undefined;
    item_subclass?: ItemSubclassReference | undefined;
    inventory_type?: EnumType | undefined;
    binding?: EnumType | undefined;
    armor?: Armor | undefined;
    stats?: Stat[] | undefined;
    requirements?: Requirements | undefined;
    level?: DescribedValue | undefined;
    transmog?: Transmog | undefined;
    durability?: DescribedValue | undefined;
    unique_equipped?: string | undefined;
    spells?: ItemSpell[] | undefined;
    description?: string | undefined;
    is_subclass_hidden?: boolean | undefined;
    sell_price?: SellPrice | undefined;
    is_corrupted?: boolean | undefined;
    name_description?: NameDescription | undefined;
    modified_appearance_id?: number | undefined;
    sockets?: Socket[] | undefined;
    enchantments?: Enchantment[] | undefined;
    weapon?: Weapon | undefined;
}

export interface ItemSet {
    _links?: Links | undefined;
    id: number;
    name?: string | undefined;
    items?: ItemReference[] | undefined;
    effects?: Effect[] | undefined;
    is_effect_active: boolean;
}

export interface EquippedItemSet extends ItemSet {
    items?: EquippedItemReference[] | undefined;
}

export interface EquippedItemReference {
    item?: ItemReference | undefined;
    is_equipped: boolean;
}

export interface ItemReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface Effect {
    display_string?: string | undefined;
    required_count: number;
}

export interface ItemReferenceWithoutName {
    key?: Self | undefined;
    id: number;
}

export interface AzeriteDetails {
    selected_powers?: SelectedPower[] | undefined;
    selected_powers_string?: string | undefined;
    percentage_to_next_level?: number | undefined;
    selected_essences?: SelectedEssence[] | undefined;
    level?: DescribedValue | undefined;
}

export interface SelectedPower {
    id: number;
    tier: number;
    spell_tooltip?: SpellTooltip | undefined;
    is_display_hidden?: boolean | undefined;
}

export interface SpellTooltip {
    spell?: SpellReference | undefined;
    description?: string | undefined;
    cast_time?: string | undefined;
    range?: string | undefined;
    cooldown?: string | undefined;
    power_cost?: string | undefined;
}

export interface SpellReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface SelectedEssence {
    slot: number;
    rank: number;
    main_spell_tooltip?: SpellTooltip | undefined;
    passive_spell_tooltip?: SpellTooltip | undefined;
    essence?: AzeriteEssenceReference | undefined;
    media?: AzeritEssenceMediaReference | undefined;
}

export interface AzeriteEssenceReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface AzeritEssenceMediaReference {
    key?: Self | undefined;
    id: number;
}

export interface DescribedValue {
    value: number;
    display_string?: string | undefined;
}

export interface ItemMediaReference {
    key?: Self | undefined;
    id: number;
}

export interface ItemClassReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface ItemSubclassReference {
    key?: Self | undefined;
    name?: string | undefined;
    id: number;
}

export interface Armor {
    value: number;
    display?: NameDescription | undefined;
}

export interface NameDescription {
    display_string?: string | undefined;
    color?: ColorDetails | undefined;
}

export interface Stat {
    type?: EnumType | undefined;
    value: number;
    is_negated?: boolean | undefined;
    display?: StatDisplay | undefined;
    is_equip_bonus?: boolean | undefined;
}

export interface StatDisplay {
    display_string?: string | undefined;
    color?: ColorDetails | undefined;
}

export interface Requirements {
    level?: DescribedValue | undefined;
    faction?: FactionRequirement | undefined;
}

export interface FactionRequirement {
    value?: EnumType | undefined;
    display_string?: string | undefined;
}

export interface Transmog {
    item?: ItemReference | undefined;
    display_string?: string | undefined;
    item_modified_appearance_id: number;
}

export interface ItemSpell {
    spell?: SpellReference | undefined;
    description?: string | undefined;
    display_color?: ColorDetails | undefined;
}

export interface SellPrice {
    value: number;
    display_strings?: CurrencyDisplay | undefined;
}

export interface CurrencyDisplay {
    header?: string | undefined;
    gold?: string | undefined;
    silver?: string | undefined;
    copper?: string | undefined;
}

export interface Socket {
    socket_type?: EnumType | undefined;
    item?: ItemReference | undefined;
    context?: number | undefined;
    display_string?: string | undefined;
    media?: ItemMediaReference | undefined;
    bonus_list?: number[] | undefined;
}

export interface Enchantment {
    display_string?: string | undefined;
    enchantment_id: number;
    source_item?: ItemReference | undefined;
    enchantment_slot?: EnchantmentSlot | undefined;
}

export interface EnchantmentSlot {
    type?: string | undefined;
    id: number;
}

export interface Weapon {
    damage?: Damage | undefined;
    attack_speed?: DescribedValue | undefined;
    dps?: DescribedValue | undefined;
}

export interface Damage {
    min_value: number;
    max_value: number;
    display_string?: string | undefined;
    damage_class?: EnumType | undefined;
}

export interface PvpLeaderboardEntry {
    character?: Profile | undefined;
    faction?: EnumTypeWithoutName | undefined;
    rank: number;
    rating: number;
    season_match_statistics?: SeasonMatchStatistics | undefined;
    tier?: PvpTierReferenceWithoutName | undefined;
}

export interface Profile {
    name?: string | undefined;
    id: number;
    realm?: RealmReferenceWithoutName | undefined;
}

export interface RealmReferenceWithoutName {
    key?: Self | undefined;
    id: number;
    slug?: string | undefined;
}

export interface EnumTypeWithoutName {
    type?: string | undefined;
}

export interface SeasonMatchStatistics {
    played: number;
    won: number;
    lost: number;
}

export interface PvpTierReferenceWithoutName {
    key?: Self | undefined;
    id: number;
}

export interface ItemDisplayInfo {
    id: number;
    inventoryType: number;
    itemAppearanceId: number;
    displayId: number;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

}