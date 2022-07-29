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

counter = 0;
counterFng: number | undefined;


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

   this.counterFng = window.setInterval( () =>{
      this.counter += 1;
      console.log('run counter' );
    },1000 );
  }

  ngAfterViewInit(){
      // after  render
      // handler children
      console.log('ngAgterViewInit' );
  }

  ngOnDestroy(){
      // delete
      console.log('ngOnDestroy' );
    window.clearInterval(this.counterFng) // manera correcta de limpiar el proceso y q no siga para simepre
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo ')
    this.loaded.emit(this.img);
  }

}
