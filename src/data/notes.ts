import { Scale } from "../d";
import { DEFAULT } from "./settings";

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

export class Pitch{
    note: number
    octave: number

    constructor(note: number, octaveNum: number){
        if (note < 0 || note > MAX_NUMBER_OF_NOTES){
            note = 1
            console.error("Invalid note received by Pitch constructor. Defaulting to 1.")
        }
        this.note = note
        this.octave = octaveNum
    }

    increment(){
        this.note++
        if (this.note > MAX_NUMBER_OF_NOTES){
            this.note = 1
            this.octave++
        }
    }
    decrement(){
        this.note--
        if (this.note < 1){
            this.note = MAX_NUMBER_OF_NOTES
            this.octave--
        }
    }

    incrementWithinScale(increment: 1|-1, scaleDegrees: number[]){
        do{
            switch(increment){
                case 1: this.increment(); break;
                case -1: this.decrement(); break;
            }
        } while (!scaleDegrees.includes(this.note))
    }

    clone(){
        return new Pitch(this.note, this.octave)
    }

    display(sharpOrFlat = DEFAULT.SHARP_FLAT){
        let noteName = noteDisplay(this.note, sharpOrFlat)
        return `${noteName}${DEFAULT.SHOW_OCTAVE_NUMBERS ? this.octave: ""}`
    }
}

export function getPitchObject(pitchString: string){
    let pitchNote = pitchString.slice(0,-1)
    let octave = parseInt(pitchString.slice(-1))

    if (/\d/.test(pitchNote))
        console.error("String octave value is too high (>9)")

    //If the note is written as flat, convert to sharp
    if (/[b]/.test(pitchNote))
        pitchNote = flatToSharpConversion(pitchNote)

    const pitchCode = noteCodeLookup[pitchNote]

    return new Pitch(pitchCode, octave)
}

export function getLowestScalePitch(pitch: Pitch, scaleDegrees: number[]){
    if (!scaleDegrees.length)
        return new Pitch(1,1)

    while (!scaleDegrees.includes(pitch.note))
        pitch.increment()
    
    return pitch
}

// Receives note code and returns string displayed as sharp or flat
// Use this when notes need to be displayed in HTML
export function noteDisplay(noteCode: number, sharpOrFlat: "sharp"|"flat" = DEFAULT.SHARP_FLAT): string{
    if (sharpOrFlat === "flat")
        return sharpToFlatConversion(noteLookup[noteCode])
    else
        return noteLookup[noteCode]
}