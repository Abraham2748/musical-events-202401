import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SearchBarService } from '../services/search-bar.service';
import { startWith, map, debounceTime } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchBarFormControl = new FormControl('');
  searchBarService = inject(SearchBarService);
  authService = inject(AuthService);
  layoutService = inject(LayoutService);

  constructor() {
    this.searchBarService.currentValue$ =
      this.searchBarFormControl.valueChanges.pipe(
        map((value) => (value ? value : '')),
        debounceTime(300),
        startWith('')
      );
  }
}
