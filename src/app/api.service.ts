import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }
  //link API
  apiURL() {
    return "http://localhost/api";
  }
  getMobil() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteMobil(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?id_mobil=' + id);
  }

  ambilMobil(id) {
    return this.http.get(this.apiURL() + '/lihat.php?id_mobil=' + id);
  }
}
