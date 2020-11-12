import {Component, OnInit} from '@angular/core';
import {ListService} from '../list.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookModel} from '../../model/book.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  closeResult: string;
  // dtOptions: DataTables.Settings;
  resData: BookModel[];
  idToDelete: number;
  idToUpdate: number;

  books: BookModel[];
  res: any;
  updateResult: object;

  updateForm: FormGroup;

  constructor(public bookService: ListService, private modalService: NgbModal) {
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', [Validators.required]),
      edition: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      value => {
        this.resData= value.result;
        console.log(value.result);
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  DeleteBook(){
    this.bookService.deleteBook(this.idToDelete)
      .subscribe(
        value => {
          console.log(value);
          this.bookService.getBooks().subscribe(value =>{
            this.books =value.result;
            console.log(value.message)
          })
        },
        error => console.log(error));
    console.log(this.idToDelete);
  }

  onDelete(close, id: number) {
    this.idToDelete = id;
    this.modalService.open(close, {ariaLabelledBy: 'deleteModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  UpdateBook(): void {
    const up: Update = {
      id: this.idToUpdate,
      name: this.updateForm.value.name,
      author: this.updateForm.value.author,
      edition: this.updateForm.value.edition,
      isbn: this.updateForm.value.isbn,
      price: this.updateForm.value.address,
    }
    this.res=up;
    console.log(this.idToUpdate);
    this.updateResult=up;
    // this.studentService.updateStudent(this.updateResult).subscribe(
    //   value => {
    //     value=this.updateResult;
    //     console.log(value);
    //   },
    //   error => {console.log(error)}
    // );
  }

  onUpdate(update, upd: BookModel) {
    // let num = upd;
    // num.forEach(function (value) {
    //   console.log(value.id);
    // });
    this.idToUpdate = upd.id;
    this.modalService.open(update, {ariaLabelledBy: 'updateModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.idToUpdate);
    console.log(upd);
    // this.updateForm.reset(this.idToUpdate);
    this.updateForm.reset(upd);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
interface Update {
  id: number;
  name: string;
  author: string;
  edition: string;
  isbn: string;
  price: string;
}
