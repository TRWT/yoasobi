import { Injectable } from '@angular/core';
import { Song } from'./songs';
import { SONGS } from './mock-songs';
import { Observable,of } from'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongs(): Observable<Song[]> {
    const songs = of(SONGS);
    this.messageService.add('SongService: fetched songs');
    return of(SONGS);
  }
  getSong(id: number): Observable<Song> {
      //发送消息之后提取歌曲
      this.messageService.add(`SongService: fetched song id=${id}`);
      return of(SONGS.find(song => song.id === id));
  }
  constructor(private messageService: MessageService) { }
}
