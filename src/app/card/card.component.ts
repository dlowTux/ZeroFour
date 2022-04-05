import { Component, OnInit } from '@angular/core';
import { faMeh } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    faOm=faBan;
    faMeh=faMeh;
    faAt=faAt;
  constructor() { }

  ngOnInit(): void {
  }

}
