import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFrameComponent } from './test-list/test-frame/test-frame.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestOneComponent } from './test-list/test-one/test-one.component';
import { TestThreeComponent } from './test-list/test-three/test-three.component';
import { TestTwoComponent } from './test-list/test-two/test-two.component';

const routes: Routes = [
  {
    path: '',
    component: TestListComponent,
  },
  {
    path: 'component/:id',
    component: TestFrameComponent,
    children: [
        { path: 'test-one', component: TestOneComponent },
        { path: 'test-two', component: TestTwoComponent },
        { path: 'test-three', component: TestThreeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
