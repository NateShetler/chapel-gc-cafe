import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemsComponent } from './components/menu/menu-items/menu-items.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    MenuItemsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
