import { Component, signal, Input } from "@angular/core";
import { CommonModule } from '@angular/common'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MarkdownComponent } from 'ngx-markdown';


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
    imports: [CommonModule, MarkdownComponent]
})


export class ArticleContent {
    protected visible = signal(true);
    @Input() selectedArticle = "bypass_online_setup"

    markdownContent: any = '../../../data/ArticleMarkdownFiles/' + this.selectedArticle + ".md"

    ngOnInit() {

        console.log(this.markdownContent)
    }
}