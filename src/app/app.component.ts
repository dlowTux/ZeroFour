import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMeh } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zerofour';
    faOm=faBan;
    faMeh=faMeh;
    faAt=faAt;
   faCoffee = faCheckCircle; 
    faUser=faUser;
}
