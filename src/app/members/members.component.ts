import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_interface/iuser';
import { IFollowers } from 'src/app/_interface/ifollowers';
import { Injectable } from '@angular/core';
import { NewsService } from '../_service/news.service';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  filter: string;
  tabela: IUser[] = [];
  paginaAtual : Number = 1 ;
  contador : Number = 5;

  constructor(private modalService: NgbModal, private _ns: NewsService) { }

  ngOnInit(): void {
    this.load();
  }

  
  load(){
     this._ns.getUser().subscribe( (users: IUser[]) =>{
      this.tabela = users;
    });
  }

  

 //modal
 open() {
  const modalRef = this.modalService.open(ModalComponent);
  modalRef.componentInstance.ModalComponent;
}

}
