import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  address = "../../assets/bg/landing-mobile/";
  desktop= [];
  mobile = [
    'adis-vibes',
    'bar',
    'dine',
    'good-vibes',
    'quality'
  ];
  imageObject: Array<object> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getImage(this.mobile);
  }

  getImage(device) {
    device.forEach((name) => {
      let img = this.address+name+'.jpeg';
      this.imageObject.push({
        image: img,
        thumbImage: img,
        alt: name+' image'
      });
    });
  }

}
