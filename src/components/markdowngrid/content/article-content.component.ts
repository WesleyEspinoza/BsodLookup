import { Component, signal, Input } from "@angular/core";
import { CommonModule } from '@angular/common'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'article-content-component',
    standalone: true,
    templateUrl: './article-content.component.html',
    styleUrl: './article-content.component.css',
    animations: [
        trigger('slide', [
            state('false', style({ translate: '-200%' })),
            state('true', style({ translate: 0 })),
            transition('false => true', animate('0.25s ease-in-out')),
            transition('true => false', animate('0.25s ease-in-out', style({ translate: '200%' })))
        ])],
    imports: [CommonModule]
})


export class ArticleContent {
    protected visible = signal(true);
    @Input() selectedArticle: string = "bypass-online-setup"

    

    markdownContent = "src/data/ArticleMarkdownFiles/bypass-online-setup.md"

    ngOnInit() {


        this.markdownContent = "src/data/ArticleMarkdownFiles/" + this.selectedArticle + ".md"
    }
}