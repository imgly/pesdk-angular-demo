import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core'
import { EditorApi, PhotoEditorSDKUI } from 'photoeditorsdk/no-polyfills'

const license = "";

@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html",
})
export class PhotoEditorComponent implements AfterViewInit {
  @Input()
  public src: string;

  @ViewChild("psdkContainer", { static: false })
  private container: ElementRef<HTMLDivElement>;

  public editor: EditorApi;

  ngAfterViewInit() {
    this.instantiateEditor();
  }

  async instantiateEditor() {
    try {
      this.editor = await PhotoEditorSDKUI.init({
        license,
        container: this.container.nativeElement,
        image: this.src,
        assetBaseUrl: "/assets/photoeditorsdk",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
