import { FIVE } from "../shared/5min";
import { TEN } from "../shared/10min";
import { FIFTEEN } from "../shared/15min";
import { TWENTY } from "../shared/20min";
import { THIRTY } from "../shared/30min";

export const initialState = {
    fiveMin: FIVE,
    tenMin: TEN,
    fifteenMin: FIFTEEN,
    twentyMin: TWENTY,
    thirtyMin: THIRTY,
};

export const Reducer = (state = initialState, action) => {
    return state;
};
