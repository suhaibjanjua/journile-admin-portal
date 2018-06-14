import { GammaTagService } from './../services/gamma-tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamma-tags',
  templateUrl: './gamma-tags.component.html',
  styleUrls: ['./gamma-tags.component.css']
})
export class GammaTagsComponent implements OnInit {
  gammaTags: any;
  name: string;
  url: string;

  constructor( private gammaTagService: GammaTagService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.gammaTagService.getAll().subscribe(response => {
      console.log(response);

      if (response.responseCode === 200) {
        this.gammaTags = response.details;
      } else {
        console.log(response.responseDescription);
        alert(response.responseDescription);
      }

   });
  }

  update() {

    this.gammaTagService.create(this.name, this.url)
    .subscribe(response => {
      console.log(response);
      if (response.responseCode === 200) {
        console.log('Gamma Tag has been updated successfully.');
        alert('Gamma Tag has been updated successfully.');
      } else {
        console.log(response.responseDescription);
        alert(response.responseDescription);
      }
    });

  }

  delete(id, name) {

    if (confirm('Are you sure to delete "' + name + '" gamma Tag?')) {

      this.gammaTagService.delete(id)
      .subscribe(response => {
        console.log(response);
        if (response.responseCode === 200) {
          console.log('Gamma Tag is deleted successfully.');
          alert('Gamma Tag is deleted successfully.');
          this.getAll();
        } else {
          console.log(response.responseDescription);
          alert(response.responseDescription);
        }
      });

    }
  }
}
