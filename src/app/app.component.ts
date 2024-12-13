import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('toolsntips-page') toolsAndTipsComp!: ToolsAndTipsPage;
  selectedOS = "Windows"

  options = [
    { value: 'Windows', label: 'Windows' },
    { value: 'macOS', label: 'MacOS' },
    { value: 'Linux', label: 'Linux' }
  ];

  onOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOS = selectedValue
  }

  ngOnInit() {
  }
  title = 'bsodLookup';
}
