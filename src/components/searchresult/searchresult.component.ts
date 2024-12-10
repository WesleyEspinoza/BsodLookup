import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SolutionPage }  from "../solutionpage/solution.component"

import bsodjsonData from "../../data/BSOD_DATA.json"


export interface bsodType {
  stopCode: String
  hexcode: string;
  definition: string;
  solution: string;
}

@Component({
  selector: 'search-result',
  imports: [
    RouterOutlet,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SolutionPage
],
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})

export class SearchResult {

  mainSearchBar = new FormControl();
  public keepOriginalOrder = (a: any, b: any) => a.key;
  public bsodData: any = { bsodCodes: [] }
  options: bsodType[] = [];
  filteredOptions: Observable<bsodType[]> = this.mainSearchBar.valueChanges;
  currentSelection: bsodType = { stopCode: "", hexcode: "", definition: "", solution: "", }
  @ViewChild('solution-page') solutionComp!: SolutionPage;

  ngOnInit() {

    this.filteredOptions = this.mainSearchBar.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );

    this.mainSearchBar.statusChanges
  
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
    this.options = this.bsodData.bsodCodes
  }

  private _filter(value: string): bsodType[] {
  let newValue = value
    if (value[value.length - 1] === " ")
    {
        newValue = value.replace(/.$/,"_")
        this.mainSearchBar.setValue(newValue)
    }
    const filterValue = newValue.toLowerCase();
    return this.options.filter(option => option.stopCode.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
    const selectedOption = event.option.value;
    const val = bsodjsonData[selectedOption as keyof typeof bsodjsonData];
    const newCode: bsodType = { stopCode: "", hexcode: "", definition: "", solution: "", }
    newCode.stopCode = selectedOption
    newCode.hexcode = val["hexcode" as keyof typeof val]
    newCode.definition = val["definition" as keyof typeof val]
    newCode.solution = val["solution" as keyof typeof val]
    this.currentSelection = newCode
  }
}
