import { Component } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public faBars = faBars;
  public faXmark = faXmark;

  public navBar = false;

  onClickNavbar(): void {
    this.navBar = !this.navBar;
  }
}
