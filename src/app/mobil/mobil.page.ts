import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mobil',
  templateUrl: './mobil.page.html',
  styleUrls: ['./mobil.page.scss'],
})
export class MobilPage {
  id_mobil: any;
  merk: any;
  harga_sewa: any;
  mobil: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getMobil();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getMobil();
  }

  getMobil() {
    this._apiService.getMobil().subscribe((res: any) => {
      console.log("sukses", res);
      this.mobil = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data mobil',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }


  deleteMobil(id: any) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteMobil(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getMobil();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mobil',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }
}

