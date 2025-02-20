import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFileUpload } from '../../shared/data-access/models/file-upload/FileUpload';
import { combineLatest, Observable } from 'rxjs';
import { FileUploadFacade } from '../../shared/data-access/store/file-upload/facade/file-upload.facade';

interface AssetProfileGroup {
  coverImageUrl: FormControl,
  profileImageUrl: FormControl;
}

@Component({
  selector: 'profile-upload-images',
  templateUrl: './profile-upload-images.component.html',
  styleUrl: './profile-upload-images.component.scss'
})
export class ProfileUploadImagesComponent {
  @Input() set coverImageUrl(value: string | null) {
    if(!value) return;

    this.formControl.coverImageUrl.patchValue(value);
  }
  @Input() set profileImageUrl(value: string | null) {
    if(!value) return;

    this.formControl.profileImageUrl.patchValue(value);
  }


  assetsUploadForm!: FormGroup<AssetProfileGroup>;
  coverImageFileUpload$!: Observable<IFileUpload | null>;
  profileImageFileUpload$!: Observable<IFileUpload | null>;

  @Output() imageUrl = new EventEmitter<{coverImageUrl: string, profileImageUrl: string}>();

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

    // coverImageUrl, profileImageUrl
    this.assetsUploadForm.valueChanges.subscribe(data => {
      this.imageUrl.emit({
        coverImageUrl: data.coverImageUrl,
        profileImageUrl: data.profileImageUrl
      });
    })

  }

  uploadCoverImage(file: File) {
    this.fileUploadFacade.uploadCoverImage(file);
  }

  uploadProfileImage(file: File) {
    this.fileUploadFacade.uploadProfileImage(file);
  }
}
