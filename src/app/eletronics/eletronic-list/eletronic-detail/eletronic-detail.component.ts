import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EletronicService } from './../../../services/eletronic.service';
import { Component, OnInit } from '@angular/core';
import { Eletronic } from 'src/app/models/eletronic';

@Component({
  selector: 'app-eletronic-detail',
  templateUrl: './eletronic-detail.component.html',
  styleUrls: ['./eletronic-detail.component.css']
})
export class EletronicDetailComponent implements OnInit {

  eletronic$: Observable<Eletronic>;

  constructor(
    private eletronicService: EletronicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let i: number = +this.route.snapshot.paramMap.get('index');
    this.eletronic$ = this.eletronicService.get(i);
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route}); // '..' é voltar um nível como no cmd...
  }

}
