import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgAccordionModule } from './accordion/accordion.module';
import { LgAlertModule } from './alert/alert.module';
import { LgBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { LgButtonModule } from './button/button.module';
import { LgCardModule } from './card/card.module';
import { LgDataPointModule } from './data-point/data-point.module';
import { LgDetailsModule } from './details/details.module';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgFocusModule } from './focus/focus.module';
import { LgFooterModule } from './footer/footer.module';
import { LgFormsModule } from './forms/forms.module';
import { LgGridModule } from './grid/grid.module';
import { LgHeaderModule } from './header/header.module';
import { LgHeadingModule } from './heading/heading.module';
import { LgHeroModule } from './hero/hero.module';
import { LgIconModule } from './icon/icon.module';
import { LgPageModule } from './page/page.module';
import { LgBrandIconModule } from './brand-icon/brand-icon.module';
import { LgPipesModule } from './pipes/pipes.module';
import { LgQuickActionModule } from './quick-action/quick-action.module';
import { LgSeparatorModule } from './separator/separator.module';
import { LgSpacingModule } from './spacing/spacing.module';
import { LgSpinnerModule } from './spinner/spinner.module';
import { LgTableModule } from './table/table.module';
import { LgTabsModule } from './tabs/tabs.module';

const modules = [
  LgAccordionModule,
  LgAlertModule,
  LgBreadcrumbModule,
  LgButtonModule,
  LgCardModule,
  LgDataPointModule,
  LgDetailsModule,
  LgFeatureToggleModule,
  LgFocusModule,
  LgFooterModule,
  LgFormsModule,
  LgGridModule,
  LgHeaderModule,
  LgHeadingModule,
  LgHeroModule,
  LgIconModule,
  LgPageModule,
  LgBrandIconModule,
  LgPipesModule,
  LgQuickActionModule,
  LgSeparatorModule,
  LgSpacingModule,
  LgSpinnerModule,
  LgTableModule,
  LgTabsModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class CanopyModule {}
