import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'app header!';

  @Input() name: string;
  
  constructor(@Inject(DOCUMENT) private document: Document){
    
  }

}
