const tunings = [
    {
        name: "Standard",
        description: "The most common tuning for six-string guitars, used in most styles of music.",
        notes: [
            "E4",
            "B3",
            "G3",
            "D3",
            "A2",
            "E2"
        ]
    },
    {
        name: "Drop D",
        description: "A popular tuning for rock and metal music, with a lower and heavier sound than standard tuning.",
        notes: [
            "E4",
            "B3",
            "G3",
            "D3",
            "A2",
            "D2"
        ]
    },
    {
        name: "Eb Standard",
        description: "A tuning where each string is lowered by one half-step, creating a slightly darker and heavier sound than standard tuning.",
        notes: [
            "Eb4",
            "Bb3",
            "Gb3",
            "Db3",
            "Ab2",
            "Eb2"
        ]
    },
    {
        name: "D Standard",
        description: "A tuning where each string is lowered by one full step, creating an even darker and heavier sound than half-step down tuning.",
        notes: [
            "D4",
            "A3",
            "F3",
            "C3",
            "G2",
            "D2"
        ]
    },
    {
        name: "Drop C",
        description: "A popular tuning for heavy music, where the sixth string is lowered to C and rest of the strings are lowered by one full step.",
        notes: [
            "D4",
            "A3",
            "F3",
            "C3",
            "G2",
            "C2"
        ]
    },
    {
        name: "C#/Db Standard",
        description: "A tuning where each string is tuned one half-step higher than Standard tuning.",
        notes: [
            "C#4",
            "G#3",
            "E3",
            "B2",
            "F#2",
            "C#2"
        ]
    },
    {
        name: "C Standard",
        description: "A tuning where each string is tuned two full-steps lower than Standard tuning.",
        notes: [
            "C4",
            "G3",
            "Eb3",
            "Bb2",
            "F2",
            "C2"
        ]
    },
    {
        name: "B Standard",
        description: "A tuning where each string is tuned two and a half steps lower than Standard tuning.",
        notes: [
            "B3",
            "F#3",
            "D3",
            "A2",
            "E2",
            "B1"
        ]
    },
    {
        name: "Open D",
        description: "An open tuning for playing slide guitar, popularized by blues and country musicians.",
        notes: [
            "D4",
            "A3",
            "F#3",
            "D3",
            "A2",
            "D2"
        ]
    },
    {
        name: "Open G",
        description: "Another popular open tuning for slide guitar, used by many rock and blues guitarists.",
        notes: [
            "D4",
            "B3",
            "G3",
            "D3",
            "G2",
            "D2"
        ]
    },
];

export default tunings

/*
    Receives tuning name in plain English.
    Checks if there is a name match in tunings array and returns the Tuning.
    If not found, returns the first tuning in the array.
*/
export function getTuning(t: string){
    for (var i=0; i<tunings.length; i++){
        if (tunings[i].name === t){
            return tunings[i]
        }
    }
    return tunings[0]
}