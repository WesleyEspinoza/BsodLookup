import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import osjsonData from "../../data/OS_DATA.json";
import motherboardjsonData from "../../data/OS_DATA.json";
import macjsonData from "../../data/OS_DATA.json";


interface OSData {
  osName: string;
  startUpKeys: StartUp[];
  commands: OSCommand[];
}

interface OSCommand {
  name: string;
  command: string;
  description: string;
}

interface StartUp {
  brand: string
  keys: StartUpkey[];
}

interface StartUpkey {
  description: string;
  key: string;
}


@Component({
  selector: 'toolsntips-page',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './toolsAndTips.component.html',
  styleUrl: './toolsAndTips.component.css'
})


export class ToolsAndTipsPage {
  @Input() selectedOS: string = "Windows"
  osData: OSData = { osName: "", startUpKeys: [], commands: [] }

  populateStartUpKeys(destination: OSData) {
    switch (destination.osName) {
      case "Windows":
        for (var brand in motherboardjsonData) {
          if (motherboardjsonData.hasOwnProperty(brand)) {
            const newStartUp: StartUp = { brand: "", keys: [] }

            newStartUp.brand = brand
            const skeys = motherboardjsonData[brand as keyof typeof motherboardjsonData];
            for (var key in skeys) {
              if (skeys.hasOwnProperty(key)) {
                const newStartUpkey: StartUpkey = { description: "", key: "" }
                newStartUpkey.description = key
                newStartUpkey.key = skeys[key as keyof typeof skeys]
                newStartUp.keys.push(newStartUpkey)
              }
            }
            destination.startUpKeys.push(newStartUp)
          }
        }

        break;
      case "macOS":

        break;
      case "Linux":
        for (var brand in motherboardjsonData) {
          if (motherboardjsonData.hasOwnProperty(brand)) {
            const newStartUp: StartUp = { brand: "", keys: [] }

            newStartUp.brand = brand
            const skeys = motherboardjsonData[brand as keyof typeof motherboardjsonData];
            for (var key in skeys) {
              if (skeys.hasOwnProperty(key)) {
                const newStartUpkey: StartUpkey = { description: "", key: "" }
                newStartUpkey.description = key
                newStartUpkey.key = skeys[key as keyof typeof skeys]
                newStartUp.keys.push(newStartUpkey)
              }
            }
            destination.startUpKeys.push(newStartUp)
          }
        }
        break;

      default:
        break;
    }
  }


  ngOnInit() {
    this.osData = { osName: "", startUpKeys: [], commands: [] }

    const newOS: OSData = { osName: "", startUpKeys: [], commands: [] }
    if (osjsonData.hasOwnProperty(this.selectedOS)) {
      const osCommands = osjsonData[this.selectedOS as keyof typeof osjsonData]
      newOS.osName = this.selectedOS

      for (var key in osCommands) {
        if (osCommands.hasOwnProperty(key)) {
          const val = osCommands[key as keyof typeof osCommands];
          const newCommand: OSCommand = { name: "", command: "", description: "" }
          newCommand.name = key
          newCommand.command = val["command"]
          newCommand.description = val["description"]
          newOS.commands.push(newCommand)
        }
        this.populateStartUpKeys(newOS)
      }
    }
    this.osData = newOS
    console.log(this.osData)
  }

  title = 'Tools and Tips';
}
