import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    employees: Object;
    private usersObservable: Observable<any[]>;

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
    }

}
