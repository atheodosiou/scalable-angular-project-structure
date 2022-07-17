import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { PublicPageOneComponent } from './components/public-page-one/public-page-one.component';

const components = [PublicComponent, PublicPageOneComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
