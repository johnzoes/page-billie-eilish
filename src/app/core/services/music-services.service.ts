import { Injectable } from '@angular/core';
import { Album } from '../interfaces/Album';
import { Songs } from '../interfaces/Songs';

@Injectable({
  providedIn: 'root'
})
export class MusicServicesService {

  constructor() {  }

  async getAll():Promise<Album[]>{
    const res = fetch("./../../../../assets/data/database.json")
    const resJson = (await res).json();
    console.log(resJson)
    return resJson
  }


  async getAllSongs():Promise<Songs[]>{
    const res = fetch("./../../../../assets/data/database2.json")
    const resJson = (await res).json();
    console.log(resJson)
    return resJson
  }

}
