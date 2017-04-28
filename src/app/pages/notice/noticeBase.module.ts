import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './pages/notice.component';
import { NoticeBaseComponent } from './noticeBase.component';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NoticeRoutingModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    NoticeComponent 
  ]
})
export class NoticeBaseModule { }
