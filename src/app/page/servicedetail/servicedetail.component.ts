import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.css']
})
export class ServicedetailComponent  {
Button(servicedetail: ServicedetailComponent) {
  throw new Error('Method not implemented.');
}
constructor( private router:Router) {}
ngOnInt(): void {

}
OncheckoutClick() {
this.router.navigateByUrl('/checkout');
}
}

