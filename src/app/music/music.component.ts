import { Component, inject, OnInit} from '@angular/core';
import { MusicServicesService } from '../core/services/music-services.service';
import { Album } from '../core/interfaces/Album';
import { Songs } from '../core/interfaces/Songs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
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




  abrirLista(){

    const dialogRef = this.dialog.open(AlbumCancionesComponent, {
      width: '500px', // Ajusta el ancho según tus necesidades
      data: { songs: this.songs } // Pasa los datos de las canciones al componente del modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal de la lista de canciones ha sido cerrado.');
    });
  }


  traerCanciones(){
    
  }

}
