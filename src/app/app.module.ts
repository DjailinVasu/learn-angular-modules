import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'

import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './rf.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  entryComponents:[ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
