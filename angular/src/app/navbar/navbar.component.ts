import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isletmeIsim:string;
  isletmeID:number;
  kullaniciID:number;
  menuDurum:number=0;
  urlYol:string;
  constructor() { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.isletmeIsim=user.isletmeIsim;
    this.isletmeID=user.isletmeId;
    this.kullaniciID=user.kullaniciId;
    this.menuKontrol();

  }
 
  menuKontrol(){
   
   if(this.kullaniciID>1){this.menuDurum=1}
   if(this.isletmeID>1){this.menuDurum=2}
   
   console.log(this.menuDurum);
  }
  cikisYap(){
    localStorage.clear();
    location.pathname="";
  }


}
