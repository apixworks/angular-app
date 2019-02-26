import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    private name = '';
    private password = '';
    private result;
    private alertSignin = false;
    private alertMessage = '';

    constructor(private service: HttpService, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        const employee = {
            'name': this.name,
            'password': this.password
        };
        if (this.name === '' && this.password === '') {
            this.alertMessage = 'Please enter login Credentials'
            this.alertSignin = true;
        } else{
            this.service.signIn(employee['name'], employee['password']).subscribe(response => {
                // console.log(response);
                if (response['status'] === 'true') {
                    this.router.navigate(['/home'], response['result']);
                } else{
                    this.alertMessage = 'Check username or password';
                    this.alertSignin = true;
                }
            });
        }

    }

}
