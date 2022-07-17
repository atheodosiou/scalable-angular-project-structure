import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { PrivatePageOneComponent } from './components/private-page-one/private-page-one.component';

const components = [PrivatePageOneComponent];

@NgModule({
  declarations: [PrivateComponent, ...components],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
