import { Pitch } from "./data/notes"

export interface Tuning {
    name: string,
    description: string,
    notes: string[]
}

export interface Scale {
    name: string,
    intervals: string[],
    description: string,
}

export interface ControlsContextInterface {
    numberOfFrets: {
        value: number,
        handler: React.ChangeEventHandler<HTMLSelectElement>
    },
    currentTuning: {
        value: Tuning,
        handler: React.ChangeEventHandler<HTMLSelectElement>
    },
    currentKey: {
        value: number,
        handler: React.ChangeEventHandler<HTMLSelectElement>
    },
    currentScale: {
        value: Scale,
        handler: React.ChangeEventHandler<HTMLSelectElement>
    },
    currentScaleDegrees: {
        value: number[]
    },
    sharpOrFlat: {
        value: "sharp" | "flat",
        // handler: React.MouseEventHandler
        handler: React.ChangeEventHandler<HTMLInputElement>
    },
    showAllNotes: {
        value: boolean,
        handler: React.ChangeEventHandler<HTMLInputElement>
    },
    showNoteNames: {
        value: boolean,
        handler: React.ChangeEventHandler<HTMLInputElement>
    },
    allPositions: {
        value: Pitch[][]
    }
    currentPositionPitches: {
        value: Pitch[]
    },
    currentPositionIndex: {
        value: number,
        handler: React.ChangeEventHandler<HTMLInputElement>,
        increment: Function
    },
}

export interface Default {
    TUNING: string,
    SHARP_FLAT: "sharp"|"flat",
    KEY: string,
    SCALE: string,
    NUMBER_OF_FRETS: number,
    SHOW_ALL_NOTES: boolean,
    SHOW_NOTE_NAMES: boolean,
    SHOW_OCTAVE_NUMBERS: boolean,
}