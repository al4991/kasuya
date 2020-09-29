// A really DUMB formula I use to just round up coffee to the next gram if it isn't a perfect number
// because I'd rather it be that 1 gram stronger :)
const roundForStrength = (x) => (x % 1 === 0 ? x : x - (x % 1) + 1);

export { roundForStrength };
