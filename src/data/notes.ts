export const MAX_NUMBER_OF_NOTES: number = 12

export const noteLookup: {[key: number]: string} = {
    1: "A",
    2: "A#",
    3: "B",
    4: "C",
    5: "C#",
    6: "D",
    7: "D#",
    8: "E",
    9: "F",
    10: "F#",
    11: "G",
    12: "G#",
}

const flip = (data: object) => Object.fromEntries(
    Object
        .entries(data)
        .map(([key, value]) => [value, parseInt(key)])
    );
export const noteCodeLookup = flip(noteLookup)

export const sharpToFlatConversion = {
    "A#": "Bb",
    "C#": "Db",
    "D#": "Eb",
    "F#": "Gb",
    "G#": "Ab",
}