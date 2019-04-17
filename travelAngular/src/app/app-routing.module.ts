import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceIndexComponent } from './Components/place/place-index/place-index.component';
import { PlaceDetailComponent } from './Components/place/place-detail/place-detail.component';
import { AboutComponent } from './Components/about/about.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TagIndexComponent } from './Components/tag/tag-index/tag-index.component';
import { TagRequestIndexComponent } from './Components/tagRequest/tag-request-index/tag-request-index.component';
import { HomeComponent } from './Components/home/home.component';
import { TagRequestCreateComponent } from './Components/tagRequest/tag-request-create/tag-request-create.component';
import { PlaceCreateComponent } from './Components/place/place-create/place-create.component';
import { PlaceEditComponent } from './Components/place/place-edit/place-edit.component';
import { PlaceDeleteComponent } from './Components/place/place-delete/place-delete.component';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'Home',   component: HomeComponent},
  // {
  //   path: 'places',
  //   children: [
  //     {path:'', component:PlaceIndexComponent},
  //     {path:'create',component:PlaceCreateComponent},
  //     {path:'detail/:id',component:PlaceDetailComponent},
  //     {path:'edit/:id',component:PlaceEditComponent},
  //     {path:'delete/:id',component:PlaceDeleteComponent}
  //   ]
  // },
  { path: 'places', component:PlaceIndexComponent},
  { path: 'placeCreate', component:PlaceCreateComponent},
  { path: 'placeDetail',component:PlaceDetailComponent},
  { path: 'placeEdit', component:PlaceEditComponent},
  { path: 'placeDelete',component:PlaceDeleteComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'tags' , component: TagIndexComponent},
  { path: 'tagRequests', component: TagRequestIndexComponent },
  { path: 'tagRequests/create', component: TagRequestCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
