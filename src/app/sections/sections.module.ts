import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    ContainerComponent,
    FrontPageComponent,
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
