import { Component, signal, Input } from "@angular/core";
import { CommonModule } from '@angular/common'
import { trigger, state, style, transition, animate } from '@angular/animations';
import {ArticleContent} from "./content/article-content.component"


@Component({
    selector: 'article-grid-component',
    standalone: true,
    templateUrl: './article-grid.component.html',
    styleUrl: './article-grid.component.css',
    animations: [
        trigger('slide', [
            state('false', style({ translate: '-200%' })),
            state('true', style({ translate: 0 })),
            transition('false => true', animate('0.25s ease-in-out')),
            transition('true => false', animate('0.25s ease-in-out', style({ translate: '200%' })))
        ])],
    imports: [CommonModule, ArticleContent]
})


export class ArticleGrid {
    protected visible = signal(true);
    @Input() selectedArticle: number = 0
    pageToDisplay = "article"

    show_new_section(page: string) {
        this.visible.set(false)
        setTimeout(() => {
            this.pageToDisplay = page
            this.visible.set(true)
        }, 500);
    }

}