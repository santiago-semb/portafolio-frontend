import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { TokenService } from "../service/token.service";

@Injectable()
export class LoginGuardian implements CanActivate {

    constructor(private tokenService: TokenService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.tokenService.estaLogueado()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
    
}