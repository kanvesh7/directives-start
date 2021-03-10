import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightingDirective } from './basicHighlighting/basic-highlighting.directive';
import { BetterHighlightingDirective } from './better-highlighting/better-highlighting.directive';
import { ChangeDirectiveDirective } from './change-directive/change-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightingDirective,
    BetterHighlightingDirective,
    ChangeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
