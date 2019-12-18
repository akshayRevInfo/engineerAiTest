import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit{
  title = 'test';
  tableRenderData : any[] = [];
  data : any;
  APIURL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private httpservice : Http,
              private modalService : NgbModal){ }

ngOnInit(){
	this.gettableData();
}

//Api calling here---------------------------------
  gettableData(){
	  this.httpservice.get(this.APIURL).subscribe(res=>{
	  this.tableRenderData = JSON.parse(res && res._body ? res && res._body : {});
	  })
  }

  openModal(content,data){
  	const modelref = this.modalService.open(content);
  	this.data = data;
  }
}
