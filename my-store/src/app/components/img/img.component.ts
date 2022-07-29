import { Component, OnInit , Input , Output, EventEmitter , OnChanges, AfterViewInit ,OnDestroy} from '@angular/core';
// para comunicar al padre Output y EventEmitter
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit ,OnDestroy{

@Input() img : String = 'valor init'
@Output() loaded = new EventEmitter<String>();

imageDefault = './assets/images/default.png'

  constructor() {
    //before render   async -- once time

    console.log('constructor' , 'imgValue =>',this.img);
   }


   ngOnChanges(){
  //before render  actualiza los cambios en inputs , corre muchas veces. --during render
  console.log('ngOnChanges' , 'imgValue =>',this.img);

   }

  ngOnInit(): void {
    // before render
    // async fetch llamadas a api(x tiempo respuesta servidor)  -- corre una sola vez
    console.log('ngOnInit' , 'imgValue =>',this.img);
  }

  ngAfterViewInit(){
      // after  render
      // handler children
      console.log('ngAgterViewInit' );
  }

  ngOnDestroy(){
      // delete
      console.log('ngOnDestroy' );

  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo ')
    this.loaded.emit(this.img);
  }

}
