import { Component } from '@angular/core';
import { ICreation } from '../interface/creations.interface';

@Component({
  selector: 'app-creations-section',
  templateUrl: './creations-section.component.html',
  styleUrls: ['./creations-section.component.css']
})
export class CreationsSectionComponent {
  
  private _creations: ICreation[] = [
    {
      id: 1,
      srcDesktop: "/assets/desktop/image-deep-earth.jpg",
      srcMobile: "/assets/mobile/image-deep-earth.jpg",
      title: "deep earth"
    },
    {
      id: 2,
      srcDesktop: "/assets/desktop/image-night-arcade.jpg",
      srcMobile: "/assets/mobile/image-night-arcade.jpg",
      title: "night arcade"
    },
    {
      id: 3,
      srcDesktop: "/assets/desktop/image-soccer-team.jpg",
      srcMobile: "/assets/mobile/image-soccer-team.jpg",
      title: "soccer team"
    },
    {
      id: 4,
      srcDesktop: "/assets/desktop/image-grid.jpg",
      srcMobile: "/assets/mobile/image-grid.jpg",
      title: "the grid"
    },
    {
      id: 5,
      srcDesktop: "/assets/desktop/image-from-above.jpg",
      srcMobile: "/assets/mobile/image-from-above.jpg",
      title: "from up above vr"
    },
    {
      id: 6,
      srcDesktop: "/assets/desktop/image-pocket-borealis.jpg",
      srcMobile: "/assets/mobile/image-pocket-borealis.jpg",
      title: "pocket borealis"
    },
    {
      id: 7,
      srcDesktop: "/assets/desktop/image-curiosity.jpg",
      srcMobile: "/assets/mobile/image-curiosity.jpg",
      title: "the curiosity"
    },
    {
      id: 8,
      srcDesktop: "/assets/desktop/image-fisheye.jpg",
      srcMobile: "/assets/mobile/image-fisheye.jpg",
      title: "make it fisheye"
    }
  ]

  getAllCreations(): ICreation[] {
    return [...this._creations];
  }
}
