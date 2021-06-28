import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import { RoomsService } from '../../services/rooms.service';
import { debounceFn } from 'debounce-decorator-ts';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.page.html',
  styleUrls: ['./select-room.page.scss'],
})
export class SelectRoomPage implements OnInit {

  rooms: Room[];

  roomName: string;

  constructor(private roomsService: RoomsService,
              private navController: NavController,
              public authSvc: AuthService) { }

  ngOnInit() {
    this.searchRoom('');
  }

  @debounceFn(500)
  searchRoom(q: string) {
    const params: any = {};
    if (q) { params.q = q; }
    this.roomsService.find(params).subscribe(rooms => this.rooms = rooms);
  }

  joinRoom(room: Room) {
    this.navController.navigateRoot('chat-room/' + room._id);
  }

  addRoom() {
    this.roomsService.save({name: this.roomName}).subscribe(room => {
      this.roomName = '';
      this.rooms.push(room);
    });
  }
}
