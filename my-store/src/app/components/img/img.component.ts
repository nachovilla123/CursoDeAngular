import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

@Input() img : String = 'valor init'

  constructor() { }

  ngOnInit(): void {
  }

}
