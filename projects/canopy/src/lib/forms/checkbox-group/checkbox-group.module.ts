import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [LgLabelModule],
  declarations: [LgCheckboxGroupComponent],
  exports: [LgCheckboxGroupComponent],
  entryComponents: [LgCheckboxGroupComponent],
})
export class LgCheckboxGroupModule {}
