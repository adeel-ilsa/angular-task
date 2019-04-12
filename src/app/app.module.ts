import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EscapeHtmlPipe } from './keep-html.pipe';

import { AppComponent } from './app.component';
import { MentionModule } from '../mention/mention.module';
import {Nl2BrPipeModule} from 'nl2br-pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MentionModule,
    Nl2BrPipeModule
  ],
  declarations: [
    AppComponent,
    EscapeHtmlPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
