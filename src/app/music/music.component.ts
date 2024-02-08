import { Component, inject, OnInit} from '@angular/core';
import { MusicServicesService } from '../core/services/music-services.service';
import { Album } from '../core/interfaces/Album';
import { Songs } from '../core/interfaces/Songs';
import { CommonModule } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { AlbumCancionesComponent } from '../core/components/album-canciones/album-canciones.component';


@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {

  album: Album[] = [];
  songs: Songs[]= [];
  songsByAlbum: Songs[] = [];
  musicServices = inject(MusicServicesService)
  dialog =  inject(MatDialog);

  ngOnInit(): void {
    this.musicServices.getAll().then(res =>{ 
      if(res){
        this.album = res; 
      
      }
      });

      this.musicServices.getAllSongs().then(respuesta =>{
        if(respuesta){
          this.songs = respuesta;
        }
      })


  }




  abrirLista(id:number){

    this.musicServices.getByAlbum(id).then(canciones => {
      const dialogRef = this.dialog.open(AlbumCancionesComponent, {
        width: '500px', // Ajusta el ancho según tus necesidades
        backdropClass: 'blur-background',
        data: { songs: canciones } // Pasa los datos de las canciones al componente del modal
      });
    });



  }




}
