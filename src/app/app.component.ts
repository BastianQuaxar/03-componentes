import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen   } from '@ionic-native/splash-screen/ngx';

import { Observable } from 'rxjs';

import { MenuController } from '@ionic/angular';
import { Componente } from './interfaces/interfaces';
import { InfinitePageModule } from './pages/infinite/infinite.module';

import { DataService } from './services/data.service';
import { StatusBarOriginal } from '@ionic-native/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  Componente: Observable <Componente[]>   
  ngOnInit() {
    
    this.Componente = this.DataService.getMenuOpt();

  }

  constructor(
              private platform:  Platform,
              private DataService: DataService) { }

  
  initializeApp(){
    this.platform.ready().then(() =>{

    
    this.Componente = this.DataService.getMenuOpt();
    })

  }  }