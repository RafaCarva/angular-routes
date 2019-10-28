import { DvdService } from './../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;
  title = null;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router
    ) { }

  ngOnInit() {
    // Sendo 'index' a string que vc setou lá no arquivo de rotas.
    // O sinal de '+' diz que index será um número (tipo faz um cast).
    let index = +this.route.snapshot.paramMap.get('index');
    this.dvd$ = this.dvdService.get(index);
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title')) {
          this.title = params.get('title');
        }
      });
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}
