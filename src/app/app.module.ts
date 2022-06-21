import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
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

//swagger
//import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ItemControllerService } from './services/itemController.service';
import { MessageControllerService } from './services/messageController.service';
import { PictureControllerService } from './services/pictureController.service';
import { UserControllerService } from './services/userController.service';

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
  providers: [
    ItemControllerService,
    MessageControllerService,
    PictureControllerService,
    UserControllerService ],
  bootstrap: [
    AppComponent
  ]
})
//export class AppModule { }

export class AppModule {
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [ { provide: Configuration, useFactory: configurationFactory } ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: AppModule,
               @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

