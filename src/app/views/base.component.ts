import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  template: '',
  selector: 'app-base',
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Base component');
  }

}
