import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'solution-page',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'
})

export class AppComponent {
  public keepOriginalOrder = (a: any, b: any) => a.key;
  public bsodData: any = { bsodCodes: [] }

  ngOnInit() {

  }
  title = 'bsodSolution';
}
