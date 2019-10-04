import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as stateReducers from "../reducers/reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(stateReducers.part2FeatureKey, stateReducers.part2FeatureReducer )
  ]
})

export class Part2StateModule {}
