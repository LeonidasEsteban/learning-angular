import { Component } from '@angular/core';
import { PokemonService } from './app.service'
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon: Pokemon;
  
  constructor(private pokemonService: PokemonService) {

  }
  
  showPokemon(id) {
    this.pokemonService
    .getPokemon(id)
      .subscribe(
        (data: Pokemon) => {
          this.pokemon = data
          console.log(this.pokemon)
        });
  }

  HandleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const id = form.get('id')
    this.showPokemon(id)
  }
  ngOnInit() /* componentDidMount */ {
    this.showPokemon(150)
  }
}
