import { inject, Injectable, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseServices implements OnInit {

  public storageService: StorageService = inject(StorageService);

  abstract ngOnInit(): void;

}
