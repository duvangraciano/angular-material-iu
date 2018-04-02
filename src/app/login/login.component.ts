import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// Import Services
import { UsuarioService } from '../usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  hide = true;
  private usr;


  
  constructor(private router:Router, private usuario: UsuarioService) { 
    this.usr = usuario;
  }

  ngOnInit() {

  }
  
  // Function or metod LoginUser
  loginUser(e){
    //e.preventDefault();
    var username: string = e.target.elements[0].value;
    var password: string = e.target.elements[1].value;
    console.log(username,password);
    
    if(username == 'admin' && password == 'admin'){
      this.usuario.setUsuarioLogeado(); // Se establece la instancia a True, a partir del metodo setUsuarioLogeado.
      this.router.navigate(['dashboard']); // Propiedad del Router (redirecciona a una sesion de la App)
    }
  }

  
}
