import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class AutenSeguridadGuard implements CanActivate {
  
  constructor(private usuario:UsuarioService){}
  
  canActivate(  next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    return this.usuario.getUsuarioLogeado();
  }
}
