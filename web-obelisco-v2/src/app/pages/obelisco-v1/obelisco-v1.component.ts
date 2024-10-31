import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-obelisco-v1',
  standalone: true,
  imports: [HeaderComponent,HeroComponent,FooterComponent],
  templateUrl: './obelisco-v1.component.html',
  styleUrl: './obelisco-v1.component.scss'
})
export class ObeliscoV1Component {

}
