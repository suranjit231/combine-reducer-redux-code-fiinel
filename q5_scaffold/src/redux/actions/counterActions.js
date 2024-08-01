// define counter action constants here
export const INCREASED_COUNTER = "Increased Counter";
export const DECREASED_COUNTER = "Decreased Counter";
export const RESET_COUNTER = "Reset Counter";

// define counter action creators here
export const increasedCounter = ()=>({type:INCREASED_COUNTER});
export const decreasedCounter = ()=>({type:DECREASED_COUNTER});
export const resetCounter = ()=>({type:RESET_COUNTER});
