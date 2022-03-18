import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {


  items: any = Array(0)
  constructor() { }

  ngOnInit() {
  }

  doRefresh(ev){
      
    console.log('Begin async operation');

    setTimeout(() => {
      this.items = Array(30);
      console.log('Async operation has ended');
      ev.target.complete();
    }, 1000);
  }
  }


