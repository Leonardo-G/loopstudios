import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationsSectionComponent } from './creations-section/creations-section.component';

@NgModule({
  declarations: [
    CreationsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreationsSectionComponent
  ]
})
export class CreationsModule {}
