import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.characters = this.api.getCharacters();
  }

  openDetails(character){
    let split = character.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${characterId}`);
  }
}
