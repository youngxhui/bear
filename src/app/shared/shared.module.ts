import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ...SHARED_ZORRO_MODULES],
  exports: [...SHARED_ZORRO_MODULES],
})
export class SharedModule {

  // constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
  //   if (parentModule) {
  //     throw new Error('SharedModule 已经被导入 AppModule,无需重复导入');
  //   }
  // }
}
