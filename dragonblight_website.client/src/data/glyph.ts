interface Glyph {
    ID: number;
    SpellID: number;
    Field_3_4_0_43659_001: number;
    Field_3_4_0_43659_002: number;
    SpellIconFileDataID: number;
    GlyphSlotFlags: number;
}

//will check these when we are looking up character glyphs and will connect id to spell id
const Glyphs: Glyph[] = [
  {
    "ID": 161,
    "SpellID": 54810,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 162,
    "SpellID": 54811,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 163,
    "SpellID": 54812,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 164,
    "SpellID": 114338,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 165,
    "SpellID": 114234,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 166,
    "SpellID": 116186,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 167,
    "SpellID": 54821,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 168,
    "SpellID": 114300,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 169,
    "SpellID": 54832,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 170,
    "SpellID": 54733,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 171,
    "SpellID": 116218,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 172,
    "SpellID": 17076,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 173,
    "SpellID": 54825,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 174,
    "SpellID": 114228,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 175,
    "SpellID": 146655,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 176,
    "SpellID": 114333,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 177,
    "SpellID": 54831,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 178,
    "SpellID": 116216,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 179,
    "SpellID": 116203,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 180,
    "SpellID": 127540,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 181,
    "SpellID": 54760,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 183,
    "SpellID": 54922,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 184,
    "SpellID": 146955,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 185,
    "SpellID": 54923,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 186,
    "SpellID": 54924,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 187,
    "SpellID": 54926,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 188,
    "SpellID": 54927,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 189,
    "SpellID": 54928,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 190,
    "SpellID": 89401,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 191,
    "SpellID": 54930,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 192,
    "SpellID": 54931,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 193,
    "SpellID": 54934,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 194,
    "SpellID": 54935,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 195,
    "SpellID": 54936,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 196,
    "SpellID": 54937,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 197,
    "SpellID": 54938,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 198,
    "SpellID": 54939,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 199,
    "SpellID": 54940,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 200,
    "SpellID": 54943,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 211,
    "SpellID": 55436,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 212,
    "SpellID": 55437,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 213,
    "SpellID": 55449,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 214,
    "SpellID": 55454,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 215,
    "SpellID": 55442,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 216,
    "SpellID": 55439,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 217,
    "SpellID": 55455,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 218,
    "SpellID": 55450,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 219,
    "SpellID": 55447,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 220,
    "SpellID": 55451,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 221,
    "SpellID": 55443,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 222,
    "SpellID": 55456,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 223,
    "SpellID": 55440,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 224,
    "SpellID": 55438,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 225,
    "SpellID": 55448,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 226,
    "SpellID": 55453,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 227,
    "SpellID": 55441,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 228,
    "SpellID": 55446,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 229,
    "SpellID": 55444,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 230,
    "SpellID": 55452,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 231,
    "SpellID": 55445,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 251,
    "SpellID": 55675,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 252,
    "SpellID": 55677,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 253,
    "SpellID": 55684,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 254,
    "SpellID": 55678,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 255,
    "SpellID": 14771,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 256,
    "SpellID": 125045,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 257,
    "SpellID": 55686,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 258,
    "SpellID": 55673,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 259,
    "SpellID": 55691,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 260,
    "SpellID": 55688,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 261,
    "SpellID": 119853,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 262,
    "SpellID": 89489,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 263,
    "SpellID": 55672,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 264,
    "SpellID": 119873,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 265,
    "SpellID": 55676,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 266,
    "SpellID": 119872,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 267,
    "SpellID": 55690,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 268,
    "SpellID": 87195,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 269,
    "SpellID": 119864,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 270,
    "SpellID": 55692,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 271,
    "SpellID": 55685,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 272,
    "SpellID": 56248,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 273,
    "SpellID": 56235,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 274,
    "SpellID": 56218,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 275,
    "SpellID": 56241,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 276,
    "SpellID": 56232,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 277,
    "SpellID": 56244,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 278,
    "SpellID": 56246,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 279,
    "SpellID": 56249,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 280,
    "SpellID": 56238,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 281,
    "SpellID": 56224,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 282,
    "SpellID": 56217,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 283,
    "SpellID": 146963,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 284,
    "SpellID": 56242,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 285,
    "SpellID": 56226,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 286,
    "SpellID": 56240,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 287,
    "SpellID": 56229,
    "Field_3_4_0_43659_001": 2,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 289,
    "SpellID": 56231,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 290,
    "SpellID": 56250,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 291,
    "SpellID": 56233,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 292,
    "SpellID": 56247,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 312,
    "SpellID": 56363,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 313,
    "SpellID": 115718,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 314,
    "SpellID": 56365,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 315,
    "SpellID": 56380,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 316,
    "SpellID": 56368,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 318,
    "SpellID": 56376,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 319,
    "SpellID": 56370,
    "Field_3_4_0_43659_001": 2,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 320,
    "SpellID": 56384,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 321,
    "SpellID": 115723,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 322,
    "SpellID": 56377,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 323,
    "SpellID": 115705,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 325,
    "SpellID": 146659,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 326,
    "SpellID": 56383,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 328,
    "SpellID": 56382,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 329,
    "SpellID": 56375,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 330,
    "SpellID": 56364,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 331,
    "SpellID": 115713,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 351,
    "SpellID": 122492,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 352,
    "SpellID": 119449,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 353,
    "SpellID": 132106,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 354,
    "SpellID": 56833,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 355,
    "SpellID": 123632,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 356,
    "SpellID": 119410,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 357,
    "SpellID": 56850,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 358,
    "SpellID": 56844,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 359,
    "SpellID": 56845,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 360,
    "SpellID": 56847,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 361,
    "SpellID": 56829,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 362,
    "SpellID": 119403,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 363,
    "SpellID": 20895,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 364,
    "SpellID": 53299,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 365,
    "SpellID": 19560,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 366,
    "SpellID": 119464,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 367,
    "SpellID": 56849,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 368,
    "SpellID": 126095,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 369,
    "SpellID": 19573,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 371,
    "SpellID": 119407,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 391,
    "SpellID": 56808,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 392,
    "SpellID": 56813,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 393,
    "SpellID": 56800,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 394,
    "SpellID": 56818,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 395,
    "SpellID": 146628,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 396,
    "SpellID": 56806,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 397,
    "SpellID": 56799,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 398,
    "SpellID": 146625,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 399,
    "SpellID": 56803,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 400,
    "SpellID": 56804,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 401,
    "SpellID": 56812,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 402,
    "SpellID": 125044,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 403,
    "SpellID": 56809,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 404,
    "SpellID": 56807,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 405,
    "SpellID": 56819,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 406,
    "SpellID": 56801,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 407,
    "SpellID": 146631,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 409,
    "SpellID": 146629,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 410,
    "SpellID": 56810,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 411,
    "SpellID": 56811,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 431,
    "SpellID": 57856,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 432,
    "SpellID": 107059,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 433,
    "SpellID": 57855,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 434,
    "SpellID": 121840,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 435,
    "SpellID": 114295,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 439,
    "SpellID": 57866,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 440,
    "SpellID": 57870,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 441,
    "SpellID": 57903,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 442,
    "SpellID": 57902,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 443,
    "SpellID": 57904,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 445,
    "SpellID": 57924,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 447,
    "SpellID": 57927,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 448,
    "SpellID": 126748,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 449,
    "SpellID": 58136,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 450,
    "SpellID": 52648,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 451,
    "SpellID": 57925,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 452,
    "SpellID": 125043,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 453,
    "SpellID": 57958,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 454,
    "SpellID": 57979,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 455,
    "SpellID": 57955,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 456,
    "SpellID": 57947,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 457,
    "SpellID": 57954,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 458,
    "SpellID": 57985,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 459,
    "SpellID": 108939,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 460,
    "SpellID": 58009,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 461,
    "SpellID": 57986,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 462,
    "SpellID": 33202,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 463,
    "SpellID": 58228,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 464,
    "SpellID": 58032,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 465,
    "SpellID": 58027,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 466,
    "SpellID": 58017,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 467,
    "SpellID": 58033,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 468,
    "SpellID": 58039,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 469,
    "SpellID": 58038,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 470,
    "SpellID": 58058,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 471,
    "SpellID": 58135,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 473,
    "SpellID": 58059,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 474,
    "SpellID": 89646,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 476,
    "SpellID": 58057,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 477,
    "SpellID": 58079,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 478,
    "SpellID": 58070,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 479,
    "SpellID": 58081,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 480,
    "SpellID": 58080,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 481,
    "SpellID": 58107,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 482,
    "SpellID": 58094,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 483,
    "SpellID": 58095,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 484,
    "SpellID": 58096,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 485,
    "SpellID": 58097,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 486,
    "SpellID": 58099,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 487,
    "SpellID": 58098,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 488,
    "SpellID": 58104,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 489,
    "SpellID": 58368,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 490,
    "SpellID": 58369,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 491,
    "SpellID": 58355,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 492,
    "SpellID": 58366,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 493,
    "SpellID": 58388,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 494,
    "SpellID": 58367,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 495,
    "SpellID": 58372,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 496,
    "SpellID": 58357,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 497,
    "SpellID": 58377,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 499,
    "SpellID": 58386,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 500,
    "SpellID": 58385,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 501,
    "SpellID": 58364,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 502,
    "SpellID": 58375,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 504,
    "SpellID": 58387,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 505,
    "SpellID": 58384,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 507,
    "SpellID": 58356,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 508,
    "SpellID": 58382,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 509,
    "SpellID": 58370,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 512,
    "SpellID": 58623,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 513,
    "SpellID": 58616,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 514,
    "SpellID": 58640,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 515,
    "SpellID": 58673,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 516,
    "SpellID": 58620,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 518,
    "SpellID": 58677,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 519,
    "SpellID": 62259,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 520,
    "SpellID": 58629,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 521,
    "SpellID": 58647,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 522,
    "SpellID": 58680,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 524,
    "SpellID": 58631,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 525,
    "SpellID": 58671,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 526,
    "SpellID": 58657,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 527,
    "SpellID": 58686,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 528,
    "SpellID": 58669,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 529,
    "SpellID": 58642,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 530,
    "SpellID": 58618,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 531,
    "SpellID": 58635,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 532,
    "SpellID": 58676,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 551,
    "SpellID": 59219,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 552,
    "SpellID": 59289,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 553,
    "SpellID": 59309,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 554,
    "SpellID": 59307,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 555,
    "SpellID": 60200,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 556,
    "SpellID": 59327,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 557,
    "SpellID": 59332,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 558,
    "SpellID": 59336,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 559,
    "SpellID": 56420,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 560,
    "SpellID": 56414,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 561,
    "SpellID": 56416,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 591,
    "SpellID": 61205,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 611,
    "SpellID": 115700,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 612,
    "SpellID": 62132,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 613,
    "SpellID": 114301,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 631,
    "SpellID": 116172,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 651,
    "SpellID": 62210,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 671,
    "SpellID": 114223,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 672,
    "SpellID": 62970,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 673,
    "SpellID": 116238,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 674,
    "SpellID": 114222,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 675,
    "SpellID": 48514,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 676,
    "SpellID": 63057,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 677,
    "SpellID": 119447,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 691,
    "SpellID": 119384,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 692,
    "SpellID": 119462,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 693,
    "SpellID": 63068,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 694,
    "SpellID": 63069,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 695,
    "SpellID": 83495,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 696,
    "SpellID": 63090,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 697,
    "SpellID": 86209,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 698,
    "SpellID": 63092,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 699,
    "SpellID": 63093,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 700,
    "SpellID": 115710,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 701,
    "SpellID": 63218,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 702,
    "SpellID": 63219,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 703,
    "SpellID": 63220,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 704,
    "SpellID": 63222,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 705,
    "SpellID": 63223,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 706,
    "SpellID": 63224,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 707,
    "SpellID": 63225,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 708,
    "SpellID": 63229,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 709,
    "SpellID": 119850,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 710,
    "SpellID": 119866,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 711,
    "SpellID": 147778,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 712,
    "SpellID": 33371,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 713,
    "SpellID": 63248,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 714,
    "SpellID": 63249,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 715,
    "SpellID": 63252,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 716,
    "SpellID": 63253,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 731,
    "SpellID": 63254,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 732,
    "SpellID": 63256,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 733,
    "SpellID": 63268,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 734,
    "SpellID": 63269,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 735,
    "SpellID": 63270,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 736,
    "SpellID": 63271,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 737,
    "SpellID": 63273,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 751,
    "SpellID": 63279,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 752,
    "SpellID": 63280,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 753,
    "SpellID": 63291,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237632,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 754,
    "SpellID": 63298,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 755,
    "SpellID": 63302,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 756,
    "SpellID": 63303,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 757,
    "SpellID": 63304,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 758,
    "SpellID": 63309,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 759,
    "SpellID": 146964,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 760,
    "SpellID": 63320,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237639,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 761,
    "SpellID": 63312,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 762,
    "SpellID": 63324,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 763,
    "SpellID": 63325,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 764,
    "SpellID": 146965,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 765,
    "SpellID": 63327,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 766,
    "SpellID": 63328,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 767,
    "SpellID": 63329,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 768,
    "SpellID": 63330,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 769,
    "SpellID": 63331,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 771,
    "SpellID": 63333,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 773,
    "SpellID": 63335,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 831,
    "SpellID": 67598,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 851,
    "SpellID": 68164,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 871,
    "SpellID": 115703,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 911,
    "SpellID": 148683,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 920,
    "SpellID": 57927,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 923,
    "SpellID": 89749,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 0,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 924,
    "SpellID": 89758,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 926,
    "SpellID": 56805,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 927,
    "SpellID": 89003,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 0,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 928,
    "SpellID": 89926,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 929,
    "SpellID": 91299,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 930,
    "SpellID": 93466,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237636,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 931,
    "SpellID": 94372,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237648,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 932,
    "SpellID": 94374,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 933,
    "SpellID": 114237,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 934,
    "SpellID": 94386,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 935,
    "SpellID": 114280,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 936,
    "SpellID": 47180,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237643,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 937,
    "SpellID": 125047,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 945,
    "SpellID": 96279,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 948,
    "SpellID": 98397,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 950,
    "SpellID": 101052,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 956,
    "SpellID": 0,
    "Field_3_4_0_43659_001": 2,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237635,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 961,
    "SpellID": 107906,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 967,
    "SpellID": 111546,
    "Field_3_4_0_43659_001": 2,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237637,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 970,
    "SpellID": 112104,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 0,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 986,
    "SpellID": 115738,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 987,
    "SpellID": 115931,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 988,
    "SpellID": 115933,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 989,
    "SpellID": 115934,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 990,
    "SpellID": 115943,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 991,
    "SpellID": 115946,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 996,
    "SpellID": 119477,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 997,
    "SpellID": 146951,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 998,
    "SpellID": 123401,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 999,
    "SpellID": 120477,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1000,
    "SpellID": 120479,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1001,
    "SpellID": 120483,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1002,
    "SpellID": 120482,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1003,
    "SpellID": 120585,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1004,
    "SpellID": 120581,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1005,
    "SpellID": 120583,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1006,
    "SpellID": 120584,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1007,
    "SpellID": 120581,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1008,
    "SpellID": 122013,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1009,
    "SpellID": 122028,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1010,
    "SpellID": 122136,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1011,
    "SpellID": 123023,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1012,
    "SpellID": 120479,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1013,
    "SpellID": 123334,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1014,
    "SpellID": 123391,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1015,
    "SpellID": 123394,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1016,
    "SpellID": 123399,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1017,
    "SpellID": 123403,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1018,
    "SpellID": 123405,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1019,
    "SpellID": 123763,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1020,
    "SpellID": 123779,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1021,
    "SpellID": 125967,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1022,
    "SpellID": 125042,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1023,
    "SpellID": 109263,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1024,
    "SpellID": 58136,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237649,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1025,
    "SpellID": 146953,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1026,
    "SpellID": 124989,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1028,
    "SpellID": 125151,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1029,
    "SpellID": 125154,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1030,
    "SpellID": 124997,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1031,
    "SpellID": 146954,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1032,
    "SpellID": 146952,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1033,
    "SpellID": 125660,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1034,
    "SpellID": 146950,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1035,
    "SpellID": 125671,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1036,
    "SpellID": 125673,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1037,
    "SpellID": 125676,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1038,
    "SpellID": 125678,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1039,
    "SpellID": 125732,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1040,
    "SpellID": 125755,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1041,
    "SpellID": 125872,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1042,
    "SpellID": 125893,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1043,
    "SpellID": 125872,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1044,
    "SpellID": 125901,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1045,
    "SpellID": 125931,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1046,
    "SpellID": 126133,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1047,
    "SpellID": 126152,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1048,
    "SpellID": 126174,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1049,
    "SpellID": 126094,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1050,
    "SpellID": 126179,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1051,
    "SpellID": 126193,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1052,
    "SpellID": 126745,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1053,
    "SpellID": 126746,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1054,
    "SpellID": 131113,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237634,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1055,
    "SpellID": 132005,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1056,
    "SpellID": 134580,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1057,
    "SpellID": 135032,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1058,
    "SpellID": 135557,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1059,
    "SpellID": 62080,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1060,
    "SpellID": 145722,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1061,
    "SpellID": 147707,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237644,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1062,
    "SpellID": 145529,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237642,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1063,
    "SpellID": 146645,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1064,
    "SpellID": 146646,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1065,
    "SpellID": 146648,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1066,
    "SpellID": 146650,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1067,
    "SpellID": 146956,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1068,
    "SpellID": 146957,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237650,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1069,
    "SpellID": 147762,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1070,
    "SpellID": 147781,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1071,
    "SpellID": 146962,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237638,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1072,
    "SpellID": 146970,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1073,
    "SpellID": 146971,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1074,
    "SpellID": 146652,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1075,
    "SpellID": 146653,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1076,
    "SpellID": 146654,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1077,
    "SpellID": 146656,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1078,
    "SpellID": 146656,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237633,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1079,
    "SpellID": 146976,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1080,
    "SpellID": 146662,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1081,
    "SpellID": 147353,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237647,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1082,
    "SpellID": 146958,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1083,
    "SpellID": 146959,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237652,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1084,
    "SpellID": 145722,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1085,
    "SpellID": 147776,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1086,
    "SpellID": 147779,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1087,
    "SpellID": 147072,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237645,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1088,
    "SpellID": 146960,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1089,
    "SpellID": 146961,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237646,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1090,
    "SpellID": 147783,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1091,
    "SpellID": 147784,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1092,
    "SpellID": 147770,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1093,
    "SpellID": 147772,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1094,
    "SpellID": 147785,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1095,
    "SpellID": 147788,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1096,
    "SpellID": 147787,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1097,
    "SpellID": 147707,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237651,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1098,
    "SpellID": 146968,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1099,
    "SpellID": 146969,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1100,
    "SpellID": 146973,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1101,
    "SpellID": 146974,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237640,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1102,
    "SpellID": 146657,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1103,
    "SpellID": 148473,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  },
  {
    "ID": 1104,
    "SpellID": 148475,
    "Field_3_4_0_43659_001": 0,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 0
  },
  {
    "ID": 1105,
    "SpellID": 148484,
    "Field_3_4_0_43659_001": 1,
    "Field_3_4_0_43659_002": 0,
    "SpellIconFileDataID": 237641,
    "GlyphSlotFlags": 1
  }
];

export default Glyphs;