import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-base-services',
  standalone: false,
  template: '',
  styles: ''
})
export abstract class BaseServicesComponent implements OnInit {

  public storageService: StorageService = inject(StorageService);

  abstract ngOnInit(): void;

}
