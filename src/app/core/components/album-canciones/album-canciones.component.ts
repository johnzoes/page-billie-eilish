import { Component, Inject, OnInit } from '@angular/core';
import { Songs } from '../../interfaces/Songs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-canciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-canciones.component.html',
  styleUrl: './album-canciones.component.css'
})
export class AlbumCancionesComponent implements OnInit {


  song: Songs[] | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit(): void {

    if (this.data && this.data.songs) {
      this.song = this.data.songs;
    }
 
  }

  
  



}
