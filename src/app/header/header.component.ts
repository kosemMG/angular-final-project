import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {
  }

  /**
   * Calls the storeRecipes() method of the DataStorageService.
   */
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  /**
   * Calls the fetchRecipes() method of the DataStorageService.
   */
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
