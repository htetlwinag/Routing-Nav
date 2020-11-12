import { Component, OnInit } from '@angular/core';
import {CategoryService, Result} from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  result: any;

  constructor(public bookCategory: CategoryService) { }

  ngOnInit(): void {
    this.bookCategory.getBookCategory().subscribe(
      value => {
        this.result = value.result;
        console.log(value);
        },
      error => {}
    );
  }

}
