import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { MusicComponent } from './music/music.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [

    {
        path: "",
         component : HomeComponent
    },
    
    {
        path: "videos",
         component : VideosComponent
    },
    {
        path: "music",
         component : MusicComponent
    },
    {
        path: "shop",
         component : ShopComponent
    },



];
