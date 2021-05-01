import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbard',
  templateUrl: './navbard.component.html',
  styleUrls: ['./navbard.component.css']
})
export class NavbardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      const toggleButton=document.getElementsByClassName("toggle-button")[0]
      const navbardLinks=document.getElementsByClassName("navbar-links")[0]
      toggleButton.addEventListener('click', ()=>{
          navbardLinks.classList.toggle("active")
      })
  }

}
