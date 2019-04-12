import { Component, OnInit } from '@angular/core';

import { AUTOCOMPLETE_TEXT } from './autocomplete-values';

import { LocalStorage } from '@ngx-pwa/local-storage';

/**
 * Demo app showing usage of the mentions directive.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(protected localStorage: LocalStorage) {
    
  } 
  
  str: string;
  data: string;
  displayContent: string;
  items: string[] = AUTOCOMPLETE_TEXT;

  ngOnInit() {
    this.str = JSON.parse(window.localStorage.getItem('data'));
  }

  onChangeSaveData(taskTextarea){
    console.log(taskTextarea);
    window.localStorage.setItem('data', JSON.stringify(taskTextarea));
    this.displayContent = taskTextarea;
  }

  getLocalStorageData(): void {
    console.log(window.localStorage.getItem('data'));
  }


  clearLocalStorage(){
    window.localStorage.removeItem('data');
    this.str = "";
    this.displayContent = "";
  }
    
}
