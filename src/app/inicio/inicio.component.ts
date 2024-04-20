import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
//import {MatIconModule} from '@angular/material/icon';
//import {MatInputModule} from '@angular/material/input';
//import {MatMenuModule} from '@angular/material/menu';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import { InicioComponent } from './inicio/inicio.component';
//import { LoginComponent } from './login/login.component';
//import { MenuComponent } from './menu/menu.component';
//import { RodapeComponent } from './rodape/rodape.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
