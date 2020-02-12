import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-ring',
  templateUrl: './music-ring.component.html',
  styleUrls: ['./music-ring.component.scss']
})
export class MusicRingComponent implements OnInit {

  tracks: any = [
    {
      trackName: 'Summer Love',
      artworkUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/97/5a/9a/975a9aaf-d087-2ccf-73c7-f305a698e270/source/600x600bb.jpg',
      artistName: 'Rita Ora & Rudimental',
      procentages: 40
    },
    {
      trackName: 'Kūrinio vardas',
      artworkUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/8b/39/c4/8b39c4c8-f28d-2951-b787-e4db2f7b97b4/source/600x600bb.jpg',
      artistName: 'Atlikėjas',
      procentages: 80
    },
    {
      trackName: 'Origins (Deluxe)',
      artworkUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/82/47/cc/8247cc3a-4a2b-8383-cd12-0ea2ff5747dd/source/600x600bb.jpg',
      artistName: 'Imagine Dragons',
      procentages: 60
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
