import { UrunlerimComponent } from './urunlerim/urunlerim.component';
import { FavorilerComponent } from './favoriler/favoriler.component';
import { UrunListeleComponent } from './urunListele/urunListele.component';
import { UrunEkleComponent } from './urunEkle/urunEkle.component';
import { IsletmeUrunlisteleComponent } from './isletmeUrunlistele/isletmeUrunlistele.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { IsletmeComponent } from './isletme/isletme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  { path: '', component: AnasayfaComponent },
  { path: 'isletme', component: IsletmeComponent },
  { path: 'kullanici', component: KullaniciComponent },
  { path: 'IsletmeUrunListele', component: IsletmeUrunlisteleComponent },
  { path: 'urunEkle', component: UrunEkleComponent },
  { path: 'urunListele', component: UrunListeleComponent },
  { path: 'favoriler', component: FavorilerComponent },
  { path: 'urunlerim', component: UrunlerimComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
