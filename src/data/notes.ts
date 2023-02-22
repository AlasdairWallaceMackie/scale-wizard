import { Scale } from "../d";

const flip = (data: object) => Object.fromEntries(
    Object
        .entries(data)
        .map(([key, value]) => [value, parseInt(key)])
    );

// Don't change this ever
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

export function sharpToFlatConversion(note: string){
    switch(note){
        case "A#": return "Bb"
        case "C#": return "Db"
        case "D#": return "Eb"
        case "F#": return "Gb"
        case "G#": return "Ab"
        default: return note
    }
}
export function flatToSharpConversion(note: string){
    switch(note){
        case "Bb": return "A#"
        case "Db": return "C#"
        case "Eb": return "D#"
        case "Gb": return "F#"
        case "Ab": return "G#"
        default: return note
    }
}

export function getScaleDegrees(key: number, scale: Scale){
    let scaleDegreeSemitones: number[] = []

    scale.intervals.forEach(interval => {
        let num = 1
        switch(interval){
            case "Root": num = 0; break;
            case "Minor 2nd": num = 1; break;
            case "Major 2nd": num = 2; break;
            case "Minor 3rd": num = 3; break;
            case "Major 3rd": num = 4; break;
            case "Perfect 4th": num = 5; break;
            case "Tritone":
            case "Augmented 4th":
            case "Diminished 5th": num = 6; break;
            case "Perfect 5th": num = 7; break;
            case "Minor 6th": num = 8; break;
            case "Major 6th": num = 9; break;
            case "Minor 7th": num = 10; break;
            case "Major 7th": num = 11; break;
            default: num = 0; 
                console.error(`Invalid interval name. Check ${scale.name} in scales.ts`)
        }

        scaleDegreeSemitones.push(num)
    })

    const scaleDegreeNotes = scaleDegreeSemitones.map(s => {
        let output = key + s
            if (output > MAX_NUMBER_OF_NOTES)
                output -= MAX_NUMBER_OF_NOTES
        
            return output
    })
    return scaleDegreeNotes
}