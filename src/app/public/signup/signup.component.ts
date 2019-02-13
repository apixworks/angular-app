import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    private name = '';
    private mobile = '';
    private password = '';
    private position = '';

    constructor(private service: HttpService, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        const employee = {
            'name': this.name,
            'mobile': this.mobile,
            'password': this.password,
            'position': this.position
        };
        this.service.registerEmployee(employee).subscribe(response => {
            console.log(response);

            this.router.navigate(['/']);
        });
    }

}