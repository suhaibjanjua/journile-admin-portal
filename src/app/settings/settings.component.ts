import { SettingService } from './../services/setting.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  RequestError: boolean;

  constructor(private settingService: SettingService) { }

  ngOnInit() {
  }

  update(resources) {

    this.settingService.UpdatePassword(resources)
    .subscribe(response => {
      console.log(response);
      if (response.responseCode === 200) {
        console.log('Successfully changed your password.');
        this.RequestError = false;
      } else {
        this.RequestError = true;
      }
    });

  }

}
