import { ActionReducer, Action, createSelector } from '@ngrx/store';

export interface State {
  counter: number;
  name: string;
  home: number;
  away: number;
};
export const intitialState: State = {
  counter: 10,
  name: 'Anshit',
  home: 0,
  away: 0
};

/* Actions to be dispatched from component */
export const INCREMENT : string = "INCREMENT";
export const DECREMENT : string = "DECREMENT";
export const INCREMENTSTRING : string = "INCREMENTSTRING";
export const DECREMENTSTRING : string = "DECREMENTSTRING";

export const INCREMENTHOME : string = "INCREMENTHOME";
export const DECREMENTHOME : string = "DECREMENTHOME";
export const INCREMENTAWAY : string = "INCREMENTAWAY";
export const DECREMENTAWAY : string = "DECREMENTAWAY";

/* Feature key to be recorded */
export const appComponentFeatureKey = 'appComponentFeatureKey';
export const part2FeatureKey = 'part2FeatureKey';

export const mainStoreReducer: ActionReducer<State> = (state = intitialState, action: Action) => {
    switch(action.type) {
      case INCREMENT: {
        return { ...state, counter: state.counter + 1 }
      }
     case DECREMENT: {
        return { ...state, counter: state.counter - 1 }
      }
      case INCREMENTSTRING: {
        return { ...state, name: state.name + " Sachdeva" }
      }
      case DECREMENTSTRING: {
        return { ...state, name: state.name + " Sharma" }
      }
      default: {
        return state;
      }
    }
};

export const part2FeatureReducer: ActionReducer<State> = (state = intitialState, action: Action) => {
    switch(action.type) {
      case INCREMENTHOME: {
        return { ...state, home: state.home + 1 }
      }
     case DECREMENTHOME: {
        return { ...state, home: state.home - 1 }
      }
      case INCREMENTAWAY: {
        return { ...state, away: state.away + 1 }
      }
      case DECREMENTAWAY: {
        return { ...state, away: state.away - 1 }
      }
      default: {
        return state;
      }
    }
};