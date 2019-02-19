import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }

  public error = [];

  constructor(private recipe: RecipeService, private router: Router) { }

  onSubmit() {
    this.recipe.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.recipe.handle(data.access_token);
    this.router.navigateByUrl('profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}