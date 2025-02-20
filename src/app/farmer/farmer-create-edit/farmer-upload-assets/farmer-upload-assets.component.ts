import { Component, Input, OnInit } from '@angular/core';
import { FileUploadFacade } from '../../../shared/data-access/store/file-upload/facade/file-upload.facade';
import { combineLatest, Observable } from 'rxjs';
import { IFileUpload } from '../../../shared/data-access/models/file-upload/FileUpload';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface AssetFarmerGroup {
  coverImageUrl: FormControl,
  profileImageUrl: FormControl;
}

@Component({
  selector: 'farmer-upload-assets',
  templateUrl: './farmer-upload-assets.component.html',
  styleUrl: './farmer-upload-assets.component.scss'
})
export class FarmerUploadAssetsComponent implements OnInit {
  @Input() farmerForm!: FormGroup;
  assetsUploadForm!: FormGroup<AssetFarmerGroup>;
  coverImageFileUpload$!: Observable<IFileUpload | null>;
  profileImageFileUpload$!: Observable<IFileUpload | null>;

  get formControl() {
    return this.assetsUploadForm.controls;
  }

  constructor(private fileUploadFacade: FileUploadFacade,
    private fb: FormBuilder
  ) {
    this.assetsUploadForm = this.fb.group({
      coverImageUrl: ['', Validators.required],
      profileImageUrl: ['', Validators.required],
    });

    this.coverImageFileUpload$ = this.fileUploadFacade.selectCoverImageFileUpload$;
    this.profileImageFileUpload$ = this.fileUploadFacade.selectProfileImageFileUpload$;
    
    combineLatest(this.coverImageFileUpload$, this.profileImageFileUpload$).subscribe(
      ([coverImage, profileImage]) => {
        this.formControl.coverImageUrl.setValue(coverImage?.fileUrl);
        this.formControl.profileImageUrl.setValue(profileImage?.fileUrl);
      }
    );

  }

  ngOnInit() {
    this.farmerForm.setControl('assetsUploadForm', this.assetsUploadForm);
  }


  uploadCoverImage(file: File) {
    this.fileUploadFacade.uploadCoverImage(file);
  }

  uploadProfileImage(file: File){
    this.fileUploadFacade.uploadProfileImage(file);
  }

}
