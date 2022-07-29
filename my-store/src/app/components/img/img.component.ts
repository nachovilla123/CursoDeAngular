import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
// para comunicar al padre Output y EventEmitter
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

@Input() img : String = 'valor init'
@Output() loaded = new EventEmitter<String>();

imageDefault = './assets/images/default.png'

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo ')
    this.loaded.emit(this.img);
  }

}
