import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) { }
  getPokemon(id) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
