const scales = [
    {
        name: "Major",
        intervals: [
            "Root",
            "Major 2nd",
            "Major 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Major 6th",
            "Major 7th"
        ],
        description: "One of the most common scales in Western music, with a bright, uplifting sound."
    },
    {
        name: "Natural Minor",
        intervals: [
            "Root",
            "Major 2nd",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Minor 6th",
            "Minor 7th"
        ],
        description: "The relative minor scale to the major scale, with a darker, more melancholy sound."
    },
    {
        name: "Harmonic Minor",
        intervals: [
            "Root",
            "Major 2nd",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Minor 6th",
            "Major 7th"
        ],
        description: "A variation of the natural minor scale with a raised seventh degree, giving it a more exotic sound."
    },
    {
        name: "Melodic Minor",
        intervals: [
            "Root",
            "Major 2nd",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Major 6th",
            "Major 7th"
        ],
        description: "Another variation of the natural minor scale, with both the sixth and seventh degrees raised when ascending but reverted back to natural when descending."
    },
    {
        name: "Dorian",
        intervals: [
            "Root",
            "Major 2nd",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Major 6th",
            "Minor 7th"
        ],
        description: "A minor scale with a raised sixth degree, giving it a jazzy sound."
    },
    {
        name: "Phrygian",
        intervals: [
            "Root",
            "Minor 2nd",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Minor 6th",
            "Minor 7th"
        ],
        description: "A minor scale with a lowered second degree, giving it a Spanish or Middle Eastern sound."
    },
    {
        name: "Lydian",
        intervals: [
            "Root",
            "Major 2nd",
            "Major 3rd",
            "Augmented 4th",
            "Perfect 5th",
            "Major 6th",
            "Major 7th"
        ],
        description: "A major scale with a raised fourth degree, giving it a dreamy or mystical sound."
    },
    {
        name: "Mixolydian",
        intervals: [
            "Root",
            "Major 2nd",
            "Major 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Major 6th",
            "Minor 7th"
        ],
        description: ""
    },
    {
        name: "Pentatonic Major",
        intervals: [
            "Root",
            "Major 2nd",
            "Major 3rd",
            "Perfect 5th",
            "Major 6th"
        ],
        description: "A major scale with the fourth and seventh degrees removed, resulting in a simple, happy-sounding scale that works well in many styles of music."
    },
        {
        name: "Pentatonic Minor",
        intervals: [
            "Root",
            "Minor 3rd",
            "Perfect 4th",
            "Perfect 5th",
            "Minor 7th"
        ],
        description: "A minor scale with the second and sixth degrees removed, resulting in a simple, bluesy-sounding scale that works well in many styles of music."
    },
    {
        name: "Blues",
        intervals: [
            "Root",
            "Minor 3rd",
            "Perfect 4th",
            "Diminished 5th",
            "Perfect 5th",
            "Minor 7th"
        ],
        description: "A six-note scale commonly used in blues music, with a distinctive and powerful sound."
    }
]

export default scales