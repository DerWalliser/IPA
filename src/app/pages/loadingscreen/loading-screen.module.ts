import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen.component';
import { LoadingScreenRoutingModule } from './loading-screen-routing.module';




@NgModule({
  declarations: [
    LoadingScreenComponent
  ],
  imports: [
    CommonModule,
    LoadingScreenRoutingModule
  ],
  exports: [LoadingScreenComponent]
})
export class LoadingScreenModule { }
