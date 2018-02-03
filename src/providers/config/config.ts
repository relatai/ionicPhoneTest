import { Injectable } from '@angular/core';

let config_key_name = "cel";

@Injectable()
export class ConfigProvider {
  
  

  constructor() {
  }

  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  setConfigData(registrou?: boolean, celular?: string) {
    let config = {
      registrou: false,
      celular: ""
    }

    if(registrou){
      config.registrou = registrou;
    }
    if(celular){
      config.celular = celular;
    }

    localStorage.setItem(config_key_name,JSON.stringify(config));
  }

}
