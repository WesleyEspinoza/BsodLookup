import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import bsodjsonData from "../../data/BSOD_DATA.json"


interface bsodType {
  stopCode: String
  hexcode: string;
  definition: string;
  solution: string;
}

interface bsodArrayType {

  bsodCodes: [bsodType]
}


@Component({
  selector: 'search-result',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})

export class SearchResult {
  public keepOriginalOrder = (a: any, b: any) => a.key;
  public bsodData: any = { bsodCodes: [] }

  ngOnInit() {

    for (var key in bsodjsonData) {
      if (bsodjsonData.hasOwnProperty(key)) {
        const val = bsodjsonData[key as keyof typeof bsodjsonData];
        const newCode: bsodType = { stopCode: "", hexcode: "", definition: "", solution: "", }
        newCode.stopCode = key
        newCode.hexcode = val["hexcode" as keyof typeof val]
        newCode.definition = val["definition" as keyof typeof val]
        newCode.solution = val["solution" as keyof typeof val]
        this.bsodData.bsodCodes.push(newCode)
      }
    }
  }
}
