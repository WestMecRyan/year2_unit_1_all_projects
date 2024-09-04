// "weight", "jump", "pushups"
// if "weight" multiply grav factor
// if anything else
// divide grav factor

factorType === "weight" ?
results[planet] = value*grav
    // calculate the final value as a multiple of grav
:
    results[planet] = value / grav
// calculate the final value as division