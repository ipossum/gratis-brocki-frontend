import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserComponent } from './user/user.component';
import { PictureComponent } from './picture/picture.component';
import { MessageComponent } from './message/message.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
      { path: 'items/:itemId', component: ItemDetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    TopBarComponent,
    UserComponent,
    PictureComponent,
    MessageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
