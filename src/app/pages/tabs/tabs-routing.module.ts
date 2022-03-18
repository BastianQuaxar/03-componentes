import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { CardPageModule } from '../card/card.module';
import { FabPageModule } from '../fab/fab.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'account',
      loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)  

    },{
      path: 'contacs',
      loadChildren: () => import('../infinite/infinite-routing.module').then(m => m.InfinitePageRoutingModule)  


    },{
      path: 'settings',
      loadChildren: () => import('../button/button-routing.module').then(m => m.ButtonPageRoutingModule)  

    }
    ]}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
