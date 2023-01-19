import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchTerm ='';
constructor (activatedRout:ActivatedRoute, private router:Router){
  activatedRout.params.subscribe((params) => {
    if(params['searchTerm']) this.searchTerm = params['searchTerm'];
  });
}
search(term:String):void{
  if(term)
  this.router.navigateByUrl('/search/'+term)
}
}
