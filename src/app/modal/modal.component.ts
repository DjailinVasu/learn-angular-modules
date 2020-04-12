import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() title = 'Modal title'
  @Output() close = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }


}
