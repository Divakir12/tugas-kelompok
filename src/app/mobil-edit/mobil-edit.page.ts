import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-mobil-edit',
  templateUrl: './mobil-edit.page.html',
  styleUrls: ['./mobil-edit.page.scss'],
})
export class MobilEditPage implements OnInit {
  id_mobil: any;
  merk: any;
  harga_sewa: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_mobil = param.id_mobil;
      console.log(this.id_mobil);
      this.ambilMobil(this.id_mobil);
    })
  }

  ngOnInit() {
  }


  ambilMobil(id_mobil) {
    this._apiService.ambilMobil(id_mobil).subscribe((res: any) => {
      console.log('sukses', res);
      let mobil = res;
      //console.log(mobil);
      this.merk = mobil.merk;
      this.harga_sewa = mobil.harga_sewa;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editMobil() {
    let url = this._apiService.apiURL() + "/edit.php";
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
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Mobil',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/mobil');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Mobil',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}