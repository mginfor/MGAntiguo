import { SearchService } from './../../services/search.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public categories = [];
  public filter: any;


  constructor(private _blogService: BlogService, private _userService: SearchService) { }

  public mainPost: any;
  public otherPosts: any = [];
  public criteria = "";
  ngOnInit(): void {


    this.getBlogs();
    this.getCategories();


  }

  getCategories() {
    this._blogService.getCategories().subscribe(
      response => {

        if (response.success == true) {
          this.categories = response.categories;
        }
      }, error => {
        console.error(error);
      }
    )
  }

  getBlogs() {
    this._blogService.getResumedBlogs().subscribe(
      response => {
        if (response.success == true) {
          this.mainPost = response.blogs[0];
          if (response.blogs.length > 0) {
            for (let x = 1; x <= response.blogs.length - 1; x++) {
              this.otherPosts.push(response.blogs[x])
            }
          }

        }
      }, error => {
        console.error(error);
      }
    )
  }
  // buscador


  filterBlog(category) {
    this.otherPosts = [];
    this.mainPost = null;
    this._blogService.findCategory(category).subscribe(
      response => {
        if (response.success) {
          this.mainPost = response.blogs[0];
          if (response.blogs.length > 0) {
            for (let x = 1; x <= response.blogs.length - 1; x++) {
              this.otherPosts.push(response.blogs[x])
            }
          }
        }else{
          this.getBlogs();
        }
      }, error => {
        console.error(error);
      }
    )
  }

  get_page() {
    this.otherPosts = [];
    this.mainPost = null;

    this._userService.find_page(this.criteria).subscribe(
      response => {
        if (response.success) {


          this.mainPost = response.blogs[0];
          if (response.blogs.length > 0) {
            for (let x = 1; x <= response.blogs.length - 1; x++) {
              this.otherPosts.push(response.blogs[x])
            }
          }

        } else {
          this.getBlogs();
        }

      }, error => {
        console.error('error: ', error);
      }
    )
  }












}
