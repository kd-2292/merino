import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogId: any;
  blogDetail: any;
  imagePath = environment.imagePath;

  // tslint:disable-next-line: variable-name
  constructor(
    private _blogService: BlogService, 
    private _route: Router, 
    private route: ActivatedRoute,
    public meta: Meta, 
    public title: Title) {}

  ngOnInit() {
      this.blogId = this.route.snapshot.paramMap.get('slug');
      this.blogsDetails(this.blogId);
      // alert(this.blogId);
  }

  blogsDetails(id: any) {
    this._blogService.getBlogDetail(id).subscribe((doc) => {
      this.blogDetail = doc;
      this.title.setTitle(this.blogDetail.data.title);
      this.meta.updateTag({name: 'description', content: this.blogDetail.data.meta_description});
      this.meta.updateTag({name: 'keywords', content: this.blogDetail.data.meta_keyword});
      console.log(this.blogDetail);
    },
    (err) => {
      console.log('error');
    }
    );
  }

}
