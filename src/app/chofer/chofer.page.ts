import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Character {
  name: {
    first:String;
    last:String;
  };
  picture:{
    medium:String;
  };
  id: string;
  species: string;
}

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.page.html',
  styleUrls: ['./chofer.page.scss'],
})
export class ChoferPage implements OnInit {
  personajes: Character[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('https://randomuser.me/api/?results=50')
    .subscribe((res: any) => {
      console.log(res);
      this.personajes = res.results as Character[]; // Usar la interfaz Character
    });
  }

}
