import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  constructor() { }
  slides = [{'image': '../../assets/araba.png'}, {'image': '../../assets/araba2.png'},{'image': '../../assets/araba3.png'}, {'image': '../../assets/araba4.png'}];
  ngOnInit(): void {
  }

}
