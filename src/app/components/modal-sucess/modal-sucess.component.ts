import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-modal-sucess",
  templateUrl: "./modal-sucess.component.html",
  styleUrls: ["./modal-sucess.component.css"],
})
export class ModalSucessComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalSucessComponent>,
    private router: Router
  ) {}

  closeAndRedirect() {
    this.dialogRef.close();
    this.router.navigate(["/"]);
  }
}
