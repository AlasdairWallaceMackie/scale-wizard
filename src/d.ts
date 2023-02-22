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
    sharpOrFlat: {
        value: "sharp" | "flat",
        handler: React.MouseEventHandler
    },
    scaleDegrees: {
        value: number[]
    },
}

export interface Default {
    TUNING: string,
    SHARP_FLAT: "sharp"|"flat",
    KEY: string,
    SCALE: string,
    NUMBER_OF_FRETS: number
}