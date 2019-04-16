import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PlacesService } from './Services/places.service';
import { PlaceIndexComponent} from './Components/place/place-index/place-index.component';
import { PlaceDetailComponent} from './Components/place/place-detail/place-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { TagsService } from './Services/tags.service';
import { TagIndexComponent } from './Components/tag/tag-index/tag-index.component';
import { TagRequestsService } from './Services/tagRequests.service';
import { TagRequestIndexComponent } from './Components/tagRequest/tag-request-index/tag-request-index.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TagRequestCreateComponent } from './Components/tagRequest/tag-request-create/tag-request-create.component';
import { PlaceCreateComponent } from './Components/place/place-create/place-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceIndexComponent,
    PlaceDetailComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    TagIndexComponent,
    TagRequestIndexComponent,
    TagRequestCreateComponent,
    PlaceCreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  exports: [

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    AppRoutingModule,
    PlacesService,
    TagsService,
    TagRequestsService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
