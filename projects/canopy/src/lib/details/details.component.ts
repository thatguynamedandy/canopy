import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgDetailsComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.lg-details') class = true;

  @ContentChild(LgDetailsPanelHeadingComponent, { static: false })
  panelHeading: LgDetailsPanelHeadingComponent;

  @Input() isActive = false;

  @Output() detailsEvent = new EventEmitter<{ isActive: boolean }>();

  id = nextUniqueId++;

  toggleId = `lg-details-header-${this.id}`;

  panelId = `lg-details-content-${this.id}`;

  private subscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.panelHeading.isActive = this.isActive;

    this.subscription = this.panelHeading.event.subscribe(value => {
      this.isActive = value;
      this.detailsEvent.emit({ isActive: this.isActive });
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
