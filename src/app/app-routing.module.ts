import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './pages/error/PageNotFound';
import { BlankComponent } from './pages/blank/blank.component';
import { NoticeBaseComponent } from './pages/notice/noticeBase.component';

const routes: Routes = [
  {
    path: '', component: BlankComponent,
    children: []
  },
  {
    path: 'notice', component: NoticeBaseComponent, loadChildren: 'app/pages/notice/noticeBase.module#NoticeBaseModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
