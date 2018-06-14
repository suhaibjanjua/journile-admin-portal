import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: any;
  name: string;
  channelUrl: string;
  RequestError: boolean;
  logoFile: File;
  logoFileName: any;
  journileAdminPostImage: any;
  formData = new FormData();

  constructor( private channelService: ChannelService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.channelService.getAll().subscribe(response => {
      console.log(response);

      if (response.responseCode === 200) {
        this.channels = response.details;
      } else {
        console.log(response.responseDescription);
        alert(response.responseDescription);
      }

   });
  }

  channelLogo($event) {
    const inputValue = $event.target;
     if ( null == inputValue || null == inputValue.files[0]) {
        console.log('Input file error.');
        return;
     } else {
        console.log(inputValue.files[0]);
        console.log(inputValue.files[0].name);
        this.logoFile = inputValue.files[0];
        this.logoFileName = this.logoFile.name;
        this.journileAdminPostImage = 'JournileAdminPostImage.' + this.logoFileName.split('.').pop();
        this.formData.append('JournileAdminPostImage', this.logoFile, this.journileAdminPostImage);
        console.log(this.formData);
     }
   }

   update() {

    this.channelService.create(this.formData, this.name, this.channelUrl, this.logoFile)
    .subscribe(response => {
      console.log(response);
      if (response.responseCode === 200) {
        console.log('Channel has been updated successfully.');
        alert('Channel has been updated successfully.');
      } else {
        console.log(response.responseDescription);
        alert(response.responseDescription);
      }
    });

  }

  delete(id, name) {

    if (confirm('Are you sure to delete "' + name + '" channel?')) {

      this.channelService.delete(id)
      .subscribe(response => {
        console.log(response);
        if (response.responseCode === 200) {
          console.log('Channel is deleted successfully.');
          alert('Channel is deleted successfully.');
          this.getAll();
        } else {
          console.log(response.responseDescription);
          alert(response.responseDescription);
        }
      });

    }
  }
}
