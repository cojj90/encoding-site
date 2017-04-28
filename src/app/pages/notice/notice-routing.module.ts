import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from '../error/PageNotFound';
import { NoticeComponent } from './pages/notice.component';
import {NoticeBaseComponent} from './noticeBase.component';

const routes: Routes = [
  {
    path: ''
  },
  {
    path: 'hello', 
    component: NoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }