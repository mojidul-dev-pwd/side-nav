import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestOneComponent } from './test-list/test-one/test-one.component';
import { TestTwoComponent } from './test-list/test-two/test-two.component';
import { TestFrameComponent } from './test-list/test-frame/test-frame.component';
import { TestThreeComponent } from './test-list/test-three/test-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestOneComponent,
    TestTwoComponent,
    TestFrameComponent,
    TestThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
