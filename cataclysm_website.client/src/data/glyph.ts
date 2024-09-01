interface Glyph {
    ID: number;
    SpellID: number;
    Glyph_Type: number;
    Field_3_4_0_43659_002: number;
    SpellIconFileDataID: number;
    GlyphSlotFlags: number;
}

//will check these when we are looking up character glyphs and will connect id to spell id
const Glyphs: Glyph[] = [
    {
      "ID": 161,
      "SpellID": 54810,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 162,
      "SpellID": 54811,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 163,
      "SpellID": 54812,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 164,
      "SpellID": 54813,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 165,
      "SpellID": 54815,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 166,
      "SpellID": 54818,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 167,
      "SpellID": 54821,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 168,
      "SpellID": 54824,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 169,
      "SpellID": 54832,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 170,
      "SpellID": 54733,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 171,
      "SpellID": 54743,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 172,
      "SpellID": 54754,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 173,
      "SpellID": 54825,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 174,
      "SpellID": 54826,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 175,
      "SpellID": 54845,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 176,
      "SpellID": 54830,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 177,
      "SpellID": 54831,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 178,
      "SpellID": 54828,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 179,
      "SpellID": 54756,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 180,
      "SpellID": 54829,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 181,
      "SpellID": 54760,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 183,
      "SpellID": 54922,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 184,
      "SpellID": 54925,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 185,
      "SpellID": 54923,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 186,
      "SpellID": 54924,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 187,
      "SpellID": 54926,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 188,
      "SpellID": 54927,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 189,
      "SpellID": 54928,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 190,
      "SpellID": 89401,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 191,
      "SpellID": 54930,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 192,
      "SpellID": 54931,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 193,
      "SpellID": 54934,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 194,
      "SpellID": 54935,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 195,
      "SpellID": 54936,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 196,
      "SpellID": 54937,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 197,
      "SpellID": 54938,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 198,
      "SpellID": 54939,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 199,
      "SpellID": 54940,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 200,
      "SpellID": 54943,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 211,
      "SpellID": 55436,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 212,
      "SpellID": 55437,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 213,
      "SpellID": 55449,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 214,
      "SpellID": 55454,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 215,
      "SpellID": 55442,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 216,
      "SpellID": 55439,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 217,
      "SpellID": 55455,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 218,
      "SpellID": 55450,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 219,
      "SpellID": 55447,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 220,
      "SpellID": 55451,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 221,
      "SpellID": 55443,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 222,
      "SpellID": 55456,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 223,
      "SpellID": 55440,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 224,
      "SpellID": 55438,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 225,
      "SpellID": 55448,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 226,
      "SpellID": 55453,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 227,
      "SpellID": 55441,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 228,
      "SpellID": 55446,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 229,
      "SpellID": 55444,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 230,
      "SpellID": 55452,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 231,
      "SpellID": 55445,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 251,
      "SpellID": 55675,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 252,
      "SpellID": 55677,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 253,
      "SpellID": 55684,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 254,
      "SpellID": 55678,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 255,
      "SpellID": 55679,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 256,
      "SpellID": 55683,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 257,
      "SpellID": 55686,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 258,
      "SpellID": 55673,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 259,
      "SpellID": 55691,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 260,
      "SpellID": 55688,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 261,
      "SpellID": 55681,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 262,
      "SpellID": 55689,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 263,
      "SpellID": 55672,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 264,
      "SpellID": 55680,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 265,
      "SpellID": 55676,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 266,
      "SpellID": 55674,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 267,
      "SpellID": 55690,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 268,
      "SpellID": 55682,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 269,
      "SpellID": 55687,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 270,
      "SpellID": 55692,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 271,
      "SpellID": 55685,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 272,
      "SpellID": 56242,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 273,
      "SpellID": 56235,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 274,
      "SpellID": 56218,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 275,
      "SpellID": 56241,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 276,
      "SpellID": 56232,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 277,
      "SpellID": 56244,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 278,
      "SpellID": 56246,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 279,
      "SpellID": 56249,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 280,
      "SpellID": 56238,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 281,
      "SpellID": 56224,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 282,
      "SpellID": 56217,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 283,
      "SpellID": 56228,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 284,
      "SpellID": 56248,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 285,
      "SpellID": 56226,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 286,
      "SpellID": 56240,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 287,
      "SpellID": 56229,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 289,
      "SpellID": 56231,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 290,
      "SpellID": 56250,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 291,
      "SpellID": 56233,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 292,
      "SpellID": 56247,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 312,
      "SpellID": 56363,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 313,
      "SpellID": 56381,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 314,
      "SpellID": 56365,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 315,
      "SpellID": 56380,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 316,
      "SpellID": 56368,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 318,
      "SpellID": 56376,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 319,
      "SpellID": 56370,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 320,
      "SpellID": 56384,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 321,
      "SpellID": 56372,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 322,
      "SpellID": 56377,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 323,
      "SpellID": 56374,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 325,
      "SpellID": 56366,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 326,
      "SpellID": 56383,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 328,
      "SpellID": 56382,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 329,
      "SpellID": 56375,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 330,
      "SpellID": 56364,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 331,
      "SpellID": 56373,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 351,
      "SpellID": 56824,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 352,
      "SpellID": 56841,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 353,
      "SpellID": 56857,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 354,
      "SpellID": 56833,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 355,
      "SpellID": 56851,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 356,
      "SpellID": 56830,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 357,
      "SpellID": 56850,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 358,
      "SpellID": 56844,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 359,
      "SpellID": 56845,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 360,
      "SpellID": 56847,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 361,
      "SpellID": 56829,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 362,
      "SpellID": 56846,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 363,
      "SpellID": 56856,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 364,
      "SpellID": 56836,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 365,
      "SpellID": 56828,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 366,
      "SpellID": 56832,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 367,
      "SpellID": 56849,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 368,
      "SpellID": 56826,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 369,
      "SpellID": 56842,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 371,
      "SpellID": 56848,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 391,
      "SpellID": 56808,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 392,
      "SpellID": 56813,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 393,
      "SpellID": 56800,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 394,
      "SpellID": 56818,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 395,
      "SpellID": 56820,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 396,
      "SpellID": 56806,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 397,
      "SpellID": 56799,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 398,
      "SpellID": 56802,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 399,
      "SpellID": 56803,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 400,
      "SpellID": 56804,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 401,
      "SpellID": 56812,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 402,
      "SpellID": 56814,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 403,
      "SpellID": 56809,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 404,
      "SpellID": 56807,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 405,
      "SpellID": 56819,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 406,
      "SpellID": 56801,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 407,
      "SpellID": 56798,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 409,
      "SpellID": 56821,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 410,
      "SpellID": 56810,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 411,
      "SpellID": 56811,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 431,
      "SpellID": 57856,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 432,
      "SpellID": 57858,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 433,
      "SpellID": 57855,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 434,
      "SpellID": 57857,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 435,
      "SpellID": 57862,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 439,
      "SpellID": 57866,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 440,
      "SpellID": 57870,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 441,
      "SpellID": 57903,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 442,
      "SpellID": 57902,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 443,
      "SpellID": 57904,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 445,
      "SpellID": 57924,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 447,
      "SpellID": 57927,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 448,
      "SpellID": 57928,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 449,
      "SpellID": 58136,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 450,
      "SpellID": 52648,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 451,
      "SpellID": 57925,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 452,
      "SpellID": 57937,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 453,
      "SpellID": 57958,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 454,
      "SpellID": 57979,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 455,
      "SpellID": 57955,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 456,
      "SpellID": 57947,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 457,
      "SpellID": 57954,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 458,
      "SpellID": 57985,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 459,
      "SpellID": 57987,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 460,
      "SpellID": 58009,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 461,
      "SpellID": 57986,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 462,
      "SpellID": 58015,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 463,
      "SpellID": 58228,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 464,
      "SpellID": 58032,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 465,
      "SpellID": 58027,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 466,
      "SpellID": 58017,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 467,
      "SpellID": 58033,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 468,
      "SpellID": 58039,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 469,
      "SpellID": 58038,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 470,
      "SpellID": 58058,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 471,
      "SpellID": 58135,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 473,
      "SpellID": 58059,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 474,
      "SpellID": 89646,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 476,
      "SpellID": 58057,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 477,
      "SpellID": 58079,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 478,
      "SpellID": 58070,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 479,
      "SpellID": 58081,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 480,
      "SpellID": 58080,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 481,
      "SpellID": 58107,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 482,
      "SpellID": 58094,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 483,
      "SpellID": 58095,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 484,
      "SpellID": 58096,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 485,
      "SpellID": 58097,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 486,
      "SpellID": 58099,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 487,
      "SpellID": 58098,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 488,
      "SpellID": 58104,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 489,
      "SpellID": 58368,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 490,
      "SpellID": 58369,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 491,
      "SpellID": 58355,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 492,
      "SpellID": 58366,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 493,
      "SpellID": 58388,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 494,
      "SpellID": 58367,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 495,
      "SpellID": 58372,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 496,
      "SpellID": 58357,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 497,
      "SpellID": 58377,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 499,
      "SpellID": 58386,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 500,
      "SpellID": 58385,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 501,
      "SpellID": 58364,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 502,
      "SpellID": 58375,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 504,
      "SpellID": 58387,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 505,
      "SpellID": 58384,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 507,
      "SpellID": 58356,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 508,
      "SpellID": 58382,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 509,
      "SpellID": 58370,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 512,
      "SpellID": 58623,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 513,
      "SpellID": 58616,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 514,
      "SpellID": 58640,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 515,
      "SpellID": 58673,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 516,
      "SpellID": 58620,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 518,
      "SpellID": 58677,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 519,
      "SpellID": 62259,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 520,
      "SpellID": 58629,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 521,
      "SpellID": 58647,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 522,
      "SpellID": 58680,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 524,
      "SpellID": 58631,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 525,
      "SpellID": 58671,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 526,
      "SpellID": 58657,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 527,
      "SpellID": 58686,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 528,
      "SpellID": 58669,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 529,
      "SpellID": 58642,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 530,
      "SpellID": 58618,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 531,
      "SpellID": 58635,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 532,
      "SpellID": 58676,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 551,
      "SpellID": 59219,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 552,
      "SpellID": 59289,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 553,
      "SpellID": 59309,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 554,
      "SpellID": 59307,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 555,
      "SpellID": 60200,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 556,
      "SpellID": 59327,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 557,
      "SpellID": 59332,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 558,
      "SpellID": 59336,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 559,
      "SpellID": 56420,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 560,
      "SpellID": 56414,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 561,
      "SpellID": 56416,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 591,
      "SpellID": 61205,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 611,
      "SpellID": 62126,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 612,
      "SpellID": 62132,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 613,
      "SpellID": 62135,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 631,
      "SpellID": 62080,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 651,
      "SpellID": 62210,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 671,
      "SpellID": 62969,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 672,
      "SpellID": 62970,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 673,
      "SpellID": 62971,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 674,
      "SpellID": 63055,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 675,
      "SpellID": 63056,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 676,
      "SpellID": 63057,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 677,
      "SpellID": 63065,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 691,
      "SpellID": 63066,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 692,
      "SpellID": 63067,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 693,
      "SpellID": 63068,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 694,
      "SpellID": 63069,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 695,
      "SpellID": 63086,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 696,
      "SpellID": 63090,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 697,
      "SpellID": 63091,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 698,
      "SpellID": 63092,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 699,
      "SpellID": 63093,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 700,
      "SpellID": 63095,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 701,
      "SpellID": 63218,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 702,
      "SpellID": 63219,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 703,
      "SpellID": 63220,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 704,
      "SpellID": 63222,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 705,
      "SpellID": 63223,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 706,
      "SpellID": 63224,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 707,
      "SpellID": 63225,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 708,
      "SpellID": 63229,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 709,
      "SpellID": 63231,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 710,
      "SpellID": 63235,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 711,
      "SpellID": 63237,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 712,
      "SpellID": 63246,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 713,
      "SpellID": 63248,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 714,
      "SpellID": 63249,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 715,
      "SpellID": 63252,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 716,
      "SpellID": 63253,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 731,
      "SpellID": 63254,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 732,
      "SpellID": 63256,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 733,
      "SpellID": 63268,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 734,
      "SpellID": 63269,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 735,
      "SpellID": 63270,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 736,
      "SpellID": 63271,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237649,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 737,
      "SpellID": 63273,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 751,
      "SpellID": 63279,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 752,
      "SpellID": 63280,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 753,
      "SpellID": 63291,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237632,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 754,
      "SpellID": 63298,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237633,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 755,
      "SpellID": 63302,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 756,
      "SpellID": 63303,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237635,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 757,
      "SpellID": 63304,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 758,
      "SpellID": 63309,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237637,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 759,
      "SpellID": 63310,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 760,
      "SpellID": 63320,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237639,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 761,
      "SpellID": 63312,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 762,
      "SpellID": 63324,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 763,
      "SpellID": 63325,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237642,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 764,
      "SpellID": 63326,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 765,
      "SpellID": 63327,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237644,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 766,
      "SpellID": 63328,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 767,
      "SpellID": 63329,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237646,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 768,
      "SpellID": 63330,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237647,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 769,
      "SpellID": 63331,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 771,
      "SpellID": 63333,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 773,
      "SpellID": 63335,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 831,
      "SpellID": 67598,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 851,
      "SpellID": 68164,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237640,
      "GlyphSlotFlags": 1
    },
    {
      "ID": 871,
      "SpellID": 70937,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 911,
      "SpellID": 70947,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 920,
      "SpellID": 58136,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 923,
      "SpellID": 89749,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 0,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 924,
      "SpellID": 89758,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 926,
      "SpellID": 56805,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 927,
      "SpellID": 89003,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 0,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 928,
      "SpellID": 89926,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237651,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 929,
      "SpellID": 91299,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 930,
      "SpellID": 93466,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237636,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 931,
      "SpellID": 94372,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237648,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 932,
      "SpellID": 94374,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237638,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 933,
      "SpellID": 94382,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 934,
      "SpellID": 94386,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 935,
      "SpellID": 94388,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 936,
      "SpellID": 94390,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237643,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 937,
      "SpellID": 95212,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237634,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 945,
      "SpellID": 96279,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237650,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 948,
      "SpellID": 98397,
      "Glyph_Type": 0,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237652,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 950,
      "SpellID": 101052,
      "Glyph_Type": 2,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237641,
      "GlyphSlotFlags": 0
    },
    {
      "ID": 961,
      "SpellID": 107906,
      "Glyph_Type": 1,
      "Field_3_4_0_43659_002": 0,
      "SpellIconFileDataID": 237645,
      "GlyphSlotFlags": 1
    }
  ];

export default Glyphs;