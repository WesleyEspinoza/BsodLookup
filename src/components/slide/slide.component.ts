import { Component, signal, Input } from "@angular/core";
import { CommonModule } from '@angular/common'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SearchResult } from "../searchresult/searchresult.component";
import { ToolsAndTipsPage } from "../toolsandtipspage/toolsAndTips.component";
import { ArticleGrid } from "../markdowngrid/article-grid.component";


@Component({
    selector: 'slide-component',
    standalone: true,
    templateUrl: './slide.component.html',
    styleUrl: './slide.component.css',
    animations: [
        trigger('slide', [
            state('false', style({ translate: '-200%' })),
            state('true', style({ translate: 0 })),
            transition('false => true', animate('0.25s ease-in-out')),
            transition('true => false', animate('0.25s ease-in-out', style({ translate: '200%' })))
        ])],
    imports: [SearchResult, ToolsAndTipsPage, CommonModule, ArticleGrid]
})


export class SlideComponent {
    protected visible = signal(true);
    pageToDisplay = "news"

    show_new_section(page: string) {
        this.visible.set(false)
        setTimeout(() => {
            this.pageToDisplay = page
            this.visible.set(true)
        }, 500);
    }
}