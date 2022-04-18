import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/cc/child/child.component';
import { Child2Component } from './components/cc/child2/child2.component';
import { CtComponent } from './components/ct/ct.component';
import { FormsComponent } from './components/forms/forms.component';
import { CcComponent } from './components/cc/cc.component';
import { HomeComponent } from './components/home/home.component';
import { ChildAComponent } from './components/cc/child-a/child-a.component';
import { ChildBComponent } from './components/cc/child-b/child-b.component';
import { ChildCComponent } from './components/cc/child-c/child-c.component';
import { ChildDComponent } from './components/cc/child-d/child-d.component';
import { ChildEComponent } from './components/cc/child-e/child-e.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    CtComponent,
    FormsComponent,
    CcComponent,
    HomeComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent,
    ChildDComponent,
    ChildEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
