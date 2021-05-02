import { Component, OnInit } from '@angular/core';
import { faDna } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
faDna=faDna
  constructor() { }

  ngOnInit(): void {
  }

}
