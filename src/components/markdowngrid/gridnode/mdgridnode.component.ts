import { Component, signal, Input } from "@angular/core";
import { CommonModule } from '@angular/common'
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'gridnode-component',
    standalone: true,
    templateUrl: './mdgridnode.component.html',
    styleUrl: './mdgridnode.component.css',
    animations: [
        trigger('slide', [
            state('false', style({ translate: '-200%' })),
            state('true', style({ translate: 0 })),
            transition('false => true', animate('0.25s ease-in-out')),
            transition('true => false', animate('0.25s ease-in-out', style({ translate: '200%' })))
        ])],
    imports: [CommonModule]
})


export class GridNode {
    protected visible = signal(true);
    @Input() selectedOS: string = "Windows"
    pageToDisplay = "bsod"

    show_new_section(page: string) {
        this.visible.set(false)
        setTimeout(() => {
            this.pageToDisplay = page
            this.visible.set(true)
        }, 500);
    }

}