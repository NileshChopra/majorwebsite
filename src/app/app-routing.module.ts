import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DiseaseinfoComponent } from './diseaseinfo/diseaseinfo.component';
import { PredictionComponent } from './prediction/prediction.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'disease-info', component: DiseaseinfoComponent },
  { path: 'prediction', component: PredictionComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
