import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { SearchResult } from '../components/searchresult/searchresult.component';
import { ToolsAndTipsPage } from '../components/toolsandtipspage/toolsAndTips.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SearchResult, ToolsAndTipsPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  ngOnInit() {
  }
  title = 'bsodLookup';
}
