import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import Services
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private usuario:UsuarioService) { }

  ngOnInit() {

  }

}
