import { Component, OnInit } from "@angular/core";
import { BatchService } from "./batch.service";
import { Batch } from "./batch";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-batch",
  templateUrl: "./batch.component.html",
  styleUrls: ["./batch.component.css"]
})
export class BatchComponent implements OnInit {
  batches: Batch[] = [];
  errorMessage: string;
  form: FormGroup;
  constructor(private batchService: BatchService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      startDate: new FormControl("",[Validators.required])
    });
    this.getBatches();
  }

  getBatches() {
    this.batchService
      .getBatches()
      .subscribe(
        batches => (this.batches = batches),
        error => (this.errorMessage = <any>error)
      );
  }

  addBatch(form){
    const courseId= +this.route.snapshot.paramMap.get('id')
   this.batchService.addBatch(form.value.name, form.value.startDate, courseId).subscribe(data=>{
     this.batches.push(data)
   });
  }
}
