import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BlogService } from './../blog.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  blogData: any;
  imagePath = environment.imagePath;

  // tslint:disable-next-line: variable-name
  constructor(
    private _blogService: BlogService,
    public meta: Meta, 
    public title: Title) { }

  ngOnInit() {

    this.blogslist();
  }


  blogslist() {
    this._blogService.getBlogsList().subscribe((doc) => {
      this.blogData = doc;
      this.title.setTitle('Merino Services | Blog');
      this.meta.updateTag({name: 'description', content: "description"});
      this.meta.updateTag({name: 'keywords', content: "keyword"});
      //console.log(this.blogData);
    },
    (err) => {
      console.log('error');
    }
    );
  }


}
