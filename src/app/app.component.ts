import { Component } from '@angular/core';

import { Store, select } from "@ngrx/store";
import * as stateReducers from "./state/reducers/reducers";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  counter = '';
  name = '';
  home : number;
  away : number;

  sectionToShow : string = "PART2";

  constructor (private store:Store<any>){
    this.store.select<any>((state: any) => state).subscribe((completeState: any) => {
      this.counter = completeState[stateReducers.appComponentFeatureKey].counter;
      this.name = completeState[stateReducers.appComponentFeatureKey].name;
      this.home = completeState[stateReducers.part2FeatureKey].home;
      this.away = completeState[stateReducers.part2FeatureKey].away;
    });
  }

  changeToPart( sectionPassed ){
    this.sectionToShow = sectionPassed;
  }  
  increment(){
    this.store.dispatch({type: stateReducers.INCREMENT});
  }
  decrement(){
    this.store.dispatch({type: stateReducers.DECREMENT});
  }
  addString(){
    this.store.dispatch({type: stateReducers.INCREMENTSTRING});
  }
  removeString(){
    this.store.dispatch({type: stateReducers.DECREMENTSTRING});
  }
  increaseHomeGoal(){
    this.store.dispatch({type: stateReducers.INCREMENTHOME});
  }
  decreaseHomeGoal(){
    this.store.dispatch({type: stateReducers.DECREMENTHOME});
  }
  increaseAwayGoal(){
    this.store.dispatch({type: stateReducers.INCREMENTAWAY});
  }
  decreaseAwayGoal(){
    this.store.dispatch({type: stateReducers.DECREMENTAWAY});
  }
}
