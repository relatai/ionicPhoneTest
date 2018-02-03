import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ConfigProvider } from '../providers/config/config';
import { textDef } from '@angular/core/src/view/text';
@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
     let config = configProvider.getConfigData();
     if(config== null){
       alert ("Ainda não existe celular gravado no localStorage");
     } else{
       alert ("O número do seu celular é: " + JSON.parse(configProvider.getConfigData()).celular );
     }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

