const flip = (data: object) => Object.fromEntries(
    Object
        .entries(data)
        .map(([key, value]) => [value, parseInt(key)])
    );

export const MAX_NUMBER_OF_NOTES: number = 12

export const noteLookup: {[key: number]: string} = {
    1: "C",
    2: "C#",
    3: "D",
    4: "D#",
    5: "E",
    6: "F",
    7: "F#",
    8: "G",
    9: "G#",
    10: "A",
    11: "A#",
    12: "B",
}

export const noteCodeLookup = flip(noteLookup)

export const sharpToFlatConversion = {
    "A#": "Bb",
    "C#": "Db",
    "D#": "Eb",
    "F#": "Gb",
    "G#": "Ab",
}
export const flatToSharpConversion = flip(sharpToFlatConversion)