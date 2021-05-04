import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PianoComponent } from './piano.component';

const routes: Routes = [{ path: '', component: PianoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PianoRoutingModule { }
