import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationModule } from '../navigation/navigation.module';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    ContainerComponent,
    FrontPageComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    ContainerComponent 
  ]
})
export class SectionsModule { }
