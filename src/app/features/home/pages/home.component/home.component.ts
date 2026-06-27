import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../../shared/sidebar.component/sidebar.component';
import { HomeService } from '../../service/home.service';
import { Home } from '../../model/home-interface';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  home: Home | null = null;

  constructor(private homeService: HomeService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.homeService.getHome().subscribe({
      next: (data) => {
        this.home = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al cargar home:', err)
    });
  }
}
