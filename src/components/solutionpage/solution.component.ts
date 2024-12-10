import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { bsodType } from "../searchresult/searchresult.component"

@Component({
  selector: 'solution-page',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'
})

export class SolutionPage {
  @Input() bsodInfo: bsodType = {stopCode: "", hexcode: "", definition: "", solution: ""}

  ngOnInit() {

  }

  title = 'bsodSolution';
}
