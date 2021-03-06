import {NgModule} from '@angular/core'
import {RouterModule, Routes, PreloadAllModules} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import( './about-page/about-page.module').then(m => m.AboutPageModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules //сначала загрузил все необходимые модули, а потом в фоновом режиме все остальное
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
