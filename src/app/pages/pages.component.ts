import { Component } from '@angular/core';
import nestedMenuItems from 'src/assets/data/nestedMenuItems';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  nestedMenuItems = nestedMenuItems;
  private collapsedMenus: { [menuId: string]: boolean } = {};

  public toggleCollapse(menuId: string) {
    this.collapsedMenus[menuId] = !this.collapsedMenus[menuId];
  }

  public isCollapsed(menuId: string) {
    return !this.collapsedMenus[menuId];
  }
}
