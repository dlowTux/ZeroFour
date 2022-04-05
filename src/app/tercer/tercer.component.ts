import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tercer',
  templateUrl: './tercer.component.html',
  styleUrls: ['./tercer.component.css']
})
export class TercerComponent implements OnInit {
    faDownload=faDownload
  
    lenguages:string[]=['docker',"github","java","linux","mysql","python","flutter"];
    constructor() { }

  ngOnInit(): void {
  }

}
