import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsletmeComponent } from './isletme/isletme.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { HttpClientModule  } from '@angular/common/http';
import { IsletmeUrunlisteleComponent } from './isletmeUrunlistele/isletmeUrunlistele.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UrunEkleComponent } from './urunEkle/urunEkle.component';
import { UrunListeleComponent } from './urunListele/urunListele.component';
import { FavorilerComponent } from './favoriler/favoriler.component';
import { UrunlerimComponent } from './urunlerim/urunlerim.component';


@NgModule({
  declarations: [							
    AppComponent,
    AnasayfaComponent,
    NavbarComponent,
      IsletmeComponent,
      KullaniciComponent,
      IsletmeUrunlisteleComponent,
      UrunEkleComponent,
      UrunListeleComponent,
      FavorilerComponent,
      UrunlerimComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
