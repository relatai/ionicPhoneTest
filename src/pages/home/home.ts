import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { _document } from '@angular/platform-browser/src/browser';
//import { FormControl } from '@angular/forms/src/model';
//import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //cadastro: any = {};
  private cel: string = "";

  constructor(public navCtrl: NavController/*, public formBuilder: FormBuilder*/) {
    //this.cadastro = this.formBuilder.group({
    //  celular: ['', Validators.required]
    //})
  }

  /*postDados() {
    console.log(this.cadastro.value);

    let botao = document.getElementById("botao");

    if (localStorage.getItem("config") == null) {

      let config = {
        registrou: true,
        celular:this.cadastro.value.celular
      }

      localStorage.setItem("config", JSON.stringify(config));
      alert("Ação realizada com sucesso!");
      botao.disabled = "disabled";

    } else {
      //document.getElementById("botao").hidden = true;
      alert("Já existe um celular registrado, operação ilegal");
      botao.disabled = "disabled";
      
    }
  }*/

  checar() {

    let botao = document.getElementById("botao");

    if (localStorage.getItem("cel") == null) {

      let config = {
        registrou: true,
        celular: this.cel
      }

      localStorage.setItem("cel", JSON.stringify(config));
      alert("Ação realizada com sucesso!");
      //botao.disabled = "disabled";

    } else {
      //document.getElementById("botao").hidden = true;
      alert("Já existe um celular registrado, operação ilegal");
      //botao.disabled = "disabled";
    }
  }

}
