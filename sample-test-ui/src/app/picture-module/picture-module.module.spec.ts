import { PictureModuleModule } from './picture-module.module';

describe('PictureModuleModule', () => {
  let pictureModuleModule: PictureModuleModule;

  beforeEach(() => {
    pictureModuleModule = new PictureModuleModule();
  });

  it('should create an instance', () => {
    expect(pictureModuleModule).toBeTruthy();
  });
});
