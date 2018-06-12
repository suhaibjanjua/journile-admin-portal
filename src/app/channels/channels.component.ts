import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: any;

  constructor( private channelService: ChannelService) {
  }

  ngOnInit() {

     this.channelService.getAll().subscribe(response => {
        console.log(response);

        if (response.responseCode === 200) {
          this.channels = response.details;
        } else {
          // this.invalidLogin = true;
        }

     });
  }

}