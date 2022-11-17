import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-mobil-tambah',
  templateUrl: './mobil-tambah.page.html',
  styleUrls: ['./mobil-tambah.page.scss'],
})
export class MobilTambahPage implements OnInit {
  id_mobil: any;
  merk: any;
  harga_sewa: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addMobil() {
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_mobil: this.id_mobil,
        merk: this.merk,
        harga_sewa: this.harga_sewa
      },
    }).then((data) => {
      this.id_mobil = '';
      this.merk = '';
      this.harga_sewa = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Mobil',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/mobil');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Mobil',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}