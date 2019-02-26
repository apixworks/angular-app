import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    getEmployees() {
        console.log('getEmployee request started!');
        return this.http.get('http://localhost/end_point/public/employees');
    }

    signIn(username, password) {
        console.log('Sign In started!');
        console.log('username: ' + username + ', password: ' + password);
        return this.http.get('http://localhost/end_point/public/employee/login?name=' + username + '&password=' + password);
    }

    registerEmployee(employee) {
        console.log('register employee request started!');
        return this.http.post('http://localhost/end_point/public/employees', employee);
    }

    editEmployee(employee) {
        console.log('editing employee request started!');
        return this.http.post('http://localhost/end_point/public/employee/edit', employee);
    }

    deleteUser(id) {
        console.log('deleteEmployee request started!');
        return this.http.delete('http://localhost/end_point/public/employees/' + id);
    }
}
