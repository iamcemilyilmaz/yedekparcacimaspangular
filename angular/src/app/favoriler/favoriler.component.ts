import { sonuc } from './../models/sonuc';
import { Favoriler } from './../models/Favoriler';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoriler',
  templateUrl: './favoriler.component.html',
  styleUrls: ['./favoriler.component.css']
})
export class FavorilerComponent implements OnInit {

  favori:Favoriler[];
  kullaniciID:number;
  constructor(
    public apiServis:ApiService
  ) { }

  ngOnInit() {
   
    var user: any = JSON.parse(localStorage.getItem("user"));
    
   this.kullaniciID=user.kullaniciId;
 this.rolKontrol();
    //console.log(user);
    this.favoriListele();  
  }

  favoriSil(id:number){
    this.apiServis.favoriSil(id).subscribe((s:sonuc)=>{
      s.mesaj="başarılı";
      console.log(s.mesaj);
      this.favoriListele();
    });
  }

  favoriListele(){
    this.apiServis.favoriListele(this.kullaniciID).subscribe((d:Favoriler[])=>{
this.favori=d;
console.log(d);
    }, err => {
      console.log("Başarısız.. "+Error);

    });
  }

  rolKontrol(){ 
      if(this.kullaniciID>1){} 
    else{ location.pathname="IsletmeUrunListele"; }  
  }
}
