import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor(private DataService: DataService) { }
  publisher: string = '';
  superHeroes: Observable<any>;

  ngOnInit() {
this.superHeroes = this.DataService.getHeroes();

  }
  segmentChanged(ev){
  /*   if (ev.detail.value =='todos') {
      this.publisher = '';
      return
    }
 */
    console.log(ev.detail.value);
    this.publisher = ev.detail.value;
  }

}
