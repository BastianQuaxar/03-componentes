import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  
  constructor(private modalController: ModalController ) { }
  @Input() nombre: string;
  @Input() pais: string;
        
  ngOnInit() {
  }
  salirSinArgumentos(){
    console.log('a');
    this.modalController.dismiss();

  
  }
  salirConArgumentos(){
  
    this.modalController.dismiss({  
      nombre:'ernesto',
      pais: 'colombia'
    })
  }

}
