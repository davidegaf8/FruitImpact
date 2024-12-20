import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'fruit/:id', component: FruitDetailComponent},
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // Scroll to top on route change
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
