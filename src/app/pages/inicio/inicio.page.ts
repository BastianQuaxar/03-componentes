import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { observable, Observable } from 'rxjs';
import { DataService } from '../../services/data.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  Componente: Observable<Componente[]>   


  constructor(private  a: MenuController,
              private DataService: DataService) { }

  ngOnInit() {
    this.Componente = this.DataService.getMenuOpt();
  }
  monstarMenu(){
      this.a.open('first');

  }

}
