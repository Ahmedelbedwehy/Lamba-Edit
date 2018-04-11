import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {appConfig} from "../../../../app.config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-booking.component',
  templateUrl: './teacher-booking.component.html',
  styleUrls: ['./teacher-booking.component.scss']
})
export class BookingComponent implements OnInit {

  Users: any;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  getAllUsers() {
    this.http.get(appConfig.apiUrl + '/user/getAllUsers/')
      .subscribe((res: any) => {
        this.Users = res.data;
      });
  }

  viewUser(user) {
    if(user.role === 'Parent') {
      this.router.navigate(['profile/view-profile/view-parent'], {queryParams: {id: user._id}});
    }
    else if(user.role === 'Teacher') {
      this.router.navigate(['profile/view-profile/view-teacher'], {queryParams: {id: user._id}});
    }
  }

  ngOnInit() {
    this.getAllUsers();
  }
}
