import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
 usuarios: Observable<any>;
 @ViewChild('slidingList') ionList: IonList;

 objeto = Boolean(true) ;

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any){
    console.log('favorite', user)
    this.ionList.closeSlidingItems();
    
  }
  share(user:any){
    console.log('share', user)
    this.ionList.closeSlidingItems();
  }
  trash(user:any){
    console.log('trash', user)
    
    this.ionList.closeSlidingItems(); 
  
  }
  
}
