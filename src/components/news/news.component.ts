import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import newsData from "../../data/tempNews/news.json"

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArticles = newsData.data.articles
}
