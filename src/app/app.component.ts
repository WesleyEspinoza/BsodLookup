import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ToolsAndTipsPage } from '../components/toolsandtipspage/toolsAndTips.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SlideComponent } from '../components/slide/slide.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatToolbarModule, MatButtonModule, SlideComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild('toolsntips-page') toolsAndTipsComp!: ToolsAndTipsPage;
  @ViewChild(SlideComponent, { static: true }) slide!: SlideComponent;
  selectedOS = "Windows"
  section = "bsod"

  options = [
    { value: 'Windows', label: 'Windows' },
    { value: 'macOS', label: 'MacOS' },
    { value: 'Linux', label: 'Linux' }
  ];

  onOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOS = selectedValue
  }

  public toggleSwichAnimforPage(page: string) {
    this.section = page
    this.slide.show_new_section(page);
  }

  ngOnInit() {
  }
  title = 'bsodLookup';
}
