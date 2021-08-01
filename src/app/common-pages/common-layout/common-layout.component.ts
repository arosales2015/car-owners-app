import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit, OnDestroy {

  openSideNav = true;
  items = [
    {display: "Lista de propietarios", route: "/owners"},
    {display: "Primer propietario", route: "/owners/1"}
  ];

  ngOnInit(): void {
  }

  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;

  constructor(chaneDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => chaneDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy()
  {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
