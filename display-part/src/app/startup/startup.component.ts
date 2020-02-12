import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SettingsService } from '../settings.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  status = 'Prašome palaukti - Inicijuojama';
  comment = 'Ekranas.info';
  error = false;

  constructor(private settings: SettingsService, private router: Router, private route: ActivatedRoute) {
    this.settings.lookFor(this.route.snapshot.paramMap.get('key'));
  }



  ngOnInit() {
    const interval = setInterval(() => {
      if (this.settings.status === 'Waiting') {
        return;
      } else if (this.settings.status === 'Ok') {
        this.status = this.settings.school.name;
        this.comment = 'Gaunami nustatymai';
        clearInterval(interval);
        setTimeout(() => {
          this.router.navigateByUrl('/main', { skipLocationChange: true });
        }, 1800);
      } else {
        this.error = true;
        this.status = 'Netinkamas ar negaliojantis ekrano raktas';
        this.comment = 'Atsiprašome, bet ekrano administratorius nustatymuose turi sukurti naują raktą!';

      }
    }, 2000);

  }

}
