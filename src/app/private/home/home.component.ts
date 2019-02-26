import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    employees: Object[];
    private id = '';
    private name = '';
    private mobile = '';
    private password = '';
    private position = '';
    private alertEdit = false;
    private alertMessage = '';

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.getUsersFromService();
    }

    private getUsersFromService() {
        this.httpService.getEmployees().subscribe(data => {
            console.log('getEmployee request completed!');
            data = {
                'employees': data
            };
            this.employees = data['employees']['result'];
            console.log(this.employees);
        });
    }

    onClickRefreshList() {
        this.getUsersFromService();
    }

    onClickDeleteUser(id) {
        console.log('User to delete: ' + id);
        this.httpService.deleteUser(id).subscribe(respose => {
            console.log(respose);

            this.employees = [];
            this.getUsersFromService();
        });
        this.alertMessage = 'Deleted';
        this.alertEdit = true;
    }

    addEditEmployee(id) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i]['id'] === id) {
                this.id = this.employees[i]['id'];
                this.name = this.employees[i]['name'];
                this.mobile = this.employees[i]['mobile'];
                this.password = this.employees[i]['password'];
                this.position = this.employees[i]['position'];
            }
        }
    }
    editEmployee() {
        const employee = {
            'id': this.id,
            'name': this.name,
            'mobile': this.mobile,
            'password': this.password,
            'position': this.position
        };
        this.httpService.editEmployee(employee).subscribe(response => {
            console.log(response);
        });
        this.alertMessage = 'Edited';
        this.alertEdit = true;
    }

}
