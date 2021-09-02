import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../get-profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  repos: any;
  followers: any;
  following: any;
  username!: string;
  constructor(private service: ProfileService) { }

  submitInput(){
    this.service.updateFields(this.username);
    this.service.getProfileData().subscribe(profile => {
      this.userProfile = profile;
    }, error => {

    });

    this.service.getRepoData().subscribe(repos => {
      this.repos = repos;
    });
    
    this.service.getFollowers().subscribe(followers => {
      this.followers = followers;
    });

    this.service.getFollowing().subscribe(following => {
      this.following = following;
    });
  }
  ngOnInit(): void {
  }

}
