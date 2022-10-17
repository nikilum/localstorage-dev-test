export function shuffleString(stringToShuffle) {
    return [...stringToShuffle]
        .sort(() => (Math.random()-0.5))
        .join('');
}