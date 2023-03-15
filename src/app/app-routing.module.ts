import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ServiceComponent } from './page/service/service.component';
import { ServicedetailComponent } from './page/servicedetail/servicedetail.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'service', component : ServiceComponent},
  {path : 'servicedetail',component : ServicedetailComponent},
  {path : 'about', component : AboutComponent},
  {path : 'checkout',component : CheckoutComponent},
  {path : 'login',component : LoginComponent},
  // {path : 'login',component : LoginComponent}
 
  
 
];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
