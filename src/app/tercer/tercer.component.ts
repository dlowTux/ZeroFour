import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tercer',
  templateUrl: './tercer.component.html',
  styleUrls: ['./tercer.component.css']
})
export class TercerComponent implements OnInit {
    faEye=faEye
    faBug=faBug
  constructor() { }

  ngOnInit(): void {
  }

}
