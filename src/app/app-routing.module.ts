import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiggyComponent } from './swiggy/swiggy.component';
import { MainComponent } from './main/main.component';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {path:'',component:MainComponent
  },
  {path:'details',component:JavascriptComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
