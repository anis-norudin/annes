import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraTabDefaultPagePage } from '../camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  tab1Root: any = CameraTabDefaultPagePage;
  tab2Root: any = CartTabDefaultPagePage;
  tab3Root: any = CloudTabDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
