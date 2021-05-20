import { Component, OnInit } from '@angular/core';
import { Song } from '../songs';
import { SongService } from '../song.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[] = [];
  getSongs(): void {
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
  }
  constructor(private songService: SongService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSongs();
  }

}
