import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import bsodjsonData from "../../data/BSOD_DATA.json"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public keepOriginalOrder = (a: any, b: any) => a.key
  bsodData: any

  ngOnInit() {

    this.bsodData = bsodjsonData;

  }
  title = 'bsodLookup';
}
