import { Component } from "@angular/core";
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl :'admin.component.html'
})


export class AdminComponent{
    
    counter : number = 0;

    constructor(private authService : AuthService, private router : Router){}
    logout(){
        this.authService.clear();
        this.router.navigateByUrl('/admin/auth');
    }
}