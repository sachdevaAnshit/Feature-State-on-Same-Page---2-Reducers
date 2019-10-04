import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { StateModule } from './state/stateModule/state.module';
import { Part2StateModule } from './state/part2Module/part2.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    StateModule,
    Part2StateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
