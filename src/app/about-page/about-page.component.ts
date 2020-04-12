import {Component} from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  read = false

  constructor(
    private title: Title,
  ) {
    this.title.setTitle('About Page');
  }
}
