import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = Array(0);
  textoBuscar: string ='';

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getAlbums().subscribe(albumes =>{
      this.albumes = albumes;
    })
  }
  onSearchChange(event){
    this.textoBuscar = event.detail.value;
  }

}
