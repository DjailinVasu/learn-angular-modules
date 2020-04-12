import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { RefDirective } from '../rf.directive';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
    ) {
      this.title.setTitle('Home Page');
      this.meta.addTags([
        {name: 'keywords', content: 'angular, learn, tags'},
        {name: 'discription', content: 'This is Home Page'}
      ])
    }

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
