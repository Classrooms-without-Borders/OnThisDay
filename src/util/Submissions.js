// Returns a list of all years between 1925-1950 which have 
// submissions within the db
export function getTimelineYears() {
    // TODO: currently hardcoded
    let yrs = [];
    for (let i = 1925; i <= 1950; i++) yrs.push(i);
    return yrs;
}