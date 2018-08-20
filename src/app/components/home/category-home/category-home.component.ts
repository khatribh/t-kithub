import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service.client';

@Component({selector: 'app-category-home', templateUrl: './category-home.component.html', styleUrls: ['./category-home.component.scss']})
export class CategoryHomeComponent implements OnInit {
  categories = [];
  genres = [];
  constructor(private categoryService : CategoryService) {}

  ngOnInit() {
    this.getCategory();
    //console.log(this.genres);
  }
  // Function to fetch all the categories of events
  getCategory() {
    this
      .categoryService
      .getCategories()
      .subscribe((categories) => {
        for (let segment of categories._embedded.classifications) {
          if (segment.segment != undefined) {
            this
              .genres
              .push(segment.segment);
              
          }

        }

      })
  }

}
