import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var slideIndex = 0;
    if (typeof document.getElementsByClassName("slides") !== 'undefined') {
      carousel();
    } else {
      console.log("slideshow not on this page")
    }


    function carousel() {
      // fix error handling
      var i: any
        let eles = document.getElementsByClassName("slides") as HTMLCollectionOf<HTMLElement>
        for (i = 0; i < eles.length; i++) {
          eles[i].style.display = "none";
        }
        slideIndex++;
      
        if (slideIndex > eles.length || slideIndex === 0) {
          slideIndex = 1
        }
      
        eles[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 3000);                                 
    }
  }
}


