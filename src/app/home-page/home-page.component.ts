import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { RefDirective } from '../rf.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver ) { }

  ngOnInit() {
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = "Dynamic Modal";
    component.instance.close.subscribe(()=> {
      this.refDir.containerRef.clear();
    })
  }

}
