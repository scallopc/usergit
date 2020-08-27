import { Component, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/_interface/ifollowers';
import { NewsService } from '../_service/news.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  login: string;
  follow: any = [];
  teste: IFollowers;
 

  constructor(public activeModal: NgbActiveModal,  private _ns: NewsService) {}

  ngOnInit(): void {
    this.foll(this.login);
  }
  

  foll(login: string){
    this._ns.getFoll(login).subscribe( (user) => {
      let retorno = user.login;
      this.follow = retorno;
     console.log('foll', this.follow);
   });
 }

}
