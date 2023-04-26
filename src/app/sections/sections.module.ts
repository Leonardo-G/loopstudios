import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { InfoComponent } from './info/info.component';
import { CreationsComponent } from './creations/creations.component';
import { CreationsModule } from '../creations/creations.module';



@NgModule({
  declarations: [
    ContainerComponent,
    FrontPageComponent,
    InfoComponent,
    CreationsComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    CreationsModule
  ],
  exports: [
    ContainerComponent 
  ]
})
export class SectionsModule { }
