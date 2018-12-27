import { Component } from '@angular/core';
import { PokemonService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pokemonService: PokemonService) {
    this.pokemon = {
      name: '',
    }
  }
  showPokemon(id) {
    this.pokemonService.getPokemon(id)
      .subscribe((data) => {
        console.log(data)
        return this.pokemon = data
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
